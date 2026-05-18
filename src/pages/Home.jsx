import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Factory, ShieldCheck, Zap, Globe, ArrowRight, Cloud, Server, Database } from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pb-20 pt-24"
    >
      <SEO 
        title="Início" 
        description="Soluções nativas na nuvem para escolas de ponta e indústrias 4.0. Escabilidade, segurança AWS e alta performance garantida."
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden flex items-center min-h-[90vh]">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-cyan/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-semibold text-primary">
              <SparkleIcon /> Transformação Digital Especializada
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight leading-tight">
              A inteligência por trás das <span className="text-grad">grandes operações.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Soluções nativas na nuvem para escolas de ponta e indústrias 4.0. Escabilidade, segurança AWS e alta performance garantida.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#solucoes" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:bg-primary-hover shadow-lg shadow-primary/30 w-full sm:w-auto">
                Conheça os Sistemas
              </a>
              <Link to="/contato" className="glass px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:bg-gray-50 text-primary w-full sm:w-auto">
                Falar com Especialista
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="py-32 relative">
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossas Plataformas</h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Softwares desenhados sob medida para os desafios específicos de gestão educacional e manutenção industrial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* EduGestão Pro Card */}
            <motion.div variants={itemVariants} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-[40px] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative glass p-10 md:p-12 rounded-[40px] h-full flex flex-col border border-border group-hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-3xl font-extrabold mb-4">EduGestão <span className="font-light">Pro</span></h3>
                <p className="text-secondary text-lg mb-8 flex-grow">
                  Gestão escolar completa. Matrículas, enturmação, financeiro e diário de classe integrados em um ambiente multi-tenant seguro para redes de ensino.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Portal do Aluno e Professor', 'Automação de Atas do MEC', 'Dashboards Financeiros'].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-sm text-text-primary">
                      <div className="w-5 h-5 rounded-full bg-accent-emerald/20 flex items-center justify-center text-accent-emerald flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/educacional" className="inline-flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all mt-auto">
                  Ver planos e infraestrutura <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>

            {/* SmartMaint Card */}
            <motion.div variants={itemVariants} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-400 rounded-[40px] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative glass p-10 md:p-12 rounded-[40px] h-full flex flex-col border border-border group-hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 text-secondary">
                  <Factory size={32} />
                </div>
                <h3 className="text-3xl font-extrabold mb-4">Smart<span className="font-light">Maint</span></h3>
                <p className="text-secondary text-lg mb-8 flex-grow">
                  Manutenção industrial 4.0. Controle preventivo, preditivo e corretivo de ativos. Análise FMEA, cálculo de MTBF e simulação R(t) para sua planta.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Gestão do Ciclo de Vida de O.S.', 'Monitoramento Multi-Tenant', 'Simulador de Confiabilidade R(t)'].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-sm text-text-primary">
                      <div className="w-5 h-5 rounded-full bg-accent-emerald/20 flex items-center justify-center text-accent-emerald flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/industrial" className="inline-flex items-center gap-2 font-bold text-secondary hover:gap-4 transition-all mt-auto">
                  Ver planos e infraestrutura <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud Infrastructure */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-8 text-sm font-semibold text-accent-cyan">
                <Cloud size={16} /> Powered by AWS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Nuvem Corporativa de Alta Performance</h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed font-light">
                Esqueça servidores lentos e quedas de sistema. Nossos planos já incluem instâncias dedicadas na Amazon Web Services (AWS), garantindo segurança militar para os dados da sua operação.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Server, t: "EC2 Auto Scaling", d: "Poder de processamento elástico que cresce com sua demanda." },
                  { icon: Database, t: "Amazon RDS", d: "Bancos de dados relacionais otimizados com backups automatizados." },
                  { icon: ShieldCheck, t: "Proteção DDoS", d: "Tráfego filtrado e criptografia SSL de ponta a ponta." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl glass-dark hover:bg-slate-800 transition-colors">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-accent-cyan bg-accent-cyan/10">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">{item.t}</h4>
                      <p className="text-slate-400 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="glass-dark p-8 md:p-12 rounded-[40px] border border-slate-700 relative z-10 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="glass-dark p-6 rounded-2xl border border-slate-700 bg-slate-800/50">
                      <div className="text-4xl font-bold text-accent-cyan mb-2">99.9%</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Uptime Garantido</div>
                    </div>
                    <div className="bg-gradient-to-br from-primary to-blue-600 p-6 rounded-2xl">
                      <div className="text-4xl font-bold text-white mb-2">24/7</div>
                      <div className="text-xs font-bold text-white/80 uppercase tracking-wider">Monitoramento Ativo</div>
                    </div>
                  </div>
                  <div className="space-y-6 pt-12">
                    <div className="glass-dark p-6 rounded-2xl border border-slate-700 bg-slate-800/50">
                      <div className="text-4xl font-bold text-accent-emerald mb-2">Zero</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Custo de Deploy</div>
                    </div>
                    <div className="glass-dark p-6 rounded-2xl border border-slate-700 bg-slate-800/50">
                      <div className="text-4xl font-bold text-orange-400 mb-2">SSD</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Storage NVMe</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default Home;
