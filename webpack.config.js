// webpack.config.js
module.exports = {
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        'react-toastify': require.resolve('react-toastify')
      }
    },
    // otras configuraciones
  };
  