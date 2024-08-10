### NX + NEXTJS14

#### 启动
```text
"dev": "concurrently \"npx nx serve home\" \"npx nx serve details\"",
```

#### 打包
```text
npx nx build home --configuration=production

npx nx build details --configuration=production
```

##### 启动
```text
# 打包 home 应用
npx next start dist/apps/home -p 3000

# 打包 details 应用
npx next start dist/apps/details -p 3001

```
