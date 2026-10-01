export const SEQUENCE_FRAMES: string[] = Array.from({ length: 74 }, (_, i) => {
  const pad = String(i).padStart(2, "0");
  if (i === 73) {
    return `/sequence/frame_${pad}_delay-0.134s.png`;
  }
  return `/sequence/frame_${pad}_delay-0.067s.png`;
});

export const TOTAL_FRAMES = SEQUENCE_FRAMES.length;
