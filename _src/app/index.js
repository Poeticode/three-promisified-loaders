const files = require.context('./loaders/', false, /\.js$/);
const loaders = {};

files.keys().forEach((key) => {
  if (key === './index.js') return;
  loaders[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

export default loaders;