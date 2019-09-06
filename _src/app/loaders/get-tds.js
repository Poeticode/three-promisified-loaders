import { TDSLoader } from 'three/examples/jsm/loaders/TDSLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetTDS(url, callback) {
    return GenericLoader(new TDSLoader(), url, callback);
}