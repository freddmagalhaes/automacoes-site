import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, AlertTriangle, BarChart3, CheckCircle2, Cog, Package, ListX, LineChart, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Link do cadastro de teste grátis do SmartMaint (defina VITE_SMARTMAINT_SIGNUP_URL no build). Sem ele, o botão não aparece.
const SIGNUP_URL = import.meta.env.VITE_SMARTMAINT_SIGNUP_URL;

const brl = (n) => n.toLocaleString('pt-BR');

const Industrial = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
      desc: "Mantenha um histórico detalhado de quebras e reparos, fundamental para análises de confiabilidade e auditorias."
    },
    {
      icon: LineChart,
      title: "Simulador R(t)",
      desc: "Cálculo matemático e estatístico de confiabilidade e tempo médio entre falhas baseado em histórico real."
    }
  ];

  // Mantenha em sincronia com server/utils/plans.js do SmartMaint (limites reais aplicados pelo sistema).
  // Preço anual = 10/12 do mensal (2 meses grátis), cobrado adiantado.
  const plans = [
    {
      name: "Essencial",
      desc: "Para oficinas e fábricas pequenas que querem sair da planilha.",
      monthly: 297,
      annual: 247,
      trial: true,
      features: [
        "Até 50 ativos cadastrados",
        "3 usuários",
        "Ordens de Serviço e histórico",
        "Planos de manutenção preventiva",
        "Controle de estoque de peças",
        "Registro de falhas e reparos"
      ],
      support: "Suporte por e-mail (48h)"
    },
    {
      name: "Profissional",
      desc: "Para indústrias que querem indicadores e confiabilidade (FMEA).",
      monthly: 697,
      annual: 581,
      featured: true,
      trial: true,
      features: [
        "Tudo do Essencial",
        "Até 300 ativos e 10 usuários",
        "Análise FMEA e criticidade",
        "Simulador de Confiabilidade R(t)",
        "Dashboards de KPIs (MTBF, MTTR)",
        "Importação de ativos por planilha"
      ],
      support: "Suporte por WhatsApp e e-mail (24h)"
    },
    {
      name: "Industrial",
      desc: "Para operações maiores, com muitos ativos e equipes.",
      monthly: 1697,
      annual: 1414,
      trial: true,
      features: [
        "Tudo do Profissional",
        "Até 1.000 ativos e 30 usuários",
        "Suporte prioritário",
        "Onboarding assistido: importação dos seus ativos e treinamento (R$ 1.500, pagamento único)"
      ],
      support: "Suporte prioritário (8h úteis)"
    },
    {
      name: "Corporativo",
      desc: "Para grupos com necessidades específicas.",
      price: "Sob Consulta",
      features: [
        "Ativos e usuários ilimitados",
        "Condições e suporte definidos em contrato",
        "Onboarding e treinamento incluídos",
        "Integrações com ERP avaliadas caso a caso"
      ],
      support: "Suporte conforme contrato"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-24"
    >
      <SEO 
        title="SmartMaint" 
        description="Manutenção industrial 4.0. Controle preventivo e corretivo de ativos. Análise FMEA e cálculo de MTBF."
      />
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-500/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-8 text-sm font-semibold text-orange-400 border border-white/10 backdrop-blur-md">
                <Cog size={16} className="animate-spin-slow" /> Manutenção 4.0
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                Smart<span className="font-light text-slate-300">Maint</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-12 font-light">
                Transforme a manutenção do seu chão de fábrica em um centro de lucro. Monitore ativos, reduza falhas e tome decisões baseadas em dados reais de confiabilidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contato" className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30">
                  Agendar Demonstração
                </Link>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="relative group perspective">
               <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-red-500 blur-2xl opacity-40 rounded-full group-hover:opacity-60 transition-opacity duration-500" />
               <div className="glass-dark p-2 md:p-4 rounded-3xl relative z-10 border border-slate-700 shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]">
                 <img src="/assets/smartmaint_preview.png" alt="SmartMaint Mockup" className="w-full rounded-2xl border border-slate-800" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Icons Row */}
      <section className="py-12 bg-slate-800 border-y border-slate-700">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Cog, label: "Teste grátis", val: "14 dias" },
              { icon: CheckCircle2, label: "Cartão de crédito", val: "Não exige" },
              { icon: Package, label: "Importação de ativos", val: "Excel/CSV" },
              { icon: Activity, label: "Dados de cada empresa", val: "Isolados" }
            ].map((s, i) => (
              <motion.div variants={itemVariants} key={i} className="text-center">
                <div className="flex justify-center mb-3 text-orange-400">
                  <s.icon size={28} />
                </div>
                <div className="text-3xl font-bold mb-1 text-white">{s.val}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-slate-50">
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Potencialize seu Chão de Fábrica</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Ferramentas avançadas para engenheiros e gestores de manutenção que buscam excelência operacional máxima.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((m, i) => (
              <motion.div variants={itemVariants} key={i} className="bg-white p-10 rounded-3xl border border-slate-200 hover:border-orange-300 transition-all group shadow-sm hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <m.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{m.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section Specific for SmartMaint */}
      <section className="py-32 bg-white border-t border-slate-200 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="container relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Planos Smart<span className="font-light">Maint</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-10">
              Preço fixo por empresa, sem cobrança por usuário dentro do limite do plano. Hospedagem em nuvem inclusa. Teste grátis por 14 dias, sem cartão de crédito.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-bold ${!isAnnual ? 'text-orange-500' : 'text-slate-400'}`}>Mensal</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-16 h-8 rounded-full relative transition-colors flex items-center px-1"
                style={{ backgroundColor: isAnnual ? '#f97316' : '#cbd5e1' }}
              >
                <div 
                  className="w-6 h-6 rounded-full bg-white transition-transform duration-300 shadow-sm" 
                  style={{ transform: isAnnual ? 'translateX(2rem)' : 'translateX(0)' }} 
                />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-bold ${isAnnual ? 'text-orange-500' : 'text-slate-400'}`}>Anual</span>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full">
                  2 MESES GRÁTIS
                </span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                variants={itemVariants}
                key={i}
                className={`relative bg-white rounded-[32px] p-8 flex flex-col border transition-all duration-300 ${plan.featured ? 'border-orange-500 shadow-2xl shadow-orange-500/10 lg:scale-105 z-10' : 'border-slate-200 hover:border-slate-300 shadow-lg'}`}
              >
                {plan.featured && (
                  <div 
                    className="absolute top-0 left-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider"
                    style={{ transform: 'translate(-50%, -50%)' }}
                  >
                    Mais Recomendado
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{plan.desc}</p>
                </div>

                <div className="mb-8">
                  {plan.price ? (
                    <div className="text-3xl font-extrabold tracking-tight text-slate-900">{plan.price}</div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold tracking-tight text-slate-900">R$ {brl(isAnnual ? plan.annual : plan.monthly)}</span>
                        <span className="text-slate-400 font-medium text-sm">/mês</span>
                      </div>
                      <div className="text-orange-500 text-xs font-semibold mt-2 uppercase tracking-wide">
                        {isAnnual ? `Cobrado anualmente: R$ ${brl(plan.annual * 12)}` : 'Cobrança mensal'}
                      </div>
                    </>
                  )}
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                      <Check size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="mb-8 bg-slate-50 p-4 rounded-2xl">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <Activity size={14} className="text-emerald-500" />
                    {plan.support}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    to="/contato"
                    className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${plan.featured ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:-translate-y-1' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
                  >
                    {plan.price ? 'Falar com Especialista' : 'Contratar Sistema'}
                  </Link>
                  {SIGNUP_URL && plan.trial && (
                    <a
                      href={SIGNUP_URL}
                      className="w-full py-3 rounded-2xl font-bold text-center text-orange-600 hover:text-orange-700 transition-all"
                    >
                      Testar grátis por 14 dias
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-10 max-w-3xl mx-auto">
            Precisa de mais? Usuário extra: R$ 29/mês cada. Pacote de +100 ativos: R$ 99/mês.
            Todos os planos incluem 14 dias de teste grátis, sem cartão de crédito. Valores sem impostos.
          </p>
        </div>
      </section>

    </motion.div>
  );
};

export default Industrial;
