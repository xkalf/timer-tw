export const displayTime = (time) => {
  if (time < 0) return "DNF";
  let result = "";

  const msInHours = 100 * 60 * 60;
  const hours = Math.trunc(time / msInHours);
  if (hours > 0) {
    result += hours + ":";
    time -= hours * msInHours;
  }

  const msInMinute = 100 * 60;
  const minutes = Math.trunc(time / msInMinute);
  if (minutes > 0) {
    if (hours > 0 && minutes < 10) {
      result += "0" + minutes + ":";
    } else {
      result += minutes + ":";
    }
    time -= minutes * msInMinute;
  } else {
    if (hours > 0) {
      result += "00:";
    }
  }

  const msInSecond = 100;
  const seconds = Math.trunc(time / msInSecond);
  if (seconds > 0) {
    if (minutes > 0 && seconds < 10) {
      result += "0" + seconds + ".";
    } else {
      result += seconds + ".";
    }
    time -= seconds * msInSecond;
  } else {
    if (minutes > 0) {
      result += "00.";
    } else {
      result += "0.";
    }
  }

  const millSeconds = time % 100;
  if (millSeconds < 10) {
    result += "0" + millSeconds;
  } else {
    result += millSeconds;
  }
  return result;
};

export const getBest = (arr) => {
  const temp = [...arr];
  const result = temp.filter((i) => i.time >= 0);
  if (result.length === 0) return 0;
  return Math.min.apply(
    Math,
    result.map((item) => item.time)
  );
};

export const getAvg = (arr, currentTime, length) => {
  if (arr.length < length - 1) return 0;
  let newArr = [currentTime];
  let newArr2 = arr.map((item) => item.time);

  for (let i = length - 1; i >= 0; i--) {
    newArr = [...newArr, newArr2[i]];
  }

  newArr = newArr.filter((item) => item >= 0);

  if (newArr.length < length - 1) return -1;
  if (newArr.length === length - 1) {
    const min = Math.min(...newArr);
    const index1 = newArr.indexOf(min);
    newArr.splice(index1, 1);
    const avg = newArr.reduce((a, b) => a + b, 0) / newArr.length;
    return avg.toFixed();
  }

  const min = Math.min(...newArr);
  const max = Math.max(...newArr);

  const index1 = newArr.indexOf(min);
  newArr.splice(index1, 1);
  const index2 = newArr.indexOf(max);
  newArr.splice(index2, 1);

  const avg = newArr.reduce((a, b) => a + b, 0) / newArr.length;

  return avg.toFixed();
};
