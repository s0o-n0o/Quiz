const quiz = [
  {
    question:'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers:[
      'スーパーファミコン',
      'プレイステーション２',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct:'ニンテンドーDS'
  },{
    question:'糸井重里が企画に関わった、ニンテンドーの看板ゲームといえば？',
    answers:[
      'MOTHER2',
      'スーパーマリオブラザーズ３',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct:'MOTHER2'
  },{
    question:'ファイナルファンタジーIVの主人公の名前は？',
    answers:[
      'フリオニール',
      'クラウド',
      'ティーダ',
      'セシル'
    ],
    correct:'セシル'
  }
]

const quizLength = quiz.length;
let quizindex = 0;
const $button = document.getElementsByTagName('button')
let score = 0;

//クイズの問題文、選択肢を定義
const setupquiz =() =>{
  document.getElementById('js-question').textContent =quiz[quizindex].question ;
  let buttonindex = 0;
  while(buttonindex < quiz[quizindex].answers.length){
    $button[buttonindex].textContent = quiz[quizindex].answers[buttonindex]; 
    buttonindex++;
  }
}
setupquiz()

//ボタンクリックしたら正誤判定
const clickHandler = (e) =>{
    if(quiz[quizindex].correct === e.target.textContent){
      window.alert('正解！');
      score++;
    } else{
      window.alert('不正解！');
    }
    quizindex++;
    if (quizindex < quizLength){
      setupquiz();
    } else{
      window.alert('終了！あなたの正解数は'+score+'/'+quizLength+'です');
      
    }
  };

let buttonindex2  = 0;
while (buttonindex2 < $button.length){
  $button[buttonindex2].addEventListener('click',(e)=> {
    clickHandler(e);
  });
  buttonindex2++;
}