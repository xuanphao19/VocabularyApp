var appElement = document.querySelector('#App-1');
var card = appElement.querySelector('.flip-card-inner');
var cardNext = appElement.querySelector('#next');
var suggestions = appElement.querySelector('#suggestions');
var formMessage = appElement.querySelector('.App-message');
var suggestionsMsg = appElement.querySelector('.suggestions');
var answerElement = appElement.querySelector('#answer');
var questionFrontId = appElement.querySelector('#questionFront');
var submit = appElement.querySelector('#submit');
var lengthArr = appElement.querySelector('.lengthArr');
var submitResult = appElement.querySelector('#submitResult');
var flipCardFrontEle = appElement.querySelector('.flip-card-front');
var suggestionsElement = appElement.querySelector('#suggestionsBack');
var lengths;
var i = 0;

var vocabularyEnglish = [
  ['Leisure', 'thời gian rảnh rỗi', "<img src='./Hatrang.png' alt='Avatar' />;", 'Gợi ý'],
  ['Leisure activity', 'hoạt động lúc rảnh rỗi', "<img src='./Screenshot_20210503-120123_Gallery.jpg' alt='Avatar' />", 'Gợi ý'],
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
  ['Nguyễn Thanh Hòa', 'Nhập: tên của bố bạn'],
  ["What is your mother's name?", 'Tên mẹ của bạn là gì?'],
  ["What is your sister's name?", 'Tên chị gái của bạn là gì'],
  ["What is your brother's name?", 'tên em trai của bạn là gì'],
  ['DIY project', 'N:dự án, kế hoạch tự làm (đồ gì)'],
  ['Mountain biking', 'n: hoạt động đạp xe leo núi'],
  ['Go mountain biking', 'n: đạp xe leo núi'],
  ['Socialising', 'n: hoạt động giao lưu'],
  ['Socialise ', 'v: giao lưu'],
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
  ['Flying kites in the wide open countryside is great fun', 'Viết lại vd(123) Fly a kite'],
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
  ['Vietnamese people are very hospitable', 'Viết lại vd(123) với từ: Hospitable'],
  ['Generous', 'hào phóng'],
  ['Optimistic', 'lạc quan'],
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

https: var songs = [
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
  lengthArr.innerHTML = `Nhập lại bằng English ${i} / ${lengths}`;
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
      if (answerElement.value) {
        if (!/[A-Z]/.test(answerElement.value)) {
          suggestionsMsg.innerHTML = `Chú ý viết HOA`;
        }
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
  submitResult.innerHTML = '';
  if (answerElement.value === randomTerm[0]) {
    i += 1;
    lengthArr.innerHTML = `${i} / ${lengths}`;
  }

  suggestionsMsg.innerHTML = '';
  if (handleTest(answerElement) === undefined) {
    card.classList.remove('is-flipped');
    if (randomTerm[2]) {
      flipCardFrontEle.innerHTML = `${randomTerm[2]}`;
    }
  }

  return i;
});

suggestions.addEventListener('click', function () {
  submitResult.innerHTML = '';
  formMessage.innerHTML = '';
  suggestionsMsg.innerHTML = '';
  if (randomTerm[3] === 'Gợi ý') {
    suggestionsElement.innerHTML = `${randomTerm[0]}`;
  }
  card.classList.toggle('is-flipped');
  if (answerElement.value === '') {
    suggestionsMsg.innerHTML = `Lười học là "Bệnh cần chống như chống giặc!"`;
    return;
  } else {
    suggestionsMsg.innerHTML = `Click Next để kiểm tra kết quả của bạn!`;
    return;
  }
});

submit.addEventListener('click', function () {
  formMessage.innerHTML = '';
  suggestionsMsg.innerHTML = '';
  if (!answerElement.value) {
    suggestionsMsg.innerHTML = '';
    submitResult.innerHTML = `Bạn cần phải trả lời trước khi bấm nộp bài`;
    return;
  }
  if (i < 10) {
    submitResult.innerHTML = `Hoàn thành đủ 10 câu trả lời đúng <br> mới được nộp bài!`;
  }
  if (i >= 10) {
    submitResult.classList.add('correctResult');
    submitResult.innerHTML = `Chúc mừng bạn đã vượt qua thử thách! <br> Kết quả của bạn đã được gửi tới hòm thư: nguyenthanhhoa075@gmail.com.`;
  }
});

answerElement.addEventListener('focus', function handleClearError(e) {
  formMessage.innerHTML = '';
  submitResult.innerHTML = '';
  suggestionsMsg.innerHTML = '';
  e.target.value = '';
});
