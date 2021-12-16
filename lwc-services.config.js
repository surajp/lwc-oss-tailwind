// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/main/packages/lwc-services/example/lwc-services.config.js
module.exports = {
    bundler: 'webpack',
    resources: [
        { from: 'src/resources/', to: 'dist/resources/' },
        { from: 'src/output.css', to: 'dist/output.css' }
    ]
};
