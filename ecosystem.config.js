module.exports = {
  apps: [
    {
      name: 'vietqr_web',
      script: 'npm start',
      env: {
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],

  deploy: {
    production: {
      key: 'key.pem',
      user: 'root',
      host: '171.244.63.153',
      ref: 'origin/product',
      repo: 'https://github.com/duchieupham/vietqr_web_2.0.git',
      path: '/var/www/vietqr_web_2.0',
      'pre-deploy-local': '',
      'post-deploy':
        'source ~/.nvm/nvm.sh && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      ssh_options: 'ForwardAgent=yes',
    },
  },
};
