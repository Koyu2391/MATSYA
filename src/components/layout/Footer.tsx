import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const linkCls = "text-foreground/70 hover:text-primary transition-colors";
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl">MATSYA AI</h3>
          <p className="text-sm text-muted-foreground mt-2">
            AI-powered Transcription, Translation & Summarization.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Contact</h4>
          <p className="text-sm text-muted-foreground">support@matsya.ai</p>
        </div>
        <div className="md:text-right">
          <div className="flex md:justify-end gap-4">
            <a href="#" aria-label="Twitter" className={linkCls}>
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className={linkCls}>
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" aria-label="GitHub" className={linkCls}>
              <Github className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-4">© {new Date().getFullYear()} MATSYA AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;