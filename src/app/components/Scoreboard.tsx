import { motion } from 'framer-motion';

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Scoreboard() {
  return (
    <section id="scoreboard" className="py-16 md:py-[100px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Header */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal/15 mb-6"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <i className="fa-solid fa-trophy text-teal text-2xl" aria-hidden="true"></i>
          </motion.div>

          <motion.h2
            className="font-['Syne'] font-bold text-3xl sm:text-4xl md:text-[44px] text-[#1a2e3b] leading-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            Scoreboard
          </motion.h2>

          <motion.p
            className="text-[#4a5568] mt-3 text-sm sm:text-base font-['DM Sans']"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            Results will be announced after judging
          </motion.p>
        </motion.div>

        {/* Table skeleton with blurred rows */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-[0_2px_16px_rgba(100,160,160,0.12)] border border-gray-200 overflow-hidden">
          <motion.div
            className="grid grid-cols-[60px_1fr_100px] gap-4 px-6 py-4 bg-teal/10 border-b border-teal/20"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="font-['Syne'] font-semibold text-xs text-[#4a5568] uppercase tracking-wider text-left">Rank</span>
            <span className="font-['Syne'] font-semibold text-xs text-[#4a5568] uppercase tracking-wider text-left">Team</span>
            <span className="font-['Syne'] font-semibold text-xs text-[#4a5568] uppercase tracking-wider text-right">Score</span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {[1, 2, 3, 4, 5].map((rank) => (
              <motion.div
                key={rank}
                className="grid grid-cols-[60px_1fr_100px] gap-4 px-6 py-4 border-b border-gray-100 last:border-0 blur-[2px] select-none"
                variants={rowVariants}
              >
                <span className="font-mono text-sm text-[#1a2e3b] font-bold">0{rank}</span>
                <span className="font-['DM Sans'] text-sm text-gray-500">━━━━━━━━━━━━</span>
                <span className="font-mono text-sm text-gray-400 text-right">---</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Coming soon badge */}
        <motion.div
          className="mt-8 inline-flex items-center gap-2 bg-[#fef0ec] text-[#EF7B6B] font-['Syne'] font-semibold text-sm px-5 py-2.5 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <i className="fa-solid fa-clock" aria-hidden="true"></i>
          Coming Soon
        </motion.div>
      </div>
    </section>
  );
}
