## 前端框架
- next.js
- shadcn ui
- reactjs v19
- tailwindcss v4
- turborepo

## 两大模块：模型和项目
- `/model` 模型商城
- `/model/:id` 模型详情
- `/model/:id/embed` 模型灯箱渲染器
- `/model/:id/edit` 模型灯箱编辑器
- `/project` 项目中心
- `/project/:projectId` 项目详情
- `/project/:projectId/preview` 项目渲染器
- `/editor/:projectId` 编辑器 id代表projectId


## 服务器路径
`/opt/yeexun/developer/xunfly/frontend`

### For Apple Silicon `--platform linux/amd64`
docker build . -t xunfly-frontend-client:0.0.1 -f ./client.Dockerfile

docker save -o xunfly-frontend-client.tar xunfly-frontend-client:0.0.1

docker load -i xunfly-frontend-client.tar

docker run --name xunfly-frontend-client -p 4100:3000 -d xunfly-frontend-client:0.0.1