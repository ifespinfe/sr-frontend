const sources = [
    {
        "sourceType": "user",
        "fetch": "/api/__sitemap__/urls"
    },
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/email-confirmation"
            },
            {
                "loc": "/forgot-password"
            },
            {
                "loc": "/forgot-password/reset"
            },
            {
                "loc": "/login"
            },
            {
                "loc": "/reset-password"
            },
            {
                "loc": "/signup/audience"
            },
            {
                "loc": "/signup/host"
            },
            {
                "loc": "/signup"
            },
            {
                "loc": "/create-event"
            },
            {
                "loc": "/events"
            },
            {
                "loc": "/audience"
            },
            {
                "loc": "/community-guidelines"
            },
            {
                "loc": "/dashboard"
            },
            {
                "loc": "/following"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/order-history"
            },
            {
                "loc": "/privacy-policy"
            },
            {
                "loc": "/profile"
            },
            {
                "loc": "/search"
            },
            {
                "loc": "/terms"
            },
            {
                "loc": "/wallet"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
