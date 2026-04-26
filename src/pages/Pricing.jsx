import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Server, Shield, Zap, Building2, Users, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Básico",
      desc: "Para pequenas indústrias que buscam digitalizar sua manutenção.",
      price: isAnnual ? 490 : 590,
      features: [
        "Até 50 ativos cadastrados",
        "Até 5 usuários simultâneos",
        "Módulo de O.S. completo",
        "Histórico de falhas básico",
        "Suporte por E-mail (24h)"
      ],
      infra: "AWS EC2 t3.small shared",
      sla: "99.5%",
      color: "hsl(var(--text-muted))"
    },
    {
      name: "Profissional",
      desc: "Ideal para médias empresas com foco em KPIs e confiabilidade.",
      price: isAnnual ? 1290 : 1590,
      featured: true,
      features: [
        "Até 500 ativos cadastrados",
        "Até 20 usuários simultâneos",
        "Análise FMEA e Criticidade",
        "Simulador de Confiabilidade R(t)",
        "Dashboards de KPIs Avançados",
        "Suporte WhatsApp + E-mail (8h)"
      ],
      infra: "AWS RDS + EC2 t3.medium dedicated",
      sla: "99.9%",
      color: "hsl(var(--primary))"
    },
    {
      name: "Enterprise",
      desc: "Grandes operações que exigem máxima performance e suporte 24/7.",
      price: "Sob Consulta",
      features: [
        "Ativos e Usuários Ilimitados",
        "Multi-Tenant (Várias Unidades)",
        "Acesso à API para Integrações",
        "Treinamento de Equipe Onboarding",
        "Gerente de Conta Dedicado",
        "Suporte Prioritário 24/7 (SLA 1h)"
      ],
      infra: "Infraestrutura Clusterizada AWS (Auto-scaling)",
      sla: "99.99%",
      color: "hsl(var(--secondary))"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Planos Transparentes</h1>
            <p className="text-[hsl(var(--text-secondary))] max-w-2xl mx-auto text-lg mb-10">
              Escolha o plano ideal para a escala da sua operação. Infraestrutura em nuvem de classe mundial incluída.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-bold ${!isAnnual ? 'text-[hsl(var(--text-primary))]' : 'text-[hsl(var(--text-muted))]'}`}>Mensal</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-16 h-8 glass rounded-full relative p-1 transition-all"
              >
                <div className={`w-6 h-6 grad-primary rounded-full transition-all ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`} />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-bold ${isAnnual ? 'text-[hsl(var(--text-primary))]' : 'text-[hsl(var(--text-muted))]'}`}>Anual</span>
                <span className="bg-[hsl(var(--accent-emerald))]/20 text-[hsl(var(--accent-emerald))] text-[10px] font-bold px-2 py-1 rounded-full">
                  -20% ECONOMIA
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative glass rounded-[32px] p-10 flex flex-col border-[hsl(var(--border))] transition-all ${plan.featured ? 'border-[hsl(var(--primary))] shadow-2xl shadow-primary/10 scale-105 z-10' : 'hover:border-[hsl(var(--border-hover))]'}`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 grad-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-xl uppercase">
                    Mais Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-[hsl(var(--text-secondary))] text-sm leading-relaxed">{plan.desc}</p>
                </div>

                <div className="mb-8">
                  {typeof plan.price === 'number' ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold tracking-tight">R$ {plan.price}</span>
                      <span className="text-[hsl(var(--text-muted))] font-bold text-sm">/mês</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-extrabold tracking-tight">{plan.price}</div>
                  )}
                  {isAnnual && typeof plan.price === 'number' && (
                    <div className="text-[hsl(var(--accent-emerald))] text-[10px] font-bold mt-1 uppercase">Faturamento Anual</div>
                  )}
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[hsl(var(--text-secondary))]">
                      <Check size={16} className="text-[hsl(var(--accent-emerald))] mt-0.5 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-[hsl(var(--border))] mb-10 space-y-4">
                  <div className="flex items-center gap-3 text-xs font-bold text-[hsl(var(--text-muted))] uppercase tracking-widest">
                    <Server size={14} className="text-[hsl(var(--primary))]" />
                    Infra: {plan.infra}
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-[hsl(var(--text-muted))] uppercase tracking-widest">
                    <Shield size={14} className="text-[hsl(var(--accent-emerald))]" />
                    SLA: {plan.sla} Disponibilidade
                  </div>
                </div>

                <Link
                  to="/contato"
                  className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${plan.featured ? 'grad-primary text-white shadow-xl shadow-primary/20 hover:scale-105' : 'glass hover:bg-[hsl(var(--bg-secondary))]'}`}
                >
                  {typeof plan.price === 'number' ? 'Começar Agora' : 'Falar com Vendas'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Infrastructure Details */}
      <section className="py-32 bg-[hsl(var(--bg-secondary))] mt-20">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-6">Por que incluímos a AWS?</h2>
            <p className="text-[hsl(var(--text-secondary))] max-w-2xl mx-auto">
              Sua aplicação roda na nuvem líder mundial. Custos de hospedagem, backup e segurança já estão inclusos em todos os planos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Server, t: "Hospedagem EC2", d: "Instâncias escaláveis de alta performance para processamento rápido." },
              { icon: Zap, t: "RDS Database", d: "Banco de dados relacional gerenciado com alto desempenho de leitura/escrita." },
              { icon: Shield, t: "Backup S3", d: "Armazenamento redundante de arquivos e backups com 99.999999999% de durabilidade." },
              { icon: LifeBuoy, t: "Suporte Técnico", d: "Manutenção contínua do sistema e atualizações automáticas inclusas." }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mx-auto mb-6 text-[hsl(var(--primary))] group-hover:grad-primary group-hover:text-white transition-all">
                  <item.icon size={28} />
                </div>
                <h4 className="font-bold mb-3">{item.t}</h4>
                <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;
