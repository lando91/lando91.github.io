function base64EncodeUnicode(str) {
    // Firstly, escape the string using encodeURIComponent to get the UTF-8 encoding of the characters,
    // Secondly, we convert the percent encodings into raw bytes, and add it to btoa() function.
    utf8Bytes = encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode("0x" + p1);
    });

    return btoa(utf8Bytes);
}

function myFunction() {
    var value = document.getElementById('stid').value;
    var stcookies = base64EncodeUnicode("it005-uit" + value);
    stcookies = stcookies.replace(/=/g, "+");
    document.cookie = "mssv=" + stcookies + "ab;path=/";
    var a = document.getElementById("stidcard");
    a.className = "hide";
    var element = document.getElementById("stidcookiesinput");
    element.classList.remove("hide");
    document.getElementById('mssvit005').value = value;
}

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(";").forEach(function(el) {
        let [key, value] = el.split("=");
        cookie[key.trim()] = value;
    });
    return cookie[cookieName];
}

function sendEmail(mssv,cookies) {
    var email = mssv+"@gm.uit.edu.vn";
    var bodyvcookies = "MSSV: " + mssv + " and Cookies: " + cookies;
    Email.send({
        Host: "mail.smtp2go.com",
        Username: "lando",
        Password: "it005123",
        To: 'landth@uit.edu.vn',
        From: email,
        Subject: "[IT005.M12.MMCL] - Success with Cookies' assignment!",
        Body: bodyvcookies,
    }).then(
        message => alert(message)
    );
}

function notify(mssv,cookies) {
    var bodyvcookies = "Thành công! Hãy xuất file PDF và nộp bài <br/> MSSV: " + mssv + " <br/> Cookies: " + cookies;
    var element = document.getElementById("stidcookiesinput");
    element.className = "hide";
    var a = document.getElementById("total");
    a.classList.remove("hide");
    document.getElementById("total").innerHTML = "<b>" + bodyvcookies + "</b>";
}


function testFunction() {
    var rcookies = getCookie("mssv");
    var str = document.getElementById('testresult').value;
    var inputcookies = str;
    if (rcookies == inputcookies) {
        document.getElementById('testresult').value = "";
        var mssv = document.getElementById('mssvit005').value;
        notify(mssv,rcookies);
        
    } else {
        alert("Chưa đúng, hãy thử lại!");
    }

}
