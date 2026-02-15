import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import { getAthleteById, getAdjacentAthletes } from "@/data/athletes";

export default function AthleteProfile() {
  const { id } = useParams<{ id: string }>();
  const athlete = getAthleteById(id || "");
  const { prev, next } = getAdjacentAthletes(id || "");

  if (!athlete) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Athlete Not Found</h1>
          <Link to="/gallery" className="text-muted-foreground hover:text-foreground text-sm">
            ← Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Back link */}
      <div className="container mx-auto px-6 py-6">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Gallery
        </Link>
      </div>

      <article className="container mx-auto px-6 pb-20 max-w-4xl">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
          {/* Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[3/4] bg-secondary/30 border border-border/30 flex items-center justify-center sticky top-24">
              <span className="text-8xl font-serif text-muted-foreground/10 select-none">
                {athlete.name.charAt(0)}
              </span>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-2 text-xs tracking-widest uppercase text-muted-foreground">
              {athlete.sport} · {athlete.sportCategory}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-2">
              {athlete.name}
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
              {athlete.age && <span>Age {athlete.age}</span>}
              {athlete.region && (
                <>
                  <span className="text-border">•</span>
                  <span>{athlete.region}</span>
                </>
              )}
              <span className="text-border">•</span>
              <span>†&nbsp;{athlete.dateOfDeath}</span>
            </div>

            {/* Quote */}
            {athlete.quote && (
              <blockquote className="border-l-2 border-muted-foreground/30 pl-4 mb-8 italic text-muted-foreground font-serif text-lg">
                "{athlete.quote}"
              </blockquote>
            )}

            {/* Biography */}
            <div className="mb-8">
              <h2 className="font-serif text-xl mb-3">Biography</h2>
              <p className="text-muted-foreground leading-relaxed">{athlete.biography}</p>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h2 className="font-serif text-xl mb-3">Achievements</h2>
              <ul className="space-y-2">
                {athlete.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Circumstances */}
            <div className="mb-12 p-4 border border-border/30 bg-secondary/20">
              <h2 className="font-serif text-lg mb-2 text-muted-foreground">Circumstances</h2>
              <p className="text-sm text-muted-foreground/80">{athlete.circumstances}</p>
            </div>

            {/* Prev/Next navigation */}
            <div className="flex items-center justify-between border-t border-border/30 pt-6">
              {prev ? (
                <Link
                  to={`/athlete/${prev.id}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft size={14} />
                  <span>{prev.name}</span>
                </Link>
              ) : <span />}
              {next ? (
                <Link
                  to={`/athlete/${next.id}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>{next.name}</span>
                  <ArrowRight size={14} />
                </Link>
              ) : <span />}
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
