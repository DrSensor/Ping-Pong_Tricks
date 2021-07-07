import type { PlaneProps, BoxProps, SphereProps } from "@react-three/cannon";
import { usePlane, useSphere } from "@react-three/cannon";
import { PositionalAudio } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color, MathUtils, Vector2, Vector3 } from "three";
const { degToRad } = MathUtils;

import ballHitSound from "../assets/ball-hit.sfx.mp3";

export namespace _3D {
    export function Sphere(props: SphereProps) {
        const [ref] = useSphere(_ => ({
            mass: 1,
        const sound = useRef<THREE.PositionalAudio>();
        const [ref, physics] = useSphere(_ => ({
            position: [0, 5, 0],
            material: {
                restitution: 2.49,
                friction: .7,
            },
            onCollide({ body, contact: { impactVelocity } }) {
                if (impactVelocity > .3) { // TODO: lowpassFilter(impactVelocity)
                    const { current: sfx } = sound;
                    if (sfx.isPlaying) sfx.stop();
                    sfx.setRefDistance(clamp(impactVelocity, 3, 5));
                    sfx.setVolume(max(impactVelocity, 2));
                    sfx.play();
                }
            },
            ...props,
        }));
        return <mesh ref={ref} scale={.5} castShadow receiveShadow>
            <sphereBufferGeometry args={[1, 24, 24]} />
            <PositionalAudio ref={sound} url={ballHitSound} loop={false} />
        </mesh>;
    }

    export function Paddle(props: BoxProps) {
        const [ref, physics] = useBox(_ => ({
            type: "Kinematic",
            rotation: [degToRad(-90), 0, degToRad(50)],
            allowSleep: true,
            args: [10, 10, 1],
            material: {
                restitution: .4,
                friction: 1,
            },
            ...props,
        }));

        useFrame(({ mouse, clock }) => {
            const mul = 10;
            mouse.lerp(mouse, 1. - (.001 ** clock.getDelta()));
            physics.velocity.set(mouse.x * mul, 0, -mouse.y * mul);
        });

        return <mesh ref={ref} receiveShadow>
            <boxBufferGeometry args={[10, 10, 1]} />
            <meshStandardMaterial color="firebrick" />
        </mesh>;
    }
}

export namespace _UI {
}

export namespace _2D {
}
