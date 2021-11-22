import * as vscode from 'vscode';
import { updateLangFiles } from './file';
import { checkLegal } from './utils';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('format-intl-vscode.formatMessage', (args) => {
		const editor: vscode.TextEditor = vscode.window.activeTextEditor as vscode.TextEditor
		const selection = editor.selection;
		const text = vscode.window.activeTextEditor?.document.getText(selection);
		const targetFile = vscode.workspace.getConfiguration().get('format-intl-vscode.outputFile');

		return new Promise(resolve => {
			// 否则要求用户输入变量名
			return resolve(
				vscode.window.showInputBox({
					prompt: '请输入变量名'
				})
			);
		})
			.then((key: unknown) => {
				editor.edit(editBuilder => {
					checkLegal(key as string);
					editBuilder.replace(selection, `formatMessage('${key as string}')`);
					updateLangFiles(vscode.workspace.workspaceFolders?.[0].uri.fsPath + ('/' + targetFile).replace('//', '/'), key as string, text as string);
				});
			})
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
