import * as vscode from 'vscode';
import * as fs from 'fs-extra';
import { getLangJson } from './utils';

export function updateLangFiles(targetFilename: string, key: string, text: string) {
    const tab = Number(vscode.workspace.getConfiguration().get('format-intl-vscode.tab'));

    if (!fs.existsSync(targetFilename)) {
        fs.outputFileSync(targetFilename, `{
    "${key}": "${text}"
}
`);
        vscode.window.showInformationMessage(`成功新建语言文件 ${targetFilename}`);
    } else {
        const mainContent = getLangJson(targetFilename);
        const obj = mainContent;

        if (obj[key] !== undefined) {
            vscode.window.showErrorMessage(`${targetFilename} 中已存在 key 为 \`${key}\` 的翻译，请重新命名变量`);
            throw new Error('duplicate');
        }
        obj[key] = text;

        fs.writeFileSync(targetFilename, JSON.stringify(obj, null, tab));

        vscode.window.showInformationMessage(`成功写入语言文件 ${targetFilename}`);
    }
}