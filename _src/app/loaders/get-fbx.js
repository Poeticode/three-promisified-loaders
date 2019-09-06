import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetFBX(url, callback) {
    return GenericLoader(new FBXLoader(), url, callback);
}