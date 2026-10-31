import React from 'react';
import { Copy, Check, Heart, Sparkles, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import type { SiteConfig } from '../types/config';

interface HowToHelpProps {
  config: SiteConfig;
  onOpenVolunteer: () => void;
}

export const HowToHelp: React.FC<HowToHelpProps> = ({ config, onOpenVolunteer }) => {
  const ajuda = config.como_ajudar;
  const [copiedKey, setCopiedKey] = React.useState(false);
  const [selectedAmount, setSelectedAmount] = React.useState(ajuda.valores_sugeridos[0]?.valor || 'R$ 30');

  const handleCopyPix = () => {
    navigator.clipboard.writeText(ajuda.pix.chave);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 3000);
  };

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
    ajuda.pix.chave
  )}`;

  return (
    <section id="como-ajudar" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-pink-600 block mb-2">
            Faça Parte Desta Transformação
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            {ajuda.titulo}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {ajuda.subtitulo}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Doações Financeiras / PIX (Col-span 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-100 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold">
                    <Heart className="w-6 h-6 fill-pink-600 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 font-heading">Doações Financeiras</h3>
                    <span className="text-xs font-semibold text-pink-600">PIX Instantâneo Oficial</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-pink-50 text-pink-700 text-xs font-bold rounded-full border border-pink-100">
                  100% Destinado a Cursos
                </span>
              </div>

              {/* Valores Sugeridos */}
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Escolha um valor sugerido:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {ajuda.valores_sugeridos.map((v, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedAmount(v.valor)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      selectedAmount === v.valor
                        ? 'border-pink-500 bg-pink-50 ring-2 ring-pink-500'
                        : 'border-slate-200 bg-slate-50 hover:bg-pink-50/50'
                    }`}
                  >
                    <span className="block text-lg font-black text-slate-900">{v.valor}</span>
                    <span className="block text-[10px] text-slate-500 leading-tight mt-0.5">{v.impacto}</span>
                  </button>
                ))}
              </div>

              {/* Bloco PIX com QR Code */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 mb-6 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-36 h-36 bg-white p-2 rounded-2xl shadow-xs border border-slate-200 shrink-0 flex items-center justify-center">
                  <img src={qrCodeUrl} alt="QR Code PIX" className="w-full h-full object-contain" />
                </div>

                <div className="flex-1 space-y-2 text-center sm:text-left w-full">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Chave PIX Oficial:</span>
                  <div className="bg-white px-3 py-2.5 rounded-xl border border-slate-200 font-mono text-sm font-bold text-slate-900 select-all break-all">
                    {ajuda.pix.chave}
                  </div>
                  <p className="text-xs text-slate-600">
                    Favorecido: <strong>{ajuda.pix.favorecido}</strong><br />
                    Banco: <span>{ajuda.pix.banco}</span>
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <button
                      onClick={handleCopyPix}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {copiedKey ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                      {copiedKey ? 'Chave Copiada!' : 'Copiar Chave PIX'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 bg-white p-3.5 rounded-xl border border-slate-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-600 shrink-0" />
              <span>Transparência total: os relatórios de uso e balanços são abertos a todos os apoiadores.</span>
            </div>
          </div>

          {/* Card 2: Voluntariado Esquadrão Rosa (Col-span 5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-100 shadow-md flex flex-col justify-between">
            <div>
              <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-5 border border-pink-100 shadow-xs group">
                <img
                  src="/assets/img/esquadrao_rosa_oficial.jpg"
                  alt="Foto Oficial do Esquadrão Rosa"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 bg-pink-600/95 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Esquadrão Rosa Oficial
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2 font-heading">
                Seja Voluntária (Esquadrão Rosa)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                O Esquadrão Rosa é o coração pulsante do projeto. Dedique seu tempo, talento e amor para acolher, atender e transformar vidas através da beleza e da solidariedade!
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                  Atuação em maquiagem, cabelos, estética ou apoio comunitário
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                  Acolhimento humano e participação em oficinas e eventos
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                  Faça parte de uma rede feminina acolhedora e transformadora
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={ajuda.voluntariado.link_formulario}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-extrabold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-pink-600/25 hover-lift"
              >
                <FileText className="w-5 h-5" />
                Preencher Formulário Oficial
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenVolunteer}
                className="w-full py-2.5 rounded-xl border border-slate-200 hover:border-pink-300 text-slate-600 hover:text-pink-600 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Abrir Formulário no Site
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
