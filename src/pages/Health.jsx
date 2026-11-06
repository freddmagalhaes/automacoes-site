import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartPulse, Users, CalendarDays, ClipboardList, Wallet, ChartNoAxesCombined, CircleHelp, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

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
