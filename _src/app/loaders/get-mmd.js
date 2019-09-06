import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetMMD(url, callback) {
    return GenericLoader(new MMDLoader(), url, callback);
}