const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Middleware to parse JSON

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'test'
});

db.connect(err => {
    if (err) {
        console.error("Database connection error:", err);
        return;
    }
    console.log("Database connected");
});

// Basic route
app.get('/', (req, res) => {
    return res.json("From Backend Side");
});
// Sponsors Endpoints
app.get('/sponsors', (req, res) => {
    db.query('SELECT * FROM sponsors', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

app.post('/sponsors', (req, res) => {
    const { name, description, logo_url } = req.body;
    db.query('INSERT INTO sponsors (name, description, logo_url) VALUES (?, ?, ?)', [name, description, logo_url], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId });
    });
});

app.put('/sponsors/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, logo_url } = req.body;
    db.query('UPDATE sponsors SET name = ?, description = ?, logo_url = ? WHERE id = ?', [name, description, logo_url, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Sponsor updated successfully' });
    });
});

app.delete('/sponsors/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM sponsors WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Sponsor deleted successfully' });
    });
});

// Partners Endpoints
app.get('/partners', (req, res) => {
    db.query('SELECT * FROM partners', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

app.post('/partners', (req, res) => {
    const { name, description, logo_url } = req.body;
    db.query('INSERT INTO partners (name, description, logo_url) VALUES (?, ?, ?)', [name, description, logo_url], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId });
    });
});

app.put('/partners/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, logo_url } = req.body;
    db.query('UPDATE partners SET name = ?, description = ?, logo_url = ? WHERE id = ?', [name, description, logo_url, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Partner updated successfully' });
    });
});

app.delete('/partners/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM partners WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Partner deleted successfully' });
    });
});

// FAQs Endpoints
app.get('/faqs', (req, res) => {
    db.query('SELECT * FROM faqs', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

app.post('/faqs', (req, res) => {
    const { question, answer } = req.body;
    db.query('INSERT INTO faqs (question, answer) VALUES (?, ?)', [question, answer], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, question, answer });
    });
});

app.put('/faqs/:id', (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;
    db.query('UPDATE faqs SET question = ?, answer = ? WHERE id = ?', [question, answer, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id, question, answer });
    });
});

app.delete('/faqs/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM faqs WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id });
    });
});

// Endpoint to get settings including "About Us"
app.get('/settings', (req, res) => {
  db.query('SELECT * FROM settings WHERE id = 1', (err, results) => {
    if (err) {
      console.error("Error fetching settings:", err);
      return res.status(500).json({ error: "Database error" });
    }
    // Assuming the content is in the 'about_us' field
    res.json({
      content: results[0]?.about_us || "", // Adjust field name as necessary
      contact: {
        phone: results[0]?.contact_phone || "",
        email: results[0]?.contact_email || "",
        address: results[0]?.contact_address || "",
      },
      socialMedia: {
        facebook: results[0]?.facebook || "",
        twitter: results[0]?.twitter || "",
        instagram: results[0]?.instagram || "",
      }
    });
  });
});


app.post('/settings', (req, res) => {
    const { contact, socialMedia, content } = req.body;

    // Prepare values, defaulting to `NULL` if not provided
    const contactPhone = contact?.phone || null;
    const contactEmail = contact?.email || null;
    const contactAddress = contact?.address || null;
    const facebook = socialMedia?.facebook || null;
    const twitter = socialMedia?.twitter || null;
    const instagram = socialMedia?.instagram || null;
    const aboutUs = content || null;

    const query = `
        UPDATE settings 
        SET contact_phone = COALESCE(?, contact_phone), 
            contact_email = COALESCE(?, contact_email), 
            contact_address = COALESCE(?, contact_address), 
            facebook = COALESCE(?, facebook), 
            twitter = COALESCE(?, twitter), 
            instagram = COALESCE(?, instagram),
            about_us = COALESCE(?, about_us)
        WHERE id = 1;`;

    db.query(query, [
        contactPhone, 
        contactEmail, 
        contactAddress, 
        facebook, 
        twitter, 
        instagram,
        aboutUs
    ], (err, results) => {
        if (err) {
            console.error("Error updating settings:", err);
            return res.status(500).json({ error: "Database update error" });
        }
        return res.json({ message: "Settings updated successfully" });
    });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    db.query('SELECT * FROM admins WHERE username = ?', [username], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ success: false, message: 'An error occurred' });
        }

        if (results.length === 0) {
            console.log('No user found with the given username');
            return res.status(401).json({ success: false, message: 'Username or password is incorrect' });
        }

        const user = results[0];

        // Compare plain-text passwords
        if (password === user.password) {
            console.log('Login successful');
            return res.json({ success: true, message: 'Login successful' });
        } else {
            console.log('Password does not match');
            return res.status(401).json({ success: false, message: 'Username or password is incorrect' });
        }
    });
});


// Server Initialization
const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
