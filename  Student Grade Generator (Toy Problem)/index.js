// prompt user input
function getUserInput(){
    const marks = prompt("Please Enter your score \'(0 < marks <=100)\':");
    if(marks == null){
        window.alert("You altered the process")
    }else{
        testInput(marks)
    }    

}


// validate user input

function testInput(marks){
    if(!isNaN(marks) && marks > 0 && marks <= 100){
        window.alert("great! Click next to see you score");
        gradeScore(marks);
    }else{
        window.alert("please Enter a score that is a number greater than 0 and less or equal to 100")
        getUserInput()
        
    }
}

// Grade students Score
function gradeScore(marks){
    let grade = "";
    if(marks > 79){
        grade = "A";
        window.alert("Congratulations!! You scored an:: A")
    }else if(marks >= 60){
        grade = "B";
        window.alert("Great!! You scored a:: B")
    }else if(marks >= 50){
        grade = "C";
        window.alert("Above average You scored a:: C")
    }else if(marks >= 40){
        grade = "D";
        window.alert("Ooops you tried!! You scored a:: D")
    }else{
        grade = "E"
        window.alert("Wueh!! You scored an:: E")
    }
}


getUserInput()