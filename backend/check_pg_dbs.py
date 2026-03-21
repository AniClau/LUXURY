import psycopg2
try:
    conn = psycopg2.connect(
        dbname="postgres",
        user="postgres",
        password="silvestre",
        host="127.0.0.1",
        port="5432"
    )
    conn.autocommit = True
    cur = conn.cursor()
    cur.execute("SELECT datname FROM pg_database;")
    dbs = [row[0] for row in cur.fetchall()]
    print(f"Databases: {dbs}")
    if "sirlux" in dbs:
        print("sirlux exists")
    else:
        print("sirlux DOES NOT exist")
    conn.close()
except Exception as e:
    print(f"Failed to connect to postgres: {e}")
