<?php
// Database configuration
$servername = "localhost"; // Update if your database server is different
$username = "root"; // Replace with your database username
$password = ""; // Replace with your database password
$dbname = "grs_books"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $conn->real_escape_string($_POST['name']);
    $book_name = $conn->real_escape_string($_POST['bookname']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $email = $conn->real_escape_string($_POST['email']);
    $quantity = (int)$_POST['quantity'];
    $address = $conn->real_escape_string($_POST['address']);

    // SQL query to insert data into the database
    $sql = "INSERT INTO grs_table (name, book_name, phone_number, email, quantity, address) 
            VALUES ('$name', '$book_name', '$phone', '$email', $quantity, '$address')";

    if ($conn->query($sql) === TRUE) {
        // You can redirect or return a success message here
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>
