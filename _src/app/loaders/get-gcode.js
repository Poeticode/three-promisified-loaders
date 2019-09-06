import { GCodeLoader } from 'three/examples/jsm/loaders/GCodeLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetGCode(url, callback) {
    return GenericLoader(new GCodeLoader(), url, callback);
}