import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Details from "@/pages/details";
import OurStory from "@/pages/our-story";
import Rsvp from "@/pages/rsvp";
import webRSVP from "@/pages/rsvp-web";
import WeddingParty from "@/pages/wedding-party";
import Faq from "@/pages/faq";
import Registry from "@/pages/registry";
import { RootLayout } from "@/components/layout/RootLayout";

const queryClient = new QueryClient();

function Router() {
  return (
    <RootLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/details" component={Details} />
        <Route path="/our-story" component={OurStory} />
        <Route path="/rsvp" component={Rsvp} />
        <Route path="/rsvp-test" component={webRSVP} />
        <Route path="/wedding-party" component={WeddingParty} />
        <Route path="/faq" component={Faq} />
        <Route path="/registry" component={Registry} />
        <Route component={NotFound} />
      </Switch>
    </RootLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
