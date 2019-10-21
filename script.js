/// generate rondaom passaword
function generate() {

    //set password length /complexity

    let complexity=document.getElementById("slider").Value;

    // possible password values


    let values = "bbiufhvfivkjbfvoichbv;if8389ilu84iu98ewohf";

    let passaword="";


    // Create for loop to choose password characters

    for (var i=0; i<= complexity; i++){
        passaword = passaword+values.charAt(math.floor(math.random()*math.floor (values.lenght-1)));
    }

    // add password to textbox/display area

    document.getElementById("display").value = passaword;

    /// add password to previously generated passwords section

    document.getElementById("lastNums").innerHTML=+passaword+"<br>";

}

/// default lenth display of 25

document.getElementById("length").innerHTML = "Length: 25";

//functionto set lenght based  on slider position

document.getElementById("slider").oninput =function(){
    if(document.getElementById("slider").value>0){
        document.getElementById("lenght").innerHTML= "lenght:" + document.getElementById("slide").Value;
    }
    else {
        document.getElementById("lenght").innerHTML="lenght: 1";
    }
}

/// fucntion to copy password to clipboard

function copypassword(){
    document.getElementById("display").querySelector();

    document.execCommand("copy");

    alert("password copied to clipbord");
}

