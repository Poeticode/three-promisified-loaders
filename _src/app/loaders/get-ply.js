import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetPLY(url, callback) {
    return GenericLoader(new PLYLoader(), url, callback);
}