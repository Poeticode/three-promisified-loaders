import { VTKLoader } from 'three/examples/jsm/loaders/VTKLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetVTK(url, callback) {
    return GenericLoader(new VTKLoader(), url, callback);
}