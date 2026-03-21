import psycopg2
try:
    conn = psycopg2.connect(
        dbname="postgres",
        user="postgres",
        password="1234",
        host="127.0.0.1",
        port="5432"
    )
    conn.autocommit = True
    cur = conn.cursor()
    cur.execute("SELECT datname FROM pg_database;")
    dbs = [row[0] for row in cur.fetchall()]
    print(f"Databases: {dbs}")
    if "silux_db" in dbs:
        print("silux_db exists")
    elif "sirlux" in dbs:
        print("sirlux exists (but silux_db doesn't?)")
    else:
        print(f"Neither silux_db nor sirlux found in {dbs}")
    conn.close()
except Exception as e:
    print(f"Failed to connect to postgres with password 1234: {e}")
