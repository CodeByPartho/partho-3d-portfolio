import { useEffect, useRef } from "react";
import * as THREE from "three";
import setLighting from "./utils/lighting";
import handleResize from "./utils/resizeUtils";
import { setProgress } from "../Loading";
import { useLoading } from "../../context/LoadingProvider";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const { setLoading } = useLoading();

  useEffect(() => {
    if (canvasDiv.current) {
      let rect = canvasDiv.current.getBoundingClientRect();
      let container = { width: rect.width, height: rect.height };
      const aspect = container.width / container.height;
      const scene = sceneRef.current;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setSize(container.width, container.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      canvasDiv.current.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
      camera.position.set(0, 13.1, 24.7);
      camera.zoom = 1.1;
      camera.updateProjectionMatrix();

      // ============================================
      // NEUTRAL STYLIZED 3D FIGURE (built from primitives)
      // ============================================
      const figure = new THREE.Group();

      const matBody = new THREE.MeshStandardMaterial({
        color: 0x8b4513,
        metalness: 0.3,
        roughness: 0.7,
      });
      const matDark = new THREE.MeshStandardMaterial({
        color: 0x2a2a35,
        metalness: 0.5,
        roughness: 0.4,
      });
      const matAccent = new THREE.MeshStandardMaterial({
        color: 0x00e5ff,
        emissive: 0x00e5ff,
        emissiveIntensity: 1.6,
        metalness: 0.2,
        roughness: 0.3,
      });
      const matSkin = new THREE.MeshStandardMaterial({
        color: 0x9a7b5c,
        roughness: 0.8,
        metalness: 0.05,
      });

      // --- Torso ---
      const torso = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 0.95, 3.2, 24), matBody);
      torso.position.y = 4.6;
      figure.add(torso);

      // Chest accent ring
      const chest = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.06, 12, 32), matAccent);
      chest.rotation.x = Math.PI / 2;
      chest.position.y = 5.3;
      figure.add(chest);

      // --- Head (abstract, no facial features) ---
      const head = new THREE.Mesh(new THREE.IcosahedronGeometry(0.85, 1), matDark);
      head.position.y = 7.0;
      figure.add(head);

      // Visor band
      const visor = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.09, 12, 32), matAccent);
      visor.rotation.x = Math.PI / 2;
      visor.rotation.z = 0.25;
      visor.position.set(0, 7.05, 0.55);
      figure.add(visor);

      // --- Arms ---
      const armGeo = new THREE.CylinderGeometry(0.28, 0.22, 2.4, 16);
      const armL = new THREE.Mesh(armGeo, matDark);
      armL.position.set(-1.5, 5.4, 0);
      armL.rotation.z = 0.18;
      figure.add(armL);

      const armR = new THREE.Mesh(armGeo, matDark);
      armR.position.set(1.5, 5.4, 0);
      armR.rotation.z = -0.18;
      figure.add(armR);

      // Hand accent
      const handGeo = new THREE.SphereGeometry(0.26, 16, 16);
      const handL = new THREE.Mesh(handGeo, matAccent);
      handL.position.set(-1.85, 4.05, 0);
      figure.add(handL);
      const handR = new THREE.Mesh(handGeo, matAccent);
      handR.position.set(1.85, 4.05, 0);
      figure.add(handR);

      // --- Legs ---
      const legGeo = new THREE.CylinderGeometry(0.32, 0.26, 2.6, 16);
      const legL = new THREE.Mesh(legGeo, matDark);
      legL.position.set(-0.55, 1.7, 0);
      figure.add(legL);
      const legR = new THREE.Mesh(legGeo, matDark);
      legR.position.set(0.55, 1.7, 0);
      figure.add(legR);

      // --- Base platform ---
      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(2.4, 2.8, 0.25, 48),
        new THREE.MeshStandardMaterial({ color: 0x1a1a24, metalness: 0.6, roughness: 0.3 })
      );
      base.position.y = 0.1;
      figure.add(base);

      // Accent ring on base
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.05, 10, 48), matAccent);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.3;
      figure.add(ring);

      figure.position.y = 0;
      scene.add(figure);

      // Head pointer for mouse tracking
      const headTarget = new THREE.Object3D();
      headTarget.position.set(0, 7.0, 0);
      scene.add(headTarget);

      // ============================================

      const clock = new THREE.Clock();
      const light = setLighting(scene);
      let progress = setProgress((value) => setLoading(value));
      progress.loaded().then(() => {
        setTimeout(() => {
          light.turnOnLights();
        }, 1200);
      });

      window.addEventListener("resize", () =>
        handleResize(renderer, camera, canvasDiv, figure)
      );

      let mouse = { x: 0, y: 0 },
        interpolation = { x: 0.1, y: 0.2 };

      const onMouseMove = (event: MouseEvent) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        mouse = { x, y };
      };
      document.addEventListener("mousemove", onMouseMove);

      const animate = () => {
        requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        // Float animation
        figure.position.y = Math.sin(t * 1.2) * 0.15;
        figure.rotation.y = Math.sin(t * 0.5) * 0.12;

        // Head follows mouse smoothly
        interpolation.x += (mouse.x - interpolation.x) * 0.03;
        interpolation.y += (mouse.y - interpolation.y) * 0.03;
        head.rotation.y = interpolation.x * 0.5;
        head.rotation.x = interpolation.y * 0.3;
        visor.rotation.y = interpolation.x * 0.5;

        // Hands pulse
        const pulse = 1 + Math.sin(t * 2) * 0.08;
        handL.scale.setScalar(pulse);
        handR.scale.setScalar(pulse);

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        clearTimeout(undefined);
        scene.clear();
        renderer.dispose();
        window.removeEventListener("resize", () =>
          handleResize(renderer, camera, canvasDiv, figure)
        );
        document.removeEventListener("mousemove", onMouseMove);
        if (canvasDiv.current) {
          canvasDiv.current.removeChild(renderer.domElement);
        }
      };
    }
  }, []);

  return (
    <>
      <div className="character-container">
        <div className="character-model" ref={canvasDiv}>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;
