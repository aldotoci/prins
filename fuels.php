<?php
session_start();

// Set the default language to English if it hasn't been set yet
if (!isset($_SESSION['language'])) {
    $_SESSION['language'] = 'english';
}

if (isset($_GET['lang'])) {
    $selectedLanguage = $_GET['lang'];

    // Check if the selected language is valid (English or Albanian)
    if ($selectedLanguage === 'english' || $selectedLanguage === 'albanian') {
        $_SESSION['language'] = $selectedLanguage;
    }
}
if ($_SESSION['language'] === 'english') {
    include 'fuels_eng.php';
} elseif ($_SESSION['language'] === 'albanian') {
    include 'fuels_al.php';
}
?>