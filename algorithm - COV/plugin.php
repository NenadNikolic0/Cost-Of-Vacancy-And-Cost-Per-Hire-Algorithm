<?php
/*
Plugin Name: COV and CPH algorithm
Description: After plugin installation put this shortcode '[kod]' into the page you want or text widget
Version: 1.0
*/


function loadScript()
{
	
    // Register the style like this for a plugin:
    wp_register_style( 'custom-css', plugins_url( '/css/custom.css', __FILE__ ), false, NULL, 'all'  );
 
    // For either a plugin or a theme, you can then enqueue the style:
    wp_enqueue_style( 'custom-css' );
	
		
    // Register the script like this for a plugin:
    wp_register_script( 'custom-script', plugins_url( '/js/custom.js', __FILE__ ), array( 'jquery'), NULL, true );

    // For either a plugin or a theme, you can then enqueue the script:
    wp_enqueue_script( 'custom-script' );
		
}


add_action( 'wp_enqueue_scripts', 'loadScript' );


 
add_shortcode("kod","demo_posts");




function demo_posts() {

    $_SESSION["successEmail"] = 0;

   if (isset($_POST["submit"]))
   {
       $choose = $_POST["radioButtonGroup"];
               
       if($choose=="cov")
       {
         $tw = $_POST["tw"];
         $cic = $_POST["cic"];
         $oo = $_POST["oo"];
         $oce = $_POST["oce"];
        

         //calculation 
         
         $result = ($tw/$cic)*($oo*$oce); 
        
		 $result=number_format((float)$result, 2, '.', '');
       
       
        $to = $_POST["email"];
        $subject = 'Your cost of vacancy';
        $message = "Your cost of vacancy is: &nbsp; <b>".$result."<b/> &euro; <br/><br/><br/><br/>";
		$message.= "<img src='http://akub-consulting.com/wp-content/uploads/2017/05/akub.png' width=200 height=70 /> <br/><br/>";
		$message.= "<span style='color:#d3d3d3;'>AKUB Consulting UG</span><br/>";
		$message.= "<span style='color:#d3d3d3;'>Markgrafenallee 101</span><br/>";
		$message.= "<span style='color:#d3d3d3;'>74541 Vellberg </span><br/>";
		$message.= "<span style='color:#d3d3d3;'>Deutschland</span><br/>";
		$message.= "<span style='color:#d3d3d3;'>Tel.: +49 (0) 7907 5899879</span><br/>";
		$message.= "<span style='color:#d3d3d3;'>Fax: +49 (0) 7907 5899961</span><br/>";
		

        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset="UTF-8"';

        // Additional headers

        $headers[] = 'From: <kuebler@akub-consulting.com>';
   
      

        
        mail( $to, $subject, $message, implode("\r\n", $headers) );
         
        $_SESSION["successEmail"] = 1;
		
     
        
       }
       
       else
       {
         $gesamte = $_POST["gesam"];
         $anzahl = $_POST["anzahl"];
		 
	
         //calculation 
         
         $result = round($gesamte/$anzahl) ;
		 
		 $result=number_format((float)$result, 2, '.', '');
		 
	
		 
        $to = $_POST["email"];
        $subject = 'Cost-per-Hire';
        $message = "Cost-Per-Hire (Gesamt): &nbsp; <b>".$result."<b/> &euro; <br/><br/><br/><br/>";
        $message.= "<img src='http://akub-consulting.com/wp-content/uploads/2017/05/akub.png' width=200 height=70 /> <br/><br/>";
		$message.= "<span style='color:#d3d3d3;'>AKUB Consulting UG</span><br/>";
		$message.= "<span style='color:#d3d3d3;'>Markgrafenallee 101</span><br/>";
		$message.= "<span style='color:#d3d3d3;'>74541 Vellberg </span><br/>";
		$message.= "<span style='color:#d3d3d3;'>Deutschland</span><br/>";
		$message.= "<span style='color:#d3d3d3;'>Tel.: +49 (0) 7907 5899879</span><br/>";
		$message.= "<span style='color:#d3d3d3;'>Fax: +49 (0) 7907 5899961</span><br/>";

        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset="UTF-8"';

        // Additional headers

        $headers[] = 'From:  <kuebler@akub-consulting.com>';
  
      

        
        mail( $to, $subject, $message, implode("\r\n", $headers) ); 

        $_SESSION["successEmail"] = 1;
		
	  
		
	
      

       }


   }



  ?>
  
  <form action="<?php echo get_permalink(); ?>" method="post" enctype="multipart/form-data">
  <input type="radio"  name="radioButtonGroup" value="cov" class="cov" checked/> Cost of vacancy <br>
  <input type="radio"  name="radioButtonGroup" value="coh" class="cph"/> Cost per hire <br>
  <div id="main-tab">
    <table>
	  <tbody>
                
	    <tr><td>Jahresgehalt</td> <td><input name='tw'  type="number" min="0" value="0" /></td></tr>
		<tr><td>Durchschnittliche Arbeitstage</td> <td><input name='cic'  type="number" min="1" value="1" /></td></tr>
		<tr><td>Faktor</td> <td><input name='oo'  type="number" min="0" value="0" /></td></tr>
		<tr><td>Durchschnittliche Recruitingzeit(in Arbeitstagen)</td> <td><input name='oce' type="number" min="0" value="0" /></td></tr>		
				
	  </tbody>
	</table>
  
  </div>
  
  <input type="checkbox" id="newsletter" /> Tragen Sie sich jetzt in unseren Recruiting-Letter ein und erhalten Sie die Ergebnisse direkt per E-Mail.
  
  <div class="empty-div">
  
  </div>
  
  <iframe id = "email-iframe" src="https://app.getresponse.com//site2//kostenloseshandout?u=SWCQP&webforms_id=11209702&v=0" class="iframe-window"></iframe>
  
  <div id="calculation"> 
          
          <span>Email Address erneut eingeben:</span> <br/>
          <input type="email" name="email" id="emailField"  />    <br/> 
          <div class="empty-div">
          </div>   
          <input id="calculate" name="submit" type="submit" value="Senden" />
          <div class="empty-div">
          </div>                      	
  </div>

  
   <span class="message success"><?php if($_SESSION["successEmail"]==1){echo "Die Ergebnisse wurden erfolgreich versendet."; } ?></span>
   

 
  
  </form>
  <?php
      
}



?>