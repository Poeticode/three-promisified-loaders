import { AMFLoader } from 'three/examples/jsm/loaders/AMFLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetAMF(url, callback) {
    return GenericLoader(new AMFLoader(), url, callback);
}