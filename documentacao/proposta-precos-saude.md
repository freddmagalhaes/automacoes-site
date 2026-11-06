# Proposta inicial de preços — Saúde

Revisão de 06/11/2026. O usuário autorizou montar uma proposta inicial para revisão,
considerando AWS e suporte 24h/7. Não constitui preço aprovado, cotação AWS, estrutura
já implantada ou compromisso de disponibilidade. Manter em PR de revisão até a
validação comercial. A integração de saúde mental continua adiada.

## Tabela proposta

| Plano | Porte proposto | Mensal | Total anual antecipado | Equivalente mensal no anual |
| --- | --- | ---: | ---: | ---: |
| Clínica | 1 unidade / até 20 usuários cadastrados | R$ 3.990,00 | R$ 39.900,00 | R$ 3.325,00 |
| Centro Clínico | até 3 unidades / 60 usuários cadastrados no total | R$ 7.990,00 | R$ 79.900,00 | R$ 6.658,33 |
| Hospital / Rede | dimensionamento por carga e criticidade | sob consulta | sob consulta | sob consulta |

O anual corresponde exatamente a dez mensalidades para doze meses de uso.
Economia anual: R$ 7.980,00 e R$ 15.980,00, respectivamente. A mensalidade equivalente
é informativa e arredondada para exibição; o total anual é calculado diretamente
em centavos, sem multiplicar o equivalente arredondado. Não anuncia parcelamento.

Os limites são uma segmentação comercial proposta, ainda não aplicada no software.
Não estabelecer teto de pacientes que implique apagar histórico clínico. Volumetria,
concorrência, armazenamento, retenção, excedentes e expansão precisam constar da
proposta individual. A segunda faixa amplia capacidade, sem pressupor módulos
ainda não entregues ou bloqueios de licença já implementados.

## Operação e suporte considerados

- Hospedagem AWS planejada para funcionamento contínuo; não pressupõe uptime de 100%.
- Monitoramento, alertas, backups, restauração testada e tratamento de incidentes.
- Atendimento humano N1 em escala 24h/7; escalonamento N2/N3 conforme gravidade.
- Hospitais/redes: definir redundância entre zonas, recuperação, carga e suporte
  específicos antes da cotação. Não compartilhar automaticamente o preço de clínica.
- Prazos de resposta/restauração, canais, escalas e cobertura precisam de validação
  operacional e contrato. Não prometer tempo de resolução ou certificação ainda não comprovados.
- Implantação, migração, treinamento, integrações e ampliações são orçados à parte.
  Integrações SUS e saúde mental não são anunciadas como disponíveis.

O suporte técnico AWS atende nossa equipe na infraestrutura; não substitui o suporte
ao usuário do produto. A AWS publica diferentes planos e custos de suporte, que devem
entrar no orçamento de nuvem conforme a conta e os serviços utilizados.

## Simulação econômica para revisão interna

Os valores abaixo são **hipóteses orçamentárias**, não salários pesquisados, regime
tributário recomendado, preços unitários AWS, consumo medido ou previsão de vendas:

- Seis posições na equipe N1, custo total hipotético de R$ 9.000 por pessoa/mês.
  A escala efetiva precisa validar jornada, cobertura, férias e ausências.
- Reserva N2/N3: R$ 15.000/mês; operação/ferramentas: R$ 8.000/mês.
- Custo fixo hipotético total: R$ 77.000/mês.
- Orçamento AWS compartilhado alocado: R$ 450 por clínica/mês; precisa ser substituído
  por estimativa real de arquitetura e carga antes da contratação. Não significa
  ambiente dedicado, Multi-AZ e suporte AWS ilimitado por esse valor.
- Deduções ilustrativas: 12% da receita; reserva de risco: 5%. Confirmar com a área
  financeira. Meta ilustrativa de margem após essas parcelas: 20%.
- Receita do plano Clínica anual reconhecida no modelo: R$ 3.325/mês por cliente.

Cálculos executados por script, considerando toda a carteira no menor plano anual:

| Clientes no cenário | Custo alocado por cliente/mês | Saldo por cliente após deduções e reserva | Margem simulada | Receita mínima mensal equivalente para margem de 20% |
| ---: | ---: | ---: | ---: | ---: |
| 20 | R$ 4.300,00 | -R$ 1.540,25 | -46,32% | R$ 6.825,40 |
| 50 | R$ 1.990,00 | R$ 769,75 | 23,15% | R$ 3.158,73 |
| 100 | R$ 1.220,00 | R$ 1.539,75 | 46,31% | R$ 1.936,51 |

Fórmulas: `custo = 77000 / clientes + 450`;
`saldo = 3325 * (1 - 0.12 - 0.05) - custo`;
`receita mínima = custo / (1 - 0.12 - 0.05 - 0.20)`.

O cenário de 100 clientes mantém o custo fixo apenas para mostrar sensibilidade;
não comprova capacidade dessa equipe ou infraestrutura para tal carteira. Crescimento
de carga e chamados pode exigir mais recursos. Não foram apurados CAC, inadimplência,
churn, custo financeiro do desconto, desenvolvimento e demais despesas não representadas
nos parâmetros. O saldo não é lucro líquido comprovado.

**Decisão comercial pendente:** na fase inicial com poucos clientes, o preço proposto
não sustenta sozinho essa escala própria 24h/7. Comparar plantão terceirizado com
cobertura contratada, capital para a implantação da operação e ajuste do preço.
Não transformar essa proposta em oferta definitiva antes dessa decisão.

## Estimativa AWS a completar

Definir região (avaliar São Paulo), perfis de carga, crescimento, retenção e tráfego.
Orçar computação contínua, banco gerenciado e sua redundância, armazenamento de
anexos, cópias de segurança, balanceamento, rede/saída, segurança, monitoramento,
suporte AWS, câmbio e tributos aplicáveis. Usar as quantidades reais e aproximadamente
730 horas/mês para os itens contínuos; não basear o preço em créditos temporários.
O aplicativo hospitalar segue na prévia local, sem implantação AWS nesta alteração.

Fontes oficiais consultadas em 06/11/2026:

- [AWS Pricing Calculator: estimativas por região e serviço](https://docs.aws.amazon.com/pricing-calculator/latest/userguide/getting-started.html)
- [Amazon RDS: componentes e modalidades de cobrança](https://aws.amazon.com/rds/pricing/)
- [AWS Support: preços e escopo dos planos](https://aws.amazon.com/premiumsupport/pricing/)

## Validação da implementação

- Compilação de produção e ESLint dos dois arquivos novos/alterados de código.
- Valores mensais, totais anuais e economia conferidos por script em centavos.
- Alternância mensal/anual por clique e teclado; plano sob consulta nos dois modos.
- Tabela conferida em 390, 768, 1024 e 1440 px, sem extravasamento do conteúdo da seção.
- Três botões de proposta apontam para o contato existente; navegação real conferida.
- CSS, fontes, dependências e páginas dos outros produtos preservados. A grade usa
  utilitários existentes, com três colunas em telas grandes e uma em telas menores.
- Limitações anteriores do menu móvel e do lint global permanecem registradas no PR
  do menu Saúde; não foram ampliadas por esta seção de preços.
