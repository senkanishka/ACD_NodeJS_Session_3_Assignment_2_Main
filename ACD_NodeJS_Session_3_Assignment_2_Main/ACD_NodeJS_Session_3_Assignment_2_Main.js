<!DOCTYPE html>
<html>

  <body>

    <p>ACD_NodeJS_Session_3_Assignment_2_Main</p>

    <p id="demo"></p>

    <script>
      var varOne = 10;
      var varTwo = 8;
      addition();
      subtraction();
      division();
      multiplication();

      function addition() {

        var result = varOne + varTwo;
        document.getElementById("demo").innerHTML = "The result is " + result;
        alert(result);
        console.log(result);
      }

      function subtraction() {
        var result = varOne - varTwo;
        document.getElementById("demo").innerHTML = "The result is " + result;
        alert(result);
        console.log(result);
      }

      function division() {
        var result = varOne / varTwo;
        document.getElementById("demo").innerHTML = "The result is " + result;
        alert(result);
        console.log(result);
      }

      function multiplication() {
        var result = varOne * varTwo;
        document.getElementById("demo").innerHTML = "The result is " + result;
        alert(result);
        console.log(result);
      }

    </script>

  </body>

</html>
