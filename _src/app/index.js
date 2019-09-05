import { AnimationLoader, AudioLoader, BufferGeometryLoader, CubeTextureLoader, ImageBitmapLoader,
    ImageLoader, MaterialLoader, TextureLoader, ObjectLoader, FontLoader } from 'three';
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader.js';
import { AMFLoader } from 'three/examples/jsm/loaders/AMFLoader.js';
import { AWDLoader } from 'three/examples/jsm/loaders/AWDLoader.js';
import { AssimpJSONLoader } from 'three/examples/jsm/loaders/AssimpJSONLoader.js';
import { AssimpLoader } from 'three/examples/jsm/loaders/AssimpLoader.js';
import { BVHLoader } from 'three/examples/jsm/loaders/BVHLoader.js';
import { BabylonLoader } from 'three/examples/jsm/loaders/BabylonLoader.js';
import { BasisTextureLoader } from 'three/examples/jsm/loaders/BasisTextureLoader.js';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js';
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GCodeLoader } from 'three/examples/jsm/loaders/GCodeLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader.js';
import { KMZLoader } from 'three/examples/jsm/loaders/KMZLoader.js';
import { KTXLoader } from 'three/examples/jsm/loaders/KTXLoader.js';
import { LDrawLoader } from 'three/examples/jsm/loaders/LDrawLoader.js';
import { LWOLoader } from 'three/examples/jsm/loaders/LWOLoader.js';
import { MD2Loader } from 'three/examples/jsm/loaders/MD2Loader.js';
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { NRRDLoader } from 'three/examples/jsm/loaders/NRRDLoader.js';
import { NodeMaterialLoader } from 'three/examples/jsm/loaders/NodeMaterialLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2.js';
import { OBJLoader2Parallel } from 'three/examples/jsm/loaders/OBJLoader2Parallel.js';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js';
import { PDBLoader } from 'three/examples/jsm/loaders/PDBLoader.js';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';
import { PRWMLoader } from 'three/examples/jsm/loaders/PRWMLoader.js';
import { PVRLoader } from 'three/examples/jsm/loaders/PVRLoader.js';
import { PlayCanvasLoader } from 'three/examples/jsm/loaders/PlayCanvasLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { TDSLoader } from 'three/examples/jsm/loaders/TDSLoader.js';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader.js';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
import { VRMLLoader } from 'three/examples/jsm/loaders/VRMLLoader.js';
import { VRMLoader } from 'three/examples/jsm/loaders/VRMLoader.js';
import { VTKLoader } from 'three/examples/jsm/loaders/VTKLoader.js';
import { XLoader } from 'three/examples/jsm/loaders/XLoader.js';

export default class {
    static GenericLoader(loader, url, callback) {
        return new Promise((resolve, reject) => {
            loader.load(
                url,
                object => {
                    if (callback) {
                        callback(object, resolve);
                    } else {
                        resolve(object);
                    }
                },
                progress => {
                    console.log(progress);
                },
                error => {
                    reject(error);
                }
            );
        });
    }

    static GetAnimation(url, callback) {
        return this.GenericLoader(new AnimationLoader(), url, callback);
    }

    static GetAudio(url, callback) {
        return this.GenericLoader(new AudioLoader(), url, callback);
    }

    static GetBufferGeo(url, callback) {
        return this.GenericLoader(new BufferGeometryLoader(), url, callback);
    }

    static GetCubeTexture(url, callback) {
        return this.GenericLoader(new CubeTextureLoader(), url, callback);
    }

    static GetFont(url, callback) {
        return this.GenericLoader(new FontLoader(), url, callback);
    }

    static GetImageBitmap(url, callback) {
        return this.GenericLoader(new ImageBitmapLoader(), url, callback);
    }

    static GetImage(url, callback) {
        return this.GenericLoader(new ImageLoader(), url, callback);
    }

    static GetMaterial(url, callback) {
        return this.GenericLoader(new MaterialLoader(), url, callback);
    }

    static GetObject(url, callback) {
        return this.GenericLoader(new ObjectLoader(), url, callback);
    }

    static GetTexture(url, callback) {
        return this.GenericLoader(new TextureLoader(), url, callback);
    }

    // The rest are from the threejs examples folder

    static Get3MF(url, callback) {
        return this.GenericLoader(new ThreeMFLoader(), url, callback);
    }

    static GetAMF(url, callback) {
        return this.GenericLoader(new AMFLoader(), url, callback);
    }

    static GetAWD(url, callback) {
        return this.GenericLoader(new AWDLoader(), url, callback);
    }

    static GetAssimpJSON(url, callback) {
        return this.GenericLoader(new AssimpJSONLoader(), url, callback);
    }

    static GetAssimp(url, callback) {
        return this.GenericLoader(new AssimpLoader(), url, callback);
    }

