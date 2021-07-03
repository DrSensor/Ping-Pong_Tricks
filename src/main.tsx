import { Canvas } from "@react-three/fiber";
import ReactDOM from "react-dom";

import * as Viewport from "./viewport";

// new React 18 way
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Canvas
        mode="concurrent"
        frameloop="demand"
        shadows={true}
    >
        <Viewport.Game />
    </Canvas>,
);
