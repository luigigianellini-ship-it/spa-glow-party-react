import React from 'react';
import { Heart, Users, Sparkles, Menu, X } from 'lucide-react';
import type { SiteConfig } from '../types/config';

interface NavbarProps {
  config: SiteConfig;
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ config, onOpenDonate, onOpenVolunteer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-600 to-rose-500 text-white flex items-center justify-center shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="font-black text-xl tracking-tight text-slate-900 group-hover:text-pink-600 transition-colors block leading-tight">
                {config.instituicao.nome}
              </span>
              <span className="text-[11px] font-semibold text-pink-600 tracking-wider uppercase block">
                Rayane Gomes & Esquadrão Rosa
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-slate-600">
            <a href="#quem-somos" className="hover:text-pink-600 transition-colors">Quem Somos</a>
            <a href="#o-que-fazemos" className="hover:text-pink-600 transition-colors">Como Funciona</a>
            <a href="#impacto" className="hover:text-pink-600 transition-colors">Impacto</a>
            <a href="#galeria" className="hover:text-pink-600 transition-colors">Galeria</a>
            <a href="#como-ajudar" className="hover:text-pink-600 transition-colors">Como Ajudar</a>
            <a href="#noticias" className="hover:text-pink-600 transition-colors">Notícias</a>
            <a href="#contato" className="hover:text-pink-600 transition-colors">Contato</a>
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenVolunteer}
              className="px-4 py-2.5 rounded-xl border border-pink-200 text-pink-700 bg-pink-50/70 hover:bg-pink-100 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 hover-lift cursor-pointer"
            >
              <Users className="w-4 h-4 text-pink-600" />
              Seja Voluntária
            </button>
            <button
              onClick={onOpenDonate}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-pink-600/25 transition-all flex items-center gap-1.5 hover-lift cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white text-white" />
              Doar Agora
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-pink-600 hover:bg-pink-50 transition cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-pink-100 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2 text-sm font-bold text-slate-700">
            <a href="#quem-somos" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600">Quem Somos</a>
            <a href="#o-que-fazemos" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600">Como Funciona</a>
            <a href="#impacto" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600">Impacto</a>
            <a href="#galeria" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600">Galeria</a>
            <a href="#como-ajudar" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600">Como Ajudar</a>
            <a href="#noticias" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600">Notícias</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600">Contato</a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenVolunteer(); }}
              className="w-full py-3 rounded-xl border border-pink-200 text-pink-700 bg-pink-50 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Users className="w-4 h-4 text-pink-600" /> Seja Voluntária (Esquadrão Rosa)
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDonate(); }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" /> Fazer Doação PIX
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
