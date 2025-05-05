import React from "react";
import ReactDOM from "react-dom/client";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import SuperUserLandingNewApp from "./components/SuperUserLandingNewApp";

initializeIcons();

ReactDOM.createRoot(
  document.getElementById("careerhub_root") as HTMLElement
).render(<SuperUserLandingNewApp />);
