import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { GenericLoader } from '../generic-loader.js';

function GetGLTF(url, callback) {
    return GenericLoader(new GLTFLoader(), url, callback);
}

export {
    GetGLTF
}