import { BasisTextureLoader } from 'three/examples/jsm/loaders/BasisTextureLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetBasisTexture(url, callback) {
    return GenericLoader(new BasisTextureLoader(), url, callback);
}