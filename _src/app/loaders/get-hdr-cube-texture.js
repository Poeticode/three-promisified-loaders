import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetHDRCubeTexture(url, callback) {
    return GenericLoader(new HDRCubeTextureLoader(), url, callback);
}