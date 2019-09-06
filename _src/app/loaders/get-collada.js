import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetCollada(url, callback) {
    return GenericLoader(new ColladaLoader(), url, callback);
}