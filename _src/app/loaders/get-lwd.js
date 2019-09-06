import { LWOLoader } from 'three/examples/jsm/loaders/LWOLoader';
import { GenericLoader } from '../generic-loader';

export function GetLWO(url, callback) {
    return GenericLoader(new LWOLoader(), url, callback);
}