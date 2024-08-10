#!/bin/bash

# 导出必要的环境变量
export NODE_ENV=production

# 进入项目根目录
# cd /path/to/your/project

# 启动 Next.js 应用
npx next start dist/apps/home -p 3000 -H 0.0.0.0
npx next start dist/apps/details -p 3001 -H 0.0.0.0
