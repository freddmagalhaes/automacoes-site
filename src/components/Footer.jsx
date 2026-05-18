import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Globe, Users, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--bg-secondary))] border-t border-[hsl(var(--border))] pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 grad-primary rounded-lg flex items-center justify-center">
                <Zap size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Automações<span className="text-grad">Tec</span>
              </span>
            </Link>
            <p className="text-[hsl(var(--text-secondary))] text-sm leading-relaxed mb-6">
              Liderando a transformação digital com soluções inteligentes para os setores industrial e educacional.
            </p>
            <div className="flex gap-4">
              {[Globe, Users, Shield].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 glass rounded-lg flex items-center justify-center hover:grad-primary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Soluções</h4>
            <ul className="flex flex-col gap-4 text-sm text-[hsl(var(--text-secondary))]">
              <li><Link to="/educacional" className="hover:text-[hsl(var(--primary))] transition-colors">EduGestão Pro</Link></li>
              <li><Link to="/industrial" className="hover:text-[hsl(var(--secondary))] transition-colors">SmartMaint</Link></li>
              <li><Link to="/contato" className="hover:text-[hsl(var(--primary))] transition-colors">Consultoria sob medida</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Empresa</h4>
            <ul className="flex flex-col gap-4 text-sm text-[hsl(var(--text-secondary))]">
              <li><a href="#" className="hover:text-[hsl(var(--primary))] transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--primary))] transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--primary))] transition-colors">Blog de Tecnologia</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--primary))] transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="flex flex-col gap-4 text-sm text-[hsl(var(--text-secondary))]">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[hsl(var(--primary))]" />
                (31) 98980-5397
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[hsl(var(--primary))]" />
                atendimento@automacao.tec.br
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[hsl(var(--primary))]" />
                Belo Horizonte, MG
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--border))] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[hsl(var(--text-muted))]">
          <p>© {currentYear} AutomaçõesTec. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[hsl(var(--text-primary))]">Privacidade</a>
            <a href="#" className="hover:text-[hsl(var(--text-primary))]">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
