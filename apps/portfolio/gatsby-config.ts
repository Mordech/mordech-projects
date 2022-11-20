import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Elad Mizrahi — Portfolio`,
    siteUrl: `https://elad.mizrahi.cc`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.svg',
        name: `Elad Mizrahi's Portfolio`,
        short_name: `Elad Mizrahi`,
        start_url: `/`,
        background_color: '#F9F9F9',
        theme_color: '#F9F9F9',
        display: `standalone`,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          placeholder: 'blurred',
          quality: 100,
          breakpoints: [450, 750, 1080, 1366, 1920],
          backgroundColor: 'transparent',
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};

export default config;
