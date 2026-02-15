import { motion } from "framer-motion";

interface BrokenRingsProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const ringColors = [
  "hsl(210, 40%, 35%)",   // blue
  "hsl(45, 50%, 45%)",    // yellow
  "hsl(0, 0%, 15%)",      // black
  "hsl(140, 30%, 30%)",   // green
  "hsl(0, 45%, 40%)",     // red
];

const sizes = {
  sm: { r: 18, gap: 26, stroke: 3, height: 50, width: 150 },
  md: { r: 28, gap: 40, stroke: 4, height: 80, width: 230 },
  lg: { r: 42, gap: 60, stroke: 5, height: 120, width: 340 },
};

export default function BrokenRings({ className = "", size = "md" }: BrokenRingsProps) {
  const s = sizes[size];
  const topY = s.r + s.stroke;
  const bottomY = topY + s.r * 0.6;

  const positions = [
    { cx: s.r + s.stroke, cy: topY },
    { cx: s.r + s.stroke + s.gap, cy: topY },
    { cx: s.r + s.stroke + s.gap * 2, cy: topY },
    { cx: s.r + s.stroke + s.gap * 0.5, cy: bottomY },
    { cx: s.r + s.stroke + s.gap * 1.5, cy: bottomY },
  ];

  return (
    <svg
      viewBox={`0 0 ${s.width} ${s.height}`}
      className={className}
      style={{ width: s.width, height: s.height }}
    >
      {positions.map((pos, i) => (
        <motion.circle
          key={i}
          cx={pos.cx}
          cy={pos.cy}
          r={s.r}
          fill="none"
          stroke={ringColors[i]}
          strokeWidth={s.stroke}
          strokeDasharray={`${s.r * 3.5} ${s.r * 2.8}`}
          strokeDashoffset={i * 15}
          opacity={0.5}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: i * 0.3, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}
