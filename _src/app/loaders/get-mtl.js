import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetMTL(url, callback) {
    return GenericLoader(new MTLLoader(), url, callback);
}