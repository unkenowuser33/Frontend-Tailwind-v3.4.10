from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

# Ruta para la raíz que redirige a /frontend
@app.route('/')
def home():
    return redirect(url_for('frontend'))

# Ruta para /frontend que renderiza index.html
@app.route('/frontend')
def frontend():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
