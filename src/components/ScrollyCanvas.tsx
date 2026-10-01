"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { SEQUENCE_FRAMES, TOTAL_FRAMES } from "@/lib/sequence";
import { Overlay } from "./Overlay";

export const ScrollyCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  // Array storing preloaded Image objects
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Track scroll progress of the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload all frames on mount
  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    SEQUENCE_FRAMES.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (!isMounted) return;
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        if (!isMounted) return;
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      loadedImages[idx] = img;
    });

    imagesRef.current = loadedImages;

    return () => {
      isMounted = false;
    };
  }, []);

  // Draw frame on Canvas using object-fit cover math
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Set canvas dimensions to parent display size
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
      canvas.width = displayWidth;
      canvas.height = displayHeight;
    }

    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // Cover math
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = displayWidth / displayHeight;

    let drawWidth: number;
    let drawHeight: number;
    let offsetX: number;
    let offsetY: number;

    if (canvasRatio > imgRatio) {
      drawWidth = displayWidth;
      drawHeight = displayWidth / imgRatio;
      offsetX = 0;
      offsetY = (displayHeight - drawHeight) / 2;
    } else {
      drawWidth = displayHeight * imgRatio;
      drawHeight = displayHeight;
      offsetX = (displayWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, displayWidth, displayHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Sync scroll position to frame index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(latest * TOTAL_FRAMES))
    );
    setCurrentFrameIndex(frameIndex);
    renderFrame(frameIndex);
  });

  // Handle initial render & window resize
  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameIndex);
    };

    window.addEventListener("resize", handleResize);
    renderFrame(currentFrameIndex);

    return () => window.removeEventListener("resize", handleResize);
  }, [currentFrameIndex, renderFrame]);

  // Initial draw when images become ready
  useEffect(() => {
    if (imagesLoaded) {
      renderFrame(0);
    }
  }, [imagesLoaded, renderFrame]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#08090e]">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Canvas Element */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: imagesLoaded ? 1 : 0.2 }}
        />

        {/* Ambient Dark Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090e] via-transparent to-[#08090e]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#08090e]/30 to-[#08090e]/80 pointer-events-none" />

        {/* Subtle Preloader Bar */}
        {!imagesLoaded && (
          <div className="absolute inset-0 z-30 bg-[#08090e] flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-sm tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              Initializing Neural Sequence... {loadProgress}%
            </div>
            <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-150"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Parallax Content Overlay */}
        <Overlay scrollProgress={scrollYProgress} />
      </div>
    </div>
  );
};
