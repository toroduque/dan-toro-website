require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Dan Toro - Frontend Engineer`,
    description: `A Software Engineer that enjoys building products, that people loves to use.`,
    author: `@toroduque`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        background_color: `white`,
        theme_color: `white`,
        display: `minimal-ui`,
        icon: `src/images/dan-toro-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-firebase`,
      options: {
        features: {
          analytics: true,
          auth: false,       
          database: false,  
          firestore: false,
          storage: false,    
          messaging: false, 
          functions: false,  
          performance: false
        },
        credentials: {
          apiKey: process.env.GATSBY_FIREBASE_API_KEY, 
          authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,        
          databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,          
          projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,           
          storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET, 
          messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,           
          appId: process.env.GATSBY_FIREBASE_APP_ID,   
          measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID
        }
      }
    }
  ],
}
