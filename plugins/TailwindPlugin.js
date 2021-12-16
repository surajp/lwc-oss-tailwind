const exec = require('child_process').exec;
const { performance } = require('perf_hooks');
class TailwindPlugin {
    lastCompileTime;
    compiledOnce = false;
    compileInterval;
    constructor(props = { compileInterval: 2000 }) {
        this.compiledOnce = false;
        this.lastCompileTime = performance.now();
        this.compileInterval = props.compileInterval;
    }
    apply(compiler) {
        compiler.hooks.beforeCompile.tap('TailwindPack', () => {
            const currtime = performance.now();
            if (this.compiledOnce && currtime - this.lastCompileTime < this.compileInterval) return;
            exec('tailwindcss -i src/index.css -o src/output.css');
            //console.log('Compiling tailwind assets');
            this.lastCompileTime = performance.now();
            this.compiledOnce = true;
        });
    }
}
module.exports = TailwindPlugin;
