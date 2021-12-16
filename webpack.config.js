const TailwindPack = require('./plugins/TailwindPack');
module.exports = {
    plugins: [new TailwindPack({ compileInterval: 2000 })]
};
