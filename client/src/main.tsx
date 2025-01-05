import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Switch, Route } from "wouter";
import "./index.css";
import { SWRConfig } from "swr";
import { fetcher } from "./lib/fetcher";
import LandingPage from "./pages/LandingPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SWRConfig value={{ fetcher }}>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route>404 Page Not Found</Route>
      </Switch>
    </SWRConfig>
  </StrictMode>,
);
