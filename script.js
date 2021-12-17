 
    function clock() {
        var hours=document.getElementById("hours");
        var minutes=document.getElementById("minutes");
        var seconds=document.getElementById("seconds");
        var am =document.getElementById("am"); 
    
        var time = new Date();
        var a = time.getHours();
        var b = time.getMinutes();
        var c = time.getSeconds();
        hours.innerHTML=a;
        minutes.innerHTML=b;
        seconds.innerHTML=c;
        
    //     if(a>12){
    //        let to_pm=a-12;
    //        if(to_pm<=9)hours.innerHTML="0" +to_pm;
    //     else hours.innerHTML=to_pm;
    //     am.innerHTML="PM";
    //     }
        
    //     else if(a==12 && b>=0){
    //         hours.innerHTML=a;
    //         am.innerHTML="PM";
            
    //     }
    //   {
    //     if(a<=9)hours.innerHTML="0" +a;
    //     else hours.innerHTML=a;
    //     am.innerHTML="AM";
    //     }
    var invalue=document.getElementById("sunwakeuptimeselector").value;
    
        var invalue1=document.getElementById("lunchwakeuptimeselector").value;
        var invalue2=document.getElementById("napwakeuptimeselector").value;
        // var value=invalue.options[invalue.selectedIndex].text;
        // console.log(invalue);
        // console.log(invalue1);
        // console.log(invalue2); 

        if(invalue==a){
         document.getElementById('img_container').style.backgroundImage="url(./wakeup.jpeg)";
         
            
        }
        
        // var j=document.getElementById('lunchwakeuptimeselector').value;
    
        else if(invalue1==a){
         document.getElementById('img_container').style.backgroundImage="url(./lunchimg.jpeg)";
    
         
        }
        // var k=document.getElementById('napwakeuptimeselector').value;
        else if(invalue2==a){
        document.getElementById('img_container').style.backgroundImage="url(./gnimg.jpeg)";

        }   
    }
     
    setInterval(clock,1000);


    function Makediv(){
        var container=document.createElement('div');
        container.className="mc1";
        container.id="dynamic-block";
        
        document.getElementById('mc2').appendChild(container);
        document.getElementById("dynamic-block").innerHTML="Wake up time" + value + "<br/> Lunch Time "
        + invalue1.options[invalue1.selectedIndex].text +"<br/> Nap Time" +
         invalue2.options[invalue2.selectedIndex].text;
   
    }
        
    //     var invalue=document.getElementById("sunwakeuptimeselector");
    //     var invalue1=document.getElementById("lunchwakeuptimeselector");
    //     var invalue2=document.getElementById("napwakeuptimeselector");
    //     var value=invalue.options[invalue.selectedIndex].text;
    //     document.getElementById("dynamic-block").innerHTML="Wake up time" + value + "<br/> Lunch Time "
    //     + invalue1.options[invalue1.selectedIndex].text +"<br/> Nap Time" +
    //      invalue2.options[invalue2.selectedIndex].text;
   
    //  }document.getElementById("dynamic-block").innerHTML="Wake up time" + value + "<br/> Lunch Time "
        // + invalue1.options[invalue1.selectedIndex].text +"<br/> Nap Time" +
        //  invalue2.options[invalue2.selectedIndex].text;
        // var i=document.getElementById('sunwakeuptimeselector').value;
        // var hourr=new Date().getHours();

var set=0;
    function settime(){
    if(set==0){
        Makediv();
        set++;
    }
        var W=document.getElementById("sunwakeuptimeselector").value;
        var L=document.getElementById("lunchwakeuptimeselector").value;
        var N=document.getElementById("napwakeuptimeselector").value;

        var wake=document.getElementById("wakeup");
        var lunch=document.getElementById("lunch");
        var nap=document.getElementById("nap");

        if(W==24) wake.innerHTML=("Wake up time : "+(W-12)+" AM - "+(01)+"AM");
        else if(W==12) wake.innerHTML=("Wake up time : "+(W)+" PM - "+"01PM");
        else if(W==11) wake.innerHTML=("Wake up time : "+(W)+" AM - "+(12)+"PM");
        else if(W>12) wake.innerHTML=("Wake up time : "+(W-12)+" PM - "+(W-11)+"PM");
        else if(W>0) wake.innerHTML=("Wake up time : "+(W)+" AM - "+(parseInt(W)+1)+"AM");
        else wake.innerHTML=("Wake up time :      --      ");
         // lunch-time
        if(L==24) lunch.innerHTML=("Lunch time : "+(L-12)+" AM - "+(01)+"AM");
        else if(L==12) lunch.innerHTML=("Lunch time : "+(L)+" PM - "+"01PM");
        else if(L==11) lunch.innerHTML=("Lunch time : "+(L)+" AM - "+(12)+"PM");
        else if(L>12) lunch.innerHTML=("Lunch time : "+(L-12)+" PM - "+(L-11)+"PM");
        else if(L>0) lunch.innerHTML=("Lunch time : "+(L)+" AM - "+(parseInt(L)+1)+"AM");
        else lunch.innerHTML=("Lunch time :      --      ");
         // NAP-TIME
        if(N==24) nap.innerHTML=("Nap time : "+(N-12)+" AM - "+(01)+"AM");
        else if(N==12) nap.innerHTML=("Nap time : "+(N)+" PM - "+"01PM");
        else if(N==11) nap.innerHTML=("Nap time : "+(N)+" AM - "+(12)+"PM");
        else if(N>12) nap.innerHTML=("Nap time : "+(N-12)+" PM - "+(N-11)+"PM");
        else if(N>0)nap.innerHTML=("Nap time : "+(N)+" AM - "+(parseInt(N)+1)+"AM");
        else nap.innerHTML=("Nap time :      --      ");
        // var value=invalue.options[invalue.selectedIndex].text;
        // console.log(invalue);
        // console.log(invalue1);
        // console.log(invalue2); 
       
         
        // }
        // // var k=document.getElementById('napwakeuptimeselector').value;
        // if(invalue2==hourr){
        // document.getElementById('img_container').style.backgroundImage="url(./gnimg.jpeg)";

        // }   
    
        
    }
         

         
     
        
         
       
       
      
     


// function settime(){
//     var i=document.getElementById('sunwakeuptimeselector').value;
//     var hour=new Date().getHours();

//     if(i==hour){
//         var i=document.getElementById('right_bottom_container').style.backgroundImage="url(./nap.png)";
//         var i=document.getElementById('text_container').innerHTML="lets have some breakfast";

//     }
// 