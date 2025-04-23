const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Add csv to asset extensions
defaultConfig.resolver.assetExts.push('csv');

module.exports = defaultConfig;