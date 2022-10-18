function addUser(){
    player_1name = document.getElementById("player1nameinput").value;
    player_2name = document.getElementById("player2nameinput").value;

    localStorage.setItem("player1",player_1name);
    localStorage.setItem("player2",player_2name);

    window.location="game_page.html";
}