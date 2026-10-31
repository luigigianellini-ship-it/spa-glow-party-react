import React from 'react';
import { Heart, Users, Play, Sparkles, CheckCircle2 } from 'lucide-react';
import type { SiteConfig } from '../types/config';

interface HeroProps {
  config: SiteConfig;
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
  onOpenVideo: (url: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onOpenDonate, onOpenVolunteer, onOpenVideo }) => {
  const hero = config.hero;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-pink-50/60 via-white to-slate-50">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-pink-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-rose-200/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/90 border border-pink-200 text-pink-700 text-xs font-bold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-pink-600" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              {hero.titulo_destaque}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.subtitulo}
            </p>

            {/* Micro Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-pink-100 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-pink-600" />
                Cursos de Maquiagem Gratuitos
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-pink-100 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-pink-600" />
                Acolhimento & Resgate da Autoestima
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-pink-100 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-pink-600" />
                A Força do Esquadrão Rosa
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenDonate}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-extrabold text-base shadow-xl shadow-pink-600/25 transition-all flex items-center justify-center gap-2 hover-lift"
              >
                <Heart className="w-5 h-5 fill-white" />
                Doe Agora via PIX
              </button>

              <button
                onClick={onOpenVolunteer}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border-2 border-pink-200 hover:border-pink-500 font-extrabold text-base shadow-xs transition-all flex items-center justify-center gap-2 hover-lift"
              >
                <Users className="w-5 h-5 text-pink-600" />
                Seja Voluntária
              </button>

              {hero.video_url && (
                <button
                  onClick={() => onOpenVideo(hero.video_url!, 'Apresentação Oficial — Spa Glow Party')}
                  className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 hover-lift"
                >
                  <Play className="w-4 h-4 fill-white" />
                  Ver Vídeo
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              <img
                src={hero.foto_url}
                alt={hero.foto_legenda}
                className="w-full h-[450px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-pink-600/90 backdrop-blur-md text-xs font-black tracking-wide uppercase mb-1">
                  Fundadora & Idealizadora
                </span>
                <p className="text-sm font-semibold text-slate-100 drop-shadow-md">
                  {hero.foto_legenda}
                </p>
              </div>

              {hero.video_url && (
                <button
                  onClick={() => onOpenVideo(hero.video_url!, 'Spa Glow Party — Vídeo do Projeto')}
                  className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-pink-600 shadow-lg flex items-center justify-center pl-0.5 hover:scale-110 transition-transform"
                  aria-label="Assistir vídeo do evento"
                >
                  <Play className="w-5 h-5 fill-pink-600 text-pink-600" />
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
