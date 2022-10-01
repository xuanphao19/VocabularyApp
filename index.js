var appElement = document.querySelector('#App-1');
var card = appElement.querySelector('.flip-card-inner');
var cardNext = appElement.querySelector('#next');
var suggestions = appElement.querySelector('#suggestions');
var formMessage = appElement.querySelector('.App-message');
var answerElement = appElement.querySelector('#answer');
var lengthArr = appElement.querySelector('.lengthArr');
var flipCardFrontEle = appElement.querySelector('.flip-card-front');
var submit = appElement.querySelector('#submit');
var submitResult = appElement.querySelector('#submitResult');
var questionFrontId = appElement.querySelector('#questionFront');
var suggestionsMsg = appElement.querySelector('.suggestions');
var suggestionsElement = appElement.querySelector('#suggestionsBack');
var audio = document.querySelector('#audioError');

var vocabularyEnglish = [
  ['Leisure', 'thời gian rảnh rỗi', 'Gợi ý', "<img src='./Hatrang.png' alt='Avatar' />"],
  ['Leisure activity', 'hoạt động lúc rảnh rỗi', 'Gợi ý', "<img src='./MisaCute.png' alt='Avatar' />"],
  ['Hanging out', 'đi chơi với bạn bè', 'Gợi ý', "<img src='./ChinBacNuiRung.jpg' alt='Avatar' />"],
  ['Hang out', 'tụ tập, đi chơi', 'Gợi ý', "<img src='./PhotDoi.jpg' alt='Avatar' />"],
  ["Let's hang out this weekend", 'Cuối tuần này đi chơi đi!'],

  ['Window shopping', 'n: Ngắm đồ bày trong các cửa hàng'],
  ['Go window shopping', 'v: Đi ngắm đồ bày trong các cửa hàng'],
  ['Pet training', 'N: Huấn luyện thú cưng'],
  ['Train a pet', 'V: Huấn luyện thú cưng'],
  ['Making crafts', 'làm đồ thủ công'],
  ['Craft kit', 'bộ dụng cụ làm đồ thủ công'],
  ['Bracelet', 'vòng đeo tay'],
  ['Check out something', 'kiểm tra vật gì đó có phù hợp hay không'],
  ["Right up someone's street", 'đúng vị/ sở thích của ai'],
  ['Playing beach games', 'hoạt động chơi các môn thể thao trên bãi biển'],
  ['Play beach games', 'chơi các môn thể thao trên bãi biển'],
  ['DIY: Do-It-Yourself', 'tự làm, tự sửa (đồ gì)'],
  ['Satisfied', 'hài lòng'],
  ["What is your sister's name?", 'Tên chị gái của bạn là gì'],
  ["What is your brother's name?", 'tên em trai của bạn là gì'],
  ['DIY project', 'N:dự án, kế hoạch tự làm (đồ gì)'],
  ['Mountain biking', 'n: hoạt động đạp xe leo núi'],
  ['Go mountain biking', 'n: đạp xe leo núi'],
  ['Socialising', 'n: hoạt động giao lưu'],
  ['Socialise', 'v: giao lưu'],
  ['Texting', 'n: nhắn tin'],
  ['Text', 'v: nhắn tin'],
  ['Surfing the Internet', 'n: lướt web'],
  ['Surf the Internet', 'v: lướt web'],
  ['hanging', 'They liked...out together when they were kids'],
  ['eating', 'I fancy ... out with friends at the weekend'],
  ['Doing', '.... DIY brings you a lot of amazing benefits'],
  ['Paddy', 'n: cánh đồng lúa'],
  ['Rice', 'n: lúa, gạo, cơm'],
  ['Rice straw', 'rơm'],
  ['Harvest time', 'n: mùa thu hoạch, mùa gặt'],
  ['Harvest - Collect', 'v: thu hoạch, gặt'],
  ['Ripe', 'ad: chín'],
  ['Buffalo-drawn cart', 'xe trâu kéo'],
  ['Grill fish in rice straw', 'v: nướng cá bằng rơm'],
  ['Fly a kite', 'v: thả diều'],
  ['Herd the buffalo', 'chăn trâu'],
  ['Go herding the buffalo', 'v: chăn trâu'],
  ['Herd the cattle', 'v: chăn bò'],
  ['Herd the sheep', 'v: chăn cừu'],
  ['Livestock', 'gia súc'],
  ['Ride a buffalo', 'cưỡi trâu'],
  ['Pick fruit', 'hái trái cây'],
  ['Pick wild flowers', 'hái hoa dại'],
  ['Collect hay', 'lượm cỏ khô'],
  ['Collect water', 'lấy nước'],
  ['Convenient', 'ad: thuận tiện'],
  ['Inconvenient', 'ad: bất tiện'],
  ['Peaceful', 'ad: yên bình'],
  ['Hospitable', 'hiếu khách'],
  ['Generous', 'hào phóng'],
  ['Optimistic', 'lạc quan'],
  // ['',''],
  ['Flying kites in the wide open countryside is great fun', 'Viết lại vd(123) Fly a kite'],
  ['Nguyễn Thanh Hòa', 'Nhập: tên của bố bạn', 'Gợi ý', "<img src='./Dai_Nhan.png' alt='Avatar' />"],
  ["What is your mother's name?", 'Tên mẹ của bạn là gì?', 'Gợi ý', "<img src='./EmGaiHiep.jpg' alt='Avatar' />"],
  ['Vietnamese people are very hospitable', 'Viết lại vd(123) với từ: Hospitable'],
  [
    'Livestock include farm animals such as buffalo, cow, goat or sheep',
    'Viết lại nội dung vừa nghe:<audio controls><source src="https://www.tienganh123.com/file/phothong/lop8-moi/unit2/lesson2/vocab/audio/3-1.mp3"></audio>',
  ],
  ['Paddy field', 'Viết lại nội dung vừa nghe:<audio controls><source src="https://www.tienganh123.com/file/phothong/lop8-moi/unit2/lesson1/vocab/audio/1.mp3"></audio>'],

  ['Harvest time', 'Viết lại nội dung vừa nghe:<audio controls><source src="https://www.tienganh123.com/file/phothong/lop8-moi/unit2/lesson1/vocab/audio/4.mp3"></audio>'],
  [
    'Go herding the buffaloes',
    'Viết lại nội dung vừa nghe:<audio controls><source src="https://www.tienganh123.com/file/phothong/lop8-moi/unit2/lesson1/vocab/audio/11.mp3"></audio>',
  ],
  ['Herd the buffaloes', 'Viết lại nội dung vừa nghe:<audio controls><source src="https://www.tienganh123.com/file/phothong/lop8-moi/unit2/lesson1/vocab/audio/10.mp3"></audio>'],
];

