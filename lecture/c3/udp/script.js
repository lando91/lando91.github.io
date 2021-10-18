 $(document).ready(function() {
         $("#driver").click(function(event){
               $.getJSON('json-data.json', function(data) {
                  var jd = data.bt[0];
                  $('#n1').text(jd.number1);
                  $('#n2').text(jd.number2);
                  $('#csvalue').text(jd.checksum);
               });
            });
               
         });
