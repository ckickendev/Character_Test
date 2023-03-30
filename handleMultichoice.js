const datas = question;
let introvert_answer = 0;
let extrovert_answer = 0;
let flexible_answer = 0;

const renderQuestion = () => {
  const question_wrapper = document.getElementById("question-wrapper");
  if(!question_wrapper) {
    return;
  }
  let content_wrapper = "";
  datas.map((data, index) => {
    content_wrapper += `<div class="question_container d-flex form-control justify-content-between ">
        <div class="d-flex" >
            <p class="question_info text text-success text-left p-2 m-0">Q.${
              index + 1
            }</>
            <p class="question_info text text-left p-2 m-0" >
                ${data}
            </p>
        </div>
        <div class="d-flex justify-content-around">
            <input type="checkbox" class="checkbox checkbox_question" />
        </div>
    </div>`;
  });
  question_wrapper.innerHTML = content_wrapper;
};

const handleSubmit = () => {
  const selectChoiceSpace = document.querySelectorAll(".checkbox_question");
  selectChoiceSpace.forEach((choice, index) => {
    if (!choice.checked) {
      return;
    }
    if (introvert.includes(index + 1)) {
      introvert_answer++;
    } else if (extrovert.includes(index + 1)) {
      extrovert_answer++;
    } else {
      flexible_answer++;
      introvert_answer++;
      extrovert_answer++;
    }
    localStorage.setItem("introvert_answer", introvert_answer);
    localStorage.setItem("extrovert_answer", extrovert_answer);
    localStorage.setItem("flexible_answer", flexible_answer);
  });
};

renderQuestion();
