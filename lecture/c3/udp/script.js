 $(document).ready(function() {
         $("#driver").click(function(event){
               $.getJSON('json-data.json', function(data) {
                  var n = Math.floor(Math.random() * 10);
                  var jd = data.bt[n];
                  $('#n1').text(jd.number1);
                  $('#n2').text(jd.number2);
                  $('#csvalue').text(jd.checksum);
               });
            });
               
         });
