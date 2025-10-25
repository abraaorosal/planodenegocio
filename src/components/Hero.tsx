import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <header className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:26px_26px] opacity-30" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24">
        <motion.div
          className="flex max-w-3xl flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="section-badge w-fit border border-white/10 bg-white/5 uppercase tracking-[0.2em]">
            Nova Metrópole · Caucaia · Ceará
          </span>
          <h1 className="font-display text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Educação tecnológica acessível com impacto social e retorno escalável.
          </h1>
          <p className="text-lg text-white/70">
            A Desenvolve AI forma talentos em IA, dados e programação em uma jornada híbrida e interativa.
            Viva um laboratório de inovação que transforma comunidades e entrega métricas claras para investidores.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contexto"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 via-neon-blue to-neon-green px-6 py-3 font-medium text-primary-900 shadow-glow"
            >
              Explorar o plano
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#investidores"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-medium text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Proposta ao investidor
            </a>
          </div>
        </motion.div>
        <motion.div
          className="grid gap-6 sm:grid-cols-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {[
            {
              title: "Hub híbrido",
              text: "Infraestrutura maker, estúdio EAD e 12 turmas simultâneas."
            },
            {
              title: "Recorrência previsível",
              text: "MRR, churn e NPS monitorados em dashboards ao vivo."
            },
            {
              title: "Impacto + ROI",
              text: "Payback em até 24 meses com expansão para 600 alunos."
            }
          ].map((item) => (
            <div key={item.title} className="glass rounded-3xl p-6 shadow-xl">
              <Sparkles className="h-6 w-6 text-neon-blue" />
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
