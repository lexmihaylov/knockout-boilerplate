({
    baseUrl: ".",
    paths: {
        components: 'app/components',
        services: 'app/services',

        jquery: "bower_components/jquery/dist/jquery",
        ko: "bower_components/knockout/dist/knockout.debug",
        pubsub: "bower_components/pubsubjs/pubsub",

        text: "bower_components/text/text",
    },
    shim: {
        pubsub: {
            exports: "Pubsub"
        }
    },
    map: {
        '*': {
            'less': 'bower_components/require-less/less' // path to less
        }
    },
    name: "app/main",
    out: "app.build.js",
    preserveLicenseComments: false,
    generateSourceMaps: true
})
