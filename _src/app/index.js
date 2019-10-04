import { GenericLoader } from './generic-loader.js';
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export function Get3MF(url, callback) {
    return GenericLoader(new ThreeMFLoader(), url, callback);
}


export function GetGLTF(url, callback) {
    return GenericLoader(new GLTFLoader(), url, callback);
}