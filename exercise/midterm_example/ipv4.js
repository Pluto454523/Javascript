function isValideIP(IPAddress) {
    
    for (const seperateIP of IPAddress.split("."))
        if (seperateIP > 255 || seperateIP[0] <= 0 || IPAddress.split(".").length !== 4)
            return false
    return true

}

console.log(isValideIP("1.2.3.4"));
console.log(isValideIP("1.2.3"));
console.log(isValideIP("1.2.3.4.5"));
console.log(isValideIP("123.45.67.89"));
console.log(isValideIP("123.456.78.90"));
console.log(isValideIP("123.045.067.089"));