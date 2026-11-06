import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartPulse, Users, CalendarDays, ClipboardList, Wallet, ChartNoAxesCombined, CircleHelp, ArrowRight, Check } from 'lucide-react';
import SEO from '../components/SEO';
import { healthPlans, healthPrice } from '../data/healthPlans';

const brl = (cents) => (cents / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const modules = [
  {
    icon: Users,
    title: 'Cadastro de Pacientes',
    desc: 'Organização dos dados cadastrais, documentos e contatos, com preenchimento de endereço por CEP.'
  },
  {
    icon: CalendarDays,
    title: 'Agendas e Atendimentos',
    desc: 'Consulta das agendas de pacientes e profissionais, acompanhamento de sessões e organização da rotina de atendimento.'
  },
  {
    icon: ClipboardList,
    title: 'Registros Clínicos',
    desc: 'Histórico, formulários e documentos para apoiar o acompanhamento do paciente, com controles de acesso por perfil e unidade.'
  },
  {
    icon: Wallet,
    title: 'Gestão Financeira',
    desc: 'Contas a pagar e a receber, saldos bancários e extratos para acompanhar a movimentação financeira da instituição.'
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Relatórios de Gestão',
    desc: 'Filtros e relatórios para apoiar a consulta de informações operacionais, clínicas e financeiras.'
  },
  {
    icon: CircleHelp,
    title: 'Ajuda no Dia a Dia',
    desc: 'Perguntas frequentes por tela e busca de assuntos para orientar a equipe durante o uso do sistema.'
  }
];

const Health = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="pt-32 pb-20">
      <SEO
        title="Saúde — Gestão Clínica e Hospitalar"
        description="Conheça o sistema de gestão clínica e hospitalar em desenvolvimento da AutomaçõesTec: pacientes, agendas, registros clínicos, financeiro e relatórios."
        url="https://automacoestec.com.br/saude"
      />

      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div variants={itemVariants} className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-bold text-primary mb-8">
              <HeartPulse size={20} aria-hidden="true" /> Gestão Clínica e Hospitalar
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
              Mais tempo para <span className="text-grad">cuidar de pessoas.</span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed mb-10">
              Estamos desenvolvendo um sistema para reunir a rotina assistencial e administrativa em um único ambiente.
              Da recepção ao financeiro, informações organizadas para apoiar quem cuida.
            </p>
            <Link to="/contato" className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/30 hover:bg-secondary transition-all">
              Conhecer o Projeto <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-32">
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Uma visão integrada da sua instituição</h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
              Conheça as áreas que compõem o projeto e estão em evolução e validação.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map(({ icon: Icon, title, desc }) => (
              <motion.div variants={itemVariants} key={title} className="glass p-10 rounded-3xl border-border bg-white shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 text-primary rounded-2xl flex items-center justify-center mb-8">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-secondary leading-relaxed font-light">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="py-32 bg-slate-50 border-t border-border" aria-labelledby="health-plans-title">
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 id="health-plans-title" className="text-4xl md:text-5xl font-bold mb-6">Planos para <span className="font-light">Saúde</span></h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg mb-6">
              Proposta inicial de valores para sua instituição, com hospedagem AWS, operação contínua
              e atendimento técnico 24 horas por dia, 7 dias por semana previstos nos planos.
            </p>
            <p className="text-sm text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
              Valores e limites em avaliação. A contratação e a ativação dependem da homologação do sistema
              e da confirmação da estrutura de operação e suporte.
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-bold ${!isAnnual ? 'text-primary' : 'text-muted'}`}>Mensal</span>
              <button
                type="button"
                role="switch"
                aria-label="Cobrança anual dos planos de Saúde"
                aria-checked={isAnnual}
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-16 h-8 rounded-full relative transition-colors flex items-center px-1"
                style={{ backgroundColor: isAnnual ? 'hsl(var(--primary))' : '#cbd5e1' }}
              >
                <span className="w-6 h-6 rounded-full bg-white transition-transform duration-300 shadow-sm" style={{ transform: isAnnual ? 'translateX(1.5rem)' : 'translateX(0)' }} />
              </button>
              <span className={`text-sm font-bold ${isAnnual ? 'text-primary' : 'text-muted'}`}>Anual</span>
            </div>
            <p className="text-sm text-emerald-700 font-bold mt-4">Anual: pague o equivalente a 10 mensalidades e use por 12 meses</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto" aria-live="polite" aria-atomic="true">
            {healthPlans.map((plan) => {
              const price = healthPrice(plan, isAnnual);
              return (
                <motion.div variants={itemVariants} key={plan.id} className={`relative bg-white rounded-3xl p-6 flex flex-col border transition-all duration-300 ${plan.featured ? 'border-primary shadow-2xl shadow-primary/10' : 'border-border shadow-lg'}`}>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{plan.desc}</p>
                  </div>
                  <div className="mb-8">
                    {price ? (
                      <>
                        <p className="text-xs font-bold text-muted mb-2">A PARTIR DE</p>
                        <p className="text-3xl font-extrabold tracking-tight">{brl(price.equivalentMonthlyCents)}</p>
                        <p className="text-muted text-sm mb-2">{isAnnual ? '/mês equivalente no anual' : '/mês'}</p>
                        <p className="text-primary text-sm font-bold">
                          {isAnnual ? `${brl(price.totalCents)} por ano, pagamento antecipado` : 'Cobrança mensal'}
                        </p>
                        {isAnnual && <p className="text-sm text-emerald-700 mt-4">Economia de {brl(price.savingsCents)} por ano</p>}
                      </>
                    ) : <p className="text-3xl font-extrabold tracking-tight text-slate-800">Sob consulta</p>}
                  </div>
                  <ul className="flex flex-col gap-4 mb-10 flex-grow" style={{ listStyle: 'none' }}>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <Check size={18} className="text-emerald-500 flex-shrink-0" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contato" className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${plan.featured ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-secondary' : 'bg-slate-100 text-slate-800 hover:bg-gray-100'}`} aria-label={`Solicitar proposta: ${plan.name}`}>
                    Solicitar Proposta
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-10">
            <p className="text-sm text-secondary leading-relaxed mb-4">
              Todos os planos preveem hospedagem AWS, monitoramento, backups e atendimento técnico humano
              24h/7, com escalonamento especializado conforme a gravidade. Prazos de resposta e recuperação
              serão definidos em contrato após validação operacional.
            </p>
            <p className="text-sm text-secondary leading-relaxed">
              Implantação, migração, treinamento, integrações e ampliações de capacidade serão orçados
              separadamente. A proposta definirá armazenamento, retenção de backups, volume de uso e
              eventuais excedentes antes da contratação. Operação 24h/7 não significa ausência de interrupções.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Vamos conhecer a sua rotina?</h2>
            <p className="text-lg text-secondary leading-relaxed mb-8">
              O projeto tem como objetivo atender instituições públicas e privadas. Converse com nossa equipe
              sobre as necessidades da sua operação e acompanhe a evolução da solução.
            </p>
            <p className="text-sm text-secondary leading-relaxed mb-10">
              Sistema em desenvolvimento e validação. Disponibilidade dos módulos, integrações e requisitos
              para implantação serão avaliados com cada instituição antes da contratação.
            </p>
            <Link to="/contato" className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary transition-all">
              Falar com Especialista <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Health;
