
function submit_v(){
    var name=document.getElementById('text_name').value;
    var email=document.getElementById('text_email').value;
    var password=document.getElementById('text_pass').value;
    if(name===''|| email===''|| password==='')
    {
        
        alert("All fields are required");
        
        return false;
    }
    else if(name.length<4){
        document.getElementById("call").innerHTML="Name must be 4 characters";
         
        return false; 
    }
    else if(password.length<4){
    document.getElementById("call").innerHTML="Password must be 4 characters";
    
        return false;
    }
    else{
        return true;
    }
}


