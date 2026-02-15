import { motion } from "framer-motion";
import BrokenRings from "@/components/BrokenRings";
import { statistics } from "@/data/athletes";

const sources = [
  { name: "National Olympic Committee of Ukraine", url: "https://noc-ukr.org" },
  { name: "Ministry of Youth and Sports of Ukraine", url: "https://sport.gov.ua" },
  { name: "Ukrainian Institute", url: "https://ui.org.ua" },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 border-b border-border/30 text-center">
        <motion.h1
          className="font-serif text-4xl md:text-5xl tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About This Memorial
        </motion.h1>
        <motion.p
          className="text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          The war's devastating impact on Ukrainian sports — and why we must remember.
        </motion.p>
      </section>

      <div className="container mx-auto max-w-3xl px-6 py-16 space-y-16">
        {/* The story */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-2xl mb-6">The Cost of War</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Since February 24, 2022, Russia's full-scale invasion of Ukraine has devastated every 
              aspect of Ukrainian life — including sport. As of {statistics.asOfDate}, <strong className="text-foreground">{statistics.athletesKilled} athletes 
              and coaches</strong> have been killed, <strong className="text-foreground">{statistics.facilitiesDestroyed} sports facilities</strong> have 
              been destroyed or damaged, <strong className="text-foreground">{statistics.athletesInCaptivity} athletes remain in captivity</strong>, 
              and <strong className="text-foreground">{statistics.athletesMissing} are missing</strong>.
            </p>
            <p>
              Among the fallen are Olympic competitors, world championship medalists, national 
              record holders, promising youth athletes, and children who had just begun their 
              sporting journeys. Their ages range from 9 to over 40, spanning dozens of 
              disciplines from figure skating to wrestling, from gymnastics to strongman competitions.
            </p>
            <p>
              Many volunteered to defend their country. Others were killed by missiles, bombs, 
              and shelling that struck their homes, training facilities, and cities. Each represents 
              not just a personal tragedy, but a wound to the global sporting community and the 
              Olympic ideal.
            </p>
          </div>
        </motion.section>

        <div className="border-t border-border/30" />

        {/* Heraskevych story */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-2xl mb-6">The Silenced Protest</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At the 2022 Beijing Winter Olympics, Ukrainian skeleton athlete <strong className="text-foreground">Vladyslav 
              Heraskevych</strong> held up a sign reading "No War in Ukraine" — just days before Russia's 
              full-scale invasion. It was a desperate plea that the world would soon understand.
            </p>
            <p>
              In 2026, Heraskevych sought to honor his fallen teammates by wearing a helmet 
              bearing their names at the Winter Olympics. The International Olympic Committee 
              denied the tribute, citing rules against political statements on the field of play — 
              a decision that raised painful questions about the boundary between politics 
              and basic human solidarity.
            </p>
            <p>
              This website exists because those names deserve to be seen. If they cannot appear 
              on an Olympic helmet, they will appear here.
            </p>
          </div>
        </motion.section>

        <div className="border-t border-border/30" />

        {/* Olympic ideal */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-2xl mb-6">Sports, Peace, and the Olympic Ideal</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Olympic Charter declares that the goal of Olympism is "to place sport at the 
              service of the harmonious development of humankind, with a view to promoting a 
              peaceful society concerned with the preservation of human dignity."
            </p>
            <p>
              When athletes are killed in war, when children are bombed in their gymnasiums, 
              when sports facilities are reduced to rubble — the Olympic ideal itself is under attack. 
              Remembering these athletes is not a political act. It is a profoundly human one.
            </p>
          </div>
        </motion.section>

        <div className="border-t border-border/30" />

        {/* Broken rings */}
        <div className="text-center py-8">
          <BrokenRings size="lg" className="mx-auto opacity-30" />
        </div>

        {/* Sources */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-2xl mb-6">Sources & References</h2>
          <ul className="space-y-3">
            {sources.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border/30 hover:border-foreground/30 pb-0.5"
                >
                  {s.name} ↗
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground/50 mt-6">
            Data compiled from official Ukrainian government sources, the National Olympic 
            Committee of Ukraine, and verified media reports. Individual athlete profiles are 
            based on publicly available information.
          </p>
        </motion.section>
      </div>
    </div>
  );
}
