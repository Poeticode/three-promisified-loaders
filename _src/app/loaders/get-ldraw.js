import { LDrawLoader } from 'three/examples/jsm/loaders/LDrawLoader';
import { GenericLoader } from '../generic-loader';

export function GetLDraw(url, callback) {
    return GenericLoader(new LDrawLoader(), url, callback);
}