import { AnimationLoader } from 'three';
import { GenericLoader } from "../generic-loader.js";

export function GetAnimation(url, callback) {
    return GenericLoader(new AnimationLoader(), url, callback);
}