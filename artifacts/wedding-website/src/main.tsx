import { createRoot } from "react-dom/client";
import App from "./App";
import { setCookie } from "@/lib/cookies";
import "./index.css";
import { UserProfile } from "@/lib/localStorage.ts";

const USER = UserProfile.initLoad();

const inviteParams = new URLSearchParams(window.location.search);
if (inviteParams.get("invite") === "sealing") {
  setCookie("sealing_invited", "1");
} else if (inviteParams.get("invite") === "standard") {
  setCookie("sealing_invited", "0");
}

createRoot(document.getElementById("root")!).render(<App />);
