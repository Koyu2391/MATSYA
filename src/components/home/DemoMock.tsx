import heroImage from "@/assets/ocean-ai-hero.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const TranscriptPreview = () => (
  <div className="rounded-md border bg-card p-4 text-left font-mono text-sm leading-6">
    <p className="text-muted-foreground">00:00 — Speaker 1:</p>
    <p>Welcome everyone, let's discuss the quarterly results and action items.</p>
    <p className="mt-3 text-muted-foreground">00:12 — Speaker 2:</p>
    <p>Our revenue grew 18% this quarter, driven by product adoption.</p>
  </div>
);

const DemoMock = () => {
  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <Card className="overflow-hidden glow-card">
            <img src={heroImage} alt="Ocean-inspired AI visualization for MATSYA AI platform" loading="lazy" className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>demo_meeting.mp3</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary">Processed</Badge>
                <span>•</span>
                <span>2 mins ago</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <TranscriptPreview />
              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="soft" size="sm">Transcription</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Full Transcription</DialogTitle>
                    </DialogHeader>
                    <TranscriptPreview />
                  </DialogContent>
                </Dialog>
                <Button variant="soft" size="sm">Translation</Button>
                <Button variant="soft" size="sm">Summary</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-lg">
          <h3 className="font-display text-2xl md:text-3xl">See it in action</h3>
          <p className="mt-3 text-muted-foreground">
            Upload your audio and receive structured transcripts with speakers and timestamps, instant translations, and concise summaries.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Accurate speech-to-text with speaker diarization</li>
            <li>• Multi-language translation support</li>
            <li>• Auto-generated summaries with key takeaways</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DemoMock