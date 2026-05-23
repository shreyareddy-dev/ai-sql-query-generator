from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from ai_engine import generate_sql
import sqlite3

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QueryRequest(BaseModel):
    question: str

@app.get("/")
def home():
    return {"message": "AI SQL Generator API Running"}

@app.post("/generate-sql")
def generate(request: QueryRequest):

    sql_query = generate_sql(request.question)

    conn = sqlite3.connect("sample.db")

    cursor = conn.cursor()

    cursor.execute(sql_query)

    rows = cursor.fetchall()

    conn.close()

    return {
        "sql": sql_query,
        "results": rows
    }