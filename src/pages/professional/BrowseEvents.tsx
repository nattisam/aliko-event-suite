import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { format } from "date-fns";

const BrowseEvents = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const { data: events, isLoading } = useQuery({
    queryKey: ["professional-events"],
    queryFn: async () => {
      const { data } = await supabase
        .from("events")
        .select("id, title, slug, description, type, status, privacy, start_datetime, end_datetime, location_name, location_address, location_map_url, host_name, cover_image_url, theme_template_id, timezone, created_by, created_at, updated_at")
        .eq("type", "professional")
        .eq("status", "published")
        .order("start_datetime", { ascending: true });
      return data ?? [];
    },
  });

  const filtered = events?.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase()) ||
    e.location_name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar portal="professional" />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold font-display text-foreground mb-2">Browse Events</h1>
        <p className="text-muted-foreground font-body mb-8">Discover professional events, conferences, and more</p>

        <div className="relative max-w-md mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search events..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>

        {isLoading ? (
          <p className="text-muted-foreground font-body">Loading events...</p>
        ) : !filtered?.length ? (
          <p className="text-muted-foreground font-body">No events found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event) => (
              <Link key={event.id} to={`/professional/events/${event.slug}`}>
                <EventCard
                  title={event.title}
                  date={format(new Date(event.start_datetime), "MMM d, yyyy")}
                  location={event.location_name ?? "Online"}
                  image={event.cover_image_url ?? ""}
                  price="View Details"
                />
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer portal="professional" />
    </div>
  );
};

export default BrowseEvents;
