import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const posts = [
    {
      title: "Como a Nuvem AWS Reduz Custos na Manutenção Industrial",
      excerpt: "Descubra como migrar seu controle de ativos para a nuvem pode aumentar a disponibilidade do seu chão de fábrica e reduzir custos com infraestrutura local.",
      category: "Indústria 4.0",
      date: "18 Mai 2026",
      readTime: "5 min",
      image: "bg-orange-500",
      icon: <BookOpen size={24} className="text-white" />
    },
    {
      title: "A Importância do Multi-Tenant na Gestão de Redes Escolares",
      excerpt: "Entenda por que o isolamento de dados (Row Level Security) é fundamental para garantir a conformidade com a LGPD em softwares educacionais.",
      category: "Educação",
      date: "15 Mai 2026",
      readTime: "7 min",
      image: "bg-blue-600",
      icon: <BookOpen size={24} className="text-white" />
    },
    {
      title: "Cálculo R(t): Simulando a Confiabilidade dos Seus Ativos",
      excerpt: "Um guia prático sobre como o SmartMaint utiliza dados históricos de falhas para prever quando a próxima quebra pode ocorrer na sua linha de produção.",
      category: "Engenharia",
      date: "10 Mai 2026",
      readTime: "8 min",
      image: "bg-slate-800",
      icon: <BookOpen size={24} className="text-white" />
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-32 pb-20"
    >
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 blur-[100px] rounded-full" />
        <div className="container relative z-10">
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Nosso <span className="text-grad">Blog</span>.</h1>
            <p className="text-xl text-[hsl(var(--text-secondary))] leading-relaxed">
              Artigos técnicos, estudos de caso e insights sobre o impacto da automação e computação em nuvem na indústria e na educação.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div variants={itemVariants} key={i} className="glass rounded-[32px] overflow-hidden border border-[hsl(var(--border))] hover:shadow-2xl transition-all duration-300 group flex flex-col hover:-translate-y-2">
                <div className={`h-48 ${post.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {post.icon}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-wider text-[hsl(var(--text-muted))]">
                    <span className="flex items-center gap-1.5 text-[hsl(var(--primary))]">
                      <Tag size={14} /> {post.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {post.date}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-[hsl(var(--primary))] transition-colors">{post.title}</h3>
                  <p className="text-[hsl(var(--text-secondary))] mb-8 flex-grow line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-6 border-t border-[hsl(var(--border))] flex items-center justify-between">
                    <span className="text-sm font-medium text-[hsl(var(--text-muted))]">Leitura: {post.readTime}</span>
                    <Link to="#" className="text-[hsl(var(--primary))] font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Ler Artigo <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-[hsl(var(--bg-secondary))] border-t border-[hsl(var(--border))]">
        <div className="container max-w-4xl text-center">
          <motion.div variants={itemVariants} className="glass p-12 rounded-[40px] border border-[hsl(var(--border))] bg-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 blur-[80px] rounded-full" />
            <h2 className="text-3xl font-bold mb-4 relative z-10">Assine nossa Newsletter</h2>
            <p className="text-[hsl(var(--text-secondary))] mb-8 relative z-10">Receba nossos melhores artigos técnicos diretamente na sua caixa de entrada, uma vez por mês.</p>
            <form className="flex flex-col sm:flex-row gap-4 relative z-10 max-w-xl mx-auto">
              <input type="email" placeholder="Seu melhor e-mail corporativo" className="flex-grow bg-[hsl(var(--bg-tertiary))] border border-[hsl(var(--border))] rounded-2xl px-6 py-4 focus:border-[hsl(var(--primary))] outline-none transition-all" />
              <button type="button" className="grad-primary text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                Inscrever-se
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
