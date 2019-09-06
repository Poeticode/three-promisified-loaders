import { BufferGeometryLoader } from 'three';
import { GenericLoader } from "../generic-loader.js";

export function GetBufferGeo(url, callback) {
    return GenericLoader(new BufferGeometryLoader(), url, callback);
}