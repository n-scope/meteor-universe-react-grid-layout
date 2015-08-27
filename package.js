Package.describe({
    name: 'universe:react-grid-layout',
    version: '0.9.2',
    // Brief, one-line summary of the package.
    summary: 'A draggable and resizable grid layout with responsive breakpoints, for React',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/vazco/meteor-universe-react-grid-layout',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');
    api.use([
        'universe:modules',
        'universe:utilities-react'
    ]);

    // Generated with: github.com/philcockfield/meteor-package-paths
    api.addFiles('index.js');
    api.addFiles('index.import.jsx');
    api.addFiles('lib/dependencies/cloneElement.import.jsx');
    api.addFiles('lib/dependencies/draggable.import.jsx');
    api.addFiles('lib/dependencies/getPrefix.import.jsx');
    api.addFiles('lib/dependencies/resizable.import.jsx');
    api.addFiles('lib/mixins/PureDeepRenderMixin.import.jsx');
    api.addFiles('lib/mixins/WidthListeningMixin.import.jsx');
    api.addFiles('lib/GridItem.import.jsx');
    api.addFiles('lib/ReactGridLayout.import.jsx');
    api.addFiles('lib/ResponsiveReactGridLayout.import.jsx');
    api.addFiles('lib/responsiveUtils.import.jsx');
    api.addFiles('lib/utils.import.jsx');
});
