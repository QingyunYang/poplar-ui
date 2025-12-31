# Poplar UI

> ⚠️ 注意：此项目仍在开发中，目前不适合在生产环境中使用。

Poplar UI 是一个基于 Taro 和 React 的跨端 UI 组件库，采用 Headless Components 架构设计，提供无样式、逻辑完备的组件，便于开发者自定义样式和结构。

## 项目概述

Poplar UI 旨在解决多端组件复用性差、维护成本高的问题，通过 Headless Components 设计提升灵活性和可定制性。它支持跨端运行（如小程序、H5、React Native 等），并提供完整的 TypeScript 支持。

## 核心特性

- **Headless Components**: 仅封装交互逻辑，不包含具体 UI 渲染，便于自定义样式和结构
- **跨端支持**: 基于 `@tarojs/taro` 实现，支持多种平台
- **Monorepo 管理**: 使用 pnpm workspace 管理多个包，实现代码共享与独立发布
- **TypeScript 支持**: 完整的类型定义，提供更好的开发体验
- **版本管理**: 集成 changesets 进行版本管理和发布

## 包含的包

### @poplar-ui/headless-components

提供基础组件逻辑的 Headless 组件库，当前包含 Avatar、Button 等组件。

### @poplar-ui/taro

Taro 平台适配包，对 headless 组件进行 Taro 平台封装。

## 安装

使用 pnpm 安装：

```bash
pnpm add @poplar-ui/headless-components
```

或使用 npm：

```bash
npm install @poplar-ui/headless-components
```

## 使用方法

```tsx
import { Button } from '@poplar-ui/headless-components';
import { Avatar } from '@poplar-ui/headless-components';

// 示例：使用 Button 组件
const MyButton = () => (
  <Button.Root>
    <Text>点击我</Text>
  </Button.Root>
);

// 示例：使用 Avatar 组件
const MyAvatar = () => (
  <Avatar.Root>
    <Avatar.Image src="avatar-url" alt="用户头像" />
  </Avatar.Root>
);
```

## 开发

### 环境要求

- Node.js (建议使用 LTS 版本)
- pnpm (支持 workspace 功能)

### 设置开发环境

安装项目依赖：

```bash
pnpm install
```

## 贡献

我们欢迎社区贡献！如果您有兴趣改进 Poplar UI，请：

1. Fork 仓库
2. 创建功能分支
3. 提交您的更改
4. 发起 Pull Request

## 许可证

本项目采用 MIT 许可证。详情请参见 [LICENSE](./LICENSE) 文件。
