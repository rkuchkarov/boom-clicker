const formatNumber = (number) => ("0" + number).slice(-2);

export const formatTime =(seconds) => {
    const time = new Date(seconds * 1000);
    return `${time.getMinutes()}:${formatNumber(time.getSeconds())}`;
};