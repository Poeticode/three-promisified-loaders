import { MaterialLoader } from 'three';
import { GenericLoader } from '../generic-loader.js';

export function GetMaterial(url, callback) {
    return GenericLoader(new MaterialLoader(), url, callback);
}