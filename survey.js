
var user  = []
var Davis  = [1,0,1,1,0,1,0,1,1]
var CPH    = [0,1,1,1,0,0,1,1,1]
var Palmer = [0,1,1,1,0,0,1,1,1]
var River  = [0,1,1,1,0,0,1,1,1]
var Jonas  = [0,1,1,1,0,0,1,1,1]
var Humps  = [0,1,1,1,0,0,1,1,1]

var dormValues = [Davis, CPH, Palmer, River, Jonas, Humps];

var dScore = 0;
var cScore = 0;
var pScore = 0;
var rScore = 0;
var jScore = 0;
var hScore = 0;

var dormScores = [0, 0, 0, 0, 0, 0];

function getScore(input){
    for (i=0; i<dormScores.length; i++){
        var total = 0;
        for (j=0; j<input.length; j++){
            total += dormValues[i][j]*input[j];
        }
        dormScores[i] = total;
    }
}

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
        final = getScore(user).sort().reverse();
    }
}