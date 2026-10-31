import React from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock } from 'lucide-react';
import type { SiteConfig } from '../types/config';

interface ContactProps {
  config: SiteConfig;
}

export const Contact: React.FC<ContactProps> = ({ config }) => {
  const c = config.contato;
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
    }, 5000);
  };

  return (
    <section id="contato" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-pink-600 block mb-2">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            {c.titulo}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {c.subtitulo}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-slate-900 font-heading">Canais Oficiais</h3>
              
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Localização:</strong>
                    <span>{c.endereco_completo || `${c.endereco?.cidade || 'Uberaba'} — ${c.endereco?.estado || 'MG'}`}</span>
                    {(c.ponto_referencia || c.endereco?.referencia) && (
                      <span className="block text-xs text-slate-500 mt-0.5">{c.ponto_referencia || c.endereco?.referencia}</span>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">WhatsApp & Atendimento:</strong>
                    <a
                      href={c.whatsapp_link || c.telefones?.whatsapp_link || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 font-bold hover:underline"
                    >
                      {c.whatsapp || c.telefone || c.telefones?.whatsapp || '(34) 98849-9829'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">E-mail:</strong>
                    <span className="text-slate-600">{c.email_geral || c.emails?.geral || 'sglowparty@gmail.com'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Horário de Acolhimento:</strong>
                    <span className="text-slate-600 text-xs">{c.horario_funcionamento || c.horario_atendimento || 'Segunda a Sábado'}</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Rede Social:</span>
                <div className="flex gap-3">
                  <a
                    href={c.redes_sociais?.instagram || 'https://instagram.com/spaglowparty'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-pink-50 text-pink-700 hover:bg-pink-600 hover:text-white transition-all flex items-center gap-2 font-bold text-xs"
                  >
                    <span>Instagram @spaglowparty</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-64 bg-slate-200">
              <iframe
                title="Mapa de Localização"
                src={c.mapa_embed_url}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 mb-2 font-heading">Envie uma Mensagem</h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Dúvidas sobre os cursos, parcerias corporativas ou agendamento de atendimentos sociais? Fale conosco!
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 text-base">Mensagem Enviada com Sucesso!</h4>
                <p className="text-xs text-emerald-700">
                  A equipe do Spa Glow Party entrará em contato com você em breve pelo WhatsApp ou e-mail.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Seu Nome *</label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Nome completo"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Telefone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(34) 99999-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Seu E-mail *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu.email@exemplo.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Assunto</label>
                  <input
                    type="text"
                    value={formData.assunto}
                    onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                    placeholder="Ex.: Quero apoiar o projeto / Dúvidas sobre o curso"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Sua Mensagem *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Como podemos te ajudar?"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-pink-600/25 flex items-center justify-center gap-2 cursor-pointer hover-lift"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
