# Online Python Interpreter

This is a simple web application that allows users to write, edit, and execute Python code in an interactive environment. The application features a rich text editor for the problem statement, syntax-highlighted Python code editor, and a server-side execution environment for running Python scripts.

## Features

- **Interactive Problem Statement**: Users can write problem statements with rich text formatting (bold, italics, bullet points, and more) using **Quill.js**.
- **Python Code Editor**: The application includes a code editor powered by **CodeMirror** with Python syntax highlighting and smart indentation.
- **Code Execution**: Python code is executed on the server, and the result is returned and displayed on the frontend.
- **Persistence**: Both the problem statement and the Python code are stored in the browser's **localStorage**, ensuring that they persist across page refreshes.
- **Responsive Design**: The app is fully responsive and works well on both desktop and mobile devices.

## Tech Stack

- **Frontend**:
  - **HTML/CSS**: Basic structure and styling.
  - **JavaScript**: Handles frontend logic for the editor and code execution.
  - **Quill.js**: Used for the rich text problem statement editor.
  - **CodeMirror**: A flexible code editor used for writing Python code with syntax highlighting.
  
- **Backend**:
  - **Python (Flask)**: A lightweight web framework that handles code execution on the server side.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/PythonInterpreter.git
cd PythonInterpreter
```

### 2. Install Python dependencies

Make sure to create a virtual environment to isolate your Python environment.

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Run the application

To run the Flask application locally, execute:

```bash
python app.py
```

The server will start running at `http://127.0.0.1:5000/`.

### 4. Frontend Setup

The frontend uses static HTML, CSS, and JavaScript. Once the backend is running, you can open the `index.html` file in your browser.

---

## Usage

1. **Problem Statement**: Use the rich text editor (Quill.js) at the top of the page to write the problem statement. You can format the statement using **bold**, *italic*, `underline`, and create **bullet points** or **ordered lists**.
   
2. **Python Code**: Write Python code in the **CodeMirror** editor. The editor will provide syntax highlighting, auto-indentation, and bracket matching.

3. **Execute Python Code**: Click the **Run Code** button to send the Python code to the backend for execution. The output (or error message) will be displayed below the editor.

4. **Persistence**: The problem statement and Python code are saved in your browser’s `localStorage`. So, even if you refresh the page, your code and problem statement will persist.

---

## Example

### Problem Statement:

**Input**:

You are given a number `n`. Print all the numbers from `1` to `n` using recursion.

**Output**:

For an input `n = 5`, the program should output:

```
1
2
3
4
5
```

---

## Contributing

Contributions are welcome! Please feel free to fork the repository and submit issues or pull requests.

### Steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to your fork (`git push origin feature-name`).
6. Create a new Pull Request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Note:
This README assumes that your project is still being developed and can be customized further once more features are added.

Let me know if you'd like to make any changes or additions to the README!