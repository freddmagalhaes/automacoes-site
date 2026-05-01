import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, BookOpen, PieChart, Check, ArrowRight, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Education = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Visão Multi-tenant",
      desc: "Alterne entre várias escolas na mesma conta. Os dados são blindados, garantindo isolamento total entre unidades escolares."
    },
    {
      icon: BookOpen,
      title: "Controle Acadêmico",
      desc: "Enturmação rápida, geração nativa em PDF de Atas de Expulsão e Termos de Transferência."
    },
    {
      icon: Users,
      title: "Dashboard de RH",
      desc: "Listagem inteligente diferenciando profissionais Efetivos de Designados, com alertas automáticos de vencimento de contratos."
    },
    {
      icon: DollarSign,
      title: "Resumo Financeiro",
      desc: "Acompanhamento de fluxo de caixa da verba escolar com autorização de pendências pelo diretor."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      {/* Page Header */}
      <section className="py-20 bg-secondary border-b border-accent">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="text-primary font-medium uppercase tracking-widest text-sm mb-4 block">Educação Inteligente</span>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-primary">EduGestão <span className="font-light">Pro</span></h1>
              <p className="text-xl text-secondary leading-relaxed mb-10">
                A solução definitiva para secretarias e diretorias que buscam excelência administrativa. Desenvolvido para simplificar processos complexos da rotina escolar.
              </p>
              <Link to="/contato" className="bg-primary px-8 py-4 rounded-xl font-medium inline-flex items-center gap-2 hover:bg-secondary transition-all text-white">
                Solicitar Demo Grátis <ArrowRight size={20} />
              </Link>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="glass p-4 rounded-3xl relative z-10 border-border shadow-lg overflow-hidden bg-white">
                  <img src="/assets/edugestao_preview.png" alt="EduGestão Pro Mockup" className="w-full rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Tudo que sua escola precisa</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Módulos integrados e nativos na nuvem para uma gestão eficiente e sem burocracia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="glass p-10 rounded-3xl border-border hover:border-primary transition-all bg-white">
                <div className="w-14 h-14 bg-bg-secondary text-primary rounded-2xl flex items-center justify-center mb-8">
                  <f.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="py-32 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Automação de Diários de Classe",
                  "Controle de Inadimplência",
                  "Backup Automático na AWS",
                  "Suporte Especializado 24/7",
                  "Emissão de Documentos MEC",
                  "Histórico Escolar Digital"
                ].map((b, i) => (
                  <div key={i} className="glass p-6 rounded-2xl flex items-center gap-4 border-accent">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="font-semibold text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-8">Segurança e Escalabilidade</h2>
              <p className="text-secondary text-lg mb-8 leading-relaxed">
                Nossa plataforma é hospedada nos data centers da Amazon Web Services (AWS), garantindo que os dados da sua instituição estejam protegidos com o mesmo nível de segurança de grandes bancos globais.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium">Elastic IP dedicado</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium">SSL de alta criptografia</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium">Backups diários automáticos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">Comece a transformar sua escola hoje</h2>
          <Link to="/contato" className="bg-primary px-12 py-5 rounded-2xl font-medium text-xl inline-flex items-center gap-3 hover:bg-secondary transition-all shadow-lg text-white">
            Ver Planos de Assinatura <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Education;
