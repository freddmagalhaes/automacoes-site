import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Activity, AlertTriangle, BarChart3, CheckCircle2, Cog, ArrowRight, Package, ListX, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Industrial = () => {
  const modules = [
    {
      icon: BarChart3,
      title: "Dashboard Estratégico",
      desc: "Visualize MTBF, MTTR e disponibilidade em tempo real com gráficos dinâmicos e indicadores de performance (KPIs)."
    },
    {
      icon: Activity,
      title: "Ordens de Serviço",
      desc: "Gestão completa do ciclo de vida das O.S., desde a abertura até o encerramento com registro de custos e tempo."
    },
    {
      icon: AlertTriangle,
      title: "Análise FMEA",
      desc: "Identifique modos de falha, efeitos e criticidade para priorizar manutenções preventivas e evitar paradas não planejadas."
    },
    {
      icon: Package,
      title: "Gestão de Ativos",
      desc: "Cadastro e monitoramento de equipamentos por unidade (Tenant) garantindo isolamento de dados por empresa."
    },
    {
      icon: ListX,
      title: "Registro de Falhas",
      desc: "Mantenha um histórico detalhado de quebras e reparos, fundamental para análises preditivas e auditorias."
    },
    {
      icon: LineChart,
      title: "Simulador R(t)",
      desc: "Cálculo matemático e estatístico de confiabilidade e tempo médio entre falhas baseado em histórico real."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-border opacity-20 blur-[100px] rounded-full" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <span className="text-primary font-medium uppercase tracking-widest text-sm mb-4 block">Manutenção 4.0</span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight text-primary">Smart<span className="font-light">Maint</span></h1>
              <p className="text-xl text-secondary leading-relaxed mb-12">
                Transforme a manutenção do seu chão de fábrica em um centro de lucro. Monitore ativos, reduza falhas e tome decisões baseadas em dados reais de confiabilidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contato" className="bg-primary px-10 py-5 rounded-2xl font-medium text-lg hover:bg-secondary transition-all text-white text-center">
                  Demonstração Industrial
                </Link>
                <Link to="/precos" className="glass px-10 py-5 rounded-2xl font-medium text-lg hover:bg-bg-tertiary transition-all text-center border-border">
                  Ver Planos
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="glass p-4 rounded-3xl relative z-10 border-border shadow-lg overflow-hidden bg-white">
                <img src="/assets/smartmaint_preview.png" alt="SmartMaint Mockup" className="w-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Icons Row */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: Cog, label: "Ativos Gerenciados", val: "5000+" },
              { icon: CheckCircle2, label: "O.S. Concluídas", val: "12k+" },
              { icon: AlertTriangle, label: "Falhas Prevenidas", val: "30%" },
              { icon: Activity, label: "Disponibilidade", val: "99.8%" }
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4 text-primary">
                  <s.icon size={32} />
                </div>
                <div className="text-3xl font-bold mb-1">{s.val}</div>
                <div className="text-xs font-bold text-muted uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Potencialize seu Chão de Fábrica</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Ferramentas avançadas para gestores de manutenção que buscam excelência operacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((m, i) => (
              <div key={i} className="glass p-10 rounded-3xl border-border hover:border-primary transition-all group bg-white">
                <div className="w-16 h-16 bg-bg-secondary rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <m.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{m.title}</h3>
                <p className="text-secondary leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack/Security */}
      <section className="py-32 bg-secondary overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="glass p-12 rounded-[40px] border-border relative z-10 bg-white shadow-lg">
                <h3 className="text-3xl font-bold mb-8">Nuvem Industrial Segura</h3>
                <div className="space-y-6">
                  {[
                    "Arquitetura Multi-Tenant com Isolamento de Banco de Dados",
                    "Monitoramento de Performance 24/7",
                    "Backups Redundantes em múltiplas zonas AWS",
                    "Integração via API com sistemas ERP/MES",
                    "Interface Responsiva para Tablet e Mobile"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} className="text-white" />
                      </div>
                      <span className="text-secondary font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">Confiabilidade e Produtividade</h2>
              <p className="text-secondary text-lg mb-10 leading-relaxed">
                O SmartMaint foi projetado por engenheiros de manutenção para engenheiros. Nosso foco é reduzir o tempo de máquina parada e otimizar a alocação de recursos humanos e financeiros.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="glass p-8 rounded-2xl border-border bg-white">
                  <div className="text-sm font-medium text-muted uppercase mb-2">Impacto Direto</div>
                  <div className="text-2xl font-bold text-primary">-20% Custos Manut.</div>
                </div>
                <div className="glass p-8 rounded-2xl border-border bg-white">
                  <div className="text-sm font-medium text-muted uppercase mb-2">ROI Estimado</div>
                  <div className="text-2xl font-bold text-primary">Em 6 Meses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">Sua indústria merece inteligência</h2>
          <Link to="/contato" className="bg-primary px-12 py-5 rounded-2xl font-medium text-xl inline-flex items-center gap-3 hover:bg-secondary transition-all shadow-lg text-white">
            Agende uma Auditoria de Manutenção <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Industrial;
