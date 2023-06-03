---
title: 为项目添加commit规范
---
## 为ts项目添加commit规范

### 1.安装开发依赖

```bash
pnpm add commitlint cz-git czg husky lint-staged -D
```

### 2.在项目根目录添加 `commitlint.config.js` 文件

```js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
  },
  prompt: {
    alias: { fd: 'docs: fix typos' },
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      confirmCommit: '是否提交或修改commit ?',
    },
    types: [
      { value: 'init', name: 'init:     初始化' },
      { value: 'feat', name: 'feat:     新增功能' },
      { value: 'fix', name: 'fix:      修复缺陷' },
      { value: 'docs', name: 'docs:     文档更新' },
      { value: 'style', name: 'style:    代码格式' },
      { value: 'refactor', name: 'refactor: 代码重构' },
      { value: 'perf', name: 'perf:     性能提升' },
      { value: 'test', name: 'test:     测试相关' },
      { value: 'build', name: 'build:    构建相关' },
      { value: 'ci', name: 'ci:       持续集成' },
      { value: 'revert', name: 'revert:   回退代码' },
      { value: 'chore', name: 'chore:    其他修改' },
    ],
    useEmoji: false,
    emojiAlign: 'center',
    themeColorCode: '',
    scopes: [
      ['projects', '项目搭建'],
      ['components', '组件相关'],
      ['hooks', 'hook 相关'],
      ['utils', 'utils 相关'],
      ['types', 'ts类型相关'],
      ['styles', '样式相关'],
      ['deps', '项目依赖'],
      ['auth', '对 auth 修改'],
      ['release', '版本发布'],
      ['other', '其他修改'],
    ].map(([value, description]) => {
      return {
        value,
        name: `${value.padEnd(30)} (${description})`,
      }
    }),
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      // 如果使用 gitee 作为开发管理
      { value: 'link', name: 'link:     链接 ISSUES 进行中' },
      { value: 'closed', name: 'closed:   标记 ISSUES 已完成' },
    ],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: '',
  },
}
```

### 3.在项目根目录添加 `.husky` 文件夹

添加 `pre-commit` 文件

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run typecheck
```

添加 `commit-msg` 文件

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
```

### 4.在 `package.json` 中添加 `scripts`

```json
{
  "scripts": {
    "commit": "git pull && pnpm lint:fix && git add -A && pnpm cz && git push",
    "pre-commit": "git pull && pnpm lint-staged && pnpm cz && git push",
    "cz": "czg",
    "prepare": "husky install"
  }
}
```

### 5.在 `package.json` 中添加

```json
"gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint . --fix",
      "git add"
    ]
  }
```
