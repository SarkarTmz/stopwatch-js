let milli = 0;
let sec = 0;
let min = 0 ;
let hr = 0;

let timer = false;

function start(){
    timer = true;
    myFun();
}

function myFun(){
    if(timer == true){
        milli = milli + 1;
        if(milli == 100){
            sec = sec + 1;
        }
        setTimeout("myFun()",10);
        document.getElementById("milli").innerHTML=milli;
    }

}