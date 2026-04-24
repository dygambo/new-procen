import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Template from "@/pages/template";
import Careers from "@/pages/careers";
import Solutions from "@/pages/solutions";
import Services from "@/pages/services";
import ContactPage from "@/pages/contact";
import Expertise from "@/pages/expertise";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/template" component={Template} />
      <Route path="/careers" component={Careers} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/expertise/:slug" component={Expertise} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
