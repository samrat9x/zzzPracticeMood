<?php
    if (isset($_FILES['image'])) {
        // echo"<pre>";
        // print_r($_FILES);
        // echo"</pre>";

      $file_name = $_FILES['image']['name'];
      $file_tmp_name = $_FILES['image']['tmp_name'];

      if (move_uploaded_file($file_tmp_name, 'uploadedImages/'.$file_name)) {
      // Here 1st arg in move_uploaded_file() function is temprary name of the uploaded file and the 2nd arg is the destination where the file should be placed
        echo "File is successfully uploaded";
      }else{
        echo "Nothing is uploaded yet";
      }
    }
?>


<html>
    <head>
        <title>File Upload</title>
    </head>
    <body>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    </body>
</html>


