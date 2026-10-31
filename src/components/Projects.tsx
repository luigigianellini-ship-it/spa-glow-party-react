import React from 'react';
import { MapPin, Users2, Play } from 'lucide-react';
import type { SiteConfig } from '../types/config';

interface ProjectsProps {
  config: SiteConfig;
  onOpenVideo: (url: string, title: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ config, onOpenVideo }) => {
  const oq = config.o_que_fazemos;

  return (
    <section id="o-que-fazemos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-pink-600 block mb-2">
            Metodologia & Ações Práticas
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            {oq.titulo}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {oq.subtitulo}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-700">
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
              <Users2 className="w-4 h-4 text-pink-600" />
              <span>Público: {oq.publico_alvo}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
              <MapPin className="w-4 h-4 text-pink-600" />
              <span>Região: {oq.regiao_atuacao}</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {oq.projetos.map((proj) => (
            <div key={proj.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover-lift flex flex-col">
              <div className="relative h-52 w-full overflow-hidden bg-slate-100 group">
                <img
                  src={proj.foto}
                  alt={proj.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-pink-700 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  {proj.categoria}
                </span>

                {proj.video_url && (
                  <button
                    onClick={() => onOpenVideo(proj.video_url!, proj.titulo)}
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-pink-600/90 text-white flex items-center justify-center pl-0.5 hover:scale-110 transition-transform shadow-lg cursor-pointer"
                    aria-label={`Assistir vídeo de ${proj.titulo}`}
                  >
                    <Play className="w-5 h-5 fill-white" />
                  </button>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mb-2">
                    <span>{proj.faixa_etaria}</span>
                    <span>{proj.horario}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading leading-snug">
                    {proj.titulo}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.descricao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
