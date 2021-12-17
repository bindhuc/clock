 
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
           let to_pm=a-12;
           if(to_pm<=9)hours.innerHTML="0" +to_pm;
        else hours.innerHTML=to_pm;
        am.innerHTML="PM";
        }
        
        else if(a==12 && b>=0){
            hours.innerHTML=a;
            am.innerHTML="PM";
            
        }
     else {
        if(a<=9)hours.innerHTML="0" +a;
        else hours.innerHTML=a;
        am.innerHTML="AM";
      }
        }
    
    setInterval(clock,1000);
    
    
    
    
    function Makediv(){
       var container=document.createElement('div');
       container.className="mc1";
       container.id="dynamic-block";
       
       document.getElementById('mc2').appendChild(container);
       
       var invalue=document.getElementById("sunwakeuptimeselector");
       var invalue1=document.getElementById("lunchwakeuptimeselector");
       var invalue2=document.getElementById("napwakeuptimeselector");
       var value=invalue.options[invalue.selectedIndex].text;
       document.getElementById("dynamic-block").innerHTML="Wake up time "+ value+"<br/> Lunch Time "+
        invalue1.options[invalue1.selectedIndex].text+" <br/>Nap Time "+ invalue2.options[invalue2.selectedIndex].text;
                                               
       
       
    }
    
    
    
    
    var set=0;
    function settime(){
    if(set==0){
        Makediv();
        set++;
    }
    
        
       var i=document.getElementById('sunwakeuptimeselector').value;
       var hourr=new Date().getHours();
    
        if(i== hourr){
        document.getElementById('img_container').style.backgroundImage="url(./lunchimg.jpeg)";
        }
    
        var j=document.getElementById('lunchwakeuptimeselector').value;
       var hourr=new Date().getHours();
    
        if(j== hourr){
        document.getElementById('img_container').style.backgroundImage="url(./wakeup.jpeg)";
        }
    
        var k=document.getElementById('napwakeuptimeselector').value;
       var hourr=new Date().getHours();
    
        if(k== hourr){
        document.getElementById('img_container').style.backgroundImage="url(./gnimg.jpeg)";
        }
    
 
        
      
      
     
    }