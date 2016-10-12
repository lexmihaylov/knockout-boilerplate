({
    baseUrl: ".",
    paths: {
        components: 'app/components',
        services: 'app/services',

        jquery: "vendor/jquery/dist/jquery",
        ko: "vendor/knockout/dist/knockout.debug",
        pubsub: "vendor/pubsubjs/pubsub",

        text: "vendor/text/text",
    },
    shim: {
        pubsub: {
            exports: "Pubsub"
        }
    },
    map: {
        '*': {
            'less': 'vendor/require-less/less' // path to less
        }
    },
    name: "app/main",
    out: "app.build.js",
    preserveLicenseComments: false,
    generateSourceMaps: true
})
