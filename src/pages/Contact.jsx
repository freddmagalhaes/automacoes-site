import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, ArrowRight, Globe, Users, Shield } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Side */}
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-8">Vamos construir o <br /><span className="text-grad">futuro juntos</span>.</h1>
              <p className="text-xl text-[hsl(var(--text-secondary))] mb-12 leading-relaxed">
                Nossa equipe está pronta para entender seu desafio e propor a melhor solução tecnológica. Agende uma demonstração gratuita hoje mesmo.
              </p>

              <div className="space-y-8 mb-12">
                {[
                  { icon: Phone, t: "Telefone / WhatsApp", v: "(31) 98980-5397", link: "https://wa.me/5531989805397" },
                  { icon: Mail, t: "E-mail Corporativo", v: "atendimento@automacao.tec.br", link: "mailto:atendimento@automacao.tec.br" },
                  { icon: MessageSquare, t: "Suporte Técnico", v: "Portal do Cliente", link: "#" }
                ].map((c, i) => (
                  <a key={i} href={c.link} className="flex items-center gap-6 group">
                    <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-[hsl(var(--primary))] group-hover:grad-primary group-hover:text-white transition-all">
                      <c.icon size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[hsl(var(--text-muted))] uppercase tracking-widest mb-1">{c.t}</div>
                      <div className="text-xl font-bold group-hover:text-grad transition-all">{c.v}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex gap-4">
                {[Globe, Users, Shield].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:grad-primary hover:text-white transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Form Side */}
            <div className="glass p-10 md:p-12 rounded-[40px] border-[hsl(var(--border))] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--primary))] opacity-10 blur-[80px] rounded-full -mr-20 -mt-20" />
              <form className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--text-muted))]">Nome Completo</label>
                    <input type="text" className="w-full bg-[hsl(var(--bg-tertiary))] border border-[hsl(var(--border))] rounded-xl px-4 py-4 focus:border-[hsl(var(--primary))] outline-none transition-all" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--text-muted))]">E-mail Corporativo</label>
                    <input type="email" className="w-full bg-[hsl(var(--bg-tertiary))] border border-[hsl(var(--border))] rounded-xl px-4 py-4 focus:border-[hsl(var(--primary))] outline-none transition-all" placeholder="email@empresa.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--text-muted))]">Solução de Interesse</label>
                  <select className="w-full bg-[hsl(var(--bg-tertiary))] border border-[hsl(var(--border))] rounded-xl px-4 py-4 focus:border-[hsl(var(--primary))] outline-none transition-all appearance-none">
                    <option>Selecione uma opção</option>
                    <option>EduGestão Pro (Educação)</option>
                    <option>SmartMaint (Industrial)</option>
                    <option>Consultoria sob Medida</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--text-muted))]">Mensagem</label>
                  <textarea className="w-full bg-[hsl(var(--bg-tertiary))] border border-[hsl(var(--border))] rounded-xl px-4 py-4 focus:border-[hsl(var(--primary))] outline-none transition-all min-h-[150px]" placeholder="Como podemos ajudar?" />
                </div>

                <button type="button" className="w-full grad-primary py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                  Enviar Solicitação <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-[hsl(var(--bg-secondary))] mt-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Prefere um contato direto?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://wa.me/5531989805397" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl">
              Chamar no WhatsApp <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
