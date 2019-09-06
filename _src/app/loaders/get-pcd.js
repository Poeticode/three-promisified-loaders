import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetPCD(url, callback) {
    return GenericLoader(new PCDLoader(), url, callback);
}