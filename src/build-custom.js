({
    baseUrl: "../",
    name: "components/almond/almond.js",
    out: "../dist/converse-custom.min.js",
    include: ['converse'],
    excludeShallow: [
        // 'locales',
        'text!af',
        'text!ca',
        'text!de',
        // 'text!en',
        'text!es',
        // 'text!fr',
        'text!he',
        'text!hu',
        'text!id',
        'text!it',
        'text!ja',
        'text!nb',
        'text!nl',
        'text!pl',
        'text!pt_BR',
        'text!ru',
        'text!uk',
        'text!zh'
    ],
    exclude: [
        'jquery',
        'jquery-private',
        // "backbone.browserStorage",
        // "backbone.overview",
        // "moment_with_locales",
        // "strophe",
        // "strophe.disco",
        // "strophe.rsm",
        // "strophe.vcard",
        // "strophe.ping",
        "typeahead",
        // "otr",
        // "underscore"
    ],
    wrap: {
        endFile: ["wrapper-no-jquery.js", "wrapper-custom.js"]
    },
    insertRequire: ['converse'],
    mainConfigFile: '../converse.js'
})
