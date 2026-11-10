function dollarToPounds(){

    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");

    if(dollar==""){
        result.innerHTML="Enter A Value";
        return false;
    }else if(isNaN(dollar)){
        result.innerHTML="Enter Number Not Text";
        return false;
    }else if(dollar<0){
        result.innerHTML="Enter A Positive Value";
        return false;
    }else if(dollar==0){
        result.innerHTML="Enter A Number Rather Than Zero";
        return false;
    }else{
        result.innerHTML= dollar*50 + "Egyptian Pounds";
        return false;
    }

}
