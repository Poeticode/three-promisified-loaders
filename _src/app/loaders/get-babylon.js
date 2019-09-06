import { BabylonLoader } from 'three/examples/jsm/loaders/BabylonLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetBabylon(url, callback) {
    return GenericLoader(new BabylonLoader(), url, callback);
}