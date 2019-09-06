import { CubeTextureLoader } from 'three';
import { GenericLoader } from "../generic-loader.js";

export function GetCubeTexture(url, callback) {
    return GenericLoader(new CubeTextureLoader(), url, callback);
}