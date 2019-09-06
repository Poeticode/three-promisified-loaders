import { PVRLoader } from 'three/examples/jsm/loaders/PVRLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetPVR(url, callback) {
    return GenericLoader(new PVRLoader(), url, callback);
}