import React, { useState, useEffect } from "react";
import styles from "./EditFAQ.module.css"; // Import CSS module

const EditFAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:8081/faqs")
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Error fetching FAQs:", error));
  }, []);

  const handleAdd = () => {
    fetch("http://localhost:8081/faqs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, answer }),
    })
      .then((response) => response.json())
      .then(() => {
        setQuestion("");
        setAnswer("");
        fetchFAQs(); // Fetch updated list
      })
      .catch((error) => console.error("Error adding FAQ:", error));
  };

  const handleEdit = (id: number) => {
    setEditingId(id);
    const faq = faqs.find((f) => f.id === id);
    if (faq) {
      setQuestion(faq.question);
      setAnswer(faq.answer);
    }
  };

  const handleSave = () => {
    if (editingId !== null) {
      fetch(`http://localhost:8081/faqs/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question, answer }),
      })
        .then(() => {
          setEditingId(null);
          setQuestion("");
          setAnswer("");
          fetchFAQs(); // Fetch updated list
        })
        .catch((error) => console.error("Error updating FAQ:", error));
    }
  };

  const handleDelete = (id: number) => {
    fetch(`http://localhost:8081/faqs/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchFAQs(); // Fetch updated list
      })
      .catch((error) => console.error("Error deleting FAQ:", error));
  };

  const fetchFAQs = () => {
    fetch("http://localhost:8081/faqs")
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Error fetching FAQs:", error));
  };

  return (
    <div className={styles.editFaqContainer}>
      <h2 className={styles.editFaqTitle}>Manage FAQs</h2>
      <div className={styles.faqForm}>
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className={styles.faqInput}
        />
        <textarea
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className={styles.faqTextarea}
        />
        {editingId !== null ? (
          <button onClick={handleSave} className={styles.faqButton}>
            Save
          </button>
        ) : (
          <button onClick={handleAdd} className={styles.faqButton}>
            Add
          </button>
        )}
      </div>
      <ul className={styles.faqList}>
        {faqs.map((faq) => (
          <li key={faq.id} className={styles.faqItem}>
            <div className={styles.faqContent}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
            <div className={styles.faqActions}>
              <button
                onClick={() => handleEdit(faq.id)}
                className={styles.faqActionButton}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(faq.id)}
                className={styles.faqActionButton}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditFAQ;
