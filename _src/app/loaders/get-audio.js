import { AudioLoader } from 'three';
import { GenericLoader } from "../generic-loader.js";

export function GetAudio(url, callback) {
    return GenericLoader(new AudioLoader(), url, callback);
}