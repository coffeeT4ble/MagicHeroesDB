from flask import Flask, jsonify, render_template
from conn import get_connection

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/effects')
def get_effects():
    conn = get_connection()
    try:
        cur = conn.execute("SELECT id, name, description FROM effects")
        effects = [dict(row) for row in cur.fetchall()]
        return jsonify(effects)
    finally:
        conn.close()

@app.route('/api/effects/<int:effect_id>')
def get_effect(effect_id):
    conn = get_connection()
    try:
        cur = conn.execute(
            "SELECT id, name, description FROM effects WHERE id = ?",
            (effect_id,)
        )
        effect = cur.fetchone()
        if effect:
            return jsonify(dict(effect))
        return jsonify({"error": "Effect not found"}), 404
    finally:
        conn.close()

@app.route('/api/heroes')
def get_heroes():
    conn = get_connection()
    try:
        cur = conn.execute("SELECT * FROM heroes")
        heroes = [dict(row) for row in cur.fetchall()]
        return jsonify(heroes)
    finally:
        conn.close()

@app.route('/api/heroes/<int:hero_id>')
def get_hero(hero_id):
    conn = get_connection()
    try:
        cur = conn.execute("SELECT * FROM heroes WHERE id = ?", (hero_id,))
        hero = cur.fetchone()
        if hero:
            return jsonify(dict(hero))
        return jsonify({"error": "Hero not found"}), 404
    finally:
        conn.close()

@app.route('/api/weapons')
def get_weapons():
    conn = get_connection()
    try:
        cur = conn.execute("SELECT * FROM weapons")
        weapons = [dict(row) for row in cur.fetchall()]
        return jsonify(weapons)
    finally:
        conn.close()

@app.route('/api/weapons/<int:weapon_id>')
def get_weapon(weapon_id):
    conn = get_connection()
    try:
        cur = conn.execute("SELECT * FROM weapons WHERE id = ?", (weapon_id,))
        weapon = cur.fetchone()
        if weapon:
            return jsonify(dict(weapon))
        return jsonify({"error": "Weapon not found"}), 404
    finally:
        conn.close()

if __name__ == '__main__':
    app.run(debug=True)
