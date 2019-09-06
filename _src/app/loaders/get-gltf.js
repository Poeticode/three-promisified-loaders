import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetGLTF(url, callback) {
    return GenericLoader(new GLTFLoader(), url, callback);
}