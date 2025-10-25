import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navigation } from "../data/content";

export function HeaderNav() {
  const [active, setActive] = useState<string>("contexto");

  useEffect(() => {
    const onScroll = () => {
      const positions = navigation.map(({ id }) => {
        const element = document.getElementById(id);
        if (!element) {
          return { id, top: Number.POSITIVE_INFINITY };
        }
        const rect = element.getBoundingClientRect();
        return { id, top: Math.abs(rect.top - 140) };
      });
      const [winner] = positions.sort((a, b) => a.top - b.top);
      if (winner) {
        setActive((current) => (current === winner.id ? current : winner.id));
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-50 bg-primary-900/80 backdrop-blur-xl border-b border-white/5"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <span className="font-display text-lg font-semibold text-white">
            Desenvolve<span className="text-neon-blue">AI</span>
          </span>
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">
            Hub de Educação Tecnológica
          </p>
        </div>
        <div className="hidden gap-4 rounded-full bg-white/5 px-4 py-2 sm:flex">
          {navigation.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-full px-3 py-2 text-sm transition ${
                active === id ? "bg-white text-primary-900 font-medium" : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#investidores"
          className="hidden rounded-full bg-gradient-to-r from-primary-500 via-neon-violet to-neon-blue px-4 py-2 text-sm font-medium text-primary-900 shadow-glow sm:inline-flex"
        >
          Falar com o time
        </a>
      </div>
    </motion.nav>
  );
}
