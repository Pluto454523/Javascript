const Status = 500;

if (Status === 200) {
    console.log('OK!');
} else if (Status === 400 || Status === 500) {
    console.log('ERROR');
} else {
    console.log('Unknow Status');
}
