function formatDate(date) {
    let diff = new Date() - date;
    let sec = Math.floor(diff / 1000);
    let min = Math.floor(diff / 60000);
    let all_data = date;
    all_data = [
        '0' + all_data.getDate(),
        '0' + (all_data.getMonth() + 1),
        '' + all_data.getFullYear(),
        '0' + all_data.getHours(),
        '0' + all_data.getMinutes()
    ].map(component => component.slice(-2));

    if (diff < 1000) {
        return 'прямо сейчас';
    } else if (sec < 60) {
        return sec + ' сек. назад';
    } else if (min < 60) {
        return min + ' мин. назад';
    } else return all_data.slice(0, 3).join('.') + ' ' + all_data.slice(3).join(':');

}
alert(formatDate(new Date(new Date - 86400 * 1000)));