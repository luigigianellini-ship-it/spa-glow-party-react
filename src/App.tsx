import { useState, useEffect } from 'react';
import type { SiteConfig } from './types/config';
import defaultConfig from './data/config.json';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ImpactGallery } from './components/ImpactGallery';
import { HowToHelp } from './components/HowToHelp';
import { News } from './components/News';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

export function App() {
  const [config, setConfig] = useState<SiteConfig>(defaultConfig as unknown as SiteConfig);
  const [donateOpen, setDonateOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);
  const [videoData, setVideoData] = useState<{ url: string; title: string } | null>(null);
  const [lightboxData, setLightboxData] = useState<{ url: string; title: string } | null>(null);
  const [articleData, setArticleData] = useState<SiteConfig['noticias_blog']['artigos'][0] | null>(null);

  // Sync with live cloud KVDB config or local backend if available
  useEffect(() => {
    async function fetchLiveConfig() {
      try {
        const res = await fetch('https://kvdb.io/CRiiwUrgTkUsVqFprcTA67/site_config');
        if (res.ok) {
          const liveData = await res.json();
          if (liveData && liveData.instituicao) {
            setConfig(liveData);
          }
        }
      } catch (e) {
        console.warn('Usando configuração local padrão:', e);
      }
    }
    fetchLiveConfig();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar
        config={config}
        onOpenDonate={() => setDonateOpen(true)}
        onOpenVolunteer={() => setVolunteerOpen(true)}
      />

      <main className="flex-1">
        <Hero
          config={config}
          onOpenDonate={() => setDonateOpen(true)}
          onOpenVolunteer={() => setVolunteerOpen(true)}
          onOpenVideo={(url, title) => setVideoData({ url, title })}
        />

        <About config={config} />

        <Projects
          config={config}
          onOpenVideo={(url, title) => setVideoData({ url, title })}
        />

        <ImpactGallery
          config={config}
          onOpenVideo={(url, title) => setVideoData({ url, title })}
          onOpenLightbox={(url, title) => setLightboxData({ url, title })}
        />

        <HowToHelp
          config={config}
          onOpenVolunteer={() => setVolunteerOpen(true)}
        />

        <News
          config={config}
          onOpenArticle={(art) => setArticleData(art)}
        />

        <Contact config={config} />
      </main>

      <Footer
        config={config}
        onOpenDonate={() => setDonateOpen(true)}
        onOpenVolunteer={() => setVolunteerOpen(true)}
      />

      <Modals
        config={config}
        donateOpen={donateOpen}
        onCloseDonate={() => setDonateOpen(false)}
        volunteerOpen={volunteerOpen}
        onCloseVolunteer={() => setVolunteerOpen(false)}
        videoData={videoData}
        onCloseVideo={() => setVideoData(null)}
        lightboxData={lightboxData}
        onCloseLightbox={() => setLightboxData(null)}
        articleData={articleData}
        onCloseArticle={() => setArticleData(null)}
      />
    </div>
  );
}

export default App;
