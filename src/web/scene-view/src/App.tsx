import { Console } from "../../../libs/frontend/logging";
import { InitializeSceneView } from "../../../modules/scene-module/frontend";

function App() {
  return (
    <div>
    </div>
  );
}

export default App;

export function InitializeApp() {
  Console.Info("Web App initialized");
  InitializeSceneView();
}