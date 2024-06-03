<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    // Ganti username dan password default dengan yang Anda inginkan
    $customUsername = "killy";
    $customPassword = "12345";
    
    if ($username === $customUsername && $password === $customPassword) {
        // Jika login berhasil, Anda dapat mengarahkan pengguna ke halaman selamat datang.
        header("Location: index.html"); // Ubah "index.html" untuk mengarahkan ke menu utama
        exit;
    } else {
        $error_message = "Username atau password salah. Silakan coba lagi.";
    }
}
?>
