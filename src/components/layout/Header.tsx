import { NavLink } from "react-router-dom";
import { Fish, Archive, LayoutDashboard, LogIn, FileAudio } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinkCls = ({ isActive }: { isActive: boolean }) =>
  `${isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"} transition-colors`;

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/20">
            <Fish className="h-5 w-5 text-primary" />
          </span>
          <span className="font-display text-lg tracking-tight">MATSYA AI</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" end className={navLinkCls}>Home</NavLink>
          <NavLink to="/process" className={navLinkCls}>
            <div className="inline-flex items-center gap-2">
              <FileAudio className="h-4 w-4" /> Process
            </div>
          </NavLink>
          <NavLink to="/archive" className={navLinkCls}>
            <div className="inline-flex items-center gap-2">
              <Archive className="h-4 w-4" /> Archive
            </div>
          </NavLink>
          <NavLink to="/admin" className={navLinkCls}>
            <div className="inline-flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" /> Admin
            </div>
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="soft" size="sm">
            <NavLink to="/auth" className="inline-flex items-center gap-2">
              <LogIn className="h-4 w-4" /> Login / Sign Up
            </NavLink>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;