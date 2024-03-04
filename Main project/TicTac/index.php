<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tic Tac Toe</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="HTMLS" href="./Components/HTMLS/about.html">
  <link rel="stylesheet" href="./Components/CSS/footer.css">
  <?php
  echo '<link rel="stylesheet" href="responsive-navbar-tictactoe/assets/css/styles.css">';
  ?>
  <?php
  if (isset($_GET['page'])) {
    if ($_GET['page'] == 'about') {
      echo '<link rel="stylesheet" href="Components/CSS/about.css">';
    }
    if ($_GET['page'] == 'developer') {
      echo '<link rel="stylesheet" href="Components/CSS/developer.css">';
    }
  }
  ?>

</head>


<body>

  <!-- <a href="./responsive-navbar-tictactoe/index.html"> Navbar</a> -->
  <?php
  include "./responsive-navbar-tictactoe/index.html";
  echo '<script src="responsive-navbar-tictactoe/assets/js/main.js"></script>';
  ?>

  <div container="mainm">
    <div class='' style='display:flex; gap:20px;'>

      <div class="maiimg">
        <img src="./Components/images/ticc.svg" alt="main img">
      </div>


      <div class="side">
      </div>
      <div class="rightup">
        <h1 class="texxt"> Play TicTacToe <br>#Online</br>
          <h1>
      </div>

      <div class="containerr">
        <div class="buttonss">
          <a href="Link here" class="buttonss3" target="_blank" rel=""> <img class="icon" src="./Components/images/world.svg"> Play Online</a>

          <a href="./Components/HTMLS/mainboard.html" class="buttonss3" target="_blank" rel=""> <img class="icon" src="./Components/images/cp.svg">Vs Computer</a>

          <a href="link" class="buttonss3" target="_blank" rel=""> <img class="icon" src="./Components/images/friend.svg">Vs Friends</a>

        </div>
      </div>

    </div>


    <?php
    if (isset($_GET['page'])) {
      if ($_GET['page'] == 'about') {
        include "./Components/HTMLS/about.html";
      }
      if ($_GET['page'] == 'developer') {
        include "./Components/HTMLS/developer.html";
      }
    } else {
      echo " ";
    }
    ?>

    <!--==================== RANKING ====================-->

    <div class="grid md:grid-cols-2 items-start gap-4">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div class="flex flex-col space-y-1.5 p-4">
          <h3>Leaderboard </h3><br></br>
          <h4>World Ranking</h4><br>
        </div>
        <div class="p-0">
          <div class="overflow-auto">
            <div class="relative w-full overflow-auto">
              <table id="leaderboardTable" class="w-full caption-bottom text-sm">

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>

    <!--=============== FOOTER ===============-->
    <!-- <footer id="footer">
    <div class="footercontainer">
     
      <navdowm>
        <a href="./Components/HTMLS/privacy.html">Privacy Policy</a> |
        <a href="#">Terms of Service</a> |
        <a href="#">Contact Us</a> |
        <a href="./Components/HTMLS/about.html">About</a> |
        <a href="./Components/HTMLS/developer.html">Developers</a> |
        <a href="./Components/HTMLS/feedback.html">Feedback</a>
      </navdowm> 
       <p>© TicTacToe. All rights reserved.</p>
    </div>
  </footer> -->


    <footer>
      <?php include "./Components/HTMLS/footer.html"; ?>
    </footer>



    <script src="index.js"></script>

</body>

</html>