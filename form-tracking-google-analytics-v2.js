//Google Analytics Form tracking plugin by Dave Taylor
//Free to use but Please link back if you find this plugin useful - http://www.dave-taylor.co.uk
//Get in touch via the website if you have ideas for improvement or for other plugins


$(window).load(function(){
     
     
     
     
     var d=0;
     var t=0;
     $(':input').focus(function () {
     d=new Date();
     t =d.getTime();
                });

    $(':input').blur(function() {
    var e=new Date();
    var x = e.getTime();
    var exit = Math.round((x - t)/1000);
    	var formPage = document.title;
		        if($(this).val().length > 0){ga('send','event', 'Form: ' + formPage, 'field filled',$(this).attr('name'),exit);
        } 
        
	});
 
 var formPage = document.title;
 
$( "input[type=checkbox], [type=radio]" ).click (function ()
    {
	if ($(this).attr("checked") == "checked")
    {ga('send','event', 'Form: ' + formPage, 'field filled',$(this).attr('name') + ': ' + $(this).attr('value'));
    }
    else
    {ga('send','event', 'Form: ' + formPage, 'unchecked checkbox',$(this).attr('name') + ': ' + $(this).attr('value'));
    }
	});
    
$( "input[type=submit]" ).click (function ()
    {ga('send','event', 'Form: ' + formPage, 'submit','click');
    });
    
    
 }); 

