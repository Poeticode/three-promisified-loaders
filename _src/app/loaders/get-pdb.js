import { PDBLoader } from 'three/examples/jsm/loaders/PDBLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetPDB(url, callback) {
    return GenericLoader(new PDBLoader(), url, callback);
}