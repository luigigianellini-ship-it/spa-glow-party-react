import React from 'react';
import { Heart, Sparkles, MapPin, Phone, Mail } from 'lucide-react';
import type { SiteConfig } from '../types/config';

interface FooterProps {
  config: SiteConfig;
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenDonate, onOpenVolunteer }) => {
  const c = config.contato;

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-black text-xl text-white tracking-tight">{config.instituicao.nome}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {config.instituicao.slogan}
            </p>
            <p className="text-[11px] text-pink-400 font-semibold">
              Uma iniciativa de Rayane Gomes, com a força do Esquadrão Rosa e do Instituto Rainhas da Favela.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#quem-somos" className="hover:text-pink-400 transition-colors">Quem Somos & Fundação</a></li>
              <li><a href="#o-que-fazemos" className="hover:text-pink-400 transition-colors">Cursos & Atividades</a></li>
              <li><a href="#impacto" className="hover:text-pink-400 transition-colors">Depoimentos & Metodologia</a></li>
              <li><a href="#galeria" className="hover:text-pink-400 transition-colors">Galeria de Fotos</a></li>
              <li><a href="#como-ajudar" className="hover:text-pink-400 transition-colors">Doações e Chave PIX</a></li>
              <li><a href="#noticias" className="hover:text-pink-400 transition-colors">Notícias e Atualizações</a></li>
            </ul>
          </div>

          {/* How to Help */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Apoie a Causa</h4>
            <div className="space-y-3">
              <button
                onClick={onOpenDonate}
                className="w-full py-2.5 px-4 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-pink-600/20"
              >
                <Heart className="w-4 h-4 fill-white" /> Fazer Doação PIX
              </button>
              <button
                onClick={onOpenVolunteer}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-pink-300 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Entrar no Esquadrão Rosa
              </button>
            </div>
            <div className="mt-4 text-[11px] text-slate-500">
              <strong className="text-slate-400">Chave PIX:</strong> {config.como_ajudar.pix.chave}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contato Oficial</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pink-500 shrink-0" />
                <span>{c.endereco_completo || `${c.endereco?.cidade || 'Uberaba'} — ${c.endereco?.estado || 'MG'}`}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-500 shrink-0" />
                <a href={c.whatsapp_link || c.telefones?.whatsapp_link || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                  {c.whatsapp || c.telefone || c.telefones?.whatsapp || '(34) 98849-9829'}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-500 shrink-0" />
                <span>{c.email_geral || c.emails?.geral || 'sglowparty@gmail.com'}</span>
              </li>
              <li className="pt-2">
                <a
                  href={c.redes_sociais?.instagram || 'https://instagram.com/spaglowparty'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 text-pink-400 hover:bg-pink-600 hover:text-white transition-all text-xs font-semibold"
                >
                  Instagram Oficial
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {config.instituicao.nome}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> para transformar vidas através da beleza.
          </p>
        </div>
      </div>
    </footer>
  );
};
