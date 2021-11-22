import * as fs from 'fs-extra';

/**
 * 获取文件 Json
 */
export function getLangJson(fileName: string) {
    const fileContent = JSON.parse(fs.readFileSync(fileName, 'utf8'));

    return fileContent;
}

export function checkLegal(str: string) {
    if (/\"/.test(str)) {
        throw Error('包含了非法字符: "');
    }

    if (!str.trim()) {
        throw Error('key不能为空');
    }
}