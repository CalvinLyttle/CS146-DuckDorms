/* List of the values that the user submitted on the form*/
var user  = []

/* Each Dorm Halls answers to the questions 

Order: bathroom, ac, cost, class closeness, lounge, view, storage, co-ed, RA

NOTE: need real values here */
var Davis  = [1,0,1,1,0,1,0,1,1]
var CPH    = [0,1,1,1,0,0,1,1,1]
var Palmer = [0,1,1,1,0,0,1,1,1]
var River  = [0,1,1,1,0,0,1,1,1]
var Jonas  = [0,1,1,1,0,0,1,1,1]
var Humps  = [0,1,1,1,0,0,1,1,1]

var dormValues = [Davis, CPH, Palmer, River, Jonas, Humps];

/* Scores for each dorm */
var dScore = 0;
var cScore = 0;
var pScore = 0;
var rScore = 0;
var jScore = 0;
var hScore = 0;

/* List of the final scores of the dorm halls
Order: Davis, CPH, Palmer, River, Jonas, Humps */
var dormScores = [0, 0, 0, 0, 0, 0];

/* Uses the Dorm hall answers to calculate the score for each hall */
function getScore(input){
    for (i=0; i<dormScores.length; i++){
        var total = 0;
        for (j=0; j<input.length; j++){
            total += dormValues[i][j]*input[j];
        }
        dormScores[i] = total;
    }
    setScores(dormScores);
}

/* Sets the score equal to the score calcuated in getScore() */
function setScores(input){
    dScore = input[0];
    cScore = input[1];
    pScore = input[2];
    rScore = input[3];
    jScore = input[4];
    hScore = input[5];
}

/* Will order the list of dorms according to the lowest score

NOTE:
Within duckDormsForm.html, the value assigned for each question is opposite of what
was expected in the first place. (Originally it was thought that the highest score
would be the closest match but it reality, it is the lowest score that is the closest match) */
function findMatches(){
    
}

/* When the form is submitted, this function runs. This function check to make sure that
a name, grade, and all the questions are answered. If all elements are filled out, it will
run the rest of the functions to determine the order of results for them. */
function validateForm(){
    var name = document.getElementById("name").value
    var grade = document.getElementById("grade").value
    var q1 = document.querySelector('input[name="q1"]:checked').value;

    user.push(document.querySelector('input[name="q2"]:checked').value);
    user.push(document.querySelector('input[name="q3"]:checked').value);
    user.push(document.querySelector('input[name="q4"]:checked').value);
    user.push(document.querySelector('input[name="q5"]:checked').value);
    user.push(document.querySelector('input[name="q6"]:checked').value);
    user.push(document.querySelector('input[name="q7"]:checked').value);
    user.push(document.querySelector('input[name="q8"]:checked').value);
    user.push(document.querySelector('input[name="q9"]:checked').value);
    user.push(document.querySelector('input[name="q10"]:checked').value);
    
    if ((name == "") || (grade == "") || (q1 == "") || (user.length != 9)){
        document.getElementById("error").innerHTML = "Please Fill Out the Form Completely.";
    }
    else{
        getScore(user);
        findMatches();
    }
}



function initalizeMatches(){
    document.querySelector("#Form").classList.remove("hide");

    var node = document.querySelector("main div");
    node.classList.add("hide");
}

function displayMatches(matches){
    document.querySelector("#Form").classList.add("hide");



    var hall1 = matches[0].name;
    var hall2 = matches[1].name;
    var hall3 = matches[2].name;

    document.querySelector("#"+toString(hall1)).classList.remove("hide");
    document.querySelector("#"+toString(hall1)).classList.add("match1");
    document.querySelector("#"+toString(hall2)).classList.remove("hide");
    ocument.querySelector("#"+toString(hall1)).classList.add("match2");
    document.querySelector("#"+toString(hall3)).classList.remove("hide");
    ocument.querySelector("#"+toString(hall1)).classList.add("match3");
}