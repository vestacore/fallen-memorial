import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { athletes, sports } from "@/data/athletes";
import { Input } from "@/components/ui/input";

const ageGroups = [
  { value: "all", label: "All Ages" },
  { value: "child", label: "Children (≤14)" },
  { value: "youth", label: "Youth (15–19)" },
  { value: "adult", label: "Adults (20+)" },
];

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [sportFilter, setSportFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");

  const filtered = useMemo(() => {
    return athletes.filter((a) => {
      const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase());
      const matchesSport = sportFilter === "all" || a.sport === sportFilter;
      const matchesAge = ageFilter === "all" || a.ageGroup === ageFilter;
      return matchesSearch && matchesSport && matchesAge;
    });
  }, [search, sportFilter, ageFilter]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 border-b border-border/30 text-center">
        <motion.h1
          className="font-serif text-4xl md:text-5xl tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Memorial Gallery
        </motion.h1>
        <motion.p
          className="text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {athletes.length} athletes and coaches remembered here. Each name a life, each life a story.
        </motion.p>
      </section>

      {/* Filters */}
      <section className="py-6 px-6 border-b border-border/30 bg-secondary/20">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-background border-border/50"
            />
          </div>
          <select
            value={sportFilter}
            onChange={(e) => setSportFilter(e.target.value)}
            className="bg-background border border-border/50 text-foreground text-sm px-3 py-2 rounded-md w-full md:w-auto"
          >
            <option value="all">All Sports</option>
            {sports.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <select
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
            className="bg-background border border-border/50 text-foreground text-sm px-3 py-2 rounded-md w-full md:w-auto"
          >
            {ageGroups.map((g) => (
              <option key={g.value} value={g.value}>{g.label}</option>
            ))}
          </select>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No athletes match your search.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((athlete, i) => (
                <motion.div
                  key={athlete.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.05, 0.5) }}
                >
                  <Link
                    to={`/athlete/${athlete.id}`}
                    className="group block border border-border/30 hover:border-border/60 transition-all duration-300 bg-card"
                  >
                    <div className="aspect-[3/4] bg-secondary/30 flex items-center justify-center relative overflow-hidden">
                      <span className="text-5xl font-serif text-muted-foreground/15 select-none">
                        {athlete.name.charAt(0)}
                      </span>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                        <div className="text-xs tracking-wider uppercase text-muted-foreground">
                          {athlete.sport}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-base font-medium mb-1 group-hover:text-foreground transition-colors">
                        {athlete.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {athlete.age && <span>Age {athlete.age}</span>}
                        {athlete.age && <span className="text-border">•</span>}
                        <span>{athlete.yearOfDeath}</span>
                      </div>
                      <p className="text-xs text-muted-foreground/70 mt-2 line-clamp-2">
                        {athlete.achievements[0]}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
