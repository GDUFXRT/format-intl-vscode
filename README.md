# format-intl-vscode 介绍

这个插件用于快速收集代码中的文本到国际化文件中，并生成对应的key。
默认使用 react-intl 的 `formatMessage`。

## 用法

在编辑器中高亮选中文本后，右键选择 `formatMessage`，输入 key，回车即可替换。

![示例](./images/formatGif.gif)

## 配置

* `format-intl-vscode.outputFile`: 输出的文件路径，默认为`locales/n-U1S.json`
* `format-intl-vscode.tab`: 输出的json文件缩进，默认为 `2`

## 待完善

以下为未实现的功能：

- 无法自动引入国际化依赖
- json文件中不允许存在注释
- 无法自动识别内容语言

根据需要，后续可能会提供这些功能。