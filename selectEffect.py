from conn import db_session

def selectByID(id):
    with db_session() as c:
       cur =  c.execute(
           "select name, description from effects where id = ?",
           (id,)
        )
       return cur.fetchone()
