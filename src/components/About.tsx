import React from 'react';
import { Calendar, Target, Eye, Check } from 'lucide-react';
import type { SiteConfig } from '../types/config';

interface AboutProps {
  config: SiteConfig;
}

export const About: React.FC<AboutProps> = ({ config }) => {
  const qs = config.quem_somos;
  const foundationDate = qs.data_fundacao || config.instituicao.data_fundacao || "15 de Julho de 2025";

  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-pink-600 block mb-2">
            Conheça Nossa História
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            {qs.titulo}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {qs.subtitulo}
          </p>
        </div>

        {/* Foundation Story Card */}
        <div className="bg-gradient-to-br from-pink-50/70 via-white to-rose-50/50 rounded-3xl p-8 sm:p-12 border border-pink-100 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-700">Origem & Fundação</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1 mb-4 font-heading">Como o projeto nasceu</h3>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-pink-700 bg-white px-3.5 py-2 rounded-xl border border-pink-200 shadow-xs">
                <Calendar className="w-4 h-4 text-pink-600" />
                <span>Fundado em {foundationDate}</span>
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed whitespace-pre-line font-medium">
                {qs.historia}
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-xs hover-lift">
            <div className="w-12 h-12 rounded-2xl bg-pink-600 text-white flex items-center justify-center mb-5 shadow-md shadow-pink-600/30">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">Nossa Missão</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {qs.missao}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-xs hover-lift">
            <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center mb-5 shadow-md shadow-rose-600/30">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">Nossa Visão</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {qs.visao}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-xl font-black text-slate-900 mb-6 text-center font-heading">Valores Que Nos Movem</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qs.valores.map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-pink-100 shadow-xs hover-lift">
                <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center font-bold mb-3">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">{val.titulo}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{val.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-600">Liderança & Força Coletiva</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 font-heading">Equipe e Idealizadores</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qs.equipe.map((member, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-pink-100 shadow-xs hover-lift flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden mb-4 ring-4 ring-pink-100 shadow-md">
                  <img src={member.foto} alt={member.nome} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">{member.nome}</h4>
                <span className="text-xs font-semibold uppercase tracking-wider text-pink-600 mb-3">{member.cargo}</span>
                <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
