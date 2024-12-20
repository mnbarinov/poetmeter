# PoetMeter

PoetMeter is a Visual Studio Code extension designed for counting syllables in lines of text. This tool is particularly useful for poets, writers, and anyone who works with structured or rhythmic text.

## Features

- Automatically counts syllables in lines of text.
- Provides real-time updates as you edit your document.
- Lightweight and easy to use.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mnbarinov/poetmeter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd poetmeter
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Package the extension:
   ```bash
   npm run package
   ```
5. Install the generated `.vsix` file:
   - Open Visual Studio Code.
   - Go to the Extensions view (`Ctrl+Shift+X` / `Cmd+Shift+X` on Mac).
   - Click the three-dot menu in the top right corner and select "Install from VSIX."
   - Choose the `.vsix` file from the `poetmeter` directory.

## Usage

1. Open a text file in Visual Studio Code.
2. Run the "Count Syllables" command:
   - Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P` on Mac).
   - Type and select `PoetMeter: Count Syllables`.
3. The syllable counts for each line will appear as decorations in the editor.

## Development

To run the extension in a development environment:

1. Open the project folder in Visual Studio Code.
2. Run the `Watch` command:
   ```bash
   npm run watch
   ```
3. Press `F5` to launch an Extension Development Host.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Repository

[GitHub Repository](https://github.com/mnbarinov/poetmeter)

---

Feel free to submit issues or feature requests through the repository's [Issues](https://github.com/mnbarinov/poetmeter/issues) page.

