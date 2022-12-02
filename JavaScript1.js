function validation() {

    Uid = document.getElementById("uid").value;
    divuid = document.getElementById("uidErr");
    if (Uid.length < 5 || Uid.length > 7) {
        divuid.innerHTML = "[5 to 7 Characters]";
        document.getElementById("uid").focus();
        return false;
    }
    else {
        divuid.innerHTML = "";
    }

    Pswd = document.getElementById("pswd").value;
    divpswd = document.getElementById("pswdErr");
    if (Pswd.length < 7 || Pswd.length > 12) {
        divpswd.innerHTML = "[7 to 12 Characters]";
        document.getElementById("pswd").focus();
        return false;
    }
    else {
        divpswd.innerHTML = "";
    }

    Name = document.getElementById("name").value;
    divname = document.getElementById("nameErr");
    if (!Name.match(/^[A-Za-z]+$/)) {
        divname.innerHTML = "[Alphabets Character]";
        document.getElementById("name").focus();
        return false;
    }
    else {
        divname.innerHTML = "";
    }

    Address = document.getElementById("address").value;
    divaddress = document.getElementById("addressErr");
    if (!Address.match(/^[0-9a-zA-Z]+$/)) {
        divaddress.innerHTML = "[Alphanumeric Character]";
        document.getElementById("address").focus();
        return false;
    }
    else {
        divaddress.innerHTML = "";
    }

    Country = document.getElementById("country").value;
    divcountry = document.getElementById("countryErr");
    if (Country == 0) {
        divcountry.innerHTML = "[Must select a country]";
        document.getElementById("country").focus();
        return false;
    }
    else {
        divcountry.innerHTML = "";
    }

    Zip = document.getElementById("zip").value;
    divzip = document.getElementById("zipErr");
    if (Zip == 0) {
        divzip.innerHTML = "[Alphanumeric Characters]";
        document.getElementById("zip").focus();
        return false;
    }
    else {
        divzip.innerHTML = "";
    }

    Email = document.getElementById("email").value;
    divemail = document.getElementById("emailErr");
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-za-z]{2,4})$/;
    if (Email == "") {
        divemail.innerHTML = "[required]";
        document.getElementById("email").focus();
        return false;
    }
    else {
        divemail.innerHTML = "";
    }
    if (reg.test(Email) == false) {
        divemail.innerHTML = "Enter Valid Mail Id";
        document.getElementById("email").focus();
        return false;
    }
    else {
        divemail.innerHTML = "";
    }



    window.alert("Successfully Registered")
}