var songs = [
  'Lười học thì chóng làm quan',
  'Đã dốt lại còn lười',
  'Sai rồi! Cố gắng lên con',
  'Gần đúng rồi bạn, Cố lên nào',
  'Hay! Câu trả lời đình đám nhất',
  'Ngu dốt là tội ác, là giặc',
  'Lười nhác là kẻ thù của chính bản thân mình',
  'Không có Tri thức là tự làm nhục bản thân mình',
];

var lengths = vocabularyEnglish.length;
var minRequirements = 10;
var randomNumbers = [];
var randomTerm;
var i = 0;
var j = 0;
function getRandomQuestion() {
  var n = Math.floor(Math.random() * lengths);
  var check = randomNumbers.includes(n);
  if (!check) {
    randomNumbers.push(n);
  } else {
    while (check) {
      n = Math.floor(Math.random() * lengths);
      check = randomNumbers.includes(n);
      if (!check) {
        randomNumbers.push(n);
      }
    }
  }

  randomTerm = vocabularyEnglish[n];
  questionFrontId.innerHTML = `${randomTerm[1]}`;
  lengthArr.innerHTML = `Nhập lại bằng English ${i} / ${lengths}`;
  answerElement.innerHTML = '';

  console.log(`Gợi ý dành cho bạn: `, randomTerm);

  return randomTerm;
}

var randomSong = '';
function getRandomSong() {
  let newRandomSong;
  do {
    newRandomSong = songs[Math.floor(Math.random() * songs.length)];
  } while (newRandomSong === this.length);
  formMessage.innerHTML = `${newRandomSong}`;
}
var answerValue = answerElement.value;

