import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Trash2, Ticket, DollarSign, Hash } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const AdminTickets = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [form, setForm] = useState({ name: "", price: "0", quantity: "100" });

  const { data: events } = useQuery({
    queryKey: ["admin-pro-events"],
    queryFn: async () => {
      const { data } = await supabase.from("events").select("id, title").eq("created_by", user!.id).eq("type", "professional");
      return data ?? [];
    },
    enabled: !!user,
  });

  const { data: tickets, isLoading } = useQuery({
    queryKey: ["admin-tickets"],
    queryFn: async () => {
      const { data: myEvents } = await supabase.from("events").select("id, title").eq("created_by", user!.id).eq("type", "professional");
      if (!myEvents?.length) return [];
      const ids = myEvents.map((e) => e.id);
      const { data } = await supabase.from("tickets").select("*").in("event_id", ids);
      return (data ?? []).map((t) => ({ ...t, event_title: myEvents.find((e) => e.id === t.event_id)?.title ?? "" }));
    },
    enabled: !!user,
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from("tickets").insert({
        event_id: selectedEvent,
        name: form.name,
        price: parseFloat(form.price),
        quantity: parseInt(form.quantity),
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-tickets"] });
      toast.success("Ticket tier created!");
      setOpen(false);
      setForm({ name: "", price: "0", quantity: "100" });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("tickets").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-tickets"] });
      toast.success("Ticket deleted");
    },
  });

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">Tickets</h1>
          <p className="text-sm text-muted-foreground font-body mt-1">Manage ticket tiers for professional events</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="font-body rounded-xl gap-2 shadow-md"><Plus className="w-4 h-4" />Add Tier</Button>
          </DialogTrigger>
          <DialogContent className="rounded-2xl">
            <DialogHeader><DialogTitle className="font-display">New Ticket Tier</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div>
                <Label className="font-body text-xs">Event</Label>
                <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                  <SelectTrigger className="rounded-xl"><SelectValue placeholder="Select event" /></SelectTrigger>
                  <SelectContent>{events?.map((e) => <SelectItem key={e.id} value={e.id}>{e.title}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div><Label className="font-body text-xs">Tier Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Early Bird" className="rounded-xl" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label className="font-body text-xs">Price ($)</Label><Input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="rounded-xl" /></div>
                <div><Label className="font-body text-xs">Quantity</Label><Input type="number" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} className="rounded-xl" /></div>
              </div>
              <Button onClick={() => createMutation.mutate()} className="w-full font-body rounded-xl" disabled={!selectedEvent || !form.name}>Create Ticket Tier</Button>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>

      {isLoading ? (
        <div className="text-center py-16 text-muted-foreground font-body">Loading...</div>
      ) : !tickets?.length ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
          <Ticket className="w-12 h-12 mx-auto text-muted-foreground/40 mb-3" />
          <p className="text-muted-foreground font-body">No ticket tiers yet.</p>
        </motion.div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tickets.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border/60 rounded-2xl p-5 hover:shadow-card transition-all group relative"
            >
              <button onClick={() => deleteMutation.mutate(t.id)} className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive">
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet to-indigo flex items-center justify-center mb-4 shadow-sm">
                <Ticket className="w-4 h-4 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground text-sm mb-1">{t.name}</h3>
              <p className="text-xs text-muted-foreground font-body mb-4 truncate">{t.event_title}</p>
              <div className="flex items-center gap-4 text-xs font-body text-muted-foreground">
                <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" />${t.price}</span>
                <span className="flex items-center gap-1"><Hash className="w-3 h-3" />{t.quantity} qty</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminTickets;
