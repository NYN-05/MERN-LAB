# MERN Experiments Programs

This repository contains six different program folders, each demonstrating various functionalities primarily using Node.js, MongoDB, Express.js, and basic web technologies.

---

## PROGRAM_1

**Description:**  
This program demonstrates how to use MongoDB with Node.js to create a collection, bulk load data from a JSON file, and upsert records from another JSON file.

**Main Files:**  
- `prg_1.js`: Node.js script to connect to MongoDB, drop the existing "transactions" collection, insert data from `transactions.json`, and upsert data from `transactions_upsert.json`.  
- `transactions.json`: JSON data file with initial transaction records.  
- `transactions_upsert.json`: JSON data file with records to upsert into the collection.  

**How to Run:**  
1. Ensure MongoDB is running locally.
2. Place `transactions.json` and `transactions_upsert.json` in the same folder.
3. Run:  
   ```bash
   node prg_1.js
   ```

---

## PROGRAM_2

**Description:**  
This program performs various MongoDB queries on the "usermanaged" database collections "customer" and "transactions" using Node.js.

**Main File:**  
- `prog2.js`: Node.js script that queries MongoDB to find records based on specific conditions and calculates the total transaction amount.

**How to Run:**  
1. Ensure MongoDB is running locally and collections are populated.
2. Run:  
   ```bash
   node prog2.js
   ```

---

## PROGRAM_3

**Description:**  
A simple Express.js server that listens on port 2501 and responds to GET requests at the root path by checking for cookies in the request headers.

**Main File:**  
- `prog3a.js`: Express.js server script.

**How to Run:**  
1. Run:  
   ```bash
   node prog3a.js
   ```
2. Open [http://localhost:2500/](http://localhost:2500/) in your browser.

---

## PROGRAM_4

**Description:**  
This program connects to a MongoDB server and inserts a new student document into the "students" collection of the "school" database.

**Main File:**  
- `prog4a.js`: Node.js script for inserting a student record into MongoDB.

**How to Run:**  
1. Ensure MongoDB is running locally.
2. Run:  
   ```bash
   node prog4a.js
   ```

---

## PROGRAM_5

**Description:**  
Demonstrates basic file operations in Node.js including creating, reading, appending, and deleting a file.

**Main File:**  
- `fileop.js`: Node.js script showcasing file system operations.

**How to Run:**  
```bash
node fileop.js
```

---

## PROGRAM_6

**Description:**  
A simple HTML form for submitting a fruit name and price. The form uses client-side JavaScript to send the data as a JSON POST request to a server endpoint.

**Main Files:**  
- `lab.html`: HTML form with embedded JavaScript for form submission.  
- `script.js`: (Assumed to contain additional JavaScript, not reviewed in detail).

**How to Run:**  
1. Run the server:  
   ```bash
   node script.js
   ```
2. Open [http://localhost:3001/](http://localhost:3001/) in your browser.

---

## PROGRAM_7

**Description:**  
A simple login system using an HTML form and an Express.js backend. The form (`l7.html`) collects email and password, and the server (`prog7.js`) validates credentials against hardcoded values.

**Main Files:**  
- `l7.html`: HTML login form with basic CSS styling.
- `prog7.js`: Express.js server handling form submission and credential validation.

**How to Run:**  
1. Run the server:  
   ```bash
   node prog7.js
   ```
2. Open [http://localhost:3000/](http://localhost:3000/) in your browser.

---

## Usage Notes

- Programs involving MongoDB assume a local MongoDB instance running on the default port (`mongodb://localhost:27017`).  
- Node.js is required to run the JavaScript scripts.  
- For PROGRAM_6, a server endpoint `/submit-fruit` is expected to handle the POST request from the form.
