import { useEffect, useMemo, useRef, useState } from "react";
import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { FileAudio, Languages, FileText } from "lucide-react";

interface Results {
  transcription: string;
  translation: string;
  summary: string;
}

type Status = "idle" | "uploading" | "processing" | "completed";

const DEMO_TRANSCRIPT = `
[00:00] Speaker 1: Welcome everyone, let's discuss the quarterly results.
[00:12] Speaker 2: Revenue grew 18% this quarter, driven by product adoption.
[00:28] Speaker 1: Great. Next steps: prioritize onboarding and localization.
`;

const DEMO_TRANSLATION = `
(ES) Bienvenidos, revisemos los resultados trimestrales... Ingresos +18%...
`;

const DEMO_SUMMARY = `
Key points: 18% revenue growth; focus on onboarding & localization; strong product adoption.
`;

const LANGUAGES = [
  { code: "auto", label: "Auto-detect" },
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "hi", label: "Hindi" },
];

const Process = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [language, setLanguage] = useState<string>("auto");
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<Results | null>(null);
  const intervalRef = useRef<number | null>(null);

  const fileName = useMemo(() => file?.name ?? "No file selected", [file]);

  useEffect(() => () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!f.type.startsWith("audio")) {
      toast({ title: "Unsupported file", description: "Please upload an audio file.", });
      return;
    }
    setFile(f);
    setStatus("idle");
    setResults(null);
    setProgress(0);
  };

  const startProcess = () => {
    if (!file) {
      toast({ title: "Select an audio file", description: "Please choose an audio file to process." });
      return;
    }
    setStatus("processing");
    setProgress(0);

    // Simulated progress and results
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 18 + 5, 100);
        if (next >= 100) {
          if (intervalRef.current) window.clearInterval(intervalRef.current);
          setStatus("completed");
          setResults({
            transcription: DEMO_TRANSCRIPT,
            translation: DEMO_TRANSLATION,
            summary: DEMO_SUMMARY,
          });
          toast({ title: "Processing complete", description: "Transcription, translation, and summary are ready." });
        }
        return next;
      });
    }, 500) as unknown as number;
  };

  const reset = () => {
    setFile(null);
    setStatus("idle");
    setProgress(0);
    setResults(null);
  };

  return (
    <>
      <Seo
        title="Process Audio | MATSYA AI"
        description="Upload audio to generate transcription (with speakers & timestamps), translation, and summary."
        canonical="/process"
      />

      <section className="container mx-auto px-4 py-10">
        <h1 className="font-display text-3xl">Process Audio</h1>
        <p className="text-muted-foreground">Transcription with speakers & timestamps, translation, and summary</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="glow-card">
            <CardHeader>
              <CardTitle>Upload & Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="audio">Audio file</Label>
                <Input id="audio" type="file" accept="audio/*" onChange={handleUpload} />
                <p className="text-sm text-muted-foreground">{fileName}</p>
              </div>

              <div className="space-y-1">
                <Label>Language</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {LANGUAGES.map((l) => (
                      <SelectItem key={l.code} value={l.code}>{l.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button variant="hero" onClick={startProcess} disabled={status === "processing"}>Process</Button>
                <Button variant="soft" onClick={reset} disabled={status === "processing"}>Reset</Button>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status: {status}</span>
                  <span className="text-muted-foreground">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} />
              </div>

              <p className="text-xs text-muted-foreground">
                Demo mode: results are simulated. Connect the backend to run real processing.
              </p>
            </CardContent>
          </Card>

          <Card className="glow-card">
            <CardHeader>
              <CardTitle>Results</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="transcription" className="w-full">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="transcription" className="flex items-center gap-2">
                    <FileAudio className="h-4 w-4" /> Transcription
                  </TabsTrigger>
                  <TabsTrigger value="translation" className="flex items-center gap-2">
                    <Languages className="h-4 w-4" /> Translation
                  </TabsTrigger>
                  <TabsTrigger value="summary" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" /> Summary
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="transcription" className="mt-4">
                  {results?.transcription ? (
                    <pre className="whitespace-pre-wrap font-mono text-sm leading-6">{results.transcription}</pre>
                  ) : (
                    <p className="text-muted-foreground">No transcription yet.</p>
                  )}
                </TabsContent>
                <TabsContent value="translation" className="mt-4">
                  {results?.translation ? (
                    <pre className="whitespace-pre-wrap font-mono text-sm leading-6">{results.translation}</pre>
                  ) : (
                    <p className="text-muted-foreground">No translation yet.</p>
                  )}
                </TabsContent>
                <TabsContent value="summary" className="mt-4">
                  {results?.summary ? (
                    <pre className="whitespace-pre-wrap font-mono text-sm leading-6">{results.summary}</pre>
                  ) : (
                    <p className="text-muted-foreground">No summary yet.</p>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Process;
