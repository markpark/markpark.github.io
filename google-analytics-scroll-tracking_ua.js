


//Google Analytics Scroll reach tracking plugin by Dave Taylor
//Free to use but Please link back if you find this plugin useful - http://www.dave-taylor.co.uk


$(document).ready(function() { 
    var u=0; 
    var d = $(document).height();
   
    var v = $(window).height();
    
    var p = (d/10);
    
    var vp = Math.round((v/d)*100);
     
    
    
   var title = document.title;


    if (v>p) {ga('send','event', title, 'scroll reach', '10%',10,{'nonInteraction': 1} );
    }
      if (v>2*p) {ga('send','event', title, 'scroll reach', '20%',20,{'nonInteraction': 1} );
    }
      if (v>3*p) {ga('send','event', title, 'scroll reach', '30%',30,{'nonInteraction': 1} );
    }
      if (v>4*p) {ga('send','event', title, 'scroll reach', '40%',40,{'nonInteraction': 1} );
    }
      if (v>5*p) {ga('send','event', title, 'scroll reach', '50%',50,{'nonInteraction': 1} );
    }
      if (v>6*p) {ga('send','event', title, 'scroll reach', '60%',60,{'nonInteraction': 1} );
    }
      if (v>7*p) {ga('send','event', title, 'scroll reach', '70%',70,{'nonInteraction': 1} );
    }
      if (v>8*p) {ga('send','event', title, 'scroll reach', '80%',80,{'nonInteraction': 1} );
    }
      if (v>9*p) {ga('send','event', title, 'scroll reach', '90%',90,{'nonInteraction': 1} );
    }
      if (v>10*p) {ga('send','event', title, 'scroll reach', '100%',100,{'nonInteraction': 1} );
    }
    
    var m = Math.floor(v/p);
    
    
    var q =(d*((m+1)/10));
    
    
    var s = (q-v);
     
    
    
 var invoked = false;
 $(window).scroll(function(){
    if ($(window).scrollTop() >= s && !invoked ){
        invoked = {'nonInteraction': 1} ; // don't call this twice
		ga('send','event', title, 'scroll reach', ((m+1)*10) + '%',((m+1)*10),{'nonInteraction': 1} );
    }
});

 var i = false;
 $(window).scroll(function(){
    if ($(window).scrollTop() >= (s+p) && !i ){
        i = {'nonInteraction': 1} ; // don't call this twice
		ga('send','event', title, 'scroll reach', ((m+2)*10) + '%',((m+2)*10),{'nonInteraction': 1} );
    }
});
    
 var j = false;
 $(window).scroll(function(){
    if ($(window).scrollTop() >= (s+(2*p)) && !j ){
        j = {'nonInteraction': 1} ; // don't call this twice
		ga('send','event', title, 'scroll reach', ((m+3)*10) + '%',((m+3)*10),{'nonInteraction': 1} );
    }
});
        
 var k = false;
 $(window).scroll(function(){
    if ($(window).scrollTop() >= (s+(3*p)) && !k ){
        k = {'nonInteraction': 1} ; // don't call this twice
		ga('send','event', title, 'scroll reach', ((m+4)*10) + '%',((m+4)*10),{'nonInteraction': 1} );
    }
});

 var l = false;
 $(window).scroll(function(){
    if ($(window).scrollTop() >= (s+(4*p)) && !l ){
        l = {'nonInteraction': 1} ; // don't call this twice
		ga('send','event', title, 'scroll reach', ((m+5)*10) + '%',((m+5)*10),{'nonInteraction': 1} );
    }
});

 var x = false;
 $(window).scroll(function(){
    if ($(window).scrollTop() >= (s+(5*p)) && !x ){
        x = {'nonInteraction': 1} ; // don't call this twice
		ga('send','event', title, 'scroll reach', ((m+6)*10) + '%',((m+6)*10),{'nonInteraction': 1} );
    }
});
    
    
 var n = false;
 $(window).scroll(function(){
    if ($(window).scrollTop() >= (s+(6*p)) && !n ){
        n = {'nonInteraction': 1} ; // don't call this twice
		ga('send','event', title, 'scroll reach', ((m+7)*10) + '%',((m+7)*10),{'nonInteraction': 1} );
    }
});
    
    
 var o = false;
 $(window).scroll(function(){
    if ($(window).scrollTop() >= (s+(7*p)) && !o ){
        o = {'nonInteraction': 1} ; // don't call this twice
		ga('send','event', title, 'scroll reach', ((m+8)*10) + '%',((m+8)*10) ,{'nonInteraction': 1} );
    }
});
    
 var b = false;
 $(window).scroll(function(){
    if ($(window).scrollTop() >= (s+(8*p)) && !b ){
        b = {'nonInteraction': 1} ; // don't call this twice
		ga('send','event', title, 'scroll reach', ((m+9)*10) + '%',((m+9)*10),{'nonInteraction': 1} );
    }
});
    
 var c = false;
 $(window).scroll(function(){
    if ($(window).scrollTop() >= (s+(9*p)) && !c ){
        c = {'nonInteraction': 1} ; // don't call this twice
		ga('send','event', title, 'scroll reach', ((m+10)*10) + '%',((m+10)*10),{'nonInteraction': 1} );
    }
});
    
     
});






