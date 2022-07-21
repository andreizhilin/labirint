const isProduction = () => process.env.NODE_ENV === 'production';

const plugins = [];
if (!isProduction()) {
  plugins.push('react-refresh/babel');
}

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins,
};
