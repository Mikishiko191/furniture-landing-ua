module.exports = {
    siteMetadata: {
        title: `Furniture landing`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/data/`,
            },
        },
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
                once: false, // Defines if animation needs to be launched once
                disable: false, // Flag for disabling animations

                // Advanced Options
                selector: '[data-sal]', // Selector of the elements to be animated
                animateClassName: 'sal-animate', // Class name which triggers animation
                disabledClassName: 'sal-disabled', // Class name which defines the disabled state
                rootMargin: '0% 50%', // Corresponds to root's bounding box margin
                enterEventName: 'sal:in', // Enter event name
                exitEventName: 'sal:out', // Exit event name
            },
        },
        // {
        //     resolve: `gatsby-plugin-facebook-analytics`,
        //     options: {
        //         // Required - set this to the ID of your Facebook app.
        //         appId: `YOUR_APP_ID`,

        //         // Which version of the SDK to load.
        //         version: `v6.0`,

        //         // Determines whether XFBML tags used by social plugins are parsed.
        //         xfbml: true,

        //         // Determines whether a cookie is created for the session or not.
        //         cookie: false,

        //         // Include Facebook analytics in development.
        //         // Defaults to false meaning the library will only be loaded in production.
        //         includeInDevelopment: false,

        //         // Include debug version of sdk
        //         // Defaults to false meaning the library will load sdk.js
        //         debug: false,

        //         // Select your language.
        //         language: `ru_RU`,
        //     },
        // },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
