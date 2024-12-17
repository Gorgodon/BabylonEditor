import React from "react";

import { SceneViewComponent } from "./Components/SceneViewComponent.js";
import { Console } from "./Modules/Logging/index.js";

function App() {
  // Console.Info("App started");
  return (
    <div>
      <SceneViewComponent />
    </div>
  );
}

export default App;