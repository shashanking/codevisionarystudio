import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const HeroGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const gridRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create grid points
    const particles = 50;
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const opacities = [];
    const color = new THREE.Color();

    for (let i = 0; i < particles; i++) {
      for (let j = 0; j < particles; j++) {
        const x = (i - particles / 2) * 2;
        const z = (j - particles / 2) * 2;
        const y = Math.sin((i / particles) * Math.PI * 2) * 5 + 
                 Math.sin((j / particles) * Math.PI * 2) * 5;

        positions.push(x, y, z);

        // Create gradient color effect
        const intensity = (y + 10) / 20;
        color.setHSL(0.6, 1, intensity);
        colors.push(color.r, color.g, color.b);

        // Edge fade effect
        const distanceFromCenter = Math.sqrt(
          Math.pow((i - particles / 2) / (particles / 2), 2) + 
          Math.pow((j - particles / 2) / (particles / 2), 2)
        );
        const opacity = Math.max(0, 1 - distanceFromCenter);
        opacities.push(opacity);
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('opacity', new THREE.Float32BufferAttribute(opacities, 1));

    // Custom shader material for edge fade and hover effects
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        attribute vec3 color;
        attribute float opacity;
        varying vec3 vColor;
        varying float vOpacity;
        
        void main() {
          vColor = color;
          vOpacity = opacity;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = 3.0 * (1.0 - mvPosition.z / 100.0);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vOpacity;
        uniform float hoverIntensity;
        
        void main() {
          float glowIntensity = hoverIntensity * 0.5 + 0.5;
          vec3 glowColor = mix(vColor, vec3(0.5, 0.8, 1.0), hoverIntensity * 0.3);
          gl_FragColor = vec4(glowColor, vOpacity * glowIntensity);
        }
      `,
      transparent: true,
      uniforms: {
        hoverIntensity: { value: 0.0 }
      }
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    gridRef.current = points;

    // Animation
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    let hoverIntensity = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      if (gridRef.current) {
        // Smooth rotation
        currentRotationX += (targetRotationX - currentRotationX) * 0.05;
        currentRotationY += (targetRotationY - currentRotationY) * 0.05;
        gridRef.current.rotation.x = currentRotationX;
        gridRef.current.rotation.y = currentRotationY;

        // Wave animation
        const positions = gridRef.current.geometry.attributes.position.array;
        const time = Date.now() * 0.001;

        for (let i = 0; i < particles; i++) {
          for (let j = 0; j < particles; j++) {
            const index = (i * particles + j) * 3;
            positions[index + 1] = Math.sin((i / particles) * Math.PI * 2 + time) * 5 +
                                 Math.sin((j / particles) * Math.PI * 2 + time) * 5;
          }
        }
        gridRef.current.geometry.attributes.position.needsUpdate = true;

        // Update hover effect
        const material = gridRef.current.material as THREE.ShaderMaterial;
        hoverIntensity += (isHovered ? 1 : 0 - hoverIntensity) * 0.1;
        material.uniforms.hoverIntensity.value = hoverIntensity;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      targetRotationX = y * 0.5;
      targetRotationY = x * 0.5;
    };

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    containerRef.current.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        if (renderer.domElement) {
          containerRef.current.removeChild(renderer.domElement);
        }
      }
      scene.remove(points);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default HeroGrid;
