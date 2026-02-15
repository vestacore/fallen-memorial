import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BrokenRings from "@/components/BrokenRings";
import { athletes, statistics } from "@/data/athletes";

const statItems = [
  { label: "Athletes & Coaches Killed", value: statistics.athletesKilled, accent: "olympic-red" },
  { label: "Sports Facilities Destroyed", value: statistics.facilitiesDestroyed, accent: "olympic-blue" },
  { label: "Athletes in Captivity", value: statistics.athletesInCaptivity, accent: "olympic-yellow" },
  { label: "Athletes Missing", value: statistics.athletesMissing, accent: "olympic-green" },
];

const featured = athletes.slice(0, 8);

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Faded rings background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <BrokenRings size="lg" className="scale-[3] md:scale-[5]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <BrokenRings size="md" className="mx-auto mb-8" />
          </motion.div>

          <motion.h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            The Games They'll
            <br />
            <span className="italic text-muted-foreground">Never Play</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            A memorial to the {statistics.athletesKilled} Ukrainian athletes and coaches 
            killed since February 2022 — dreams of Olympic glory, silenced by war.
          </motion.p>

          <motion.p
            className="text-sm text-muted-foreground/60 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            As of {statistics.asOfDate}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link
              to="/gallery"
              className="inline-block border border-foreground/30 text-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Remember Their Names
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-muted-foreground/30" />
        </motion.div>
      </section>

      {/* Context statement */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.blockquote
            className="font-serif text-2xl md:text-3xl italic text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            "Since Russia's full-scale invasion of Ukraine in February 2022, the war has claimed the lives 
            of hundreds of athletes and coaches — from Olympic medalists to children just beginning their 
            sporting journeys. These are the games they'll never play."
          </motion.blockquote>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-6 bg-secondary/30 border-y border-border/30">
        <div className="container mx-auto">
          <motion.h2
            className="font-serif text-3xl md:text-4xl text-center mb-16 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Toll of War on Ukrainian Sports
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {statItems.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className={`text-4xl md:text-5xl font-serif font-bold mb-2 text-${stat.accent}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Athletes */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">
              Faces of Loss
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Each name represents a life dedicated to sport, a dream of competition, 
              a future that will never unfold.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {featured.map((athlete, i) => (
              <motion.div
                key={athlete.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/athlete/${athlete.id}`}
                  className="group block"
                >
                  <div className="aspect-[3/4] bg-secondary/50 border border-border/30 flex items-center justify-center mb-3 overflow-hidden relative">
                    <div className="text-4xl font-serif text-muted-foreground/20 select-none">
                      {athlete.name.charAt(0)}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="font-serif text-sm font-medium group-hover:text-foreground transition-colors">
                    {athlete.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {athlete.sport}{athlete.age ? `, ${athlete.age}` : ""}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="text-sm text-muted-foreground hover:text-foreground tracking-wider uppercase border-b border-muted-foreground/30 hover:border-foreground/50 pb-1 transition-all"
            >
              View All Athletes →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
