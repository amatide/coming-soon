import React, { useEffect, useState } from 'react';
import { MAIN_SITE_LINK, PANDUAN_LINK, FACILITATOR_NAME, LAUNCH_DATE } from '@/data';

const ComingSoon: React.FC = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const target = new Date(LAUNCH_DATE).getTime();
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  const Box = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center glass-card rounded-2xl px-5 py-4 min-w-[80px]">
      <span className="text-3xl md:text-4xl font-bold gradient-text">{String(value).padStart(2, '0')}</span>
      <span className="text-xs text-gray-400 mt-1 uppercase tracking-wide">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-bg-dark flex items-center justify-center px-4 relative overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-transparent" />

      <div className="relative max-w-2xl mx-auto text-center animate-fade-in">
        <div className="text-6xl mb-6 animate-pulse-glow">🚀</div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="gradient-text">{FACILITATOR_NAME.split(' ')[0]}</span>
        </h1>

        <div className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full glass-card text-sm text-gray-200">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          Coming Soon
        </div>

        <p className="text-gray-300 text-lg mt-8 mb-10">
          Sesuatu yang keren sedang dibangun. Pantengin terus — website ini akan segera hadir!
        </p>

        {/* Countdown */}
        <div className="flex gap-3 justify-center mb-12">
          <Box value={d} label="Hari" />
          <Box value={h} label="Jam" />
          <Box value={m} label="Menit" />
          <Box value={s} label="Detik" />
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={MAIN_SITE_LINK}
            className="px-8 py-4 rounded-full btn-primary font-semibold text-lg inline-flex items-center justify-center gap-2 text-white"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
          >
            🎮 Arcade Facilitator
          </a>
          <a
            href={PANDUAN_LINK}
            className="px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 glass-card text-white hover:bg-white/10 transition-colors"
          >
            📚 Panduan
          </a>
        </div>

        <p className="text-center text-gray-500 text-xs mt-12">
          © 2026 {FACILITATOR_NAME} · Editama
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;