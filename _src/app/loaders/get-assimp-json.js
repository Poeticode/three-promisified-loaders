export { AssimpJSONLoader } from 'three/examples/jsm/loaders/AssimpJSONLoader';
export { GenericLoader } from '../generic-loader.js';

export function GetAssimpJSON(url, callback) {
    return GenericLoader(new AssimpJSONLoader(), url, callback);
}