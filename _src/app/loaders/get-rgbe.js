import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { GenericLoader } from '../generic-loader.js';

export function GetRGBE(url, callback) {
    return GenericLoader(new RGBELoader(), url, callback);
}