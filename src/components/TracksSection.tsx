import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { IconFactory } from "./IconFactory";
import { tracks } from "../data/content";
import { useState } from "react";

export function TracksSection() {
  const [selectedTrack, setSelectedTrack] = useState<string>(tracks[0]?.id ?? "");

  const activeTrack = tracks.find((track) => track.id === selectedTrack) ?? tracks[0];

  return (
    <section className="relative py-24">
      <SectionHeader
        id="trilhas"
        badge="Trilhas Desenvolve AI"
        title="Jornadas progressivas que conectam infância, carreira e especialização."
        subtitle="Quatro eixos interligados criam pipeline contínuo de talentos, com projetos reais e certificações para comunidades e empresas."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-4">
          {tracks.map((track) => (
            <motion.button
              key={track.id}
              type="button"
              onClick={() => setSelectedTrack(track.id)}
              className={`w-full rounded-3xl border p-6 text-left transition ${
                selectedTrack === track.id
                  ? "border-neon-blue/70 bg-white/10 shadow-glow"
                  : "border-white/10 bg-primary-900/40 hover:border-white/20 hover:bg-white/5"
              }`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/20 text-neon-blue">
                  <IconFactory name={track.icon} className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                    {track.audience}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{track.name}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70">{track.description}</p>
            </motion.button>
          ))}
        </div>
        <motion.div
          key={activeTrack?.id}
          className="glass h-full rounded-3xl border border-white/10 p-8"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="section-badge border border-white/10 bg-white/5">
            Jornada selecionada
          </span>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            {activeTrack?.name}
          </h3>
          <p className="mt-2 text-sm text-white/70">{activeTrack?.description}</p>
          <div className="mt-6 space-y-4">
            {activeTrack?.courses.map((course) => (
              <div
                key={course.name}
                className="rounded-2xl border border-white/10 bg-primary-900/40 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm uppercase tracking-[0.18em] text-white/50">
                  <span>{course.duration}</span>
                  <span>Projeto final e certificação</span>
                </div>
                <h4 className="mt-3 text-lg font-semibold text-white">{course.name}</h4>
                <p className="mt-2 text-sm text-white/70">{course.focus}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-neon-blue/30 bg-neon-blue/10 p-5 text-sm text-white">
            <p className="font-medium">
              Monte uma jornada personalizada
            </p>
            <p className="mt-2 text-white/80">
              Combine trilhas e projete o tempo total de formação para alunos, empresas ou programas sociais.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
