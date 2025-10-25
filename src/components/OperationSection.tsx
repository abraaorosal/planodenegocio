import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { operationHighlights } from "../data/content";

export function OperationSection() {
  return (
    <section className="relative py-24">
      <SectionHeader
        id="operacao"
        badge="Operação híbrida"
        title="Infraestrutura maker, calendário flexível e indicadores em tempo real."
        subtitle="Integramos físico + digital com processos sustentados por dados, garantindo excelência acadêmica e previsibilidade financeira."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary-700/40 via-primary-900/80 to-primary-950 p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {operationHighlights.map((highlight) => (
              <div key={highlight.title} className="rounded-2xl bg-primary-900/30 p-6">
                <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {highlight.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="glass h-full rounded-3xl border border-white/10 p-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <span className="section-badge border border-white/10 bg-white/5">
            Rotina do aluno
          </span>
          <ul className="mt-6 space-y-4 text-sm text-white/75">
            <li className="rounded-2xl border border-white/10 bg-primary-900/40 p-4">
              <strong className="text-white">Manhã</strong>: Laboratório maker e desafios gamificados.
            </li>
            <li className="rounded-2xl border border-white/10 bg-primary-900/40 p-4">
              <strong className="text-white">Tarde</strong>: Aulas híbridas, mentoria em pods e acompanhamento de projetos.
            </li>
            <li className="rounded-2xl border border-white/10 bg-primary-900/40 p-4">
              <strong className="text-white">Noite</strong>: Trilhas EAD ao vivo, comunidade online e oficinas para empreendedores.
            </li>
          </ul>
          <div className="mt-6 rounded-2xl border border-neon-violet/40 bg-neon-violet/10 p-5 text-sm text-white/80">
            <p className="font-medium">Stack digital</p>
            <p className="mt-2">
              LMS proprietário, Notion como hub de trilhas, Power BI para painéis, automações com Zapier/Make e acompanhamento por cohort analytics.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
