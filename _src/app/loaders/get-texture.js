import { TextureLoader } from 'three';
import { GenericLoader } from '../generic-loader.js';

export function GetTexture(url, callback) {
    return GenericLoader(new TextureLoader(), url, callback);
}