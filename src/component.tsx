import type { PlaneProps, SphereProps } from "@react-three/cannon";
import { usePlane, useSphere } from "@react-three/cannon";
import { Color, MathUtils, Vector2, Vector3 } from "three";
const { degToRad } = MathUtils;

export namespace _3D {
    export function Sphere(props: SphereProps) {
        const [ref] = useSphere(_ => ({
            mass: 1,
            position: [0, 5, 0],
            material: {
                restitution: 2.49,
                friction: .7,
            },
            ...props,
        }));
        return <mesh ref={ref} scale={.5} castShadow receiveShadow>
            <sphereBufferGeometry args={[1, 24, 24]} />
            <meshStandardMaterial color="orange" />
        </mesh>;
    }

    export function Plane(props: PlaneProps) {
        const [ref] = usePlane(_ => ({
            rotation: [degToRad(-90), 0, degToRad(50)],
            allowSleep: true,
            material: {
                restitution: .4,
                friction: 1,
            },
            ...props,
        }));
        return <mesh ref={ref} scale={10} receiveShadow>
            <planeBufferGeometry />
            <meshStandardMaterial color="firebrick" />
        </mesh>;
    }
}

export namespace _UI {
}

export namespace _2D {
}
