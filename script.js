// wise.txt 파일의 경로를 설정합니다.
const fileUrl = 'wise_saying.txt';

// XMLHttpRequest 객체를 생성합니다.
const xhr = new XMLHttpRequest();

// GET 요청을 전송합니다.
xhr.open('GET', fileUrl);

// 요청이 완료된 후 실행할 콜백 함수를 설정합니다.
xhr.onload = function() {
  if (xhr.status === 200) {
    // 파일에서 가져온 문자열을 줄 단위로 분리하여 배열로 만듭니다.
    const wise = xhr.responseText.trim().split('\n');
    
    // showWiseSaying 함수에서 사용할 수 있도록 lines 배열을 전역 변수로 설정합니다.
    window.wise = wise;
  } else {
    console.error('Request failed. Status code:', xhr.status);
  }
};

// 요청을 전송합니다.
xhr.send();

// 배열에서 임의의 문장을 선택하고, class가 result인 div에 보여주는 함수입니다.
function showWiseSaying() {
  const randomIndex = Math.floor(Math.random() * wise.length);
  const wise_saying = wise[randomIndex];
  const resultDiv = document.querySelector('.result');
  resultDiv.innerHTML = wise_saying;
}