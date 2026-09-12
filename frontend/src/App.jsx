import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout
import PublicLayout from './layouts/PublicLayout';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import SolutionDetailPage from './pages/SolutionDetailPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PMSuryaGharPage from './pages/PMSuryaGharPage';
import SolarCalculatorPage from './pages/SolarCalculatorPage';
import BookSurveyPage from './pages/BookSurveyPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import { PrivacyPolicyPage, TermsPage, DisclaimerPage } from './pages/LegalPages';

import ScrollToTop from './components/ScrollToTop';

// Simple 404 component
function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-6xl font-extrabold text-slate-800 mb-4">404</h1>
      <h2 className="text-xl font-bold text-slate-700 mb-2">Page Not Found</h2>
      <p className="text-slate-500 max-w-md mb-6 text-sm">
        The solar page or resource you are looking for might have been moved, removed, or is temporarily unavailable.
      </p>
      <a
        href="/"
        className="px-6 py-2.5 bg-solar-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-sm"
      >
        Return to Homepage
      </a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/pm-surya-ghar" element={<PMSuryaGharPage />} />
          <Route path="/solar-calculator" element={<SolarCalculatorPage />} />
          <Route path="/book-survey" element={<BookSurveyPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
