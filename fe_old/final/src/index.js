
const add = function (num) {
    return ++num;
}

const getWeek2 = function () {
    let week = new Date().getDay();
    if (week == 0) {
        return '星期日';
    } else if (week == 1) {
        return '星期一';
    } else if (week == 2) {
        return '星期二';
    } else if (week == 3) {
        return '星期三';
    } else if (week == 4) {
        return '星期四';
    } else if (week == 5) {
        return '星期五';
    } else if (week == 6) {
        return '星期六';
    }
}

const getWeek = function () {
    let week = new Date().getDay();
    let weeks = ['日', '一', '二', '三', '四', '五', '六'];
    return `星期${weeks[week]}`;
}

export { add, getWeek, getWeek2 }