import { PRWMLoader } from 'three/examples/jsm/loaders/PRWMLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetPRWM(url, callback) {
    return GenericLoader(new PRWMLoader(), url, callback);
}