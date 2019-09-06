import { AssimpLoader } from 'three/examples/jsm/loaders/AssimpLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetAssimp(url, callback) {
    return GenericLoader(new AssimpLoader(), url, callback);
}