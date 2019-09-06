import { PlayCanvasLoader } from 'three/examples/jsm/loaders/PlayCanvasLoader';
import { GenericLoader } from '../generic-loader.js';

export function GetPlayCanvas(url, callback) {
    return GenericLoader(new PlayCanvasLoader(), url, callback);
}