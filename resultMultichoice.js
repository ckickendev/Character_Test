const listCharacter = [
  "Nóng nảy - Hướng ngoại không ổn định",
  "Hăng hái - Hướng ngoại ổn định ",
  "Ưu tư - Hướng nội không ổn định",
  "Bình thản - Hướng nội ổn định ",
];
const listContentCharacter = [
  '<p>Khí chất nóng nảy thường được gắn với lửa. Người có khí chất này có khuynh hướng xem mình là trung tâm và hướng ngoại. Họ thường dễ bị kích thích, có xung động, và nôn nao, với sự tích tập cơn thịnh nộ, năng lượng và/hoặc đam mê, và cố gắng thẩm thấu điều đó sang người khác.</p> <p>Họ thường là người định hướng công việc và tập trung hoàn thành công việc một cách hiệu quả; phương châm của họ thường là “làm ngay bây giờ.” Họ có thể tham vọng, có ý chí mạnh mẽ và thích được gánh vác. Họ có thể thể hiện khả năng lãnh đạo, giỏi lập kế hoạch và thường thực tế và hướng đến giải pháp. Họ đánh giá cao việc nhận được sự tôn trọng và quý mến đối với công việc của mình. </p> <p>Về mặt sư phạm, họ có thể đạt được thành tích tốt nhất thông qua sự tôn trọng lẫn nhau và những thách thức phù hợp để từ đó nhận ra năng lực của mình.</p>', 
  '<p>Khí chất hăng hái thường được gắn với không khí. Người có khí chất này có xu hướng hoạt bát, hòa đồng, vô tư, hoạt ngôn và tìm kiếm niềm vui. Họ thường ấm áp và lạc quan. Họ có thể dễ kết bạn, giàu trí tưởng tượng và đầu óc nghệ thuật và thường có nhiều ý tưởng. Họ có thể dao động và dễ thay đổi; do đó, nhân cách hăng hái thường khó theo đuổi công việc một cách xuyên suốt trọn vẹn và thường xuyên chậm trễ hay sao nhãng.</p><p>Về mặt sư phạm, người có khí chất hăng hái có thể đạt được thành tích tốt nhất thông qua việc đánh thức tình yêu của họ đối với một chủ đề và sự thán phục của mọi người.</p>',
  '<p>Khí chất ưu tư thường được gắn với đất. Người có khí chất này thường nghiêm túc, hướng nội, thận trọng hay thậm chí đa nghi. Họ có thể trở nên bận tâm với bi kịch và sự tàn bạo trên thế giới và dễ bị trầm cảm và u sầu. </p> <p>Họ thường tập trung và tận tâm, kỹ lưỡng. Họ thường thích tự làm mọi việc, vì để đáp ứng được những chuẩn mực của riêng mình và vì họ vốn đã không dễ gần gũi, hòa đồng.</p> <p>Về mặt sư phạm, có thể thỏa mãn họ nhất bằng cách đánh thức sự cảm thông của họ đối với người khác và với nỗi khổ đau của thế giới.</p>',
  '<p>Khí chất bình thản thường được gắn với nước. Người có khí chất này thường là người hướng nội và kín đáo, chu đáo, hiểu lý lẽ, bình tĩnh, kiên nhẫn, quan tâm và khoan dung. Họ hướng đến một đời sống nội tâm phong phú, tìm kiếm bầu không khí tĩnh lặng, thanh bình và hài lòng với chính mình. Họ có xu hướng kiên định, nhất quán trong thói quen của mình, và vì thế là những người bạn kiên định và chân thành. </p>Về mặt sư phạm, mối quan tâm của họ thường được đánh thức thông qua việc trải nghiệm mối quan tâm của người khác đối với một chủ đề.</p><p> Người có khí chất này dường như có phần vụng về hay lóng ngóng. Cách nói năng của họ có khuynh hướng chậm rãi hoặc có vẻ ngập ngừng, do dự.</p>'
]
const listContentStable = [
  '<p>Những người cảm xúc không ổn định: Cảm xúc dễ bị dao động (neuroticism) hay cảm tính đặc trưng bởi mức độ bị tác động tiêu cực cao, như trầm cảm và lo âu.</p><p>Những người cảm xúc dễ dao động không thể ức chế hay kiểm soát phản ứng cảm xúc của mình, thường gặp phải tác động tiêu cực (chiến đấu hay bỏ chạy) khi đối mặt với những yếu tố stress rất nhỏ – dễ bị lo lắng hoặc gục ngã.</p>',
  '<p>Những người cảm xúc ổn định có khả năng kiểm soát tốt cảm xúc, chỉ gặp phải tác động tiêu cực khi đối diện với những yếu tố gây stress rất lớn – họ bình tĩnh và chịu được áp lực.</p><p>Điểm số trung bình trên thang này là 8-16 điểm. Nếu điểm số >16 phản ánh tính dễ dao động/không ổn định cảm xúc quá mức.</p>',
]
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
  document.getElementById('resutl_mtc_content').innerHTML = listContentCharacter[countCharacter]

  if(countCharacter == 2 || countCharacter == 0) {
    document.getElementById('result_mtc_stable').innerHTML = listContentStable[0]
  }else {
    document.getElementById('result_mtc_stable').innerHTML = listContentStable[1]

  }
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
