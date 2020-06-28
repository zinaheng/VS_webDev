// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "webdev" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.createWebPageSkeleton',function () {
		const htmlContent = `<!DOCTYPE html>
		<html lang ="en">
		<head>
			<meta charset="utf-8" />
			<title>App</title>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			
			<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css\">
            <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css\">
            <link rel=\"stylesheet\" href=\"assets/css/style.css\">
		</head>
		<body>
		<script charset="utf-8" src="js/app.js"></script>
		<script type="text/javascript" src="snippets.json"></script>
		<script type="text/javascript" src="navbar.json"></script>
		<script type="text/javascript" src="forms.json"></script>
    		<h1>Hello!</h1>
		</body>
		</html>
			`;
			const folderPath = vscode.workspace.workspaceFolders[0].uri.toString().split(":")[1];

		
			fs.writeFile(path.join(folderPath, "webpage.html"), htmlContent, err => {
				if(err){
					console.error(err);
					return vscode.window.showErrorMessage("Failed to create the webpage skeleton");
				}
				vscode.window.showInformationMessage("webpage skeleton has been created");
			});
			const messages =["That´s great", "You are the best programmer","That´s a good idea", "Remember small steps for a big code" ];
			//var n = console.log(messages.length);
			vscode.window.showInformationMessage(messages[getRndInteger(0,3)]);

		}
	);

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
};

/**
 * @param {number} min
 * @param {number} max
 */
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  