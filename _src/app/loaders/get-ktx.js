import { KTXLoader } from 'three/examples/jsm/loaders/KTXLoader';
import { GenericLoader } from '../generic-loader';

export function GetKTX(url, callback) {
    return GenericLoader(new KTXLoader(), url, callback);
}