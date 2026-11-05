import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, BookOpen, Users, DollarSign, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const brl = (n) => n.toLocaleString('pt-BR');

const Education = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const features = [
    {
      icon: ShieldCheck,
      title: "Visão Multi-tenant",
      desc: "Administre várias escolas na mesma conta. Cada unidade enxerga apenas os próprios dados, com isolamento por escola no banco de dados."
    },
    {
      icon: BookOpen,
      title: "Controle Acadêmico",
      desc: "Enturmação ágil, diário de classe digital e geração nativa em PDF de Atas de Expulsão, Termos de Transferência e Boletins."
    },
    {
      icon: Users,
      title: "Dashboard de RH",
      desc: "Gestão de profissionais. Diferencie Efetivos de Designados e acompanhe o vencimento dos contratos temporários."
    },
    {
      icon: DollarSign,
      title: "Gestão Financeira",
      desc: "Acompanhamento do fluxo de caixa escolar, da inadimplência de mensalidades e do controle de verbas públicas."
    }
  ];

  // Preço anual = 10/12 do mensal (2 meses grátis), cobrado adiantado.
  const plans = [
    {
      name: "Escola Básica",
      desc: "Para pequenas instituições com até 500 alunos.",
      monthly: 590,
      annual: 490,
      features: [
        "Até 500 alunos matriculados",
        "Acesso para toda a equipe escolar",
        "Módulo Acadêmico e RH",
        "Geração de Relatórios em PDF",
        "Suporte por e-mail"
      ]
    },
    {
      name: "Escola Profissional",
      desc: "Para escolas médias, com até 2000 alunos.",
      monthly: 1190,
      annual: 990,
      featured: true,
      features: [
        "Até 2000 alunos matriculados",
        "Gestão financeira: mensalidades, inadimplência e verbas",
        "Portal dos Pais e Alunos",
        "Tudo do plano Escola Básica",
        "Suporte por WhatsApp e e-mail"
      ]
    },
    {
      name: "Rede Enterprise",
      desc: "Para redes de ensino e secretarias de educação (multi-escola).",
      price: "Sob Consulta",
      features: [
        "Alunos e unidades ilimitados",
        "Painel Root (backoffice central)",
        "Condições e suporte definidos em contrato",
        "Treinamento e onboarding incluídos",
        "Integrações com outros sistemas avaliadas caso a caso"
      ]
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
        title="EduGestão Pro" 
        description="Sistema de gestão escolar completo. Matrículas, enturmação, financeiro e diário de classe integrados em um ambiente seguro."
      />
      {/* Page Header */}
      <section className="py-20 md:py-32 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10" />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div variants={itemVariants} className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-8 text-sm font-semibold text-primary">
                <GraduationCap size={16} /> Sistema Educacional
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight text-text-primary">
                EduGestão <span className="font-light">Pro</span>
              </h1>
              <p className="text-xl text-secondary leading-relaxed mb-10 font-light max-w-2xl">
                A solução definitiva para secretarias e diretorias que buscam excelência administrativa. Hospedado na nuvem AWS: sem servidor para sua escola instalar ou manter.
              </p>
              <div className="flex gap-4">
                <Link to="/contato" className="bg-primary text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-primary-hover transition-all shadow-lg shadow-primary/30">
                  Solicitar Demo <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex-1 w-full">
              <div className="relative group perspective">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/30 transition-all duration-500" />
                <div className="glass p-2 md:p-4 rounded-3xl relative z-10 border-border shadow-2xl overflow-hidden bg-white/50 transform transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-[1.02]">
                  <img src="/assets/edugestao_preview.png" alt="EduGestão Pro Mockup" className="w-full rounded-2xl border border-gray-100 shadow-sm" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-32 bg-bg-primary">
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Módulos Nativos e Integrados</h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
              De matrículas e enturmação à emissão de históricos. Tudo em um único ambiente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div variants={itemVariants} key={i} className="glass p-10 rounded-3xl border-border hover:border-primary/50 transition-all bg-white hover:-translate-y-1 shadow-sm hover:shadow-md">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8">
                  <f.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-secondary leading-relaxed font-light">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section Specific for EduGestao */}
      <section className="py-32 bg-slate-50 border-t border-border">
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Planos EduGestão <span className="font-light">Pro</span></h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg mb-10">
              Licenciamento simplificado pelo tamanho da sua instituição escolar, com hospedagem em nuvem incluída.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-bold ${!isAnnual ? 'text-primary' : 'text-muted'}`}>Mensal</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-16 h-8 rounded-full relative transition-colors flex items-center px-1"
                style={{ backgroundColor: isAnnual ? 'hsl(var(--primary))' : '#cbd5e1' }}
              >
                <div 
                  className="w-6 h-6 rounded-full bg-white transition-transform duration-300 shadow-sm" 
                  style={{ transform: isAnnual ? 'translateX(2rem)' : 'translateX(0)' }} 
                />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-bold ${isAnnual ? 'text-primary' : 'text-muted'}`}>Anual</span>
                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full">
                  2 MESES GRÁTIS
                </span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                variants={itemVariants}
                key={i}
                className={`relative bg-white rounded-[32px] p-10 flex flex-col border transition-all duration-300 ${plan.featured ? 'border-primary shadow-2xl shadow-primary/10 scale-105 z-10' : 'border-border hover:border-slate-300 shadow-lg'}`}
              >
                {plan.featured && (
                  <div 
                    className="absolute top-0 left-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider"
                    style={{ transform: 'translate(-50%, -50%)' }}
                  >
                    Mais Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{plan.desc}</p>
                </div>

                <div className="mb-8">
                  {plan.price ? (
                    <div className="text-3xl font-extrabold tracking-tight text-slate-800">{plan.price}</div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold tracking-tight">R$ {brl(isAnnual ? plan.annual : plan.monthly)}</span>
                        <span className="text-muted font-medium text-sm">/mês</span>
                      </div>
                      <div className="text-primary text-xs font-semibold mt-2 uppercase tracking-wide">
                        {isAnnual ? `Cobrado anualmente: R$ ${brl(plan.annual * 12)}` : 'Cobrança mensal'}
                      </div>
                    </>
                  )}
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                      <Check size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contato"
                  className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${plan.featured ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-hover hover:-translate-y-1' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
                >
                  {plan.price ? 'Falar com Consultor' : 'Começar Agora'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Education;
