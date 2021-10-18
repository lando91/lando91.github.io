 $(document).ready(function() {
    $(window).on('load', function () {
               $.getJSON('json-data.json', function(data) {
                  var n = Math.floor(Math.random() * 10);
                  var jd = data.bt[n];
                  $('#n1').text(jd.number1);
                  $('#n2').text(jd.number2);
                  if (window.sessionStorage) {
                     sessionStorage.setItem("checksum", jd.checksum);
                  }
               });
            });  
         });
