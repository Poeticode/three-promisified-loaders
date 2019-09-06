import { VRMLLoader } from 'three/examples/jsm/loaders/VRMLLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetVRML(url, callback) {
    return GenericLoader(new VRMLLoader(), url, callback);
}