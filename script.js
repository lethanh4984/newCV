const hidden = document.querySelector(".hidden1");
const submitBtn = document.querySelector(".submit");
const form = document.querySelector(".form");
// const label = document.querySelector(".label");

console.log(hidden);
//mỗi khi click thì hàm handleSubmit sẽ chạy lại từ đầu
function handleSubmit() {
  //láyinput và chuyển qua in thường
  const emailValue = document.querySelector("#email").value.toLocaleLowerCase();
  //thông báo lỗi
  const error = document.querySelector(".error");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //dùng match để kiểm tra
  const check = emailValue.match(regex);

  //nếu check ko đúng thì in ra câu báo lỗi còn đúng thì chạy câu lệnh else
  if (!check) {
    error.classList.remove("hidden1");
  } else {
    hidden.classList.remove("hidden1");
    form.classList.add("hidden1");
    form.classList.remove("form");
  }
}

//chọn các mục lục
const show = document.querySelector("#knowledge");
const show1 = document.querySelector(".knowledge");

const language = document.querySelector("#language");
const language1 = document.querySelector(".language");

const hobby = document.querySelector("#hobby");
const hobby1 = document.querySelector(".hobby");

const activiti = document.querySelector("#activiti");
const activiti1 = document.querySelector(".activiti");

const skill = document.querySelector("#skill");
const skill1 = document.querySelector(".skill");

const jobInfo = document.querySelector("#job-info");
const jobInfo1 = document.querySelector(".job-info");

const btnDown = document.querySelector(".down");
const btnDown1 = document.querySelector(".down1");
const btnDown2 = document.querySelector(".down2");
const btnDown3 = document.querySelector(".down3");
const btnDown4 = document.querySelector(".down4");
const btnDown5 = document.querySelector(".down5");
const btnDown6 = document.querySelector(".down6");

//form

//knowledge
// nút bấm
function clickBtn() {
  if (btnDown.innerText === "View More") {
    btnDown.innerText = "View Less";
    show1.classList.remove("hidden");
    //innerText trả về nội dung nhưng lượt bỏ khoảng trống thừa
  } else {
    show1.classList.add("hidden");
    btnDown.innerText = "View More";
    console.log(`heeliooo`);
  }
}

//hàm khi hover đối tượng vào button
function over() {
  btnDown.classList.remove("hidden");
}

//Hàm khi ra khỏi đối tượng
function out() {
  btnDown.classList.add("hidden");
}

// job info
function clickBtn1() {
  if (btnDown1.innerText === "View More") {
    btnDown1.innerText = "View Less";
    jobInfo1.classList.remove("hidden");
  } else {
    jobInfo1.classList.add("hidden");
    btnDown1.innerText = "View More";
  }
}

//hàm khi hover đối tượng vào button
function over1() {
  btnDown1.classList.remove("hidden");
}

//Hàm khi ra khỏi đối tượng
function out1() {
  btnDown1.classList.add("hidden");
}

//activiti
function clickBtn2() {
  if (btnDown3.innerText === "View More") {
    btnDown3.innerText = "View Less";
    activiti1.classList.remove("hidden");
  } else {
    activiti1.classList.add("hidden");
    btnDown3.innerText = "View More";
  }
}

//hàm khi hover đối tượng vào button
function over2() {
  btnDown3.classList.remove("hidden");
}

//Hàm khi ra khỏi đối tượng
function out2() {
  btnDown3.classList.add("hidden");
}

//hobby
function clickBtn3() {
  if (btnDown4.innerText === "View More") {
    btnDown4.innerText = "View Less";
    hobby1.classList.remove("hidden");
  } else {
    hobby1.classList.add("hidden");
    btnDown4.innerText = "View More";
  }
}

//hàm khi hover đối tượng vào button
function over3() {
  btnDown4.classList.remove("hidden");
}

//Hàm khi ra khỏi đối tượng
function out3() {
  btnDown4.classList.add("hidden");
}

//language
function clickBtn4() {
  if (btnDown5.innerText === "View More") {
    btnDown5.innerText = "View Less";
    language1.classList.remove("hidden");
  } else {
    language1.classList.add("hidden");
    btnDown5.innerText = "View More";
  }
}

//hàm khi hover đối tượng vào button
function over4() {
  btnDown5.classList.remove("hidden");
}

//Hàm khi ra khỏi đối tượng
function out4() {
  btnDown5.classList.add("hidden");
}

//skill
function clickBtn5() {
  if (btnDown6.innerText === "View More") {
    btnDown6.innerText = "View Less";
    skill1.classList.remove("hidden");
  } else {
    skill1.classList.add("hidden");
    btnDown6.innerText = "View More";
  }
}

//hàm khi hover đối tượng vào button
function over5() {
  btnDown6.classList.remove("hidden");
}

//Hàm khi ra khỏi đối tượng
function out5() {
  btnDown6.classList.add("hidden");
}
