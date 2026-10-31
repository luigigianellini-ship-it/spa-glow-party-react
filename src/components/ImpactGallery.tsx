import React from 'react';
import { Play, Maximize2 } from 'lucide-react';
import type { SiteConfig } from '../types/config';

interface ImpactGalleryProps {
  config: SiteConfig;
  onOpenVideo: (url: string, title: string) => void;
  onOpenLightbox: (url: string, title: string) => void;
}

export const ImpactGallery: React.FC<ImpactGalleryProps> = ({ config, onOpenVideo, onOpenLightbox }) => {
  const imp = config.impacto;
  const [activeCategory, setActiveCategory] = React.useState('Todas');

  const categories = ['Todas', 'Capacitação', 'Beleza', 'Acolhimento', 'Comunidade', 'Eventos'];

  const filteredItems = imp.galeria.filter((item) => {
    if (activeCategory === 'Todas') return true;
    if (activeCategory === 'Eventos') return item.categoria.includes('Eventos') || !!item.video_url;
    return item.categoria.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <section id="impacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-pink-600 block mb-2">
            Resultados Comprovados
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            {imp.titulo}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {imp.subtitulo}
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-slate-900 font-heading">Depoimentos & Vozes Reais</h3>
            <p className="text-xs text-slate-500">Histórias de superação e transformação contadas por quem viveu a experiência</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {imp.depoimentos.map((dep, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col justify-between hover-lift shadow-xs">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-pink-500 shadow-sm shrink-0">
                      <img src={dep.foto} alt={dep.nome} className="w-full h-full object-cover" />
                      {dep.video_url && (
                        <button
                          onClick={() => onOpenVideo(dep.video_url!, `Depoimento de ${dep.nome}`)}
                          className="absolute inset-0 bg-black/40 hover:bg-black/20 flex items-center justify-center transition-colors"
                          aria-label={`Ver vídeo de ${dep.nome}`}
                        >
                          <Play className="w-5 h-5 fill-white text-white drop-shadow-md" />
                        </button>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight">{dep.nome}</h4>
                      <p className="text-[11px] font-semibold text-pink-600">{dep.cargo}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 italic leading-relaxed mb-4">
                    "{dep.texto}"
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                  <span>{dep.autorizacao}</span>
                  {dep.video_url && (
                    <button
                      onClick={() => onOpenVideo(dep.video_url!, `Depoimento de ${dep.nome}`)}
                      className="text-pink-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-pink-600" /> Assistir
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Gallery with Filters */}
        <div id="galeria" className="pt-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pink-600">Registro Visual</span>
              <h3 className="text-2xl font-black text-slate-900 font-heading">Galeria de Ações & Momentos</h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-pink-600 text-white shadow-md shadow-pink-600/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden aspect-video bg-slate-900 shadow-sm hover-lift cursor-pointer"
                onClick={() => {
                  if (item.video_url) {
                    onOpenVideo(item.video_url, item.titulo);
                  } else {
                    onOpenLightbox(item.url, item.titulo);
                  }
                }}
              >
                <img
                  src={item.url}
                  alt={item.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                  <div className="w-full flex items-center justify-between text-white">
                    <div>
                      <span className="text-[10px] font-bold text-pink-300 uppercase tracking-wider">
                        {item.categoria} {item.video_url && '• VÍDEO'}
                      </span>
                      <p className="text-xs font-bold leading-tight mt-0.5">{item.titulo}</p>
                    </div>
                    {item.video_url ? (
                      <div className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center shadow-md">
                        <Play className="w-4 h-4 fill-white" />
                      </div>
                    ) : (
                      <Maximize2 className="w-4 h-4 text-white/80 group-hover:text-white" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
