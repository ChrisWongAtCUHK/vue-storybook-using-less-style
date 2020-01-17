const path = require('path');
module.exports = {
  stories: ['../stories/**/*.stories.js'],
	addons: ['@storybook/addon-actions', '@storybook/addon-links'],
	webpackFinal: async (config, { configType }) => {
		config.module.rules.push({
			test: /\.less$/,
			use: ['style-loader', 'css-loader', 'less-loader'],
			include: path.resolve(__dirname, '../src/components'),
		});
		return config;
	},
};
