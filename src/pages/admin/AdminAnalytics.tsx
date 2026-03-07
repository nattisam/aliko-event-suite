import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Calendar, Users, Ticket, Heart, DollarSign, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const AdminAnalytics = () => {
  const { user } = useAuth();

  const { data } = useQuery({
    queryKey: ["admin-analytics"],
    queryFn: async () => {
      const { data: events } = await supabase.from("events").select("id, type, title").eq("created_by", user!.id);
      if (!events?.length) return { proEvents: 0, socialEvents: 0, totalReg: 0, totalRsvp: 0, revenue: 0, checkedIn: 0 };

      const proIds = events.filter((e) => e.type === "professional").map((e) => e.id);
      const socialIds = events.filter((e) => e.type === "social").map((e) => e.id);

      let totalReg = 0, revenue = 0, checkedIn = 0, totalRsvp = 0;

      if (proIds.length) {
        const { data: regs } = await supabase.from("registrations").select("total_paid, checkin_status").in("event_id", proIds);
        totalReg = regs?.length ?? 0;
        revenue = regs?.reduce((sum, r) => sum + (r.total_paid || 0), 0) ?? 0;
        checkedIn = regs?.filter((r) => r.checkin_status === "checked_in").length ?? 0;
      }

      if (socialIds.length) {
        const { count } = await supabase.from("rsvps").select("*", { count: "exact", head: true }).in("event_id", socialIds);
        totalRsvp = count ?? 0;
      }

      return { proEvents: proIds.length, socialEvents: socialIds.length, totalReg, totalRsvp, revenue, checkedIn };
    },
    enabled: !!user,
  });

  const stats = [
    { label: "Professional Events", value: data?.proEvents ?? 0, icon: Calendar, gradient: "from-teal to-emerald" },
    { label: "Social Events", value: data?.socialEvents ?? 0, icon: Heart, gradient: "from-rose to-coral" },
    { label: "Total Registrations", value: data?.totalReg ?? 0, icon: Ticket, gradient: "from-violet to-indigo" },
    { label: "Total RSVPs", value: data?.totalRsvp ?? 0, icon: Users, gradient: "from-sky to-teal" },
    { label: "Revenue", value: `$${(data?.revenue ?? 0).toFixed(2)}`, icon: DollarSign, gradient: "from-amber to-coral" },
    { label: "Checked In", value: data?.checkedIn ?? 0, icon: CheckCircle, gradient: "from-emerald to-teal" },
  ];

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold font-display text-foreground mb-2">Analytics</h1>
        <p className="text-sm text-muted-foreground font-body">Track performance across all your events.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="relative overflow-hidden bg-card border border-border/50 rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 group"
          >
            <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${s.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`} />
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-md`}>
                <s.icon className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-sm text-muted-foreground font-body">{s.label}</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{s.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminAnalytics;
