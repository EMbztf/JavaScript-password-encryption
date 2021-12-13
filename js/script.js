function encrypt() {
    let password = document.getElementById("passwordField").value;
    let hashed = CryptoJS.AES.encrypt(password, 'this is a salt');
    console.log(hashed.toString());
    $('#encryptedPassword').html(hashed.toString());
    decrypt(hashed);
}

function decrypt() {
    let hashed = document.getElementById("passwordField2").value;
    let decrypted = CryptoJS.AES.decrypt(hashed, 'this is a salt');
    console.log(decrypted.toString(CryptoJS.enc.Utf8));
    $('#decryptedPassword').html(decrypted.toString(CryptoJS.enc.Utf8));
}
  
