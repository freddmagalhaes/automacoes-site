import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Factory, ShieldCheck, Zap, Globe, Users } from 'lucide-react';
import Hero from '../components/Hero';
import SolutionCard from '../components/SolutionCard';

const Home = () => {
  const solutions = [
    {
      title: "EduGestão Pro",
      description: "Plataforma completa para gestão escolar multi-tenant. Otimize a secretaria, o financeiro e o acompanhamento pedagógico em uma interface intuitiva.",
      features: [
        "Gestão de Alunos e Matrículas",
        "Controle Financeiro e Mensalidades",
        "Relatórios Acadêmicos e Atas",
        "Comunicação com Pais e Professores"
      ],
      path: "/educacional",
      icon: GraduationCap,
      colorClass: "bg-indigo-600",
      image: "/assets/edugestao_preview.png"
    },
    {
      title: "SmartMaint",
      description: "Sistema de manutenção industrial inteligente. Monitore ativos, previna falhas e aumente a produtividade do seu chão de fábrica com análise de dados.",
      features: [
        "Controle de Ativos e Equipamentos",
        "Gestão de Ordens de Serviço",
        "Análise FMEA e Criticidade",
        "Dashboard de KPIs em Tempo Real"
      ],
      path: "/industrial",
      icon: Factory,
      colorClass: "bg-purple-600",
      image: "/assets/smartmaint_preview.png"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <Hero />

      {/* Solutions Section */}
      <section id="solucoes" className="py-32 bg-secondary">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Soluções Especializadas</h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
              Oferecemos tecnologia de ponta para os desafios mais complexos da gestão moderna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((sol, i) => (
              <SolutionCard key={i} {...sol} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Por que a <span className="text-grad">AutomaçõesTec</span>?</h2>
              <p className="text-secondary text-lg mb-10 leading-relaxed">
                Não entregamos apenas software, entregamos valor estratégico. Nossa equipe de especialistas trabalha para transformar sua operação através da automação inteligente.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, t: "Segurança de Dados", d: "Infraestrutura robusta na AWS com backups diários e criptografia de ponta a ponta." },
                  { icon: Zap, t: "Performance Escalável", d: "Sistemas construídos para crescer junto com sua empresa, sem perda de desempenho." },
                  { icon: Globe, t: "Foco em Cloud", d: "Acesse sua gestão de qualquer lugar, a qualquer hora, com total disponibilidade." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center flex-shrink-0 text-indigo-600">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.t}</h4>
                      <p className="text-secondary text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-brand-primary opacity-10 blur-3xl rounded-full" />
              <div className="glass p-8 rounded-[40px] relative z-10 border-accent">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="glass p-6 rounded-2xl border-accent">
                      <div className="text-3xl font-bold text-grad mb-1">24/7</div>
                      <div className="text-xs font-bold text-muted uppercase">Suporte Técnico</div>
                    </div>
                    <div className="grad-primary p-6 rounded-2xl">
                      <div className="text-3xl font-bold text-white mb-1">100%</div>
                      <div className="text-xs font-bold text-white/70 uppercase">Foco em Resultados</div>
                    </div>
                  </div>
                  <div className="space-y-6 pt-12">
                    <div className="glass p-6 rounded-2xl border-accent">
                      <div className="text-3xl font-bold text-grad mb-1">10+</div>
                      <div className="text-xs font-bold text-muted uppercase">Anos de Experiência</div>
                    </div>
                    <div className="glass p-6 rounded-2xl border-accent">
                      <div className="text-3xl font-bold text-grad mb-1">Web</div>
                      <div className="text-xs font-bold text-muted uppercase">Tecnologias Modernas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="grad-primary p-12 md:p-20 rounded-[40px] text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Pronto para o próximo nível?</h2>
              <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">
                Junte-se a dezenas de empresas que já transformaram sua gestão com nossas soluções.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contato" className="bg-white text-indigo-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all">
                  Falar com Consultor
                </Link>
                <Link to="/precos" className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                  Ver Planos e Preços
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
