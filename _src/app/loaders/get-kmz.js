import { KMZLoader } from 'three/examples/jsm/loaders/KMZLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetKMZ(url, callback) {
    return GenericLoader(new KMZLoader(), url, callback);
}