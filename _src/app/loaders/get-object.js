import { ObjectLoader } from 'three';
import { GenericLoader } from '../generic-loader.js';

export function GetObject(url, callback) {
    return GenericLoader(new ObjectLoader(), url, callback);
}