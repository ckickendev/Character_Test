const listCharacter = [
  "Hướng ngoại nóng nảy",
  "Hướng ngoại lầm lì",
  "Đa cảm, u sầu, ưu tư",
  "Bình thản, điềm tĩnh",
];
const renderResult = () => {
  const introvert_progress = document.getElementById("introvert_progress");
  const extrovert_progress = document.getElementById("extrovert_progress");
  const flexible_progress = document.getElementById("flexible_progress");
  const introvert_percent = (
    (localStorage.getItem("introvert_answer") / 24) *
    100
  ).toFixed(2);
  const extrovert_percent = (
    (localStorage.getItem("extrovert_answer") / 24) *
    100
  ).toFixed(2);

  const flexible_percent = (
    (localStorage.getItem("flexible_answer") / 24) *
    100
  ).toFixed(2);
  let character;
  if (
    introvert_percent >= 11 &&
    extrovert_percent >= 11 &&
    (introvert_percent - extrovert_percent == 2 ||
      introvert_percent - extrovert_percent == -2)
  ) {
    character = 3;
  }
  if (introvert_percent > extrovert_percent) {
    character = 1;
  } else {
    character = 2;
  }

  let countCharacter;
  if (character == 1) {
    if (
      12 <= Number(localStorage.getItem("introvert_answer")) &&
      Number(localStorage.getItem("introvert_answer")) <= 24
    ) {
      countCharacter = 0;
    } else {
      countCharacter = 1;
    }
  }
  if (character == 2) {
    if (
      12 <= Number(localStorage.getItem("extrovert_answer")) &&
      Number(localStorage.getItem("extrovert_answer")) <= 24
    ) {
      countCharacter = 2;
    } else {
      countCharacter = 3;
    }
  }

  document.getElementById('result_mtc').innerHTML = listCharacter[countCharacter];

  console.log(countCharacter);

  introvert_progress.innerHTML = `<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: ${introvert_percent}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> <p class="text m-0 font fs-5">${introvert_percent}%</p></div>
</div>`;
  extrovert_progress.innerHTML = `<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: ${extrovert_percent}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> <p class="text m-0 font fs-5">${extrovert_percent}%</p></div>
</div>`;
  flexible_progress.innerHTML = `<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: ${flexible_percent}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> <p class="text m-0 font fs-5">${flexible_percent}%</p></div>
</div>`;
};

renderResult();
