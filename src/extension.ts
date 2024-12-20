import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let syllableDecorationType = vscode.window.createTextEditorDecorationType({
    // backgroundColor: 'rgba(255, 255, 0, 0.5)', // Пример: подсветка желтым цветом
    // color: 'black',
    // border: '1px solid black'
  });

  // Функция для подсчета слогов
  function countSyllables(text: string): number {
    const vowels = /[аеёиоуыэюяaeiouy]/gi; // Гласные буквы
    const matches = text.match(vowels);
    return matches ? matches.length : 0;
  }

  // Функция для обновления декораций
  function updateSyllableDecorations(editor: vscode.TextEditor) {
    const text = editor.document.getText();
    const lines = text.split('\n');
    const lineDecorations: vscode.DecorationOptions[] = [];

    lines.forEach((line, index) => {
      const syllableCount = countSyllables(line);

      // Если слогов 0, не отображаем их
      if (syllableCount > 0) {
        const range = new vscode.Range(
          new vscode.Position(index, 0),
          new vscode.Position(index, line.length)
        );
        lineDecorations.push({
          range,
          renderOptions: {
            after: {
              contentText: ` ${syllableCount}`,
              color: 'green',
              margin: '0 0 0 10px',
              fontStyle: 'italic',
            }
          }
        });
      }
    });

    editor.setDecorations(syllableDecorationType, lineDecorations);
  }

  // Обработчик изменений в документе
  vscode.workspace.onDidChangeTextDocument(event => {
    const editor = vscode.window.activeTextEditor;
    if (editor && event.document === editor.document) {
      updateSyllableDecorations(editor);
    }
  });

  // Изначальная активация при открытии редактора
  vscode.window.onDidChangeActiveTextEditor(editor => {
    if (editor) {
      updateSyllableDecorations(editor);
    }
  });

  // Команда для подсчета слогов (если нужна)
  let disposable = vscode.commands.registerCommand('syllableCounter.countSyllables', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      updateSyllableDecorations(editor);
    }
  });

  context.subscriptions.push(disposable);
}
