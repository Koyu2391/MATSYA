import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import heroImage from "@/assets/ocean-ai-hero.jpg";
import { useToast } from "@/hooks/use-toast";
import { Chrome } from "lucide-react";

const Auth = () => {
  const { toast } = useToast();

  const handleGoogle = () => {
    toast({
      title: "Google sign-in",
      description: "Demo only. Connect authentication to enable.",
    });
  };

  return (
    <>
      <Seo
        title="Login or Create Account | MATSYA AI"
        description="Access MATSYA AI to transcribe, translate, and summarize your audio files."
        canonical="/auth"
      />
      <div className="min-h-[80vh] grid md:grid-cols-2">
        <div className="hidden md:block relative">
          <img
            src={heroImage}
            alt="Abstract ocean waves with AI nodes and waveform"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-md">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle>Welcome back</CardTitle>
                    <CardDescription>Enter your credentials to continue</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="••••••••" />
                    </div>
                    <div className="flex items-center justify-between">
                      <a className="text-sm story-link" href="#">Forgot Password?</a>
                    </div>
                    <Button className="w-full" variant="hero">Login</Button>
                    <Button type="button" className="w-full" variant="soft" onClick={handleGoogle}>
                      <Chrome className="mr-2 h-4 w-4" /> Sign in with Google
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="signup">
                <Card>
                  <CardHeader>
                    <CardTitle>Create your account</CardTitle>
                    <CardDescription>Start processing audio with MATSYA AI</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email2">Email</Label>
                      <Input id="email2" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password2">Password</Label>
                      <Input id="password2" type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full" variant="hero">Create Account</Button>
                    <Button type="button" className="w-full" variant="soft" onClick={handleGoogle}>
                      <Chrome className="mr-2 h-4 w-4" /> Sign up with Google
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
