import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader.js';
import { GenericLoader } from '../generic-loader.js';

export function Get3MF(url, callback) {
    return GenericLoader(new ThreeMFLoader(), url, callback);
}