module.exports = {
  apps: [
    {
      name: 'home',
      script: 'npx',
      script: './start-details.sh',
      env: {
        NODE_ENV: 'production',
      },
    },
    // {
    //   name: 'details',
    //   script: './start-details.sh',
    //   // args: 'next start dist/apps/details -p 3001 -H 0.0.0.0',
    //   env: {
    //     NODE_ENV: 'production',
    //   },
    // },
  ],
};
