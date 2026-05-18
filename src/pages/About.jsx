import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Heart, Users, Award } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <SEO 
        title="Sobre Nós" 
        description="Conheça a AutomaçõesTec, nossa missão, visão e valores. Simplificando a gestão complexa através de automações inteligentes e seguras."
      />
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8">Nossa Missão é a sua <span className="text-grad">Segurança</span></h1>
            <p className="text-xl text-secondary leading-relaxed">
              Na AutomaçõesTec, acreditamos que a tecnologia deve ser um pilar de estabilidade e crescimento. Nascemos da necessidade de trazer ordem e inteligência para processos complexos, seja na fábrica ou na escola.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="glass p-10 rounded-3xl border-accent">
              <Target size={40} className="mx-auto mb-6 text-brand-primary" />
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-secondary text-sm">Simplificar a gestão complexa através de automações inteligentes e seguras.</p>
            </div>
            <div className="glass p-10 rounded-3xl border-accent">
              <Eye size={40} className="mx-auto mb-6 text-brand-primary" />
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-secondary text-sm">Ser a principal referência em software de gestão crítica no Brasil até 2030.</p>
            </div>
            <div className="glass p-10 rounded-3xl border-accent">
              <Heart size={40} className="mx-auto mb-6 text-brand-primary" />
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <p className="text-secondary text-sm">Transparência, segurança de dados e compromisso inabalável com o sucesso do cliente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Nossa História</h2>
              <div className="space-y-6 text-secondary text-lg leading-relaxed">
                <p>
                  Fundada em Minas Gerais, a AutomaçõesTec surgiu da união de engenheiros de software e especialistas em processos industriais e educacionais.
                </p>
                <p>
                  Percebemos que muitas instituições sofriam com a falta de dados confiáveis e processos fragmentados. Nosso objetivo foi criar uma ponte entre a necessidade operacional e a inteligência tecnológica.
                </p>
                <p>
                  Hoje, atendemos dezenas de clientes em todo o território nacional, sempre focados em entregar sistemas que transmitem calma aos gestores através do controle total.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-primary opacity-10 blur-3xl rounded-full" />
              <div className="glass p-12 rounded-[40px] border-accent relative z-10">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-grad mb-2">10+</div>
                    <div className="text-xs font-bold text-muted uppercase">Anos de Mercado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-grad mb-2">50k+</div>
                    <div className="text-xs font-bold text-muted uppercase">Usuários Ativos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-grad mb-2">99.9%</div>
                    <div className="text-xs font-bold text-muted uppercase">Uptime Garantido</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-grad mb-2">100%</div>
                    <div className="text-xs font-bold text-muted uppercase">Nuvem Segura</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership/Team Placeholder */}
      <section className="py-32 bg-secondary">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Nossa Equipe</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Especialistas dedicados a garantir que sua operação nunca pare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass p-8 rounded-3xl text-center border-accent hover:border-brand-primary transition-all">
                <div className="w-24 h-24 bg-tertiary rounded-full mx-auto mb-6 flex items-center justify-center text-muted">
                  <Users size={40} />
                </div>
                <h4 className="font-bold text-lg">Membro da Equipe</h4>
                <p className="text-xs text-muted uppercase font-bold mt-1 tracking-widest">Especialista</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
