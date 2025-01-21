// Initialize Quill.js for problem statement with rich text editor
const problemStatement = new Quill('#problemStatement', {
    theme: 'snow',
    modules: {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link']
        ]
    }
});

// Initialize CodeMirror editor for Python code
const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    mode: "python",
    theme: "dracula",
    lineNumbers: true,
    indentUnit: 4, // Set indentation to 4 spaces
    smartIndent: true,
    tabMode: "indent",
    lineWrapping: true,
    autoCloseBrackets: true
});

// Load saved code for the Python editor
window.onload = function() {
    const savedCode = localStorage.getItem('python_code');
    if (savedCode) {
        editor.setValue(savedCode);  // Load saved code into the editor
    }

    // Load saved problem statement
    const savedProblemStatement = localStorage.getItem('problem_statement');
    if (savedProblemStatement) {
        problemStatement.root.innerHTML = savedProblemStatement;  // Load saved problem statement into Quill
    }
};

// Save problem statement to localStorage whenever it changes
problemStatement.on('text-change', function() {
    const problemContent = problemStatement.root.innerHTML;
    localStorage.setItem('problem_statement', problemContent);  // Save the content to localStorage
});

// Function to execute Python code
function executeCode() {
    const code = editor.getValue(); // Get the code from CodeMirror

    // Save the code in localStorage before running it
    localStorage.setItem('python_code', code);

    fetch('http://127.0.0.1:5000/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: code })
    })
    .then(response => response.json())
    .then(data => {
        const outputElement = document.getElementById("output");

        if (data.output) {
            outputElement.innerText = data.output;
            outputElement.className = '';
        } else if (data.error) {
            outputElement.innerHTML = `<span class="error">${data.error}</span>`;
        }
    })
    .catch(error => {
        document.getElementById("output").innerText = "An error occurred: " + error;
    });
}
