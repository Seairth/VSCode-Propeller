'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    console.log('Extension "p2asm" is now active!');

    let disposable = vscode.window.onDidChangeActiveTextEditor((editor) => {
        if(!editor) {
            return;
        }
        
        if (editor.document.languageId != "p2asm") {
            return;
        }
        
        editor.options = getNewOptions(editor.options);
    });
    
    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}

function getNewOptions(oldOptions : vscode.TextEditorOptions) : vscode.TextEditorOptions {
    return {
        cursorStyle: oldOptions.cursorStyle,
        insertSpaces: oldOptions.insertSpaces,
        tabSize: 8
    };
}