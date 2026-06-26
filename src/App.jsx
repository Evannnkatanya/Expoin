import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import MarketAnalyzer from './pages/MarketAnalyzer';
import ExportReadiness from './pages/ExportReadiness';
import Roadmap from './pages/Roadmap';
import RoadmapDetail from './pages/RoadmapDetail';
import SimulasiBiaya from './pages/SimulasiBiaya';
import CariBuyer from './pages/CariBuyer';
import AiAssistant from './pages/AiAssistant';
import DokumenTemplate from './pages/DokumenTemplate';
import Notifikasi from './pages/Notifikasi';
import ProfilPengaturan from './pages/ProfilPengaturan';
import Splash from './pages/Splash';
import Onboarding from './pages/Onboarding';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Screen layout states
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 768);

  // Splash & Onboarding states
  const [showSplash, setShowSplash] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Check window size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Onboarding handles
  useEffect(() => {
    if (isMobileScreen) {
      const hasSeen = localStorage.getItem('hasSeenOnboarding');
      if (!hasSeen) {
        setShowSplash(true);
        const timer = setTimeout(() => {
          setShowSplash(false);
          setShowOnboarding(true);
        }, 2200);
        return () => clearTimeout(timer);
      } else {
        setShowSplash(false);
        setShowOnboarding(false);
      }
    } else {
      setShowSplash(false);
      setShowOnboarding(false);
    }
  }, [isMobileScreen]);

  const handleOnboardingComplete = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    setShowOnboarding(false);
    navigate('/');
  };

  const handleResetOnboarding = () => {
    localStorage.removeItem('hasSeenOnboarding');
    navigate('/');
    if (isMobileScreen) {
      setShowSplash(true);
      const timer = setTimeout(() => {
        setShowSplash(false);
        setShowOnboarding(true);
      }, 2200);
    }
  };

  // Helper to render all routes
  const renderRoutes = () => (
    <Routes>
      <Route path="/" element={<Dashboard isMobile={isMobileScreen} />} />
      <Route path="/market-analyzer" element={<MarketAnalyzer />} />
      <Route path="/export-readiness" element={<ExportReadiness />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/roadmap-detail" element={<RoadmapDetail />} />
      <Route path="/simulasi" element={<SimulasiBiaya />} />
      <Route path="/cari-buyer" element={<CariBuyer />} />
      <Route path="/ai-assistant" element={<AiAssistant />} />
      <Route path="/dokumen" element={<DokumenTemplate />} />
      <Route path="/notifikasi" element={<Notifikasi />} />
      <Route path="/profil" element={<ProfilPengaturan onResetOnboarding={handleResetOnboarding} />} />
    </Routes>
  );

  // 1. Mobile layout view
  if (isMobileScreen) {
    return (
      <div className="flex flex-col h-full bg-white select-none relative overflow-hidden min-h-screen">
        {/* Splash screen layer */}
        {showSplash && <Splash />}
        
        {/* Onboarding screen layer */}
        {showOnboarding && <Onboarding onComplete={handleOnboardingComplete} />}

        {/* Mobile Header Bar */}
        <header className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center justify-between z-30 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-sm text-white">
              E
            </div>
            <span className="font-extrabold text-sm tracking-wide text-slate-800">EXPOIN</span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/notifikasi')}
              className="p-1.5 hover:bg-slate-100 rounded-full text-slate-500 relative transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
        </header>

        {/* Page Content Scroll container */}
        <main className="flex-1 overflow-y-auto p-4 pb-24 scrollbar-none bg-slate-50/50">
          {renderRoutes()}
        </main>

        {/* Bottom Nav */}
        <Sidebar forceMobile={true} />
      </div>
    );
  }

  // 2. Desktop layout view
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar Navigation */}
      <Sidebar forceMobile={false} />

      {/* Main Content Pane */}
      <main className="flex-1 md:ml-64 min-h-screen">
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          {renderRoutes()}
        </div>
      </main>
    </div>
  );
}

export default App;
