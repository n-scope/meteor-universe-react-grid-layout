System.config({
    packages: {
        '{universe:react-grid-layout}': {
            main: 'index',
            format: 'register',
            map: {
                '.': System.normalizeSync('{universe:react-grid-layout}')
            }
        }
    }
});