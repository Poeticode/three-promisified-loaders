import { VRMLoader } from 'three/examples/jsm/loaders/VRMLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetVRM(url, callback) {
    return GenericLoader(new VRMLoader(), url, callback);
}