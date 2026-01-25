import sqlite3

conn = sqlite3.connect("heroesDB.db")
curs = conn.cursor()

def getEffectById(id):
    curs.execute(f'SELECT name, description FROM effects WHERE id = {id}')
    return curs.fetchone()

print(getEffectById(1))
