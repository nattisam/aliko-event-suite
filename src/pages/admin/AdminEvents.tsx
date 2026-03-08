import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Calendar, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Database } from "@/integrations/supabase/types";

type EventInsert = Database["public"]["Tables"]["events"]["Insert"];

const AdminEvents = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Partial<EventInsert>>({ type: "professional", status: "draft", privacy: "public" });

  const { data: events, isLoading } = useQuery({
    queryKey: ["admin-events"],
    queryFn: async () => {
      const { data, error } = await supabase.from("events").select("id, title, slug, description, type, status, privacy, start_datetime, end_datetime, location_name, location_address, location_map_url, host_name, cover_image_url, theme_template_id, timezone, created_by, created_at, updated_at").eq("created_by", user!.id).order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const createMutation = useMutation({
    mutationFn: async (event: EventInsert) => {
      const { error } = await supabase.from("events").insert(event);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-events"] });
      toast.success("Event created!");
      setOpen(false);
      setForm({ type: "professional", status: "draft", privacy: "public" });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("events").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-events"] });
      toast.success("Event deleted");
    },
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.start_datetime || !form.end_datetime) {
      toast.error("Please fill required fields");
      return;
    }
    const slug = form.title!.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    createMutation.mutate({
      ...form,
      title: form.title!,
      slug: `${slug}-${Date.now().toString(36)}`,
      start_datetime: form.start_datetime!,
      end_datetime: form.end_datetime!,
      type: form.type as "professional" | "social",
      status: form.status as "draft" | "published" | "ended",
      privacy: form.privacy as "public" | "link_only" | "password",
      created_by: user!.id,
    });
  };

  const statusColor = (s: string) =>
    s === "published" ? "bg-emerald/15 text-emerald border border-emerald/20" :
    s === "ended" ? "bg-muted text-muted-foreground" :
    "bg-secondary/15 text-secondary border border-secondary/20";

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">Events</h1>
          <p className="text-sm text-muted-foreground font-body mt-1">Create and manage your events</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="font-body rounded-xl gap-2 shadow-md"><Plus className="w-4 h-4" />Create Event</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl">
            <DialogHeader><DialogTitle className="font-display">Create Event</DialogTitle></DialogHeader>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="font-body text-xs">Type</Label>
                  <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v as "professional" | "social" })}>
                    <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="professional">Professional</SelectItem><SelectItem value="social">Social</SelectItem></SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="font-body text-xs">Status</Label>
                  <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v as "draft" | "published" | "ended" })}>
                    <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="draft">Draft</SelectItem><SelectItem value="published">Published</SelectItem></SelectContent>
                  </Select>
                </div>
              </div>
              <div><Label className="font-body text-xs">Title *</Label><Input value={form.title || ""} onChange={(e) => setForm({ ...form, title: e.target.value })} required className="rounded-xl" /></div>
              <div><Label className="font-body text-xs">Description</Label><Textarea value={form.description || ""} onChange={(e) => setForm({ ...form, description: e.target.value })} className="rounded-xl" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label className="font-body text-xs">Start *</Label><Input type="datetime-local" value={form.start_datetime || ""} onChange={(e) => setForm({ ...form, start_datetime: e.target.value })} required className="rounded-xl" /></div>
                <div><Label className="font-body text-xs">End *</Label><Input type="datetime-local" value={form.end_datetime || ""} onChange={(e) => setForm({ ...form, end_datetime: e.target.value })} required className="rounded-xl" /></div>
              </div>
              <div><Label className="font-body text-xs">Location</Label><Input value={form.location_name || ""} onChange={(e) => setForm({ ...form, location_name: e.target.value })} className="rounded-xl" /></div>
              <div><Label className="font-body text-xs">Address</Label><Input value={form.location_address || ""} onChange={(e) => setForm({ ...form, location_address: e.target.value })} className="rounded-xl" /></div>
              <div><Label className="font-body text-xs">Host</Label><Input value={form.host_name || ""} onChange={(e) => setForm({ ...form, host_name: e.target.value })} className="rounded-xl" /></div>
              <Button type="submit" className="w-full font-body rounded-xl" disabled={createMutation.isPending}>
                {createMutation.isPending ? "Creating..." : "Create Event"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </motion.div>

      {isLoading ? (
        <div className="text-center py-16 text-muted-foreground font-body">Loading events...</div>
      ) : !events?.length ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
          <Calendar className="w-12 h-12 mx-auto text-muted-foreground/40 mb-3" />
          <p className="text-muted-foreground font-body">No events yet. Create your first event!</p>
        </motion.div>
      ) : (
        <div className="grid gap-4">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="bg-card border border-border/60 rounded-2xl p-5 hover:shadow-card transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="font-display font-bold text-foreground text-base truncate">{event.title}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-body font-medium ${statusColor(event.status)}`}>
                      {event.status}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-body font-medium ${event.type === "professional" ? "bg-primary/10 text-primary border border-primary/20" : "bg-coral/10 text-coral border border-coral/20"}`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{new Date(event.start_datetime).toLocaleDateString()}</span>
                    {event.location_name && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{event.location_name}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                  <Link to={`/${event.type}/events/${event.slug}`}>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg"><Pencil className="w-3.5 h-3.5" /></Button>
                  </Link>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:text-destructive" onClick={() => deleteMutation.mutate(event.id)}>
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminEvents;
