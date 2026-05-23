import sqlite3

conn = sqlite3.connect("sample.db")

cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY,
    name TEXT,
    department TEXT,
    salary INTEGER
)
""")

cursor.execute("""
INSERT INTO employees (name, department, salary)
VALUES
('John', 'HR', 50000),
('Alice', 'IT', 70000),
('Bob', 'Finance', 65000)
""")

conn.commit()

conn.close()

print("Database created successfully")