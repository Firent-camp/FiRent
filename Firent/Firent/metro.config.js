// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

// Correct the variable name to use camelCase (defaultConfig)
const defaultConfig = getDefaultConfig(__dirname);

// Assuming you want to add 'csj' as a new file extension for assets
// use the correct property name 'assetExts'
defaultConfig.resolver.assetExts.push('csj');

// Export the modified configuration
module.exports = defaultConfig;
