import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { profile } from '../../data/profile';
import { container, fadeUp } from '../../lib/motion';

export default function Profile() {
  return (
    <section id="home" aria-label="Introduction" className="bleed-b relative">
      <div className="p-2 pt-1">
        <div className="relative h-28 overflow-hidden rounded-[3px] bg-surface sm:h-52">
          {profile.bannerUrl ? (
            <img src={profile.bannerUrl} alt="" className="h-full w-full object-cover" />
          ) : (
            <>
              <div aria-hidden="true" className="bg-dots absolute inset-0" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 font-mono text-[11px] text-muted">
                banner · set bannerUrl in src/data/profile.js
              </p>
            </>
          )}
        </div>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="flex items-center gap-4 px-5 py-5 sm:gap-5 sm:px-6 sm:py-6">
        <motion.div
          variants={fadeUp}
          className="h-[88px] w-[88px] shrink-0 overflow-hidden rounded-2xl border-[3px] border-fg/90 bg-surface sm:h-[120px] sm:w-[120px]"
        >
          {profile.avatarUrl ? (
            <img src={profile.avatarUrl} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />
          ) : (
            <span className="grid h-full w-full place-items-center text-muted">
              <User size={40} aria-hidden="true" />
            </span>
          )}
        </motion.div>

        <div className="min-w-0">
          <motion.h1 variants={fadeUp} className="font-display text-4xl leading-none tracking-tight sm:text-[44px]">
            {profile.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-2 text-base font-semibold tracking-[0.08em] text-muted sm:text-lg">
            {profile.role}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-1.5 text-xs font-medium text-muted">
            {profile.location || '[City, Country]'} · {profile.roleFocus}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
