import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetOBJ(url, callback) {
    return GenericLoader(new OBJLoader(), url, callback);
}