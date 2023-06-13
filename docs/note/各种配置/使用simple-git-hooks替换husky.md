---
title: 使用simple-git-hooks替换husky
---

## 使用simple-git-hooks替换husky

### 1. 卸载`husky`

```shell
pnpm uninstall husky
```

### 2. 删除`.husky`文件

```shell
rm -rf .husky
```

### 3. 查看`git hooks`搜索配置

```shell
git config core.hooksPath
```

如果输出 `.husky` ，则说明 `husky` 可能改变了 `core.gitHooks` 的值，因此，`git hooks` 会搜索`.husky` 目录而不是 `.git/hooks/`

如何修复？
  
你需要指定`core.gitHooks` 的值为 你的优秀项目/`.git/hooks`，你可以使用这个命令

```shell
git config core.hooksPath .git/hooks/
```

验证设置的值：

```shell
git config core.hooksPath
```

应当输出: `.git/hooks/`


### 4. 安装 `simple-git-hooks` `lint-staged` `czg` `commitlint`

```shell
npm add simple-git-hooks lint-staged czg commitlint -D
```


### 5. 配置`package.json`

在`package.json`中添加如下配置

```shell
  "script":{
    "cz": "czg",
    "commit":"git pull && git add -A && pnpm cz && git push",
    "postinstall": "npx simple-git-hooks"

  },
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged && pnpm type:check"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "pnpm lint:fix"
    ]
  }
```

### 6. 运行`npx simple-git-hooks`初始化`git hooks`

```shell
npx simple-git-hooks
```

### 7. 运行`pnpm commit`提交代码

```shell
pnpm commit
```
