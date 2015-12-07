$(document).ready(function() {
   $('#password').bind("keyup", function(e) {
     if (e.which == 13) {
        $('#bloguj1').focus().click();
     }
   });
});
