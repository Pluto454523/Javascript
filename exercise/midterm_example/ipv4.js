function isValideIP(IPAddress) {
    
    for (const seperateIP of IPAddress.split("."))
        if (seperateIP > 255 || IPAddress.split(".").lenght)
            return false
    return true

}

console.log(isValideIP("1.2.1.4")) //true
console.log(isValideIP("1.2.3")) //true
console.log(isValideIP("1.2.3.4.5")) //false
console.log(isValideIP("123.45.67.89")) //ture
console.log(isValideIP("123.456.78.90")) //false
console.log(isValideIP("121.545.967.089")) //false