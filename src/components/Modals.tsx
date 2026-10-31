import React from 'react';
import { X, Heart, Copy, Check, ExternalLink } from 'lucide-react';
import type { SiteConfig } from '../types/config';

interface ModalsProps {
  config: SiteConfig;
  donateOpen: boolean;
  onCloseDonate: () => void;
  volunteerOpen: boolean;
  onCloseVolunteer: () => void;
  videoData: { url: string; title: string } | null;
  onCloseVideo: () => void;
  lightboxData: { url: string; title: string } | null;
  onCloseLightbox: () => void;
  articleData: SiteConfig['noticias_blog']['artigos'][0] | null;
  onCloseArticle: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  config,
  donateOpen,
  onCloseDonate,
  volunteerOpen,
  onCloseVolunteer,
  videoData,
  onCloseVideo,
  lightboxData,
  onCloseLightbox,
  articleData,
  onCloseArticle,
}) => {
  const [copiedKey, setCopiedKey] = React.useState(false);
  const pix = config.como_ajudar.pix;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pix.chave);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 3000);
  };

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
    pix.chave
  )}`;

  return (
    <>
      {/* 1. Modal Doação / PIX */}
      {donateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative border border-slate-100">
            <button
              onClick={onCloseDonate}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center">
                <Heart className="w-6 h-6 fill-pink-600 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 font-heading">Doe Agora pelo PIX</h3>
                <p className="text-xs text-slate-500">Ajude a transformar vidas através da beleza e da capacitação</p>
              </div>
            </div>

            <div className="text-center bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-6">
              <img
                src={qrCodeUrl}
                alt="QR Code PIX"
                className="w-44 h-44 mx-auto rounded-xl shadow-xs mb-4 object-contain bg-white p-2"
              />
              <span className="text-xs font-bold text-slate-500 block mb-1">Chave PIX Oficial:</span>
              <div className="font-mono text-sm font-bold text-slate-900 bg-white p-3 rounded-xl border border-slate-200 select-all mb-4 break-all">
                {pix.chave}
              </div>
              <button
                onClick={handleCopyPix}
                className="w-full py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                {copiedKey ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copiedKey ? 'Chave Copiada!' : 'Copiar Chave PIX'}
              </button>
            </div>

            <p className="text-xs text-slate-500 text-center">
              Favorecido: <strong>{pix.favorecido}</strong><br />
              Qualquer valor garante insumos e formação para quem mais precisa.
            </p>
          </div>
        </div>
      )}

      {/* 2. Modal Voluntariado Google Forms */}
      {volunteerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[92vh] flex flex-col">
            <button
              onClick={onCloseVolunteer}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 cursor-pointer z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center justify-between mb-4 shrink-0 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/img/esquadrao_rosa_oficial.jpg"
                  alt="Esquadrão Rosa"
                  className="w-12 h-12 rounded-2xl object-cover ring-2 ring-pink-500 shadow-xs"
                />
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading leading-tight">
                    Inscrição de Voluntária
                  </h3>
                  <p className="text-xs text-slate-500">Junte-se ao Esquadrão Rosa do Spa Glow Party</p>
                </div>
              </div>

              <a
                href={config.como_ajudar.voluntariado.link_formulario}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-pink-50 text-pink-700 font-bold text-xs hover:bg-pink-100 transition flex items-center gap-1"
              >
                Abrir no Google Forms <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex-1 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 mb-3 shadow-inner min-h-[460px]">
              <iframe
                title="Formulário Google Forms"
                src={
                  config.como_ajudar.voluntariado.link_embed ||
                  "https://docs.google.com/forms/d/e/1FAIpQLSdPWdeM72hoVf4qhRpqP8mWYVx4G70UgFXbeen7GShEvyijQA/viewform?embedded=true"
                }
                width="100%"
                height="100%"
                className="w-full h-full min-h-[460px]"
              >
                Carregando formulário...
              </iframe>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span>Formulário oficial via Google Forms</span>
              <a
                href={config.como_ajudar.voluntariado.link_formulario}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 font-bold hover:underline"
              >
                Abrir em aba externa
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 3. Modal de Vídeo */}
      {videoData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-slate-950 rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl relative border border-slate-800">
            <button
              onClick={onCloseVideo}
              className="absolute -top-12 right-0 text-white/80 hover:text-white cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>

            <h3 className="text-lg font-bold text-white mb-3 px-1">{videoData.title}</h3>
            
            <div className="rounded-2xl overflow-hidden bg-black aspect-video">
              <video
                src={videoData.url}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* 4. Lightbox de Imagem */}
      {lightboxData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-pointer"
          onClick={onCloseLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={onCloseLightbox}
              className="absolute -top-10 right-0 text-white hover:text-pink-400 cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightboxData.url}
              alt={lightboxData.title}
              className="max-w-full max-h-[82vh] rounded-2xl object-contain shadow-2xl"
            />
            <p className="text-white text-sm font-semibold mt-3 text-center">{lightboxData.title}</p>
          </div>
        </div>
      )}

      {/* 5. Modal de Notícia Completa */}
      {articleData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={onCloseArticle}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-bold px-3 py-1 bg-pink-100 text-pink-700 rounded-full">
                {articleData.categoria}
              </span>
              <span className="text-xs text-slate-400 ml-2">{articleData.data}</span>
            </div>

            <h3 className="text-2xl font-black text-slate-900 font-heading mb-4 leading-tight">
              {articleData.titulo}
            </h3>

            <div className="rounded-2xl overflow-hidden mb-6 aspect-video">
              <img src={articleData.foto} alt={articleData.titulo} className="w-full h-full object-cover" />
            </div>

            <div className="text-sm text-slate-700 leading-relaxed space-y-4">
              <p className="font-semibold text-slate-900">{articleData.resumo}</p>
              <p className="whitespace-pre-line">{articleData.conteudo_completo}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
