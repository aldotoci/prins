<?php
// Read the language cookie, or set a default value if it's not set
$selectedLanguage = isset($_COOKIE['language']) ? $_COOKIE['language'] : 'english';

if (isset($_GET['lang'])) {
    $requestedLanguage = $_GET['lang'];

    if ($requestedLanguage === 'english' || $requestedLanguage === 'albanian') {
        $selectedLanguage = $requestedLanguage;

        // Set the language preference cookie to remember the choice
        setcookie('language', $selectedLanguage, time() + 60 * 60 * 24 * 30); // Cookie expires in 30 days
    }
}
?>
<?php
if ($selectedLanguage === 'english') {
    include('index_eng.php');
} elseif ($selectedLanguage === 'albanian') {
    include('index_al.php');
}
?>