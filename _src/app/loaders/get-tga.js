import { TGALoader } from 'three/examples/jsm/loaders/TGALoader';
import { GenericLoader } from '../generic-loader.js';

export function GetTGA(url, callback) {
    return GenericLoader(new TGALoader(), url, callback);
}