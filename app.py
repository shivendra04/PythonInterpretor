from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import io
import traceback

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Function to execute Python code and capture output
def execute_python_code(code):
    # Create a new StringIO object to capture standard output
    old_stdout = sys.stdout
    sys.stdout = io.StringIO()

    try:
        # Use globals() as the global context for exec
        exec(code, globals())  # Execute code in the global context
        output = sys.stdout.getvalue()
    except Exception as e:
        # Catch any exception (syntax or runtime) and return its traceback
        output = traceback.format_exc()
    finally:
        sys.stdout = old_stdout

    return output


@app.route('/execute', methods=['POST'])
def execute():
    try:
        # Get the Python code from the request
        code = request.json.get('code')
        if not code:
            return jsonify({"error": "No code provided"}), 400

        # Execute the code
        output = execute_python_code(code)

        # Return the result
        return jsonify({"output": output})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
