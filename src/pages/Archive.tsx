import { useMemo, useState } from "react";
import Seo from "@/components/Seo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ArchiveItem {
  id: string;
  name: string;
  language: string;
  date: string; // ISO date
  preview: string;
}

const DEMO: ArchiveItem[] = [
  { id: "1", name: "team_sync.mp3", language: "en", date: "2025-07-12", preview: "[00:02] Speaker 1: Let's kick off with updates..." },
  { id: "2", name: "estado_del_proyecto.wav", language: "es", date: "2025-07-10", preview: "[00:00] Speaker 1: Bienvenidos al informe del proyecto..." },
  { id: "3", name: "client_briefing.m4a", language: "en", date: "2025-07-05", preview: "[00:05] Speaker 2: The client requested a faster turnaround..." },
];

const Archive = () => {
  const [q, setQ] = useState("");
  const [lang, setLang] = useState<string>("all");
  const [date, setDate] = useState<string>("");

  const filtered = useMemo(() => {
    return DEMO.filter((item) => {
      const matchesQ = q ? item.name.toLowerCase().includes(q.toLowerCase()) || item.preview.toLowerCase().includes(q.toLowerCase()) : true;
      const matchesLang = lang === "all" ? true : item.language === lang;
      const matchesDate = date ? item.date >= date : true;
      return matchesQ && matchesLang && matchesDate;
    });
  }, [q, lang, date]);

  return (
    <>
      <Seo
        title="Archive | MATSYA AI"
        description="Search and manage your processed audio files: transcripts, translations, and summaries."
        canonical="/archive"
      />
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-display text-3xl">Archive</h1>
            <p className="text-muted-foreground">Your processed audio files</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full md:w-auto">
            <div className="space-y-1">
              <Label htmlFor="search">Search</Label>
              <Input id="search" placeholder="Search files or content" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label>Language</Label>
              <Select value={lang} onValueChange={setLang}>
                <SelectTrigger>
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="date">From date</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          {filtered.map((f) => (
            <Card key={f.id} className="glow-card">
              <CardHeader className="flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{f.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">Processed on {f.date} • Lang: {f.language.toUpperCase()}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm line-clamp-2 text-muted-foreground">{f.preview}</p>
                <div className="flex flex-wrap gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="soft" size="sm">Transcription</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Transcription — {f.name}</DialogTitle>
                      </DialogHeader>
                      <div className="font-mono text-sm space-y-2">
                        <p>[00:00] Speaker 1: Welcome everyone...</p>
                        <p>[00:12] Speaker 2: Our revenue grew 18% this quarter...</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button variant="soft" size="sm">Translation</Button>
                  <Button variant="soft" size="sm">Summary</Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {filtered.length === 0 && (
            <p className="text-muted-foreground">No results found. Try adjusting your filters.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Archive;
