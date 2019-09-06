import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetDDS(url, callback) {
    return GenericLoader(new DDSLoader(), url, callback);
}