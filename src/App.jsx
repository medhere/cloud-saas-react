import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';
import { Dashboard } from '@/pages/dashboard';
import { Projects } from '@/pages/projects';
import { CreateProject } from '@/pages/create-project';
import { Billing } from '@/pages/billing';
import { InvoiceDetails } from '@/pages/invoice-details';
import { Support } from '@/pages/support';
import { Announcements } from '@/pages/announcements';
import { AnnouncementDetails } from '@/pages/announcement-details';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-background">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/new" element={<CreateProject />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/billing/invoices/:id" element={<InvoiceDetails />} />
              <Route path="/settings" element={<ComingSoon title="Settings" />} />
              <Route path="/team" element={<ComingSoon title="Team Management" />} />
              <Route path="/activity" element={<ComingSoon title="Activity Logs" />} />
              <Route path="/security" element={<ComingSoon title="Security" />} />
              <Route path="/support" element={<Support />} />
              <Route path="/support/announcements" element={<Announcements />} />
              <Route path="/support/announcements/:id" element={<AnnouncementDetails />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

function ComingSoon({ title }) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-muted-foreground mb-6">This page is coming soon!</p>
      <div className="w-full max-w-md h-64 border-2 border-dashed rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Under Construction</p>
      </div>
    </div>
  );
}

export default App;
