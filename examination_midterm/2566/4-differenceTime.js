function differenceTime(startDateTime, endDateTime) {

    const startDate = new Date(startDateTime);
    const endDate = new Date(endDateTime);

    const diff = endDate - startDate; //in milliseconds

    const hours = Math.floor(diff / (3600 * 1000));
    const minutes = Math.floor((diff % (3600 * 1000)) / (1000 * 60));

    return `${hours} Hrs, ${minutes} Min`;
}

console.log(differenceTime("July-19-2019 13:30", "July-20-2019 09:30")); // 21 Hrs, 0 Min
console.log(differenceTime("July-29-2019 13:15", "June-1-2020 14:40")); // 7393 Hrs, 25 Min