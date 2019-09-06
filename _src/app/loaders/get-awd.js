import { AWDLoader } from 'three/examples/jsm/loaders/AWDLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetAWD(url, callback) {
    return GenericLoader(new AWDLoader(), url, callback);
}