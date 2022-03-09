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

  for (let i = 0; i < length - 1; i++) {
    newArr = [...newArr, newArr2[newArr2.length - 1 - i]];
  }

  newArr = newArr.filter((item) => item >= 0);

  if (newArr.length < length - 1) return -1;
  if (newArr.length === length - 1) {
    const index1 = newArr.indexOf(Math.min(...newArr));
    newArr.splice(index1, 1);
    const avg = newArr.reduce((a, b) => a + b, 0) / newArr.length;
    return avg.toFixed();
  }

  const index1 = newArr.indexOf(Math.min(...newArr));
  const index2 = newArr.indexOf(Math.max(...newArr));
  newArr.splice(index1, 1);
  newArr.splice(index2, 1);
  const avg = newArr.reduce((a, b) => a + b, 0) / newArr.length;
  return avg.toFixed();
};

export const loadAvg = (arr, length) => {
  let arrTimes = arr.map((item) => item.time);
  let tempArr = [...arr];

  for (let i = 0; i < arrTimes.length - (length - 1); i++) {
    let newArr = [];
    let avg;

    if (i < length - 1) {
      avg = 0;
    } else {
      for (let j = 0; j < length; j++) {
        newArr = [...newArr, arrTimes[j + i]];
      }

      newArr = newArr.filter((item) => item >= 0);

      if (newArr.length < length - 1) avg = -1;
      else if (newArr.length === length - 1) {
        const index1 = newArr.indexOf(Math.min(...newArr));
        newArr.splice(index1, 1);
        avg = newArr.reduce((a, b) => a + b, 0) / newArr.length;
      } else {
        const index1 = newArr.indexOf(Math.min(...newArr));
        const index2 = newArr.indexOf(Math.max(...newArr));
        newArr.splice(index1, 1);
        newArr.splice(index2, 1);
        avg = newArr.reduce((a, b) => a + b, 0) / newArr.length;
      }
    }
    tempArr[i][`ao${length}`] = avg;
  }
  return tempArr;
};
