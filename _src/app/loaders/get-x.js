import { XLoader } from 'three/examples/jsm/loaders/XLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetX(url, callback) {
    return GenericLoader(new XLoader(), url, callback);
}