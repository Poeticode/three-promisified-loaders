import { MD2Loader } from 'three/examples/jsm/loaders/MD2Loader';
import { GenericLoader } from '../generic-loader.js';

export function GetMD2(url, callback) {
    return GenericLoader(new MD2Loader(), url, callback);
}