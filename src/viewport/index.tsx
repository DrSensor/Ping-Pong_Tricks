import { Physics } from "@react-three/cannon";
import { GizmoHelper, GizmoViewport, OrbitControls, Preload, useAspect, useHelper } from "@react-three/drei";
import { Suspense } from "react";
import { CameraHelper, Color, MathUtils, Vector2, Vector3 } from "three";
const { degToRad } = MathUtils;

import {} from "../component";
import * as Environment from "./environment";

export function Game() {
    return <>
        <Environment.None />
        <Physics>
        </Physics>
        <OrbitControls />
    </>;
}