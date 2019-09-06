import { OBJLoader2Parallel } from 'three/examples/jsm/loaders/OBJLoader2Parallel';
import { GenericLoader } from '../generic-loader.js';

// Extends {OBJLoader2} with the capability to run the parser {OBJLoader2Parser} in web worker
// with help of {WorkerExecutionSupport}.
export function GetOBJ2Parallel(url, callback) {
    return GenericLoader(new OBJLoader2Parallel(), url, callback);
}