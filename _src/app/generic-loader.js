export function GenericLoader(loader, url, callback) {
    return new Promise((resolve, reject) => {
        loader.load(
            url,
            object => {
                if (callback) {
                    callback(object, resolve);
                } else {
                    resolve(object);
                }
            },
            progress => {
                console.log(progress);
            },
            error => {
                reject(error);
            }
        );
    });
}