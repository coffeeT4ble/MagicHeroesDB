from flask import Flask, jsonify, render_template
from conn import get_connection

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/effects')
def effects():
    return render_template('effects.html')

@app.route('/api/effects')
def get_effects():
    conn = get_connection()
    try:
        cur = conn.execute("SELECT id, name, description, img FROM effects")
        effects = [dict(row) for row in cur.fetchall()]
        return jsonify(effects)
    finally:
        conn.close()

@app.route('/api/effects/<int:effect_id>')
def get_effect(effect_id):
    conn = get_connection()
    try:
        cur = conn.execute(
            "SELECT id, name, description, img FROM effects WHERE id = ?",
            (effect_id,)
        )
        effect = cur.fetchone()
        if effect:
            return jsonify(dict(effect))
        return jsonify({"error": "Effect not found"}), 404
    finally:
        conn.close()

if __name__ == '__main__':
    app.run(debug=True)
