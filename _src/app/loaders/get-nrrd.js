import { NRRDLoader } from 'three/examples/jsm/loaders/NRRDLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetNRRD(url, callback) {
    return GenericLoader(new NRRDLoader(), url, callback);
}