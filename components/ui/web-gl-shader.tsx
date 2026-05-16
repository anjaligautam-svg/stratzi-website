"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface WebGLShaderProps {
  /** Brightness multiplier (0–1). Default 0.5 keeps it subtle. */
  intensity?: number;
  /** Animation speed multiplier. Default 1.0 = ~one cycle / few seconds. */
  speed?: number;
  /** Tailwind classes for the canvas (defaults to fill parent). */
  className?: string;
}

/**
 * WebGLShader — animated wave shader.
 *
 * Adapted from the original three.js demo so that:
 *   - It sizes to its PARENT container (not window) — drop it inside a
 *     positioned wrapper of any height.
 *   - The canvas is transparent — colors blend with whatever sits behind.
 *   - The three "RGB" wave channels are remapped to Stratzi's teal palette
 *     (primary → primary-edge → primary-soft). Visually reads like three
 *     data streams aligning, which fits the "structuring unstructured
 *     data" brand idea.
 *   - `intensity` lets the caller dial brightness so the waves never
 *     overpower foreground text.
 */
export function WebGLShader({
  intensity = 0.5,
  speed = 1.0,
  className = "absolute inset-0 w-full h-full block",
}: WebGLShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    if (!parent) return;

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Three sine waves at slightly different X-scales — was RGB chromatic
    // aberration; we keep the offset but map each wave to a brand teal so
    // the result reads as three data streams converging, not a rainbow.
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;
      uniform float intensity;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float ax = p.x * (1.0 + d);
        float bx = p.x;
        float cx = p.x * (1.0 - d);

        float w1 = 0.05 / abs(p.y + sin((ax + time) * xScale) * yScale);
        float w2 = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);
        float w3 = 0.05 / abs(p.y + sin((cx + time) * xScale) * yScale);

        // Brand palette (linearish approximations of #2c666e / #80bdbc / #b0eeed)
        vec3 c1 = vec3(0.173, 0.400, 0.431);  // primary
        vec3 c2 = vec3(0.502, 0.741, 0.737);  // primary-edge
        vec3 c3 = vec3(0.690, 0.933, 0.929);  // primary-soft

        vec3 color = c1 * w1 + c2 * w2 + c3 * w3;
        color *= intensity;

        // Use luminance for alpha so dim areas fade fully transparent —
        // lets the dark gradient behind the canvas show through cleanly.
        float lum = max(max(color.r, color.g), color.b);
        gl_FragColor = vec4(color, lum);
      }
    `;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      premultipliedAlpha: false,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(new THREE.Color(0x000000), 0);

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);

    const uniforms = {
      resolution: { value: [1, 1] as [number, number] },
      time: { value: 0.0 },
      xScale: { value: 1.0 },
      yScale: { value: 0.55 },
      distortion: { value: 0.08 },
      intensity: { value: intensity },
    };

    const position = [
      -1.0, -1.0, 0.0, 1.0, -1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0,
      1.0, 0.0, 1.0, 1.0, 0.0,
    ];

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(position), 3)
    );

    const material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side: THREE.DoubleSide,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const handleResize = () => {
      const w = parent.clientWidth || 1;
      const h = parent.clientHeight || 1;
      renderer.setSize(w, h, false);
      uniforms.resolution.value = [
        w * window.devicePixelRatio,
        h * window.devicePixelRatio,
      ];
    };
    handleResize();

    let animationId: number;
    const animate = () => {
      uniforms.time.value += 0.01 * speed;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const ro = new ResizeObserver(handleResize);
    ro.observe(parent);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
      window.removeEventListener("resize", handleResize);
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [intensity, speed]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
