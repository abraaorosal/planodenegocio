import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { costStructure, financialScenarios, growthPlan } from "../data/content";

const MONTHLY_TICKET = 120;
const FIXED_COST = costStructure.reduce((acc, item) => acc + item.value, 0);
const BREAK_EVEN = Math.ceil(FIXED_COST / MONTHLY_TICKET);

export function FinanceSection() {
  const [students, setStudents] = useState(160);
  const [churn, setChurn] = useState(6);

  const metrics = useMemo(() => {
    const revenue = students * MONTHLY_TICKET;
    const retention = 100 - churn;
    const grossMargin = ((revenue - FIXED_COST) / revenue) * 100;
    return {
      revenue,
      churn,
      retention,
      grossMargin,
      net: revenue - FIXED_COST
    };
  }, [students, churn]);

  return (
    <section className="relative py-24">
      <SectionHeader
        id="financeiro"
        badge="Performance e finanças"
        title="Dados financeiros transparentes com simulação em tempo real."
        subtitle={`Break-even em ${BREAK_EVEN} alunos, payback em até 24 meses e margem potencial de 50% no cenário de expansão.`}
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="glass rounded-3xl border border-white/10 p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          <h3 className="text-xl font-semibold text-white">
            Simulador de recorrência
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Ajuste o volume de alunos e churn para projetar receita mensal, margem e lucro.
          </p>
          <div className="mt-6 space-y-6">
            <Slider
              label={`Alunos (${students})`}
              min={100}
              max={360}
              step={4}
              value={students}
              onChange={setStudents}
              helper={`Break-even em ${BREAK_EVEN}. Meta base em 160 alunos.`}
            />
            <Slider
              label={`Churn mensal (${churn}%)`}
              min={2}
              max={15}
              step={1}
              value={churn}
              onChange={setChurn}
              helper="Meta de NPS > 70 para churn abaixo de 6%."
            />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <MetricCard title="Receita mensal" value={`R$ ${metrics.revenue.toLocaleString("pt-BR")}`} accentClass="text-neon-green" />
            <MetricCard title="Lucro projetado" value={`R$ ${metrics.net.toLocaleString("pt-BR")}`} accentClass="text-neon-blue" />
            <MetricCard title="Retenção" value={`${metrics.retention.toFixed(0)}%`} accentClass="text-primary-400" />
            <MetricCard title="Margem bruta" value={`${metrics.grossMargin.toFixed(1)}%`} accentClass="text-neon-violet" />
          </div>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: 0.06 }}
        >
          <div className="glass rounded-3xl border border-white/10 p-6">
            <h3 className="text-lg font-semibold text-white">Cenários financeiros</h3>
            <div className="mt-4 space-y-4">
              {financialScenarios.map((scenario) => (
                <div key={scenario.name} className="rounded-2xl border border-white/10 bg-primary-900/40 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-white/60">
                    <span>{scenario.name}</span>
                    <span>{scenario.alunos} alunos · R$ {scenario.receita.toLocaleString("pt-BR")}</span>
                  </div>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {scenario.lucro >= 0 ? "Lucro" : "Resultado"} R$ {scenario.lucro.toLocaleString("pt-BR")}
                    <span className="ml-2 text-sm text-white/60">Margem {scenario.margem}</span>
                  </p>
                  <p className="mt-2 text-sm text-white/70">{scenario.alert}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl border border-white/10 p-6">
            <h3 className="text-lg font-semibold text-white">Estrutura de custos</h3>
            <div className="mt-4 space-y-4">
              {costStructure.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between text-sm text-white/60">
                    <span>{item.category}</span>
                    <span>R$ {item.value.toLocaleString("pt-BR")}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-neon-blue via-neon-violet to-neon-green"
                      style={{ width: `${Math.max((item.value / FIXED_COST) * 100, 8)}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="flex justify-between text-sm text-white/70">
                <span>Total fixo mensal</span>
                <span>R$ {FIXED_COST.toLocaleString("pt-BR")}</span>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl border border-white/10 p-6">
            <h3 className="text-lg font-semibold text-white">Plano trienal</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {growthPlan.map((item) => (
                <li key={item.year} className="rounded-2xl border border-white/10 bg-primary-900/40 p-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/50">
                    <span>{item.year}</span>
                    <span>{item.alunos} alunos</span>
                  </div>
                  <p className="mt-2 text-base font-semibold text-white">
                    Receita anual R$ {item.receita.toLocaleString("pt-BR")}
                  </p>
                  <p className="mt-1 text-sm text-white/70">{item.estrategia}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type SliderProps = {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  helper: string;
  onChange: (value: number) => void;
};

function Slider({ label, min, max, step, value, helper, onChange }: SliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-white/70">
        <span>{label}</span>
        <span className="text-white/50">
          {min} - {max}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-neon-blue"
      />
      <p className="text-xs text-white/50">{helper}</p>
    </div>
  );
}

type MetricCardProps = {
  title: string;
  value: string;
  accentClass: string;
};

function MetricCard({ title, value, accentClass }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-primary-900/40 p-5">
      <span className={`text-xs uppercase tracking-[0.2em] ${accentClass}`}>
        {title}
      </span>
      <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}
