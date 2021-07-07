import { Physics } from "@react-three/cannon";
import { GizmoHelper, GizmoViewport, OrbitControls, Preload, useAspect, useHelper } from "@react-three/drei";
import { Suspense } from "react";
import { BoxHelper, CameraHelper, Color, MathUtils, Vector2, Vector3 } from "three";
const { degToRad } = MathUtils;

import { _3D } from "../component";
import * as Environment from "./environment";

export function Game() {
    return <>
        <Environment.Sunset />
        <Physics>
            <_3D.Ball />
            <_3D.Paddle />
            <_3D.FallGround />
        </Physics>
        <OrbitControls />
    </>;
}
