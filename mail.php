<?php
  if (isset($_POST['nom'])) {
    echo "<script>alert(\"mail envoyé merci\")</script>";
  }
  header('Location: index.html');
?>
