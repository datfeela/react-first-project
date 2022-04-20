export const dateToObj = (dateSrc) => {
    let day = dateSrc.slice(0, dateSrc.indexOf("T"));
    let year = day.slice(0, day.indexOf("-"));
    let monthNum = day.slice(5, 7);
    let month = monthNumToAbb(monthNum);
    day = day.slice(-2)
    let time = dateSrc.slice(dateSrc.indexOf("T") + 1);
    let fullTime = time.slice(0, time.indexOf("."));
    let hour = time.slice(0, 2);
    let minute = time.slice(3, 5);
    let second = time.slice(6, 8);
    return {year, monthNum, month, day, fullTime, hour, minute, second}
}

export const monthNumToAbb = (month) => {
    switch (month) {
        case '01': return 'Jan'
        case '02': return 'Feb'
        case '03': return 'Mar'
        case '04': return 'Apr'
        case '05': return 'May'
        case '06': return 'Jun'
        case '07': return 'Jul'
        case '08': return 'Aug'
        case '09': return 'Sep'
        case '10': return 'Oct'
        case '11': return 'Nov'
        case '12': return 'Dec'
    }
}