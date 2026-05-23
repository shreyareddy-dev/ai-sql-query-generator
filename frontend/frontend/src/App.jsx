import { useState } from "react";
import axios from "axios";

function App() {

  const [question, setQuestion] = useState("");
  const [sql, setSql] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const generateSQL = async () => {

    setLoading(true);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/generate-sql",
        {
          question: question
        }
      );

      setSql(response.data.sql);
      setResults(response.data.results);

      setHistory([
        {
          question: question,
          sql: response.data.sql
        },
        ...history
      ]);

    } catch (error) {

      console.log(error);

      alert("Backend connection error");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div style={{
      backgroundColor: "#0f172a",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      padding: "40px",
      fontFamily: "Arial"
    }}>

      <div style={{
        width: "100%",
        maxWidth: "1000px",
        color: "white"
      }}>

        {/* Header */}

        <h1 style={{
          fontSize: "42px",
          marginBottom: "10px"
        }}>
          AI SQL Query Generator
        </h1>

        <p style={{
          color: "#94a3b8",
          marginBottom: "30px",
          fontSize: "18px"
        }}>
          Convert natural language into SQL queries instantly.
        </p>

        {/* Input */}

        <textarea
          rows="5"
          placeholder="Enter your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}

          style={{
            width: "100%",
            padding: "20px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px",
            marginBottom: "20px",
            outline: "none",
            resize: "none",
            boxSizing: "border-box"
          }}
        />

        {/* Button */}

        <button
          onClick={generateSQL}
          disabled={loading}

          style={{
            backgroundColor: loading ? "#64748b" : "#3b82f6",
            color: "white",
            border: "none",
            padding: "14px 28px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
            marginBottom: "40px"
          }}
        >
          {loading ? "Generating..." : "Generate SQL"}
        </button>

        {/* Generated SQL */}

        <div style={{
          backgroundColor: "#1e293b",
          padding: "25px",
          borderRadius: "14px",
          marginBottom: "30px"
        }}>

          <h2 style={{
            marginBottom: "15px"
          }}>
            Generated SQL
          </h2>

          <code style={{
            color: "#38bdf8",
            fontSize: "16px"
          }}>
            {sql}
          </code>

        </div>

        {/* Query Results */}

        <div style={{
          backgroundColor: "#1e293b",
          padding: "25px",
          borderRadius: "14px"
        }}>

          <h2 style={{
            marginBottom: "20px"
          }}>
            Query Results
          </h2>

          <div style={{
            overflowX: "auto"
          }}>

            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              color: "white"
            }}>

              <thead>

                <tr style={{
                  backgroundColor: "#334155"
                }}>

                  <th style={{
                    padding: "16px",
                    textAlign: "left"
                  }}>
                    ID
                  </th>

                  <th style={{
                    padding: "16px",
                    textAlign: "left"
                  }}>
                    Name
                  </th>

                  <th style={{
                    padding: "16px",
                    textAlign: "left"
                  }}>
                    Department
                  </th>

                  <th style={{
                    padding: "16px",
                    textAlign: "left"
                  }}>
                    Salary
                  </th>

                </tr>

              </thead>

              <tbody>

                {
                  results.map((row, index) => (

                    <tr
                      key={index}

                      style={{
                        borderBottom: "1px solid #334155"
                      }}
                    >

                      <td style={{padding: "16px"}}>
                        {row[0]}
                      </td>

                      <td style={{padding: "16px"}}>
                        {row[1]}
                      </td>

                      <td style={{padding: "16px"}}>
                        {row[2]}
                      </td>

                      <td style={{padding: "16px"}}>
                        ₹ {row[3]}
                      </td>

                    </tr>
                  ))
                }

              </tbody>

            </table>

          </div>

        </div>

        {/* Query History */}

        <div style={{
          backgroundColor: "#1e293b",
          padding: "25px",
          borderRadius: "14px",
          marginTop: "30px"
        }}>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px"
          }}>

            <h2>
              Query History
            </h2>

            <button

              onClick={() => setHistory([])}

              style={{
                backgroundColor: "#ef4444",
                color: "white",
                border: "none",
                padding: "10px 16px",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Clear History
            </button>

          </div>

          {
            history.map((item, index) => (

              <div
                key={index}

                style={{
                  backgroundColor: "#334155",
                  padding: "16px",
                  borderRadius: "10px",
                  marginBottom: "15px"
                }}
              >

                <p style={{
                  marginBottom: "10px",
                  color: "#e2e8f0"
                }}>
                  <strong>Question:</strong> {item.question}
                </p>

                <code style={{
                  color: "#38bdf8"
                }}>
                  {item.sql}
                </code>

              </div>
            ))
          }

        </div>

      </div>

    </div>
  );
}

export default App;