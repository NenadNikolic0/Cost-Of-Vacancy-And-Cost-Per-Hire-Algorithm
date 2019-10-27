jQuery(document).ready(function(){


  
   


	
	var html = "";	
	
	jQuery("#calculation").css("display","none");
        
		
	jQuery('.cov').change(function() {
		
	
		
    if (jQuery(".cov").attr('checked', 'checked')){
		jQuery("#main-tab").empty();
		
	html= "<table>" + 
	      " <tbody> " + 
         
	      "   <tr><td>Jahresgehalt</td> <td><input name='tw' type='number' min='0' value='0' /></td></tr> " +
		  "   <tr><td>Durchschnittliche Arbeitstage</td> <td><input name='cic' type='number' min='1' value='1' /></td></tr>" +
		  "   <tr><td>Faktor</td> <td><input name='oo' type='number' min='0' value='0' /></td></tr>" +
		  "   <tr><td>Durchschnittliche Recruitingzeit(in Arbeitstagen)</td> <td><input name='oce' type='number' min='0' value='0' /></td></tr>" +		  
	      " </tbody> " + 
	      "</table>" ;
		
		
		jQuery("#main-tab").append(html);

                jQuery(".cph").attr('checked', false);

	}
	

     
    });
	
	
	
    jQuery(".cph").change(function() {

   
		
    if (jQuery(".cph").attr('checked', 'checked')){
		jQuery("#main-tab").empty();
          
        html= "<table >" + 
	      " <tbody> " + 
              "<tr><td class='title' colspan='2'>Berechnen Sie hier Ihre Cost-Per-Hire</td></tr> " +
			  "   <tr class='dotted'><td></td> <td></td></tr> " +
			  "   <tr><td class='subtitle' colspan='2'>Externe Kostenstellen:</td></tr> " +
	      "   <tr><td>Kosten für Stellenanzeigen</td> <td><input id='kov' type='number' min='0' value='0' /></td></tr> " +
		  "   <tr><td>Personalmarketing</td> <td><input id='pm' type='number' min='0' value='0' /></td></tr> " +
		  "   <tr><td>Personaldienstleister</td> <td><input id='pd' type='number' min='0' value='0' /></td></tr> " +
		  "   <tr><td>Auswahlverfahren</td> <td><input id='aw' type='number' min='0' value='0' /></td></tr> " +
		  "   <tr><td>Reisekosten</td> <td><input id='rk' type='number' min='0' value='0' /></td></tr> " +
		  "   <tr><td>IT-Infrastruktur</td> <td><input id='iti' type='number' min='0' value='0' /></td></tr> " +
		  "   <tr><td>Externe Kosten (Gesamt)</td> <td><input id='ekg' type='number' min='0' value='0' disabled /></td></tr> " +
		  "   <tr class='dotted'><td></td> <td></td></tr> " +
		  "   <tr><td class='subtitle' colspan='2'>Interne Kostenstellen:</td></tr> " +
		  "   <tr><td>Personalkosten (HR-Abteilung)</td> <td><input id='pkn' type='number' min='0' value='0'  /></td></tr> " +
		  "   <tr><td>Fortbildungskosten</td> <td><input id='fbk' type='number' min='0' value='0'  /></td></tr> " +
		  "   <tr><td>Assoziierte Kosten</td> <td><input id='ask' type='number' min='0' value='0'  /></td></tr> " +
		  "   <tr><td>Weitere Personalkosten</td> <td><input id='wpk' type='number' min='0' value='0'  /></td></tr> " +
		  "   <tr><td>Interne Kosten (Gesamt)</td> <td><input id='ikgtwo' type='number' min='0' value='0' disabled  /></td></tr> " +
		  "   <tr class='dotted'><td></td> <td></td></tr> " +
		  "   <tr><td class='subtitle' colspan='2'>Kosten Gesamt:</td></tr> " +
		  "   <tr><td>Gesamtkosten</td> <td><input id='gk' name='gesamte' type='number' min='0' value='0' disabled  /></td></tr> " +
		  "   <tr class='dotted'><td></td> <td></td></tr> " +
		  "   <tr><td class='subtitle' colspan='2'>Besetzte Positionen:</td></tr> " +
		  "   <tr><td>Anzahl</td> <td><input id='anzahl' name='anzahl' type='number' min='0' value='0'  /></td></tr> " +
		  "   <tr class='dotted'><td></td> <td></td></tr> " +
		  "   <tr><td colspan='2'><input id='gesam' name='gesam' type='hidden'  /></td></tr> " +

		  
				  	
	      " </tbody> " + 
	      "</table>" ;
		
		
		jQuery("#main-tab").append(html);

                jQuery(".cov").attr('checked', false);

	}
	
	    
    });
	
	
  jQuery("#newsletter").change(function() {

   		
    if (jQuery(this).is(":checked")){
	
		jQuery("#calculation").css("display","block");
		jQuery("#email-iframe").css("display","block");
	}
	else{
		jQuery("#calculation").css("display","none");
		jQuery("#email-iframe").css("display","none");
	}
	
	     
    });

    
function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validate() {
  jQuery("#result").text("");
  var email = jQuery("#emailField").val();
  if (!validateEmail(email)) {
    return false;
  }
  else {
   return true;
  } 

}

   jQuery("#calculate").click(function(e) {


 
   if(validate()==false){
    jQuery(".message").text("Incorrect email format.");
    jQuery(".message").css("color", "red");
    e.preventDefault();
    e.stopPropagation();
    }
   
 

    
  


  });
  
  jQuery(document).on("focusout","#kov",function() {
  
   
  
    var result = parseInt(jQuery( "#kov" ).val()) + parseInt(jQuery( "#pm" ).val()) + parseInt(jQuery( "#pd" ).val()) + parseInt(jQuery( "#aw" ).val()) + parseInt(jQuery( "#rk" ).val()) + parseInt(jQuery( "#iti" ).val());
	    
    jQuery( "#ekg" ).val(result);
	
	var totalresult = parseInt(jQuery( "#ekg" ).val()) + parseInt(jQuery( "#ikgtwo" ).val());
	
	jQuery( "#gk" ).val(totalresult);
	jQuery( "#gesam" ).val(totalresult);
  
  });
  
    jQuery(document).on("focusout","#pm",function() {
  
  
  
     var result = parseInt(jQuery( "#kov" ).val()) + parseInt(jQuery( "#pm" ).val()) + parseInt(jQuery( "#pd" ).val()) + parseInt(jQuery( "#aw" ).val()) + parseInt(jQuery( "#rk" ).val()) + parseInt(jQuery( "#iti" ).val());
	
    
    jQuery( "#ekg" ).val(result);
	
    var totalresult = parseInt(jQuery( "#ekg" ).val()) + parseInt(jQuery( "#ikgtwo" ).val());
	
	jQuery( "#gk" ).val(totalresult);
    jQuery( "#gesam" ).val(totalresult);
  
  });
  
    jQuery(document).on("focusout","#pd",function() {
  
   
  
     var result = parseInt(jQuery( "#kov" ).val()) + parseInt(jQuery( "#pm" ).val()) + parseInt(jQuery( "#pd" ).val()) + parseInt(jQuery( "#aw" ).val()) + parseInt(jQuery( "#rk" ).val()) + parseInt(jQuery( "#iti" ).val());
	
    
    jQuery( "#ekg" ).val(result);
	
    var totalresult = parseInt(jQuery( "#ekg" ).val()) + parseInt(jQuery( "#ikgtwo" ).val());
	
	jQuery( "#gk" ).val(totalresult);
	jQuery( "#gesam" ).val(totalresult);
  
  });
  
    jQuery(document).on("focusout","#aw",function() {
  
    var ekg = parseInt(jQuery( "#ekg" ).val());
  
     var result = parseInt(jQuery( "#kov" ).val()) + parseInt(jQuery( "#pm" ).val()) + parseInt(jQuery( "#pd" ).val()) + parseInt(jQuery( "#aw" ).val()) + parseInt(jQuery( "#rk" ).val()) + parseInt(jQuery( "#iti" ).val());
	
    
    jQuery( "#ekg" ).val(result);
	
    var totalresult = parseInt(jQuery( "#ekg" ).val()) + parseInt(jQuery( "#ikgtwo" ).val());
	
	jQuery( "#gk" ).val(totalresult);
	jQuery( "#gesam" ).val(totalresult);
  
  });
  
    jQuery(document).on("focusout","#rk",function() {
  
    var ekg = parseInt(jQuery( "#ekg" ).val());
  
     var result = parseInt(jQuery( "#kov" ).val()) + parseInt(jQuery( "#pm" ).val()) + parseInt(jQuery( "#pd" ).val()) + parseInt(jQuery( "#aw" ).val()) + parseInt(jQuery( "#rk" ).val()) + parseInt(jQuery( "#iti" ).val());
	
    
    jQuery( "#ekg" ).val(result);
	
		var totalresult = parseInt(jQuery( "#ekg" ).val()) + parseInt(jQuery( "#ikgtwo" ).val());
	
	jQuery( "#gk" ).val(totalresult);
	jQuery( "#gesam" ).val(totalresult);
  
  });
  
    jQuery(document).on("focusout","#iti",function() {
  
    var ekg = parseInt(jQuery( "#ekg" ).val());
  
     var result = parseInt(jQuery( "#kov" ).val()) + parseInt(jQuery( "#pm" ).val()) + parseInt(jQuery( "#pd" ).val()) + parseInt(jQuery( "#aw" ).val()) + parseInt(jQuery( "#rk" ).val()) + parseInt(jQuery( "#iti" ).val());
	
    
    jQuery( "#ekg" ).val(result);
	
		var totalresult = parseInt(jQuery( "#ekg" ).val()) + parseInt(jQuery( "#ikgtwo" ).val());
	
	jQuery( "#gk" ).val(totalresult);
	jQuery( "#gesam" ).val(totalresult);
  
  });
  
      jQuery(document).on("focusout","#pkn",function() {
  
    var ekg = parseInt(jQuery( "#ekg" ).val());
  
     var result = parseInt(jQuery( "#pkn" ).val()) + parseInt(jQuery( "#fbk" ).val()) + parseInt(jQuery( "#ask" ).val()) + parseInt(jQuery( "#wpk" ).val());
	
    
    jQuery( "#ikgtwo" ).val(result);
	
		var totalresult = parseInt(jQuery( "#ekg" ).val()) + parseInt(jQuery( "#ikgtwo" ).val());
	
	jQuery( "#gk" ).val(totalresult);
	jQuery( "#gesam" ).val(totalresult);
  
  });
  
      jQuery(document).on("focusout","#fbk",function() {
  
    var ekg = parseInt(jQuery( "#ekg" ).val());
  
     var result = parseInt(jQuery( "#pkn" ).val()) + parseInt(jQuery( "#fbk" ).val()) + parseInt(jQuery( "#ask" ).val()) + parseInt(jQuery( "#wpk" ).val());
	
    
    jQuery( "#ikgtwo" ).val(result);
	
		var totalresult = parseInt(jQuery( "#ekg" ).val()) + parseInt(jQuery( "#ikgtwo" ).val());
	
	jQuery( "#gk" ).val(totalresult);
	jQuery( "#gesam" ).val(totalresult);
  
  });
  
      jQuery(document).on("focusout","#ask",function() {
  
    var ekg = parseInt(jQuery( "#ekg" ).val());
  
     var result = parseInt(jQuery( "#pkn" ).val()) + parseInt(jQuery( "#fbk" ).val()) + parseInt(jQuery( "#ask" ).val()) + parseInt(jQuery( "#wpk" ).val());
	
    
    jQuery( "#ikgtwo" ).val(result);
	
		var totalresult = parseInt(jQuery( "#ekg" ).val()) + parseInt(jQuery( "#ikgtwo" ).val());
	
	jQuery( "#gk" ).val(totalresult);
	jQuery( "#gesam" ).val(totalresult);
  
  });
  
      jQuery(document).on("focusout","#wpk",function() {
  
   
  
     var result = parseInt(jQuery( "#pkn" ).val()) + parseInt(jQuery( "#fbk" ).val()) + parseInt(jQuery( "#ask" ).val()) + parseInt(jQuery( "#wpk" ).val());
	
    
    jQuery( "#ikgtwo" ).val(result);
	
		var totalresult = parseInt(jQuery( "#ekg" ).val()) + parseInt(jQuery( "#ikgtwo" ).val());
	
	jQuery( "#gk" ).val(totalresult);
	jQuery( "#gesam" ).val(totalresult);
  
  });
	
	

	
	
	
	
});