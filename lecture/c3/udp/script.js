 $(document).ready(function() {
            $("#driver").click(function(event){
               $.getJSON('json-data.json', function(jd) {
                  $('#stage').html('<p> Số 1: ' + jd.number1 + '</p>');
                  $('#stage').append('<p>Số 2 : ' + jd.number2+ '</p>');
                  $('#stage').append('<p> Checksum: ' + jd.checksum+ '</p>');
               });
            });
               
         });
