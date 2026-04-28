import { motion, useInView } from "motion/react";
import { ServiceStatsData } from "../../types/service";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

interface ServiceStatsProps {
  data: ServiceStatsData;
  color: string;
}

export function ServiceStats({ data, color }: ServiceStatsProps) {
  return (
    <section className="srv-section" style={{ ["--srv-accent" as string]: color }}>
      <div className="srv-container">
        {data.title ? (
          <div className="text-center max-w-[760px] mx-auto mb-10">
            <h2 className="srv-heading">{data.title}</h2>
          </div>
        ) : null}

        <div className="srv-stats-grid">
          {data.items.map((stat, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="srv-stat"
            >
              <p className="srv-stat-label">{stat.label}</p>
              <div className="srv-stat-value">
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                />
              </div>
              {stat.description ? <p className="srv-stat-desc">{stat.description}</p> : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
