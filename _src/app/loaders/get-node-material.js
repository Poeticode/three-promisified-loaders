import { NodeMaterialLoader } from 'three/examples/jsm/loaders/NodeMaterialLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetNodeMaterial(url, callback) {
    return GenericLoader(new NodeMaterialLoader(), url, callback);
}