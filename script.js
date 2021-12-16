 
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
        
        if(a>12){
           let to_pm=h-12;
           if(to_pm<=9)hours.innerHTML="0" +pm;
        else hours.innerHTML=to_pm;
        am.innerHTML="PM";
        }
        
        else if(a==12 && b>=0){
            hours.innerHTML=a;
            am.innerHTML="PM";
            
        }
      {
        if(a<=9)hours.innerHTML="0" +h;
        else hours.innerHTML=a;
        am.innerHTML="AM";
        }
       
    }  
    setInterval(clock,1000);


    function Makediv(){
        var container=document.createElement('div');
        container.className="body";
        container.id="dynamic-block";
        
        document.getElementById('main_container').appendChild(container);
        
        var invalue=document.getElementById("sunwakeuptimeselector");
        var invalue1=document.getElementById("lunchwakeuptimeselector");
        var invalue2=document.getElementById("napwakeuptimeselector");
        var value=invalue.options[invalue.selectedIndex].text;
        document.getElementById("dynamic-block").innerHTML="Wake up time "+ value+"<br/> Lunch Time "
        + invalue1.options[invalue1.selectedIndex].text+" <br/>Nap Time "+
         invalue2.options[invalue2.selectedIndex].text;
   
     }


    function settime(){
    
        var i=document.getElementById('sunwakeuptimeselector').value;
        var hourr=new Date().getHours();

        if(i==hourr){
         document.getElementById('img_container').style.backgroundImage="url(./wakeup.jpeg)";
         
            
        }
        
        var j=document.getElementById('lunchwakeuptimeselector').value;
    
        if(j==hourr){
         document.getElementById('img_container').style.backgroundImage="url(./lunch.png)";
    
         
        }
        var k=document.getElementById('napwakeuptimeselector').value;
        if(k==hourr){
        document.getElementById('img_container').style.backgroundImage="url(./gnimg.png)";

        }   
    Makediv();
        }
     
         

         
     
        
         
       
       
      
     


// function settime(){
//     var i=document.getElementById('sunwakeuptimeselector').value;
//     var hour=new Date().getHours();

//     if(i==hour){
//         var i=document.getElementById('right_bottom_container').style.backgroundImage="url(./nap.png)";
//         var i=document.getElementById('text_container').innerHTML="lets have some breakfast";

//     }
// }