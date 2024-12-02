const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

// Home Page Route
app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                }
                nav {
                    background-color: #f8f8f8;
                    padding: 10px;
                    border-bottom: 1px solid #ddd;
                }
                nav a {
                    margin: 0 15px;
                    text-decoration: none;
                    font-weight: bold;
                    color: #d35656;
                }
                nav a:hover {
                    text-decoration: underline;
                }
                h1 {
                    margin: 20px 0;
                }
            </style>
        </head>
        <body>
            <nav>
                <a href="/">Home</a>
                <a href="/contactus">Contact Us</a>
            </nav>
            <h1>Welcome to Sharpener</h1>
            <p>Navigate to the Contact Us page to book a call!</p>
        </body>
        </html>
    `);
});

// Contact Us Route
app.get("/contactus", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Us</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #fefefe;
                }
                nav {
                    background-color: #f8f8f8;
                    padding: 10px;
                    border-bottom: 1px solid #ddd;
                }
                nav a {
                    margin: 0 15px;
                    text-decoration: none;
                    font-weight: bold;
                    color: #d35656;
                }
                nav a:hover {
                    text-decoration: underline;
                }
                .container {
                    max-width: 800px;
                    margin: 50px auto;
                    text-align: center;
                    background: #ffffff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    font-size: 24px;
                    color: #333;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                input, button {
                    width: 90%;
                    max-width: 400px;
                    margin: 10px 0;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    font-size: 16px;
                }
                button {
                    background-color: #d35656;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    font-weight: bold;
                }
                button:hover {
                    background-color: #b54545;
                }
                .footer {
                    margin-top: 30px;
                    color: #888;
                }
            </style>
        </head>
        <body>
            <nav>
                <a href="/">Home</a>
                <a href="/contactus">Contact Us</a>
            </nav>
            <div class="container">
                <h1>Book a Call</h1>
                <p>Book a call slot and our representative will call you within 1 hour of the selected time.</p>
                <form action="/success" method="POST">
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="tel" name="phone" placeholder="Phone" required />
                    <label for="date">Time for Call:</label>
                    <input type="date" name="date" required />
                    <input type="time" name="time" required />
                    <button type="submit">GET A CALL</button>
                </form>
            </div>
        </body>
        </html>
    `);
});

// Success Route
app.post("/success", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Success</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 50px;
                    background-color: #fefefe;
                }
                h1 {
                    color: #28a745;
                }
                p {
                    font-size: 18px;
                    margin: 10px;
                }
                a {
                    text-decoration: none;
                    color: #d35656;
                }
                a:hover {
                    text-decoration: underline;
                }
                .container {
                    margin-top: 50px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Form Successfully Filled</h1>
                <p>Thank you for providing your details. We will get in touch with you shortly.</p>
                <a href="/">Go Back to Home</a>
            </div>
        </body>
        </html>
    `);
});

// Start Server
const PORT = 3080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
