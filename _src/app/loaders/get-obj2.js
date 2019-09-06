import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2';
import { GenericLoader } from '../generic-loader.js';

// Use this class to load OBJ data from files or to parse OBJ data from an arraybuffer
export function GetOBJ2(url, callback) {
    return GenericLoader(new OBJLoader2(), url, callback);
}