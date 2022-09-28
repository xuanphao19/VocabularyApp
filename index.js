var card = document.querySelector('.flip-card-inner');
var cardNext = document.querySelector('#next');
var invalidElement = document.querySelectorAll('.form-group');
var cardFront = document.querySelector('#cardFront');
var suggestions = document.querySelector('#suggestions');
var formMessage = document.querySelector('.form-message');
var suggestionsMsg = document.querySelector('.suggestions');
var answerElement = document.querySelector('#answer');
var questionFrontElement = document.querySelector('.questionFront');
var questionFrontId = document.querySelector('#questionFront');
var questionBackElement = document.querySelector('.questionBack');
// var questionBackId = document.querySelector('#questionBack');
var submit = document.querySelector('#submit');
var lengthArr = document.querySelector('.lengthArr');
var submitResult = document.querySelector('#submitResult');
var lengths;
var i = 0;

var vocabularyEnglish = [
  ['Leisure', 'thời gian rảnh rỗi'],
  ['Leisure activity', 'hoạt động lúc rảnh rỗi'],
  ['Hanging out', 'đi chơi với bạn bè'],
  ['Hang out', 'tụ tập, đi chơi'],
  ["Let's hang out this weekend", 'Cuối tuần này đi chơi đi!'],
  ['Window shopping', 'V: Đi ngắm đồ bày trong các cửa hàng'],
  ['Go window shopping', 'N: Ngắm đồ bày trong các cửa hàng'],
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
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
  // ['', ''],
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

lengths = vocabularyEnglish.length;
var randomTerm = '';

function getRandom() {
  randomTerm = vocabularyEnglish[Math.floor(Math.random() * vocabularyEnglish.length)];
  questionFrontId.innerHTML = `${randomTerm[1]}`;
  lengthArr.innerHTML = `Nhập bằng English        (${i} / ${lengths})`;
  answerElement.innerHTML = '';
}

var randomSong = '';
function getRandomSong() {
  randomSong = songs[Math.floor(Math.random() * songs.length)];
  formMessage.innerHTML = `${randomSong}`;
}

cardNext.addEventListener('click', function () {
  handleTest = function (answerElement) {
    if (formMessage) {
      if (!/[A-Z]/.test(answerElement.value)) {
        suggestionsMsg.innerHTML = `Chú ý viết HOA`;
      }
      if (answerElement.value === randomTerm[0]) {
        formMessage.innerHTML = '';
        submitResult.innerHTML = '';
        getRandom();
        return undefined;
      } else {
       getRandomSong();
      }
      return formMessage;
    }
  };

  // questionBackElement.innerHTML = `
  //             <div class="form-group">
  //               <span for="fullname" class="form-label"> Question: <span class='lengthArray'></span>
  //               </span>
  //               <div class="form-control" id="questionBack">${randomTerm[1]}!</div>
  //             </div>`;

  if (answerElement.value === randomTerm[0]) {
    i += 1;
    lengthArr.innerHTML = `${i} / ${lengths}`;
  }

  // var lengthArray = document.querySelector('.lengthArray');
  // if (lengthArray) {
  //   lengthArray.innerHTML = `${i} / ${lengths}`;
  // }
  suggestionsMsg.innerHTML = '';
  if (handleTest(answerElement) === undefined) {
    card.classList.toggle('is-flipped');
  }
  console.log(i);

  return i;
});

suggestions.addEventListener('click', function () {
  formMessage.innerHTML = '';
  submitResult.innerHTML = '';

  if (!answerElement.value) {
    suggestionsMsg.innerHTML = `Vui lòng nhập câu trả lời của bạn`;
    return;
  }
  if (handleTest(answerElement) !== undefined && answerElement.value) {
    suggestionsMsg.innerHTML = `Lười học là 'Bệnh cần chống như chống giặc!'`;
  }
  if (handleTest(answerElement) === undefined) {
    suggestionsMsg.innerHTML = `Click Next để kiểm tra kết quả của bạn!`;
  }
  formMessage.innerHTML = '';
});

submit.addEventListener('click', function () {
  if (!answerElement.value) {
    suggestionsMsg.innerHTML = '';
    submitResult.innerHTML = `Cần hoàn thành ít nhất 10 câu trả lời đúng!`;
  }
  if (handleTest(answerElement) === undefined) {
    if (lengthArr.value < 10) {
      submitResult.innerHTML = `Bạn chưa hoàn thành đủ 10 câu trả lời đúng!`;
    }
    // submitResult.classList.add('correctResult');
    // submitResult.innerHTML = `Kết quả của bạn đã được gửi tới hòm thư: nguyenthanhhoa075@gmail.com.`;
  }
});

// answerElement.addEventListener('focus', function (answerElement) {
//   formMessage.innerHTML = '';
//   submitResult.innerHTML = '';
//   suggestionsMsg.innerHTML = '';
// });

answerElement.addEventListener('focus', function handleClearError(e) {
  formMessage.innerHTML = '';
  submitResult.innerHTML = '';
  suggestionsMsg.innerHTML = '';
  e.target.value = '';
});
