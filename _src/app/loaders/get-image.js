import { ImageLoader } from 'three';
import { GenericLoader } from '../generic-loader.js';

export function GetImage(url, callback) {
    return GenericLoader(new ImageLoader(), url, callback);
}