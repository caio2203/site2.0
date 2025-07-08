import { Component, AfterViewInit, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit {
  title = 'Engenheiro de Dados & Desenvolvedor';
  subtitle = 'Transformando dados em insights valiosos com soluções inteligentes e inovadoras.';
  ctaText = 'Entre em Contato';

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.initNeural3D();
    });
  }

  private async initNeural3D() {
    const container = document.getElementById('neural3d-container');
    const loading = document.getElementById('loading3d');
    if (!container) return;
    // Importação dinâmica do three.js
    const THREE: typeof import('three') = await import('three');

    // --- CÓDIGO DA ANIMAÇÃO ADAPTADO PARA ANGULAR ---
    // (Abaixo está a versão adaptada do seu script)
    // Configuração da cena, câmera e renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Após adicionar o renderer.domElement ao container:
    renderer.domElement.style.pointerEvents = 'none';

    // OrbitControls simplificado (igual ao seu código, mas adaptado para Angular)
    class OrbitControls {
      camera: import('three').PerspectiveCamera;
      domElement: HTMLElement;
      enabled: boolean;
      target: import('three').Vector3;
      minDistance: number;
      maxDistance: number;
      enableDamping: boolean;
      dampingFactor: number;
      spherical: import('three').Spherical;
      sphericalDelta: import('three').Spherical;
      scale: number;
      panOffset: import('three').Vector3;
      zoomChanged: boolean;
      rotateStart: import('three').Vector2;
      rotateEnd: import('three').Vector2;
      rotateDelta: import('three').Vector2;
      panStart: import('three').Vector2;
      panEnd: import('three').Vector2;
      panDelta: import('three').Vector2;
      dollyStart: import('three').Vector2;
      dollyEnd: import('three').Vector2;
      dollyDelta: import('three').Vector2;
      state: string;
      EPS: number;
      _moveHandler?: (event: MouseEvent) => void;
      _upHandler?: (event: MouseEvent) => void;
      rotationSensitivity: number;
      constructor(camera: import('three').PerspectiveCamera, domElement: HTMLElement) {
        this.camera = camera;
        this.domElement = domElement;
        this.enabled = true;
        this.target = new THREE.Vector3();
        this.minDistance = 30;
        this.maxDistance = 30;
        this.enableDamping = true;
        this.dampingFactor = 0.05;
        this.spherical = new THREE.Spherical();
        this.sphericalDelta = new THREE.Spherical();
        this.scale = 1;
        this.panOffset = new THREE.Vector3();
        this.zoomChanged = false;
        this.rotateStart = new THREE.Vector2();
        this.rotateEnd = new THREE.Vector2();
        this.rotateDelta = new THREE.Vector2();
        this.panStart = new THREE.Vector2();
        this.panEnd = new THREE.Vector2();
        this.panDelta = new THREE.Vector2();
        this.dollyStart = new THREE.Vector2();
        this.dollyEnd = new THREE.Vector2();
        this.dollyDelta = new THREE.Vector2();
        this.state = 'NONE';
        this.EPS = 0.000001;
        this.rotationSensitivity = 0.5;
        this.bindEvents();
        this.update();
      }
      bindEvents() {
        this.domElement.addEventListener('mousedown', this.onMouseDown.bind(this) as EventListener);
        this.domElement.addEventListener('wheel', this.onMouseWheel.bind(this) as EventListener);
        this.domElement.addEventListener('contextmenu', this.onContextMenu.bind(this) as EventListener);
      }
      onMouseDown(event: MouseEvent) {
        event.preventDefault();
        if (event.button === 0) {
          this.state = 'ROTATE';
          this.rotateStart.set(event.clientX, event.clientY);
        } else if (event.button === 2) {
          this.state = 'PAN';
          this.panStart.set(event.clientX, event.clientY);
        }
        this._moveHandler = this.onMouseMove.bind(this);
        this._upHandler = this.onMouseUp.bind(this);
        document.addEventListener('mousemove', this._moveHandler as EventListener);
        document.addEventListener('mouseup', this._upHandler as EventListener);
      }
      onMouseMove(event: MouseEvent) {
        event.preventDefault();
        if (this.state === 'ROTATE') {
          this.rotateEnd.set(event.clientX, event.clientY);
          this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);
          this.rotateLeft(2 * Math.PI * this.rotateDelta.x / this.domElement.clientWidth * this.rotationSensitivity);
          this.rotateUp(2 * Math.PI * this.rotateDelta.y / this.domElement.clientHeight * this.rotationSensitivity);
          this.rotateStart.copy(this.rotateEnd);
        } else if (this.state === 'PAN') {
          this.panEnd.set(event.clientX, event.clientY);
          this.panDelta.subVectors(this.panEnd, this.panStart);
          this.pan(this.panDelta.x, this.panDelta.y);
          this.panStart.copy(this.panEnd);
        }
      }
      onMouseUp() {
        if (this._moveHandler) document.removeEventListener('mousemove', this._moveHandler as EventListener);
        if (this._upHandler) document.removeEventListener('mouseup', this._upHandler as EventListener);
        this.state = 'NONE';
      }
      onMouseWheel(event: WheelEvent) {
        event.preventDefault();
        if (event.deltaY < 0) {
          this.dollyIn(this.getZoomScale());
        } else if (event.deltaY > 0) {
          this.dollyOut(this.getZoomScale());
        }
        this.update();
      }
      onContextMenu(event: MouseEvent) {
        event.preventDefault();
      }
      rotateLeft(angle: number) {
        this.sphericalDelta.theta -= angle;
      }
      rotateUp(angle: number) {
        this.sphericalDelta.phi -= angle;
      }
      pan(deltaX: number, deltaY: number) {
        const offset = new THREE.Vector3();
        offset.copy(this.camera.position).sub(this.target);
        let targetDistance = offset.length();
        targetDistance *= Math.tan((this.camera.fov / 2) * Math.PI / 180.0);
        const panLeft = new THREE.Vector3();
        panLeft.setFromMatrixColumn(this.camera.matrix, 0);
        panLeft.multiplyScalar(-2 * deltaX * targetDistance / this.domElement.clientHeight);
        const panUp = new THREE.Vector3();
        panUp.setFromMatrixColumn(this.camera.matrix, 1);
        panUp.multiplyScalar(2 * deltaY * targetDistance / this.domElement.clientHeight);
        this.panOffset.add(panLeft).add(panUp);
      }
      dollyIn(dollyScale: number) {
        this.scale /= dollyScale;
      }
      dollyOut(dollyScale: number) {
        this.scale *= dollyScale;
      }
      getZoomScale(): number {
        return Math.pow(0.95, 1);
      }
      update() {
        const offset = new THREE.Vector3();
        const quat = new THREE.Quaternion().setFromUnitVectors(this.camera.up, new THREE.Vector3(0, 1, 0));
        const quatInverse = quat.clone().invert();
        offset.copy(this.camera.position).sub(this.target);
        offset.applyQuaternion(quat);
        this.spherical.setFromVector3(offset);
        this.spherical.theta += this.sphericalDelta.theta;
        this.spherical.phi += this.sphericalDelta.phi;
        this.spherical.phi = Math.max(this.EPS, Math.min(Math.PI - this.EPS, this.spherical.phi));
        this.spherical.radius = Math.max(this.minDistance, Math.min(this.maxDistance, this.spherical.radius));
        this.target.add(this.panOffset);
        this.spherical.radius *= this.scale;
        offset.setFromSpherical(this.spherical);
        offset.applyQuaternion(quatInverse);
        this.camera.position.copy(this.target).add(offset);
        this.camera.lookAt(this.target);
        if (this.enableDamping) {
          this.sphericalDelta.theta *= (1 - this.dampingFactor);
          this.sphericalDelta.phi *= (1 - this.dampingFactor);
          this.panOffset.multiplyScalar(1 - this.dampingFactor);
        } else {
          this.sphericalDelta.set(0, 0, 0);
          this.panOffset.set(0, 0, 0);
        }
        this.scale = 1;
        return true;
      }
    }

    // CONTINUAÇÃO DA ANIMAÇÃO 3D
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    camera.position.set(0, 0, 30);

    // Cores pastel harmoniosas com o site
    function getCSSVar(name: string, fallback: string): string {
      return getComputedStyle(document.documentElement).getPropertyValue(name) || fallback;
    }
    const pastel1 = getCSSVar('--header-gradient-start', '#B3E0FF').trim() || '#B3E0FF';
    const pastel2 = getCSSVar('--header-gradient-end', '#7FCDFF').trim() || '#7FCDFF';
    const pastel3 = getCSSVar('--project-background', '#F0F8FF').trim() || '#F0F8FF';
    const accent = getCSSVar('--accent-color', '#006494').trim() || '#006494';

    // Estruturas
    const nodes: any[] = [];
    const connections: any[] = [];
    const particles: any[] = [];
    const nodeGeometry = new THREE.SphereGeometry(0.38, 20, 20);
    const particleGeometry = new THREE.SphereGeometry(0.13, 12, 12);
    // Nodes: gradiente pastel
    const nodeMaterials = [
      new THREE.MeshBasicMaterial({ color: pastel1, transparent: true, opacity: 0 }),
      new THREE.MeshBasicMaterial({ color: pastel2, transparent: true, opacity: 0 }),
      new THREE.MeshBasicMaterial({ color: pastel3, transparent: true, opacity: 0.95 })
    ];
    // Partículas: destaque pastel/accent
    const particleMaterials = [
      new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.85 }),
      new THREE.MeshBasicMaterial({ color: pastel2, transparent: true, opacity: 0.7 })
    ];
    // Conexões: suave, pastel
    const connectionMaterials = [
      new THREE.LineBasicMaterial({ color: pastel1, transparent: true, opacity: 0 }),
      new THREE.LineBasicMaterial({ color: pastel2, transparent: true, opacity: 0 }),
      new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0 })
    ];

    function createRandomPosition() {
      return new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10 + 2,
        (Math.random() - 0.5) * 10
      );
    }

    const nodeCount = 50;
    for (let i = 0; i < nodeCount; i++) {
      const mat = nodeMaterials[i % nodeMaterials.length].clone();
      const node = new THREE.Mesh(nodeGeometry, mat);
      node.position.copy(createRandomPosition());
      node.material.opacity = 0;
      nodes.push(node);
      scene.add(node);
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < 8 && Math.random() > 0.7) {
          const mat = connectionMaterials[(i + j) % connectionMaterials.length].clone();
          const geometry = new THREE.BufferGeometry().setFromPoints([nodes[i].position, nodes[j].position]);
          const line = new THREE.Line(geometry, mat);
          line.material.opacity = 0;
          connections.push({ line: line, start: nodes[i], end: nodes[j] });
          scene.add(line);
        }
      }
    }

    function createParticles() {
      for (let i = 0; i < 20; i++) {
        const mat = particleMaterials[i % particleMaterials.length].clone();
        const particle = new THREE.Mesh(particleGeometry, mat);
        particle.visible = false;
        particles.push({ mesh: particle, connection: null, progress: 0, speed: 0.005 + Math.random() * 0.01 });
        scene.add(particle);
      }
    }
    createParticles();
    function assignParticleToConnection(particle: any) {
      if (connections.length > 0) {
        particle.connection = connections[Math.floor(Math.random() * connections.length)];
        particle.progress = 0;
        particle.mesh.visible = true;
      }
    }
    particles.forEach(particle => assignParticleToConnection(particle));

    let animationStartTime = Date.now();
    const fadeInDuration = 4000;
    let networkGroup = new THREE.Group();
    scene.add(networkGroup);
    nodes.forEach(node => networkGroup.add(node));
    connections.forEach(connection => networkGroup.add(connection.line));

    function updateFadeIn() {
      const elapsed = Date.now() - animationStartTime;
      const progress = Math.min(elapsed / fadeInDuration, 1);
      nodes.forEach((node, index) => {
        const nodeProgress = Math.max(0, progress - (index * 0.02));
        const easedProgress = 1 - Math.pow(1 - nodeProgress, 3);
        node.material.opacity = easedProgress * (0.8 + Math.sin(Date.now() * 0.005 + index) * 0.2);
      });
      connections.forEach((connection, index) => {
        const connectionProgress = Math.max(0, progress - (index * 0.01));
        const easedProgress = 1 - Math.pow(1 - connectionProgress, 2);
        connection.line.material.opacity = easedProgress * 0.6;
      });
      if (progress >= 1 && loading) {
        loading.classList.add('hidden');
      }
    }
    function updateParticles() {
      particles.forEach(particle => {
        if (particle.connection) {
          particle.progress += particle.speed;
          if (particle.progress >= 1) {
            assignParticleToConnection(particle);
          } else {
            const start = particle.connection.start.position;
            const end = particle.connection.end.position;
            particle.mesh.position.lerpVectors(start, end, particle.progress);
            const pulse = Math.sin(particle.progress * Math.PI);
            particle.mesh.material.opacity = 0.8 + pulse * 0.2;
            particle.mesh.scale.setScalar(1 + pulse * 0.5);
          }
        }
      });
    }
    function animate() {
      requestAnimationFrame(animate);
      updateFadeIn();
      networkGroup.rotation.y += 0.002;
      networkGroup.rotation.x += 0.001;
      updateParticles();
      controls.update();
      renderer.render(scene, camera);
    }
    function onWindowResize() {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
    window.addEventListener('resize', onWindowResize);
    animate();
  }
} 