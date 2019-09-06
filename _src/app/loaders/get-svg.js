import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetSVG(url, callback) {
    return GenericLoader(new SVGLoader(), url, callback);
}