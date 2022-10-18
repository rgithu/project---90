player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn : "+player1_name;
document.getElementById("player_answer").innerHTML="Anwer turn : "+player2_name;

function send(){
    Getword = document.getElementById("word").value;
    word =Getword.toLowerCase();
    console.log(word);
    alphabet1 = word.charAt(1);
    console.log(alphabet1);
    lengthdivide2= Math.floor(word.length/2);
    alphabet2 = word.charAt(lengthdivide2);
    console.log(alphabet2);
    lengthsubtract1 = word.length-1;
    alphabet3 = word.charAt(lengthsubtract1);
    console.log(alphabet3);
    removealphabet1 = word.replace(alphabet1,"_");
    console.log(removealphabet1);
    removealphabet2 = removealphabet1.replace(alphabet2,"_");
    console.log(removealphabet2);
    removealphabet3 = removealphabet2.replace(alphabet3,"_");
    console.log(removealphabet3);
    question = "<h4 id='word_display'>Q."+removealphabet3+"</h4>";
    ibox="<br>Answer : <input type='text' id='input_check_box'>";
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question+ibox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value=""; 
}

question_turn = "player1";
answer_turn = "player2";


function check(){
     get_answer = document.getElementById("input_check_box").value;
     answer = get_answer.toLowerCase();
     console.log("word in lower case - " +answer);
     if(answer == word){
        if(answer_turn == "player1"){
            player1_score = player1_score+1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score+1;
            document.getElementById("player2_score").innerHTML = player2_score;  
        }
     }

     if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML="question turn - "+player2_name;
     }
     else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML="question turn - "+player1_name;
     }
     if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML="answer turn - "+player2_name;
     }
     else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML="answer turn - "+player1_name;
     }
     document.getElementById("output").innerHTML = "";
}