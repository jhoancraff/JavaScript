var password = document.getElementById("password")
function genPassword() {
    var chars = 
    '0123456789abcdefghijklmnopqrstuvwxzy|@#~&¬()*ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var passwordLength = 12
    var password = ''
    for(var i = 0; i < passwordLength; i++){
        var randomNumeber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumeber, randomNumeber + 1)

    }
    document.getElementById('password').value = password

}

function copyPassword(){
    var copytext = document.getElementById('password')
    copytext.select()
    copytext.setSelectionRange(0, 999)
    document.execCommand('copy')
}