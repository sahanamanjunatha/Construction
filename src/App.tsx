import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header, ViewType } from './design-system/Header';
import { Footer } from './design-system/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { ProjectsView } from './components/ProjectsView';
import { ContactView } from './components/ContactView';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onNavigateToAbout={() => handleNavigate('about')} />;
      case 'about':
        return <AboutView onNavigateHome={() => handleNavigate('home')} />;
      case 'services':
        return <ServicesView onNavigateHome={() => handleNavigate('home')} onOpenQuoteModal={() => setQuoteModalOpen(true)} />;
      case 'projects':
        return <ProjectsView onNavigateHome={() => handleNavigate('home')} onOpenQuoteModal={() => setQuoteModalOpen(true)} />;
      case 'contact':
        return <ContactView onNavigateHome={() => handleNavigate('home')} />;
      default:
        return <HomeView onNavigateToAbout={() => handleNavigate('about')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-poppins text-textDark antialiased selection:bg-orange-primary selection:text-white flex flex-col justify-between">
      <div>
        {/* Reusable Design System Header */}
        <Header
          currentView={currentView}
          onNavigate={handleNavigate}
          onOpenQuoteModal={() => setQuoteModalOpen(true)}
        />

        {/* Dynamic View Page Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Reusable Design System Footer */}
      <Footer
        onNavigateHome={() => handleNavigate('home')}
        onNavigateAbout={() => handleNavigate('about')}
        onNavigateServices={() => handleNavigate('services')}
        onNavigateProjects={() => handleNavigate('projects')}
        onNavigateContact={() => handleNavigate('contact')}
      />

      {/* Global Quote Modal Dialog */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
