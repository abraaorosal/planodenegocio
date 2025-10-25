import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { investorProposal } from "../data/content";
import { ArrowRightCircle, FileSpreadsheet, PlayCircle } from "lucide-react";

export function InvestorSection() {
  return (
    <section className="relative py-24">
      <SectionHeader
        id="investidores"
        badge="Proposta ao investidor"
        title="Captação para escalar a primeira rede de formação tecnológica popular do Ceará."
        subtitle="Oferta de participação societária com ROI projetado de 50% a.a., governança ativa e expansão para franquia social."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          className="glass rounded-3xl border border-white/10 p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          <h3 className="text-xl font-semibold text-white">Oferta de investimento</h3>
          <div className="mt-6 space-y-4">
            {investorProposal.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-primary-900/40 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  {item.title}
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">{item.metric}</p>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-neon-green/40 bg-neon-green/10 p-5 text-sm text-white/80">
            <p className="font-medium text-white">Agenda de governança</p>
            <p className="mt-2">
              Comitê consultivo trimestral · Relatórios MRR, churn, NPS · Data room com contratos, plano financeiro e pipeline de parceiros.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="glass rounded-3xl border border-white/10 p-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <h3 className="text-xl font-semibold text-white">Ações imediatas</h3>
          <div className="mt-6 space-y-4">
            <CallToAction
              icon={<ArrowRightCircle className="h-5 w-5" />}
              title="Agendar imersão presencial"
              description="Tour pelo laboratório e demonstração do simulador financeiro ao vivo."
            />
            <CallToAction
              icon={<PlayCircle className="h-5 w-5" />}
              title="Assistir ao vídeo pitch (2 min)"
              description="Narrativa sobre impacto social, produto educacional e oportunidade de mercado."
            />
            <CallToAction
              icon={<FileSpreadsheet className="h-5 w-5" />}
              title="Abrir data room e planilha dinâmica"
              description="Projeções com sensibilidade de churn, upsell e roadmap de franquia 2027."
            />
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/5585998195457"
              className="flex-1 rounded-full bg-gradient-to-r from-neon-blue via-neon-violet to-primary-500 px-6 py-3 text-center font-medium text-primary-900 shadow-glow"
            >
              Falar com o time
            </a>
            <a
              href="#"
              className="flex-1 rounded-full border border-white/20 px-6 py-3 text-center font-medium text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Baixar deck interativo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type CallToActionProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

function CallToAction({ icon, title, description }: CallToActionProps) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-primary-900/40 p-5">
      <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-neon-blue">
        {icon}
      </span>
      <div>
        <p className="text-base font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}
