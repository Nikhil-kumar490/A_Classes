function login(){
    var username= document.getElementById("USERNAME").Value;
    var password= document.getElementById("PASSWORD").Value;

    if(username !=""){
        if(password != "")
            {
            alert("Login Succesful");
        }else{
            alert("Enter Password");
        }
    }
    else{
        alert("Enter Username");
    }
}