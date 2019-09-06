import { BVHLoader } from 'three/examples/jsm/loaders/BVHLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetBVH(url, callback) {
    return GenericLoader(new BVHLoader(), url, callback);
}