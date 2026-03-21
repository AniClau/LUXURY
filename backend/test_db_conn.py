import psycopg2
try:
    conn = psycopg2.connect(
        dbname="sirlux",
        user="postgres",
        password="silvestre",
        host="127.0.0.1",
        port="5432"
    )
    print("Connection successful")
    conn.close()
except Exception as e:
    print(f"Connection failed: {e}")
    try:
        print(f"Raw error: {e.args}")
    except:
        pass
