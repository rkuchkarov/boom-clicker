export const getPercentage = (value, maxValue) => Math.floor((value / maxValue) * 100);
export const increaseNumByPercentage = (value, percentage) => (percentage / 100) * value;