cardNext.addEventListener('click', function () {
  handleTest = function (answerElement) {
    if (formMessage) {
      var testPunctuation = /[!:;"',.?-]/;
      if (testPunctuation.test(randomTerm[0]) && !testPunctuation.test(answerElement.value)) {
        if (answerElement.value && !testPunctuation.test(answerElement.value)) {
          suggestionsMsg.innerHTML = `Chú ý: Sử dụng dấu câu cho chính xác`;
          answerElement.classList.add('invalid');
        }
      }

      if (answerElement.value === '') {
        answerElement.classList.add('invalid');
        suggestionsMsg.innerHTML = `Nhân bất học bất trí lý!"`;
      }

      if (answerElement.value === randomTerm[0]) {
        formMessage.innerHTML = '';
        submitResult.innerHTML = '';
        getRandomQuestion();
        playerMusic();
        return undefined;
      } else {
        answerElement.classList.add('invalid');
        audio.play();
        getRandomSong();
      }
    }
    var testUppercase = /[A-Z]/;
    if (answerElement.value && !testUppercase.test(answerElement.value)) {
      if (!testUppercase.test(answerElement.value)) {
        suggestionsMsg.innerHTML = `Chú ý: Cần viết "HOA" cho chính xác`;
        answerElement.classList.add('invalid');
      }
    }

    return formMessage;
  };

  if (answerElement.value === randomTerm[0]) {
    i += 1; /* i để hiển thị số lần trả lời đúng trên tổng số Length */
    j += 1; /* J để xử lý treo máy khi lặp quấ giới hạn */
    lengthArr.innerHTML = `${i} / ${lengths}`;
    if (j === lengths - 1) {
      j = 0;
      randomNumbers = [];
    }
  }

  submitResult.innerHTML = '';
  suggestionsMsg.innerHTML = '';
  if (handleTest(answerElement) === undefined) {
    card.classList.remove('is-flipped');
    answerElement.focus();
    answerElement.value;
    // Xử lý thay ảnh nền:
    if (randomTerm[3]) {
      flipCardFrontEle.innerHTML = `${randomTerm[3]}`;
    }
  }
  if (i === minRequirements) {
    submitResult.classList.add('correctResults');
    submitResult.innerHTML = `Chúc mừng bạn!<br> Bạn đã vượt qua thử thách. <br> Bạn vẫn có thể tiếp tục luyện tập <br> Nếu bạn muốn nâng cao Trình độ!`;
  }
});

suggestions.addEventListener('click', function () {
  submitResult.innerHTML = '';
  formMessage.innerHTML = '';
  suggestionsMsg.innerHTML = '';

  // Xử lý hiển thị gợi ý:
  if (randomTerm[2] === 'Gợi ý') {
    suggestionsElement.innerHTML = `${randomTerm[0]}`;
  }
  // Kết hợp css Xử lý xoay ảnh:
  card.classList.toggle('is-flipped');
  // Xử lý hiển thị massage chỉ dẫn gợi ý:
  if (answerElement.value === '') {
    answerElement.classList.add('invalid');
    suggestionsMsg.innerHTML = `Lười học là "Bệnh cần chống như chống giặc!"`;
    return;
  } else {
    answerElement.classList.add('invalid');
    suggestionsMsg.innerHTML = `Click Next để kiểm tra kết quả của bạn!`;
    return;
  }
});

// Hướng dẫn nộp bài
submit.addEventListener('click', function () {
  formMessage.innerHTML = '';
  suggestionsMsg.innerHTML = '';
  if (!answerElement.value) {
    suggestionsMsg.innerHTML = '';
    answerElement.classList.add('invalid');
    submitResult.innerHTML = `Bạn cần phải trả lời trước khi bấm nộp bài`;
    if (i >= minRequirements) {
      submitResult.classList.add('correctResult');
      answerElement.classList.remove('invalid');
      submitResult.innerHTML = `Chúc mừng bạn đã vượt qua thử thách! <br> Kết quả của bạn đã được gửi tới hòm thư: nguyenthanhhoa075@gmail.com.`;
    }
    return;
  }
  if (i < minRequirements) {
    answerElement.classList.add('invalid');
    submitResult.innerHTML = `Hoàn thành đủ 10 câu trả lời đúng <br> mới được nộp bài!`;
  }
});

// Xóa massage lỗi và input value khi focus input:
answerElement.addEventListener('focus', function handleClearError(e) {
  formMessage.innerHTML = '';
  submitResult.innerHTML = '';
  suggestionsMsg.innerHTML = '';
  answerElement.classList.remove('invalid');
  answerElement.classList.remove('addInvalid');
  e.target.value = '';
});

// Chặn hành vi mặc định của Keydown và gán cho keydown Enter bằng Click
answerElement.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    cardNext.click();
    answerElement.value = '';
  }
});

//  Thay đổi tiếng đúng / sai:
var audioPlays = ['sairoichipoi.m4a', 'Tieng-yeah-tre-con.mp3'];
var audioElement = document.querySelector('#audioErrors');
function playerMusic() {
  audioElement.innerHTML = `<audio id='audioError' src="./${audioPlays[1]}"></audio>`;
  var audio = document.querySelector('#audioError');
  audio.play();
}

// Xử lý so sánh (Tham chiếu) input value với chỗi gốc:
answerElement.oninput = function () {
  formMessage.innerHTML = '';
  submitResult.innerHTML = '';
  suggestionsMsg.innerHTML = '';
  answerElement.classList.remove('invalid');

  // Xử lý báo lỗi khi nhập trường đầu vào bị sai:
  let intInputValue = randomTerm[0];
  let result = intInputValue.includes(answerElement.value);
  if (result) {
    answerElement.classList.remove('addInvalid');
    answerElement.classList.add('unInvalid');
  } else {
    answerElement.classList.remove('unInvalid');
    answerElement.classList.add('addInvalid');
  }
};
