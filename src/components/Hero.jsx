import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] bg-brand-primary opacity-10 blur-[120px] rounded-full" style={{ width: '500px', height: '500px' }} />
      <div className="absolute bottom-[-10%] left-[-10%] bg-brand-secondary opacity-10 blur-[120px] rounded-full" style={{ width: '400px', height: '400px' }} />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-accent text-sm font-semibold mb-8">
              <Sparkles size={16} className="text-yellow-400" />
              <span className="text-grad">Tecnologia que impulsiona o futuro</span>
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight text-primary">
              Sistemas Inteligentes para <br />
              <span className="text-grad">Gestão Industrial</span> e <br />
              <span className="text-grad">Educacional</span>.
            </h1>

            <p className="text-xl text-secondary mb-12 max-w-2xl leading-relaxed">
              Desenvolvemos soluções web sob medida, escaláveis em nuvem e focadas na produtividade máxima da sua organização. Do chão de fábrica à sala de aula.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contato"
                className="grad-primary px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/20 flex items-center justify-center gap-2 hover:scale-105 transition-all text-white"
              >
                Começar Agora <ArrowRight size={20} />
              </Link>
              <a
                href="#solucoes"
                className="glass px-10 py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-2 hover:bg-secondary transition-all text-primary"
              >
                Conhecer Soluções
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-accent"
          >
            {[
              { label: 'Eficiência Elevada', val: '+45%' },
              { label: 'Redução de Custos', val: '30%' },
              { label: 'Uptime Cloud', val: '99.9%' },
              { label: 'Clientes Ativos', val: '100+' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-extrabold text-primary">{stat.val}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
