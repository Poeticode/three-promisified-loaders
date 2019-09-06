import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetSTL(url, callback) {
    return GenericLoader(new STLLoader(), url, callback);
}