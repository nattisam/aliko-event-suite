import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  LayoutDashboard, Calendar, Users, Ticket, Mail, BarChart3, Settings,
  ChevronLeft, ChevronRight, LogOut, ClipboardCheck, Heart, Menu, X, Image, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/admin", accent: "teal" },
  { label: "Events", icon: Calendar, href: "/admin/events", accent: "coral" },
  { label: "Attendees / Guests", icon: Users, href: "/admin/attendees", accent: "indigo" },
  { label: "Tickets", icon: Ticket, href: "/admin/tickets", accent: "violet" },
  { label: "RSVPs", icon: Heart, href: "/admin/rsvps", accent: "rose" },
  { label: "Check-in", icon: ClipboardCheck, href: "/admin/checkin", accent: "emerald" },
  { label: "Messaging", icon: Mail, href: "/admin/messaging", accent: "sky" },
  { label: "Media", icon: Image, href: "/admin/media", accent: "amber" },
  { label: "Analytics", icon: BarChart3, href: "/admin/analytics", accent: "teal" },
  { label: "Settings", icon: Settings, href: "/admin/settings", accent: "warm-gray" },
];

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut, profile } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex">
      {/* Subtle animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-muted" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-teal/5 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-4 justify-between backdrop-blur-xl bg-card/80 border-b border-border/50">
        <button onClick={() => setMobileOpen(!mobileOpen)}><Menu className="w-5 h-5 text-foreground" /></button>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="font-display font-bold text-primary">Aliko Admin</span>
        </div>
        <div />
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-40 h-screen backdrop-blur-xl bg-card/90 border-r border-border/50 transition-all duration-300 flex flex-col
        ${collapsed ? "w-16" : "w-64"}
        ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        {/* Sidebar header */}
        <div className="flex items-center justify-between p-4 border-b border-border/50">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-primary text-sm">Aliko Admin</span>
            </div>
          )}
          <button onClick={() => { setCollapsed(!collapsed); setMobileOpen(false); }} className="hidden lg:flex w-7 h-7 rounded-md bg-muted items-center justify-center hover:bg-primary/10 transition-colors">
            {collapsed ? <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronLeft className="w-3.5 h-3.5 text-muted-foreground" />}
          </button>
          <button onClick={() => setMobileOpen(false)} className="lg:hidden"><X className="w-4 h-4" /></button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => {
            const active = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-body transition-all duration-200 ${
                  active
                    ? "bg-primary/10 text-primary font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                } ${collapsed ? "justify-center px-2" : ""}`}
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 ${
                  active ? "bg-primary/15" : "bg-transparent group-hover:bg-muted"
                }`}>
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                </div>
                {!collapsed && <span>{item.label}</span>}
                {active && !collapsed && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* User section */}
        <div className="border-t border-border/50 p-3">
          {!collapsed && profile && (
            <div className="flex items-center gap-3 px-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
                {(profile.full_name || profile.email || "U").charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-foreground font-body truncate">{profile.full_name || "User"}</p>
                <p className="text-[10px] text-muted-foreground font-body truncate">{profile.email}</p>
              </div>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={handleSignOut} className={`font-body text-xs w-full rounded-xl hover:bg-destructive/10 hover:text-destructive ${collapsed ? "px-2" : ""}`}>
            <LogOut className="w-3.5 h-3.5" />
            {!collapsed && <span className="ml-2">Sign Out</span>}
          </Button>
        </div>
      </aside>

      {/* Overlay */}
      {mobileOpen && <div className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)} />}

      {/* Main content */}
      <main className="flex-1 min-h-screen pt-14 lg:pt-0">
        <div className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
