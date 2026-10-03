import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContactButtons from '../components/FloatingContactButtons';
import GlobalScrollDown from '../components/GlobalScrollDown';

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-brand-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <GlobalScrollDown />
      <FloatingContactButtons />
    </div>
  );
};

export default PublicLayout;
