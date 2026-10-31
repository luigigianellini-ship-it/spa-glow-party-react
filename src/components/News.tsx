import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import type { SiteConfig } from '../types/config';

interface NewsProps {
  config: SiteConfig;
  onOpenArticle: (article: SiteConfig['noticias_blog']['artigos'][0]) => void;
}

export const News: React.FC<NewsProps> = ({ config, onOpenArticle }) => {
  const not = config.noticias_blog;

  return (
    <section id="noticias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-pink-600 block mb-2">
            Acontecimentos & Novidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            {not.titulo}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {not.subtitulo}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {not.artigos.map((art) => (
            <article
              key={art.id}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 flex flex-col justify-between hover-lift shadow-xs group cursor-pointer"
              onClick={() => onOpenArticle(art)}
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                  <img
                    src={art.foto}
                    alt={art.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-pink-700 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {art.categoria}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-pink-600" />
                    <span>{art.data}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg leading-snug mb-3 group-hover:text-pink-600 transition-colors">
                    {art.titulo}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {art.resumo}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="text-xs font-bold text-pink-600 group-hover:text-pink-700 flex items-center gap-1">
                  Ler Notícia Completa <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
