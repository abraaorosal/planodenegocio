import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { impactHighlights } from "../data/content";
import { Handshake, HeartHandshake, ShieldCheck } from "lucide-react";

const icons = [Handshake, HeartHandshake, ShieldCheck];

export function ImpactSection() {
  return (
    <section className="relative py-24">
      <SectionHeader
        id="impacto"
        badge="Impacto social"
        title="Tecnologia como ascensão social e fortalecimento econômico local."
        subtitle="Metas ESG integradas à operação: bolsas sociais, empregabilidade e consultorias para negócios da comunidade."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {impactHighlights.map((highlight, index) => {
          const Icon = icons[index] ?? Handshake;
          return (
            <motion.div
              key={highlight.title}
              className="glass rounded-3xl border border-white/10 p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neon-violet/10 text-neon-violet">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-white">{highlight.title}</h3>
              <p className="mt-3 text-sm text-white/70">{highlight.description}</p>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        className="mt-12 rounded-3xl border border-neon-blue/40 bg-neon-blue/10 p-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
      >
        <h3 className="text-2xl font-semibold text-white">Indicadores sociais prioritários</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <ImpactMetric
            title="Bolsas sociais"
            value="10% das vagas"
            description="Financiadas por empresas locais e fundos ESG, com acompanhamento de desempenho."
          />
          <ImpactMetric
            title="Empregabilidade"
            value="70% inserção"
            description="Metas de empregabilidade em até 6 meses pós-formatura nas trilhas profissionais."
          />
          <ImpactMetric
            title="Comunidade"
            value="24 eventos/ano"
            description="Ciclo de hackathons, meetups e consultorias gratuitas para negócios de bairro."
          />
        </div>
      </motion.div>
    </section>
  );
}

type ImpactMetricProps = {
  title: string;
  value: string;
  description: string;
};

function ImpactMetric({ title, value, description }: ImpactMetricProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-primary-900/40 p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-white/50">{title}</p>
      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-white/70">{description}</p>
    </div>
  );
}
