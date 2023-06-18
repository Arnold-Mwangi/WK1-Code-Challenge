//declare global constants
const speedLimit = 70;
const pointOfSuspend = 12;
const demerit = 1;

// get user input and handle cancellation of the prompt window by the user

function getUserInput(){
    const speed = prompt("Hello, Enter your speed in km'\s");
    if(speed == null){
        window.alert("you cancelled the operation!!")
    }else{
        validateInput(speed);
    }
}

// validate and clean the input for processing

function validateInput(speed){
    if(!isNaN(speed) && speed > 0){
        speedAnalyzer(speed)
    }else{
        window.alert("Please enter a valid speed")
        getUserInput()
    }
}

//analyze the data to give the rquired response

function speedAnalyzer(speed){
    // check if speed is less than 70
    if(speed < speedLimit){
        window.alert("OK!!")
        // if speed is greater than 70 count the number of demerit point the user deserves
    }else{
        const overspeededBy = Math.floor((speed - speedLimit) / 5);
        const totalDemerits = overspeededBy * demerit;
        if(totalDemerits > pointOfSuspend){
            window.alert("License suspended");
        }else{
            window.alert(`Your total demerit \'s\:: ${totalDemerits}`)
        }
    }
}
// code to launch the program upon windowLoaded event
getUserInput()