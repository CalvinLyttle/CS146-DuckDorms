class Dorm{
    constructor(array,name){
        this.score=0;
        this.array=array;
        this.name=name;
    }
    addScore(index, val){
        this.score+=this.array[index]*val;
    }
}

var Davis  = new Dorm([0,1,1,1,1,1,0,0,1], "Davis");
var CPH    = new Dorm([1,1,1,0,0,1,1,1,0], "CPH");
var Palmer = new Dorm([0,1,1,0,0,0,1,0,0], "Palmer");
var River  = new Dorm([1,1,0,1,0,0,1,0,0], "River");
var Jonas  = new Dorm([1,0,1,0,1,0,1,1,1], "Jonas");
var Humps  = new Dorm([0,1,1,0,0,0,1,0,1], "Humphreys");

var dormArray= [Davis, CPH, Palmer, River, Jonas, Humps];
var user = [];

function getScore(input){
    for (i=0; i<dormArray.length; i++){
        var total = 0;
        for (j=0; j<input.length; j++){
            total += dormArray[i].array[j]*input[j];
        }
        dormArray[i].score = total;
    }
}

function sort(li){
    var newArray=[];
    for (i=0; i<3; i++){
        var highest=-1;
        var location=-1;
        for(j=0;j<li.length;j++){
            if(li[j].score>highest){
                highest=li[j].score;
                location=j;
            }
        }
        newArray.push(li[location]);
        li.splice(location,1);
    }
    return newArray;
}

function validateForm(){
    var name = document.getElementById("name").value;
    var grade = document.getElementById("grade").value;
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
        a = sort(dormArray);
        displayMatches(a);
    }
}


function displayMatches(matches){
    document.querySelector("#Form").classList.add("hide");

    var hall1 = matches[0].name;
    var hall2 = matches[1].name;
    var hall3 = matches[2].name;

    document.querySelector("#"+hall1).classList.remove("hide");
    document.querySelector("#"+hall1).classList.add("match1");
    document.querySelector("#"+hall2).classList.remove("hide");
    document.querySelector("#"+hall2).classList.add("match2");
    document.querySelector("#"+hall3).classList.remove("hide");
    document.querySelector("#"+hall3).classList.add("match3");
}