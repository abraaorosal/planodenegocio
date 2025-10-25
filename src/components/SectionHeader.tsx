import { motion } from "framer-motion";

type SectionHeaderProps = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
};

export function SectionHeader({ id, badge, title, subtitle }: SectionHeaderProps) {
  return (
    <div id={id} className="anchor relative scroll-mt-24">
      <motion.span
        className="section-badge"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.4 }}
      >
        {badge}
      </motion.span>
      <motion.h2
        className="mt-4 text-3xl font-display font-semibold tracking-tight text-white sm:text-4xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.45, delay: 0.05 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="mt-3 max-w-3xl text-lg text-white/70"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.45, delay: 0.12 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
