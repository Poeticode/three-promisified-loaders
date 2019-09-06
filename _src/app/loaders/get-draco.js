import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetDRACO(url, callback) {
    return GenericLoader(new DRACOLoader(), url, callback);
}