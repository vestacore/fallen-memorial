import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { athletes, statistics } from "@/data/athletes";
import { useMemo } from "react";

const CHART_COLORS = [
  "hsl(210, 40%, 35%)",
  "hsl(45, 50%, 45%)",
  "hsl(0, 0%, 35%)",
  "hsl(140, 30%, 30%)",
  "hsl(0, 45%, 40%)",
  "hsl(0, 0%, 50%)",
  "hsl(210, 20%, 50%)",
  "hsl(45, 30%, 55%)",
];

const timeline = [
  { year: "2022", athletes: 320, facilities: 450, description: "Full-scale invasion begins. Heaviest toll on athletes and infrastructure." },
  { year: "2023", athletes: 150, facilities: 160, description: "Continued losses as fighting intensifies across eastern and southern Ukraine." },
  { year: "2024", athletes: 80, facilities: 75, description: "Ongoing shelling and combat claim more lives in sporting communities." },
  { year: "2025", athletes: 41, facilities: 40, description: "Losses continue as the war enters its fourth year." },
];

export default function Statistics() {
  const bySport = useMemo(() => {
    const counts: Record<string, number> = {};
    athletes.forEach((a) => {
      counts[a.sport] = (counts[a.sport] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  }, []);

  const byAge = useMemo(() => {
    const groups = { "Children (≤14)": 0, "Youth (15–19)": 0, "Adults (20+)": 0 };
    athletes.forEach((a) => {
      if (a.ageGroup === "child") groups["Children (≤14)"]++;
      else if (a.ageGroup === "youth") groups["Youth (15–19)"]++;
      else groups["Adults (20+)"]++;
    });
    return Object.entries(groups).map(([name, value]) => ({ name, value }));
  }, []);

  const byYear = useMemo(() => {
    const counts: Record<number, number> = {};
    athletes.forEach((a) => {
      counts[a.yearOfDeath] = (counts[a.yearOfDeath] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([year, count]) => ({ year, count }))
      .sort((a, b) => a.year.localeCompare(b.year));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 border-b border-border/30 text-center">
        <motion.h1
          className="font-serif text-4xl md:text-5xl tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Statistics & Timeline
        </motion.h1>
        <motion.p
          className="text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          The war's impact on Ukrainian sports in numbers — data as of {statistics.asOfDate}.
        </motion.p>
      </section>

      <div className="container mx-auto max-w-5xl px-6 py-16 space-y-20">
        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-2xl mb-10 text-center">Timeline of Loss</h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="flex gap-6 md:gap-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/40 shrink-0 mt-1" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border/50" />
                  )}
                </div>
                <div className="pb-10">
                  <div className="font-serif text-2xl font-bold mb-1">{item.year}</div>
                  <div className="text-sm text-muted-foreground mb-2">
                    ~{item.athletes} athletes killed · ~{item.facilities} facilities destroyed
                  </div>
                  <p className="text-sm text-muted-foreground/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Charts row */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* By sport */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-xl mb-6 text-center">By Sport (in our database)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={bySport} layout="vertical" margin={{ left: 80 }}>
                <XAxis type="number" tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 12 }} />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 11 }}
                  width={75}
                />
                <Tooltip
                  contentStyle={{
                    background: "hsl(0, 0%, 8%)",
                    border: "1px solid hsl(0, 0%, 18%)",
                    color: "hsl(0, 0%, 92%)",
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="value" fill="hsl(0, 0%, 35%)" />
              </BarChart>
            </ResponsiveContainer>
          </motion.section>

          {/* By age group */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-xl mb-6 text-center">By Age Group (in our database)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={byAge}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                  labelLine={false}
                >
                  {byAge.map((_, i) => (
                    <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "hsl(0, 0%, 8%)",
                    border: "1px solid hsl(0, 0%, 18%)",
                    color: "hsl(0, 0%, 92%)",
                    fontSize: 12,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.section>
        </div>

        {/* By year bar chart */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-xl mb-6 text-center">Losses by Year (in our database)</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={byYear}>
              <XAxis dataKey="year" tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 12 }} />
              <YAxis tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  background: "hsl(0, 0%, 8%)",
                  border: "1px solid hsl(0, 0%, 18%)",
                  color: "hsl(0, 0%, 92%)",
                  fontSize: 12,
                }}
              />
              <Bar dataKey="count" fill="hsl(0, 45%, 40%)" />
            </BarChart>
          </ResponsiveContainer>
        </motion.section>

        {/* Note */}
        <div className="text-center text-xs text-muted-foreground/50 border-t border-border/30 pt-8">
          <p>
            Charts above reflect the {athletes.length} athletes profiled on this site. 
            The total number of {statistics.athletesKilled} killed athletes and coaches 
            is based on official Ukrainian government data as of {statistics.asOfDate}.
          </p>
        </div>
      </div>
    </div>
  );
}
