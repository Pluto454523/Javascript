const Status = 700;

switch (Status) {
    case 200:
        console.log('OK!');
        break;
    case 400: //or
    case 500: //or
        console.log('Error');
        break;
    default: //else 
        console.log('Unknow status');
}