const TailwindPlugin = require('./plugins/TailwindPlugin');
module.exports = {
    plugins: [new TailwindPlugin({ compileInterval: 2000 })]
};
