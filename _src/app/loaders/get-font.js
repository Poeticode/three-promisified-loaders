import { FontLoader } from 'three';
import { GenericLoader } from "../generic-loader.js";

export function GetFont(url, callback) {
    return GenericLoader(new FontLoader(), url, callback);
}