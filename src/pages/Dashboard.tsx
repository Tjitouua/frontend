import React from 'react';
import { ArrowRight, MessageSquare, FileText, Bell } from 'lucide-react';
import SectionContainer from '../components/SectionContainer';
import Button from '../components/Button';

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full p-8">
      <h2 className="text-3xl font-bold text-text-heading mb-8">My Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Services in progress card */}
        <div className="rounded-lg border border-secondary-border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-primary">
            <FileText size={24} />
            <h3 className="font-bold text-lg text-text-heading">Applications</h3>
          </div>
          <p className="text-sm text-text-muted mb-6">You have 2 active applications in progress.</p>
          <Button variant="link" className="p-0 flex items-center gap-2">
            View details
            <ArrowRight size={16} />
          </Button>
        </div>

        {/* Messages card */}
        <div className="rounded-lg border border-secondary-border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-primary">
            <MessageSquare size={24} />
            <h3 className="font-bold text-lg text-text-heading">Messages</h3>
          </div>
          <p className="text-sm text-text-muted mb-6">You have 1 unread message from the Ministry.</p>
          <Button variant="link" className="p-0 flex items-center gap-2">
            Go to mailbox
            <ArrowRight size={16} />
          </Button>
        </div>

        {/* Notifications card */}
        <div className="rounded-lg border border-secondary-border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-primary">
            <Bell size={24} />
            <h3 className="font-bold text-lg text-text-heading">Notifications</h3>
          </div>
          <p className="text-sm text-text-muted mb-6">Your identity document expires in 3 months.</p>
          <Button variant="link" className="p-0 flex items-center gap-2">
            View all
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}