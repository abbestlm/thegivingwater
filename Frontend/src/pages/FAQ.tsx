import React, { useState, useEffect } from "react";
import styles from "./FAQ.module.css"; // Import CSS module

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:8081/faqs")
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Error fetching FAQs:", error));
  }, []);

  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
      {faqs.map((faq) => (
        <div key={faq.id} className={styles.faqItem}>
          <h2 className={styles.faqQuestion}>{faq.question}</h2>
          <p className={styles.faqAnswer}>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
