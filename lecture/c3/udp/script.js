function base64EncodeUnicode(str) {
    // Firstly, escape the string using encodeURIComponent to get the UTF-8 encoding of the characters,
    // Secondly, we convert the percent encodings into raw bytes, and add it to btoa() function.
    utf8Bytes = encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode("0x" + p1);
    });
    return btoa(utf8Bytes);
}
 $(document).ready(function() {
    $(window).on('load', function () {
               $.getJSON('json-data.json', function(data) {
                  var n = Math.floor(Math.random() * 12);
                  var jd = data.bt[n];
                  $('#n1').text(jd.number1);
                  $('#n2').text(jd.number2);
                  if (window.sessionStorage) {
                     sessionStorage.setItem("checksum", base64EncodeUnicode(jd.checksum));
                     var time = sessionStorage.getItem("time");
                     alert(time); 
                     if (!isNaN(time))
                     {
                        var c = parseInt(sessionStorage.getItem("time"));
                        sessionStorage.setItem("time",time);
                     }
                      else
                     {
                          sessionStorage.setItem("time",1);
                     }
                  }                
               });
            }); 
     $("#check").click(function(){
            var cs = sessionStorage.getItem("checksum");
            var stcs = base64EncodeUnicode($('#csvalue').val());
            var mssv = $('#mssv').val();
            $("#mssvid").text("MSSV: "+mssv+"");
            var time = parseInt(sessionStorage.getItem("time"));
            if (cs == stcs)
            {
               $('#status').html("MSSV: " + mssv +"<br/>Chúc mừng bạn đã giải đúng. Số lần thử là: " + time + " lần.<br/> Hãy xuất file PDF và nộp bài");
            }
            else
            {
                sessionStorage.setItem("time",time + 1);
                $('#status').html("MSSV: " + mssv +"<br/>Chưa đúng. Số lần thử hiện tại là: " + time + " lần.<br/> Hãy thử lại!");
            }
     });
}); 
