const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add path aliases
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        '@': path.resolve(__dirname, 'src'),
      };
      
      // Disable source-map-loader for problematic packages
      webpackConfig.module.rules.forEach((rule) => {
        if (rule.oneOf) {
          rule.oneOf.forEach((oneOfRule) => {
            if (oneOfRule.loader && oneOfRule.loader.includes('source-map-loader')) {
              oneOfRule.exclude = [
                /node_modules\/@react-three/,
                /node_modules\/three/,
                /node_modules\/three-mesh-bvh/
              ];
            }
          });
        }
      });
      return webpackConfig;
    },
  },
};