export const handleIpChange = (e, setNum) => {
  if (e.target.value === "0-") {
    setNum("-");
  } else if (e.target.value === "-") {
    setNum("-");
  }
  const newNum = Number(e.target.value);
  if ((newNum <= 1000) & (newNum >= -1000)) {
    setNum(newNum.toString());
  }
};

export const handleIncrement = (num, setNum) => {
  const newNum = Number(num) + 1;
  if (newNum <= 1000) {
    setNum(newNum.toString());
  }
};

export const handleDecrement = (num, setNum) => {
  const newNum = Number(num) - 1;
  if (newNum >= -1000) {
    setNum(newNum.toString());
  }
};
