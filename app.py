from flask import Flask, jsonify, render_template
from conn import db_session

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/effects')
def get_effects():
    with db_session as c:
        cur = c.execute("select id, name, description from effects")
        effects = [dict(row) for row in cur.fetchall()]
    return jsonify(effects)

app.route('/api/effects/<int:effect_id>')
def get_effect_by_id(effect_id):
    with db_session as c:
        cur = c.execute(
            "select id, name, description from effects where id = ?",
            (effect_id,)
        )
        effect = cur.fetchone()
    if effect:
        return jsonify(dict(effect))
    return jsonify({"error": "Effect not found"}), 404

# add method for get by name if needed
