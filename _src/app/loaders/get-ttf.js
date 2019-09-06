import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetTTF(url, callback) {
    return GenericLoader(new TTFLoader(), url, callback);
}