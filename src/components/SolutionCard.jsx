import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionCard = ({ title, description, features, path, icon: Icon, colorClass, image }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass rounded-3xl border border-accent hover:border-primary transition-all flex flex-col h-full group overflow-hidden"
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
      )}
      
      <div className="p-8 flex flex-col flex-grow">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${colorClass} group-hover:scale-110 transition-transform`}>
          <Icon size={28} className="text-white" />
        </div>
        
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-secondary mb-8 flex-grow">
          {description}
        </p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-primary">
              <CheckCircle2 size={16} className="text-emerald" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to={path}
          className="flex items-center justify-between w-full p-4 rounded-xl glass hover:bg-primary hover:text-white transition-all font-medium group/btn text-primary"
        >
          Saiba Mais
          <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default SolutionCard;
