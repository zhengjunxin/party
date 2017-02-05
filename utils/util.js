function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

function formatTime(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return {
        year,
        month,
        day,
        hour,
        minute,
        second,
    }
}

module.exports = {
    formatNumber,
    formatTime,
}


