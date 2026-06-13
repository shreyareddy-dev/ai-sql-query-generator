# AI SQL Query Generator

## Overview

AI SQL Query Generator is a full-stack application that enables users to convert natural language questions into executable SQL queries using Artificial Intelligence. The system simplifies database interactions by allowing users to query databases without writing SQL manually.

The application combines a React frontend, FastAPI backend, and AI-powered query generation to provide an intuitive and efficient database querying experience.

---

## Features

* Natural Language to SQL Conversion
* AI-Powered Query Generation
* Real-Time Query Execution
* Interactive Results Table
* Query History Tracking
* User-Friendly Interface
* FastAPI REST API Integration
* SQLite Database Support

---

## Problem Statement

Many users struggle with writing SQL queries, especially when working with complex databases. This project bridges the gap between natural language and structured database queries by automatically generating SQL statements from user prompts.

### Example

**User Input:**

```text
Show all employees earning more than 50000
```

**Generated SQL:**

```sql
SELECT * FROM employees
WHERE salary > 50000;
```

---

## Technologies Used

### Frontend

* React.js
* JavaScript
* HTML
* CSS

### Backend

* Python
* FastAPI

### Database

* SQLite

### AI Technologies

* OpenAI API
* Prompt Engineering
* Natural Language Processing (NLP)

---

## System Architecture

1. User enters a natural language request.
2. Request is sent to the FastAPI backend.
3. AI model generates an SQL query.
4. Query is validated and executed.
5. Results are retrieved from the database.
6. Data is displayed in an interactive table.

---

## Key Functionalities

### Natural Language Processing

Converts user-friendly text into structured SQL queries.

### Query Execution

Executes generated SQL statements against the connected database.

### Query History

Stores previously generated queries for future reference.

### Interactive Results

Displays query results in a structured and readable tabular format.

---

## Project Workflow

### Step 1

User enters a natural language request.

### Step 2

Backend sends the prompt to the AI model.

### Step 3

AI generates the corresponding SQL query.

### Step 4

Query is executed on the database.

### Step 5

Results are displayed on the frontend.

---

## Project Structure

```text
ai-sql-query-generator/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── package.json
│
├── backend/
│   ├── main.py
│   ├── routes/
│   ├── services/
│   └── requirements.txt
│
├── database/
│   └── sample.db
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/shreyareddy-dev/ai-sql-query-generator.git
```

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## Sample Use Cases

* Employee Database Queries
* Sales Analysis
* Customer Information Retrieval
* Inventory Management
* Business Intelligence Reporting

---

## Future Enhancements

* Support for MySQL and PostgreSQL
* Query Optimization Suggestions
* Database Schema Visualization
* User Authentication
* Voice-to-SQL Conversion
* Multi-Database Support
* AI-Powered Data Insights

---

## Skills Demonstrated

* Full-Stack Development
* React.js
* FastAPI
* REST API Development
* SQL and Database Management
* Artificial Intelligence Integration
* Prompt Engineering
* Natural Language Processing
* API Integration

---

## Screenshots

Add screenshots of:

* Home Page
* Query Generation Interface
* Generated SQL Output
* Query Results Table

---

## Author

**Shreya K Reddy**

AI-Focused Software Engineer | Python | FastAPI | React | Machine Learning | Generative AI

GitHub: https://github.com/shreyareddy-dev
