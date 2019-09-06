import { ImageBitmapLoader } from 'three';
import { GenericLoader } from '../generic-loader.js';

export function GetImageBitmap(url, callback) {
    return GenericLoader(new ImageBitmapLoader(), url, callback);
}