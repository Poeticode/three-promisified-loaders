# ThreeJS Promisified Loaders
Now you no longer need to import & instance each loader you need in your project.

Instead of having to write the following for every. Single. Loader.

```
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let gltfLoader = new GLTFLoader();
gltfLoader.load(
    "path_to_your_gltf_model",
    gltfModel => {
        console.log("run your function here to setup this model");
    },
    progress => {
        console.log(progress);
    },
    error => {
        console.log("run function here to handle errors");
    }
);
```

You now can do:

```
import PromisedLoad from 'three-promisified-loaders';

async function init() {
    try {
        return await loadModels();
    } catch (e) {
        // can easily handle any errors that crop up
        console.error(e);
    }
}

async function loadModels() {
    let gltfModel = await PromisedLoad.GetGLTF("path/to/your/model.gltf");
    let tgaTexture = await PromisedLoad.GetTGA("path/to/your/texture.tga");
    // et cetera
}

async function run() {
    await init();
    // now we know all of our models are loaded without errors, and our scene's ready to go!
}

run();
```

## TODO:
It currently just imports all of the loaders, which results in a 1.4mb bundle. It'd be good to split out each loading function into its own module so that users can `import { GetGLTF, GetTGA } from 'three-promisified-loaders'` to keep their bundle sizes small.