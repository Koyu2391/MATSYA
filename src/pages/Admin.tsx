import { useMemo } from "react";
import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, FileAudio, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const logs = [
  { id: 1, user: "jane@example.com", action: "uploaded", file: "meeting.mp3", date: "2025-07-12" },
  { id: 2, user: "sam@example.com", action: "transcribed", file: "briefing.m4a", date: "2025-07-12" },
  { id: 3, user: "li@example.com", action: "summarized", file: "estado.wav", date: "2025-07-11" },
];

const Admin = () => {
  const { toast } = useToast();

  const stats = useMemo(() => ({ users: 1280, files: 9453, top: ["Transcription", "Summarization", "Translation"] }), []);

  return (
    <>
      <Seo
        title="Admin Dashboard | MATSYA AI"
        description="Monitor usage, manage users, and review activity logs for MATSYA AI."
        canonical="/admin"
      />
      <section className="container mx-auto px-4 py-10 space-y-6">
        <div>
          <h1 className="font-display text-3xl">Admin Dashboard</h1>
          <p className="text-muted-foreground">Overview and controls</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="glow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" /> Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">{stats.users.toLocaleString()}</p>
            </CardContent>
          </Card>
          <Card className="glow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><FileAudio className="h-5 w-5 text-primary" /> Files Processed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">{stats.files.toLocaleString()}</p>
            </CardContent>
          </Card>
          <Card className="glow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /> Most Used Features</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2 flex-wrap">
              {stats.top.map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="glow-card">
          <CardHeader>
            <CardTitle>User Activity Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>File</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.map((l) => (
                  <TableRow key={l.id}>
                    <TableCell>{l.user}</TableCell>
                    <TableCell className="capitalize">{l.action}</TableCell>
                    <TableCell>{l.file}</TableCell>
                    <TableCell className="text-right">{l.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex gap-2 justify-end mt-4">
              <Button variant="soft" onClick={() => toast({ title: "Monitor", description: "System usage monitoring opened (demo)." })}>Monitor</Button>
              <Button variant="destructive" onClick={() => toast({ title: "Cleanup", description: "Old files deleted (demo)." })}>Delete Files</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default Admin;
