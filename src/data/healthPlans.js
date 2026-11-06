// Proposta comercial para revisão; não representa limites já aplicados pelo sistema.
export const healthPlans = [
  {
    id: 'clinica',
    name: 'Clínica',
    desc: 'Para uma clínica com uma unidade e até 20 usuários cadastrados.',
    monthlyCents: 399000,
    features: [
      '1 unidade e até 20 usuários cadastrados',
      'Cadastros, agendas e registros clínicos',
      'Financeiro e relatórios de gestão',
      'Hospedagem AWS com operação prevista 24h/7',
      'Monitoramento e backups previstos no escopo',
      'Atendimento técnico humano previsto 24h/7'
    ]
  },
  {
    id: 'centro-clinico',
    name: 'Centro Clínico',
    desc: 'Para operações com até 3 unidades e 60 usuários cadastrados.',
    monthlyCents: 799000,
    featured: true,
    features: [
      'Até 3 unidades e 60 usuários cadastrados no total',
      'Mesmos módulos previstos no plano Clínica',
      'Gestão e relatórios por unidade',
      'Hospedagem AWS dimensionada para maior uso',
      'Monitoramento e backups previstos no escopo',
      'Operação e atendimento técnico humano previstos 24h/7'
    ]
  },
  {
    id: 'hospital-rede',
    name: 'Hospital / Rede',
    desc: 'Para hospitais e redes que precisam de dimensionamento específico.',
    features: [
      'Unidades e usuários definidos na proposta',
      'Escopo de módulos conforme a operação',
      'Capacidade AWS dimensionada por carga e criticidade',
      'Redundância e recuperação definidas no projeto',
      'Operação e atendimento técnico humano previstos 24h/7',
      'Integrações e níveis de serviço sob avaliação'
    ]
  }
];

export function healthPrice(plan, isAnnual) {
  if (plan.monthlyCents == null) return null;
  const totalCents = plan.monthlyCents * (isAnnual ? 10 : 12);
  return {
    totalCents,
    equivalentMonthlyCents: isAnnual ? totalCents / 12 : plan.monthlyCents,
    savingsCents: isAnnual ? plan.monthlyCents * 12 - totalCents : 0
  };
}
