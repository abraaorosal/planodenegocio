import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { marketHighlights } from "../data/content";

export function ContextSection() {
  return (
    <section className="relative py-24">
      <SectionHeader
        id="contexto"
        badge="Contexto e oportunidade"
        title="Caucaia quer tecnologia. A Desenvolve AI entrega impacto com escala."
        subtitle="Mercado adormecido com mais de 20 mil potenciais alunos, carência de escolas tecnológicas locais e aumento da demanda por IA e automação."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {marketHighlights.map(({ title, metric, description }) => (
          <motion.div
            key={title}
            className="glass rounded-3xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45 }}
          >
            <span className="text-sm uppercase tracking-[0.18em] text-neon-blue">
              {title}
            </span>
            <p className="mt-4 text-3xl font-semibold text-white">{metric}</p>
            <p className="mt-3 text-sm text-white/70">{description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 text-white/80 shadow-inner sm:grid-cols-[1.6fr_1fr]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, delay: 0.08 }}
      >
        <div>
          <h3 className="text-2xl font-display font-semibold text-white">Por que agora?</h3>
          <p className="mt-4 text-sm leading-relaxed">
            A região concentra jovens conectados, empreendedores emergentes e empresas em busca de digitalização.
            O cenário global de IA acelera e a ausência de ofertas locais cria janela rara para liderar a formação tecnológica popular no Ceará.
          </p>
        </div>
        <div className="space-y-4">
          <Highlight bullet="Demanda crescente por IA e automação em indústrias locais." />
          <Highlight bullet="Programas estaduais de inovação prontos para co-investimento." />
          <Highlight bullet="Comunidade ativa de escolas e ONGs abertas a parcerias." />
        </div>
      </motion.div>
    </section>
  );
}

function Highlight({ bullet }: { bullet: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-primary-900/40 p-4">
      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-neon-blue shadow-glow" />
      <p className="text-sm text-white/75">{bullet}</p>
    </div>
  );
}
