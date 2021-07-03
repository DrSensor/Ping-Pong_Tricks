import { Sky, Stage, useHelper } from "@react-three/drei";
import { Color, DirectionalLightHelper, HemisphereLightHelper, MathUtils, Vector2, Vector3 } from "three";
const { degToRad } = MathUtils;

export function Sunset() {
    const color = { // X11 color names
            sky: new Color("darkorange"),
            ground: new Color("midnightblue"),
        },
        intensity = .6;
    return <>
        <Sky
            turbidity={100}
            rayleigh={2}
            inclination={.488} // .488 ~ .501
            azimuth={degToRad(-180)}
        />
        <hemisphereLight // args={[color, groundColor, .6]}
            color={color.sky}
            groundColor={color.ground}
            intensity={intensity}
            position={[0, 10 * 50, 0]}
        />
        <directionalLight // args={[color, intentisity]}
            color={color.sky}
            intensity={intensity - .2}
            position={[degToRad(-45), .6, 1]}
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
            castShadow
        />
    </>;
}
