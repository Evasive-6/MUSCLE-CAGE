import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ArrowRight, FileText, LogOut, ShieldCheck, Sparkles, Users } from "lucide-react";
import api from "@/services/api";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user, logout, isAuthenticated, loading } = useAuth();
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    let mounted = true;

    async function loadLeads() {
      try {
        const response = await api.get("/leads/recent");
        if (mounted) {
          setLeads(response.data.leads || []);
        }
      } catch (_error) {
        if (mounted) {
          setLeads([]);
        }
      }
    }

    if (isAuthenticated) {
      loadLeads();
    }

    return () => {
      mounted = false;
    };
  }, [isAuthenticated]);

  if (loading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div data-testid="dashboard-page" className="pt-28 sm:pt-32 pb-16 bg-[#050505] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Members Area</div>
            <h1 className="font-heading text-white text-6xl sm:text-7xl uppercase leading-[0.9]">Dashboard</h1>
            <p className="mt-4 text-white/70 max-w-2xl">
              A lightweight control surface for the gym leads pipeline, authenticated by JWT and backed by MongoDB.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/" className="inline-flex items-center gap-2 border border-white/10 hover:border-[#D90429] text-white uppercase tracking-widest text-xs font-bold px-5 py-3 transition-colors">
              Back to Site <ArrowRight size={14} />
            </Link>
            <button onClick={logout} data-testid="logout-button" className="inline-flex items-center gap-2 bg-[#D90429] hover:bg-[#EF233C] text-white uppercase tracking-widest text-xs font-bold px-5 py-3 transition-colors">
              Logout <LogOut size={14} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#111] border border-white/10 p-6">
            <div className="text-xs uppercase tracking-widest text-white/50 flex items-center gap-2"><Users size={14} className="text-[#D90429]" /> Member</div>
            <div className="mt-3 text-2xl font-semibold text-white">{user?.name}</div>
            <div className="text-white/60 mt-1">{user?.email}</div>
          </div>
          <div className="bg-[#111] border border-white/10 p-6">
            <div className="text-xs uppercase tracking-widest text-white/50 flex items-center gap-2"><ShieldCheck size={14} className="text-[#D90429]" /> Access</div>
            <div className="mt-3 text-2xl font-semibold text-white capitalize">{user?.role || "member"}</div>
            <div className="text-white/60 mt-1">JWT session active</div>
          </div>
          <div className="bg-[#111] border border-white/10 p-6">
            <div className="text-xs uppercase tracking-widest text-white/50 flex items-center gap-2"><FileText size={14} className="text-[#D90429]" /> Lead Inbox</div>
            <div className="mt-3 text-2xl font-semibold text-white">{leads.length}</div>
            <div className="text-white/60 mt-1">Recent enquiries</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 bg-[#111] border border-white/10 p-6">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#D90429] font-bold">Recent Leads</div>
                <h2 className="font-heading text-white text-4xl uppercase mt-2">MongoDB Feed</h2>
              </div>
              <Sparkles className="text-[#D90429]" />
            </div>

            <div className="space-y-4">
              {leads.length === 0 ? (
                <div className="border border-dashed border-white/10 p-6 text-white/50">
                  No leads yet. Submit the contact or enquiry form to populate this list.
                </div>
              ) : (
                leads.map((lead) => (
                  <div key={lead.id} className="border border-white/10 bg-black/40 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-white font-semibold">{lead.name}</div>
                        <div className="text-white/60 text-sm">{lead.email} · {lead.phone}</div>
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[#D90429] border border-[#D90429]/40 px-3 py-1">
                        {lead.source}
                      </div>
                    </div>
                    <div className="mt-3 text-white/70 text-sm leading-relaxed">
                      {lead.message || "No message provided."}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="lg:col-span-2 bg-[#111] border border-white/10 p-6">
            <div className="text-xs uppercase tracking-widest text-[#D90429] font-bold mb-3">Next Steps</div>
            <h2 className="font-heading text-white text-4xl uppercase leading-none">Operational features</h2>
            <ul className="mt-6 space-y-4 text-white/70">
              <li className="border-b border-white/10 pb-3">Lead forms persist to MongoDB instead of only showing toasts.</li>
              <li className="border-b border-white/10 pb-3">JWT token persists in local storage and auto-loads the member profile.</li>
              <li className="border-b border-white/10 pb-3">The auth page supports both login and registration flows.</li>
              <li className="pb-3">The repo is now structured so this can be split across multiple pull requests.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}