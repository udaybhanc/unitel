$(document).ready(function(){
             $(".button-collapse").sideNav();
			 /*right sidebar height*/
			 var window_height = $(window).height();
			 var header_height = $(".navbar-fixed").height();
			 var main_panel = window_height - header_height;
			 
			// alert(window_height);
			//  alert($(".navbar-fixed").height());
			// alert(right_sidebar_hgt);
			$(".sidebar").height(main_panel);
			$(".login-wrapper").height(window_height); 
	
			//drop down code
			$('select').material_select();


      }); 