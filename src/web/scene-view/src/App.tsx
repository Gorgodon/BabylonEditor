import React from "react";

import { SceneViewComponent } from "./Components/SceneViewComponent";
import { Console } from "../../../libs/frontend/logging";

function App() {
  return (
    <div>
      <SceneViewComponent />
    </div>
  );
}

export default App;

export function InitializeApp() {
  Console.Info("Web App initialized");
}