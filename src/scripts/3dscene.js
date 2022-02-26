import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function createScene() {
    const renderer = new THREE.WebGLRenderer();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    const scene = new THREE.Scene();
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    let light;

    let Gura, Ame, Ina, Cali, Kiara;
    
    function init() {
        scene.background = new THREE.Color('lightblue');
        camera.position.set(0, 10, 20);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    }

    function setLight() {
        light = new THREE.AmbientLight(0xffffff);
        scene.add(light);
    }

    function loadGLTF() {
        let modelLoader = new GLTFLoader();

        modelLoader.load('assets/models/smoller_gura_-_gawr_gura_holomyth/scene.gltf', (gltf) => {
            Gura = gltf.scene;
            Gura.scale.set(0.2,0.2,0.2);
            Gura.position.x = 0;
            Gura.position.y = 10;
            Gura.position.z = 15;
            scene.add(Gura);
        });

        modelLoader.load('assets/models/smol_ame_-_amelia_watson_holomyth/scene.gltf', (gltf) => {
            Ame = gltf.scene;
            Ame.scale.set(0.55,0.55,0.55);
            Ame.position.x = 0.5;
            Ame.position.y = 10;
            Ame.position.z = 15;
            scene.add(Ame);
        });

        modelLoader.load('assets/models/smol_ina_-_ninomae_inanis_holomyth/scene.gltf', (gltf) => {
            Ina = gltf.scene;
            Ina.scale.set(0.58,0.58,0.58);
            Ina.position.x = -0.5;
            Ina.position.y = 10;
            Ina.position.z = 15;
            scene.add(Ina);
        });

        modelLoader.load('assets/models/smol_calli_-_mori_calliope_holomyth/scene.gltf', (gltf) => {
            Cali = gltf.scene;
            Cali.scale.set(0.2,0.2,0.2);
            Cali.position.x = -1;
            Cali.position.y = 10;
            Cali.position.z = 15;
            scene.add(Cali);
        });

        modelLoader.load('assets/models/smol_kiara_-_takanashi_kiara_holomyth/scene.gltf', (gltf) => {
            Kiara = gltf.scene;
            Kiara.scale.set(0.55,0.55,0.55);
            Kiara.position.x = 1;
            Kiara.position.y = 10;
            Kiara.position.z = 15;
            scene.add(Kiara);
        });
    }

    function hoverModel() {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);
        if (intersects.length > 1) {
            console.log(intersects[0].object.material.name);
        };
    }


    
    // window.setInterval(hoverModel.bind(this), 1500);

    function animate() {
        requestAnimationFrame(animate);
        // const mixer = new THREE.AnimationMixer(Gura); 
        // console.log(mixer.getRoot()); <--- getting null
        // rotate(Gura);
        // rotate(Ina);
        // rotate(Kiara);
        // rotate(Cali);
        // rotate(Ame);

        renderer.render(scene, camera);
    }

    init();
    setLight();
    loadGLTF();
    animate();

    window.addEventListener( 'resize', onWindowResize, false );
    window.addEventListener( 'pointermove', onPointerMove );

    window.addEventListener( 'click', hoverModel) ////how to set interval on an eventlistener?

    function rotate(char) {
        if (char && char.rotation) {
            char.rotation.y -= 0.02;
        };
    };
    
    function onWindowResize(){
    
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    
        renderer.setSize( window.innerWidth, window.innerHeight );
    
    };

    function onPointerMove( event ) {
        mouse.x = ( (event.offsetX) / renderer.domElement.width ) * 2 - 1;
        mouse.y = -( (event.offsetY) / renderer.domElement.height ) * 2 + 1;
    };
}