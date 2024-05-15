const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@config': 'src/config',
    '@globalComponents': 'src/globalComponents',
    '@hooks': 'src/hooks',
    '@utils': 'src/utils'
  })(config);

  return config;
};