    static GetBVH(url, callback) {
        return this.GenericLoader(new BVHLoader(), url, callback);
    }

    static GetBabylon(url, callback) {
        return this.GenericLoader(new BabylonLoader(), url, callback);
    }

    static GetBasisTexture(url, callback) {
        return this.GenericLoader(new BasisTextureLoader(), url, callback);
    }

    static GetCollada(url, callback) {
        return this.GenericLoader(new ColladaLoader(), url, callback);
    }

    static GetDDS(url, callback) {
        return this.GenericLoader(new DDSLoader(), url, callback);
    }

    static GetDRACO(url, callback) {
        return this.GenericLoader(new DRACOLoader(), url, callback);
    }

    static GetEXR(url, callback) {
        return this.GenericLoader(new EXRLoader(), url, callback);
    }

    static GetFBX(url, callback) {
        return this.GenericLoader(new FBXLoader(), url, callback);
    }

    static GetGCode(url, callback) {
        return this.GenericLoader(new GCodeLoader(), url, callback);
    }

    static GetGLTF(url, callback) {
        return this.GenericLoader(new GLTFLoader(), url, callback);
    }

    static GetHDRCubeTexture(url, callback) {
        return this.GenericLoader(new HDRCubeTextureLoader(), url, callback);
    }

    static GetKMZ(url, callback) {
        return this.GenericLoader(new KMZLoader(), url, callback);
    }

    static GetKTX(url, callback) {
        return this.GenericLoader(new KTXLoader(), url, callback);
    }

    static GetLDraw(url, callback) {
        return this.GenericLoader(new LDrawLoader(), url, callback);
    }

    static GetLWO(url, callback) {
        return this.GenericLoader(new LWOLoader(), url, callback);
    }

    static GetMD2(url, callback) {
        return this.GenericLoader(new MD2Loader(), url, callback);
    }

    static GetMMD(url, callback) {
        return this.GenericLoader(new MMDLoader(), url, callback);
    }

    static GetMTL(url, callback) {
        return this.GenericLoader(new MTLLoader(), url, callback);
    }

    static GetNRRD(url, callback) {
        return this.GenericLoader(new NRRDLoader(), url, callback);
    }

    static GetNodeMaterial(url, callback) {
        return this.GenericLoader(new NodeMaterialLoader(), url, callback);
    }

    static GetOBJ(url, callback) {
        return this.GenericLoader(new OBJLoader(), url, callback);
    }

    // Use this class to load OBJ data from files or to parse OBJ data from an arraybuffer
    static GetOBJ2(url, callback) {
        return this.GenericLoader(new OBJLoader2(), url, callback);
    }

    // Extends {OBJLoader2} with the capability to run the parser {OBJLoader2Parser} in web worker
    // with help of {WorkerExecutionSupport}.
    static GetOBJ2Parallel(url, callback) {
        return this.GenericLoader(new OBJLoader2Parallel(), url, callback);
    }

    static GetPCD(url, callback) {
        return this.GenericLoader(new PCDLoader(), url, callback);
    }

    static GetPDB(url, callback) {
        return this.GenericLoader(new PDBLoader(), url, callback);
    }

    static GetPLY(url, callback) {
        return this.GenericLoader(new PLYLoader(), url, callback);
    }

    static GetPRWM(url, callback) {
        return this.GenericLoader(new PRWMLoader(), url, callback);
    }

    static GetPVR(url, callback) {
        return this.GenericLoader(new PVRLoader(), url, callback);
    }

    static GetPlayCanvas(url, callback) {
        return this.GenericLoader(new PlayCanvasLoader(), url, callback);
    }

    static GetRGBE(url, callback) {
        return this.GenericLoader(new RGBELoader(), url, callback);
    }

    static GetSTL(url, callback) {
        return this.GenericLoader(new STLLoader(), url, callback);
    }

    static GetSVG(url, callback) {
        return this.GenericLoader(new SVGLoader(), url, callback);
    }

    static GetTDS(url, callback) {
        return this.GenericLoader(new TDSLoader(), url, callback);
    }

    static GetTGA(url, callback) {
        return this.GenericLoader(new TGALoader(), url, callback);
    }

    static GetTTF(url, callback) {
        return this.GenericLoader(new TTFLoader(), url, callback);
    }

    static GetVRML(url, callback) {
        return this.GenericLoader(new VRMLLoader(), url, callback);
    }

    static GetVRM(url, callback) {
        return this.GenericLoader(new VRMLoader(), url, callback);
    }

    static GetVTK(url, callback) {
        return this.GenericLoader(new VTKLoader(), url, callback);
    }

    static GetX(url, callback) {
        return this.GenericLoader(new XLoader(), url, callback);
    }
}
