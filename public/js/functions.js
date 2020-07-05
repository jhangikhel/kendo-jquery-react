jQuery(document).ready(function(){
	$('input[type="text"], input[type="email"], input[type="tel"]').each(function(){    
	var default_value = $(this).val();        
	$(this).focus(function() {
		if($(this).val() == default_value)
		{
			 $(this).val("");
		}
	}).blur(function(){
		if($(this).val().length == 0) /*Small update*/
		{
			$(this).val(default_value);
		}
	});
});
	
});