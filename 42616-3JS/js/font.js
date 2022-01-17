function init(mesh) {
    renderer = new THREE.WebGLRenderer({
        alpha: true
    });
    
    let size = Math.min(parent.innerWidth, 720);
    renderer.setSize(size, size);
    let div_container = document.getElementById("word");
    div_container.appendChild(renderer.domElement);
    

    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(
        35,
        1 / 1,
        0.1,
        10000 
    );

    camera.position.set(20, 10, 200);
    camera.lookAt(scene.position);
    controls = new THREE.OrbitControls(camera);
    
    let ambient_light = new THREE.AmbientLight(0x7F7F7F);
    scene.add(ambient_light);
    
    let point_light_1 = new THREE.PointLight(0x3F3F3F);
    point_light_1.position.set(50, 0, 0);
    scene.add(point_light_1);
    
    let point_light_2 = new THREE.PointLight(0x3F3F3F);
    point_light_2.position.set(-50, 0, 0);
    scene.add(point_light_2);
    
    scene.add(mesh);
    
    return {
        camera: camera,
        scene: scene,
        renderer: renderer,
        controls: controls
    }
}

function animate(step) {
    requestAnimationFrame(function () {
        animate(step);
    });
    step.controls.update();
    step.renderer.render(step.scene, step.camera);
}

function model() {
    
    var extrudeSettings = {
        steps: 1,
        depth: 5,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 0,
        bevelOffset: 0,
        bevelSegments: 1
    };

    var path_A = new THREE.Shape();
    path_A.moveTo(-50,0);
    path_A.lineTo(-45,1);
    path_A.quadraticCurveTo(-40,2,-47,30);
    path_A.lineTo(-33,30);
    path_A.lineTo(-33,10);
    path_A.lineTo(-30,10);
    path_A.lineTo(-30,37);
    path_A.lineTo(-33,37);
    path_A.lineTo(-33,33);
    path_A.lineTo(-48.5,33);
    path_A.quadraticCurveTo(-49,38,-41,45);
    path_A.lineTo(-30,39);
    path_A.lineTo(-27,44);
    path_A.lineTo(-38,49);
    path_A.quadraticCurveTo(-53,38,-50,29);
    path_A.quadraticCurveTo(-48,8,-50,0);

    var geometry = new THREE.ExtrudeGeometry(  path_A, extrudeSettings );
    var material = new THREE.MeshLambertMaterial( { color: 0xFF0000} );
    var path_A = new THREE.Mesh( geometry, material ) ;

    path_A.position.set(0, 3, 0);

    var targetPositionL = new THREE.Vector3( 0, 3, 0 );
    var tweenL = new TWEEN.Tween( path_A.position ).to( targetPositionL, 1000 ); 
    tweenL.start();

    return path_A;
}

function main() {
    let step = init(model());
    animate(step);
}