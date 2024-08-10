const { exec } = require('child_process');

// 定义要启动的应用列表
const apps = [
  {
    name: "home",
    port: 3000,
  },
  {
    name: "details",
    port: 3001,
  }
]; // 你可以在这里添加更多项目

// 遍历每个应用并重启
apps.forEach((app) => {
  exec(`npx next start dist/apps/${app.name} -p ${app.port}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error restarting ${app}: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Stderr for ${app}: ${stderr}`);
      return;
    }

    console.log(`Output for ${app}: ${stdout}`);
  });
});
