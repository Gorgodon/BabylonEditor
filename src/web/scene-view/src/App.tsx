import { Console } from "../../../libs/frontend/logging";
import { InitializeSceneView } from "./modules/scene-module/scene-view";

function App() {
  return (
    <div>
    </div>
  );
}

export default App;

export function InitializeApp() {
  console.log = (message?: any)=> Console.Info(message?.toString());
  console.error = (message?: any)=> Console.Error(message?.toString());
  console.warn = (message?: any)=> Console.Warning(message?.toString());
  InitializeSceneView();
}