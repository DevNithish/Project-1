import React, { useState, useEffect, memo } from "react";
import "./Stats.css";

const statsData = [
  { value: 4, label: "Years of experience" },
  { value: 8, label: "Projects Completed" },
  { value: 12, label: "Technologies mastered" },
  { value: 500, label: "Code Commits" },
];

const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let startTime;
    let animationFrameId;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const relativeProgress = Math.min(progress / duration, 1);
      const currentValue = Math.floor(relativeProgress * (target - 1) + 1);
      setCount(currentValue);
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return count;
};

const StatItem = memo(({ value, label }) => {
  const animatedValue = useCountUp(value);
  return (
    <div className="stat-item">
      <span className="stat-value">
        {animatedValue}
        {value >= 500 ? "+" : ""}
      </span>
      <p className="stat-label">{label}</p>
    </div>
  );
});

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((stat) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
