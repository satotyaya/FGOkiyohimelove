var quiz = [
["今すぐ行くならどこ？", "山！", "川！", "歴史的建造物を見に行きたい！", "家かなぁ...", 2],
["パートナーにするなら？", "なんでもしてくれる優しい人", "厳しく叱ってくれる人", "料理上手な人！", "顔面偏差値が高い人...", 2],
["後輩にはどう接する？", "たくさん甘やかす", "厳しくコキ使う", "先輩後輩なんて関係ない！", "めちゃめちゃ良い顔する", 3],
["明日世界が終わるなら...", "復讐", "会いたい人に会う", "街に繰り出して好きなことをする！", "諦めよう...", 3]
];

var counter = 0;

function set(){
var order = document.getElementById("order");
var question = document.getElementById("question");
order.innerHTML = "【FGO推し診断】";
question.innerHTML = quiz[counter][0];

for(var i = 1; i < 5; i ++){
var answer = document.getElementById("answer" + i);
answer.innerHTML = quiz[counter][i];
}
}
var score=0;
function judge(num){
var result = document.getElementById("result");
var answer=quiz[counter][5];

if(answer==num){
result.innerHTML="";
score+=1;
}
else{
result.innerHTML="";
}

if(counter == quiz.length - 1){
result.innerHTML += "<a href=https://dic.pixiv.net/a/%E6%B8%85%E5%A7%AB%28Fate%29>あなたにおすすめのサーヴァントは清姫です！</a>";
}
else{
counter+=1;
set();
}
}
