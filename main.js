const countValue = document.querySelector(".counter__value");
const increaseBtn = document.querySelector(".counter__button--increase");
const decreaseBtn = document.querySelector(".counter__button--decrease");
const resetBtn = document.querySelector(".counter__reset-button");
const Title = document.querySelector(".counter__title");

let countValueNum = Number(countValue.innerText);
console.log(typeof countValueNum);

//------INCREASE NUM FUNCTION------

const increaseNum = () => {
  if (countValueNum == 5) {
    increaseBtn.disabled = true;
    decreaseBtn.disabled = true;
    Title.innerText = "Reached limit";
    Title.style.color = "red";
    resetBtn.style.border = "1.5px solid green";
    console.log(countValueNum);
  } else {
    increaseBtn.disabled = false;
    countValueNum = countValueNum + 1;
    countValue.innerText = countValueNum;
    console.log(countValueNum);
  }
};

//-------DECREASE NUM FUNCTION------

const decreaseNum = () => {
  countValueNum = countValueNum - 1;
  countValue.innerText = countValueNum;
};

increaseBtn.addEventListener("click", () => increaseNum());
decreaseBtn.addEventListener("click", () => decreaseNum());

//----------RESET COUNT------------

const resetCount = () => {
  countValueNum = 0;
  countValue.innerText = countValueNum;
  console.log(countValueNum);
  Title.innerText = "JS Counter";
  Title.style.color = "#1D2507";

  increaseBtn.disabled = false;
  decreaseBtn.disabled = false;

  resetBtn.style.border = "none";
};

resetBtn.addEventListener("click", () => resetCount());
console.log(resetBtn);

//-----------LIMIT MAX COUNT-----------
