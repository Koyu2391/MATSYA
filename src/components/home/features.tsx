import { AudioLines, Languages, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: AudioLines,
    title: "Audio Transcription",
    desc: "Speaker identification with precise timestamps for crystal-clear transcripts.",
  },
  {
    icon: Languages,
    title: "Multi-language Translation",
    desc: "Translate transcripts across languages to reach global audiences.",
  },
  {
    icon: FileText,
    title: "Automatic Summarization",
    desc: "Get concise, accurate summaries to grasp key insights instantly.",
  },
];

const Features = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl">Capabilities</h2>
        <p className="text-muted-foreground mt-2">Built for speed, accuracy, and clarity.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3 mt-8">
        {features.map((f) => (
          <Card key={f.title} className="glow-card">
            <CardHeader>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent/15">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="mt-2">{f.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;