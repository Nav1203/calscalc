function calbmr(wght,gen,age,hght,act){
    var bmr=0;
    if(gen=='m')
    {
        bmr=(10*wght)+(6.25*hght)-(5*age)+5;
    }
    else if(gen=='f'){
        bmr=(10*wght)+(6.25*hght)-(5*age)-161;
   }
   if(bmr!=0)
   {
        var mnt=act*bmr;
        return mnt;
   }
   else{
    return 0;
   }
}

function getval(){
    var gen,wght,hght,act;
    console.log(document.querySelector('input[name="gender"]:checked').value)
    gen=document.querySelector('input[name="gender"]:checked').value;
    wght=parseFloat(document.getElementById('wght').value);
    hght=parseInt(document.getElementById('hght').value);
    age=parseInt(document.getElementById('age').value);
    console.log();
    var sels=document.getElementById("phy-act")
    act=parseFloat(sels.options[sels.selectedIndex].value)
    var res=calbmr(wght,gen,age,hght,act)
    console.log(res);
    sels.selectedIndex=0;
    document.getElementById('m').checked=false;
    document.getElementById('f').checked=false;
    document.getElementById('age').value=null;
    document.getElementById('hght').value=null;
    document.getElementById('wght').value=null;
    document.getElementById('results').innerHTML="Your Maintenance Calorie is "+String(res.toFixed(2))+"<br> Minimum Calorie to Eat to Loose Weight: "+String((res-500).toFixed(2))+"<br> Maximum Calorie to Eat to Gain Weight: "+String((res+500).toFixed(2));
}
