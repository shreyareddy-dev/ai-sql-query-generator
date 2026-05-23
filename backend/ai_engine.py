def generate_sql(user_query):

    user_query = user_query.lower()

    # Salary conditions
    if "salary greater than" in user_query:

        words = user_query.split()

        amount = words[-1]

        return f"SELECT * FROM employees WHERE salary > {amount};"

    elif "salary less than" in user_query:

        words = user_query.split()

        amount = words[-1]

        return f"SELECT * FROM employees WHERE salary < {amount};"

    # Department filtering
    elif "it department" in user_query:

        return "SELECT * FROM employees WHERE department = 'IT';"

    elif "hr department" in user_query:

        return "SELECT * FROM employees WHERE department = 'HR';"

    elif "finance department" in user_query:

        return "SELECT * FROM employees WHERE department = 'Finance';"

    # Count query
    elif "count" in user_query:

        return "SELECT COUNT(*) FROM employees;"

    # Names only
    elif "employee names" in user_query:

        return "SELECT name FROM employees;"

    # Show all
    elif "show all employees" in user_query:

        return "SELECT * FROM employees;"

    else:

        return "SELECT * FROM employees;"