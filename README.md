# MERN Experiments Programs

This repository contains ten different program folders, each demonstrating various functionalities primarily using Node.js, MongoDB, Express.js, React, and basic web technologies.

---

## PROGRAM_1

**Description:**  
This program demonstrates how to use MongoDB with Node.js to create a collection, bulk load data from a JSON file, and upsert records from another JSON file.

**Main Files:**  
- `prg_1.js`: Node.js script to connect to MongoDB, drop the existing "transactions" collection, insert data from `transactions.json`, and upsert data from `transactions_upsert.json`.  
- `transactions.json`: JSON data file with initial transaction records.  
- `transactions_upsert.json`: JSON data file with records to upsert into the collection.  

**How to Use:**  
1. Ensure MongoDB is running locally on the default port.  
2. Navigate to the `PROGRAM_1` folder.  
3. Run `node prg_1.js` to load and upsert transaction data.

---

## PROGRAM_2

**Description:**  
This program performs various MongoDB queries on the "usermanaged" database collections "customer" and "transactions" using Node.js.

**Main File:**  
- `prog2.js`: Node.js script that queries MongoDB to find records based on specific conditions and calculates the total transaction amount.

**How to Use:**  
1. Ensure MongoDB is running locally on the default port.  
2. Navigate to the `PROGRAM_2` folder.  
3. Run `node prog2.js` to execute the queries and see results in the console.

---

## PROGRAM_3

**Description:**  
A simple Express.js server that listens on port 2500 and responds to GET requests at the root path by checking for cookies in the request headers.

**Main File:**  
- `prog3a.js`: Express.js server script.

**How to Use:**  
1. Navigate to the `PROGRAM_3` folder.  
2. Run `node prog3a.js`.  
3. Access `http://localhost:2500/` in a browser or via curl to see cookie information.

---

## PROGRAM_4

**Description:**  
This program connects to a MongoDB server and inserts a new student document into the "students" collection of the "school" database.

**Main File:**  
- `prog4a.js`: Node.js script for inserting a student record into MongoDB.

**How to Use:**  
1. Ensure MongoDB is running locally on the default port.  
2. Navigate to the `PROGRAM_4` folder.  
3. Run `node prog4a.js` to insert the student document.

---

## PROGRAM_5

**Description:**  
Demonstrates basic file operations in Node.js including creating, reading, appending, and deleting a file.

**Main File:**  
- `fileop.js`: Node.js script showcasing file system operations.

**How to Use:**  
1. Navigate to the `PROGRAM_5` folder.  
2. Run `node fileop.js` to see file operations logged in the console.

---

## PROGRAM_6

**Description:**  
A simple HTML form for submitting a fruit name and price. The form uses client-side JavaScript to send the data as a JSON POST request to a server endpoint.

**Main Files:**  
- `lab.html`: HTML form with embedded JavaScript for form submission.  
- `script.js`: (Additional JavaScript, not reviewed in detail).

**How to Use:**  
1. Serve the `lab.html` file using a static server or open it directly in a browser.  
2. Submit the form to send JSON data to the `/submit-fruit` endpoint (ensure a server is running to handle this).

---

## PROGRAM_7

**Description:**  
A simple login system using an HTML form and an Express.js backend. The form (`l7.html`) collects email and password, and the server (`prog7.js`) validates credentials against hardcoded values.

**Main Files:**  
- `l7.html`: HTML login form with basic CSS styling.  
- `prog7.js`: Express.js server handling form submission and credential validation.

**How to Use:**  
1. Navigate to the `PROGRAM_7` folder.  
2. Run `node prog7.js`.  
3. Access `http://localhost:3000/` in a browser to use the login form.

---

## PROGRAM_8

**Description:**  
An Express.js server providing two endpoints: one to find prime numbers less than 100, and another to find cubes of numbers less than 100.

**Main File:**  
- `prog8.js`: Express.js server script.

**How to Use:**  
1. Navigate to the `PROGRAM_8` folder.  
2. Run `node prog8.js`.  
3. Access `http://localhost:3000/find_prime_100` to get prime numbers less than 100.  
4. Access `http://localhost:3000/find_cube_100` to get cubes of numbers less than 100.

---

## PROGRAM_9

**Description:**  
A React functional component implementing a search filter input that filters a list of fruit items and displays the filtered list.

**Main File:**  
- `prog9.js`: React component.

**How to Use:**  
1. Integrate `prog9.js` into a React application.  
2. Use the `SearchFilter` component to provide a searchable list UI.

---

## PROGRAM_10

**Description:**  
A React functional component that fetches user data from an external API and displays it in a table with loading and error states.

**Main File:**  
- `prog10.js`: React component.

**How to Use:**  
1. Integrate `prog10.js` into a React application.  
2. Use the `DataFetcher` component to display user data fetched from the API.
