import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetEXR(url, callback) {
    return GenericLoader(new EXRLoader(), url, callback);
}