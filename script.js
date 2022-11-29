'use strict'

function counter(due)  {    
  let today = new Date()  
  let rest = due.getTime() - today.getTime();
  let days = Math.floor( rest / ( 24 * 60 * 60 * 1000 ) ) ;  
  let hours = Math.floor( ( rest / 1000 / 60 / 60 ) ) % 24 ;  
  let mins = Math.floor( (rest / 1000 / 60 ) ) % 60;  
  let secs = Math.floor( (rest / 1000) ) % 60 ;    
  const count = [days, hours, mins, secs];
 return count ;
}

function recalc() {
 const counter2 = counter(goal);
 document.getElementById("day").textContent = counter2[0];
 document.getElementById("hour").textContent =String(counter2[1]).padStart(2,'0');
 document.getElementById("min").textContent = String(counter2[2]).padStart(2,'0');
 document.getElementById("sec").textContent = String(counter2[3]).padStart(2,'0');
 refresh();
}

function refresh(){
 setTimeout(recalc,1000);
}

let goal = new Date (2022, 11, 4);


recalc();


let button = document.querySelector('.btn');
button.addEventListener('click', wani);

function wani(){
   let number ;
   number = counter(goal)[0];
     let waniremove = document.getElementsByClassName('imagewani');
   let num =0;
   num = waniremove.length;

   for(let i =0; i<num; i++){
       document.getElementsByClassName('imagewani')[0].remove();
   }
 
   for(let i=0; i<number; i++){
    if(i === 0 || i%8 === 0){
   let wanichan = document.createElement('p1');
   wanichan.innerHTML= "<br>&#x1F40A";
   wanichan.className = "imagewani";
document.getElementById('wanispace').appendChild(wanichan);
    }else{
   let wanichan = document.createElement('p1');
   wanichan.innerHTML= "&#x1F40A";
   wanichan.className = "imagewani";
   document.getElementById('wanispace').appendChild(wanichan);
   }
}
}

let button2 = document.querySelector('.wanikeshi');
button2.addEventListener('click', wanikeshi);

function wanikeshi(){
 let waniremove = document.getElementsByClassName('imagewani');
   let num =0;
   num = waniremove.length;
   for(let i =0; i<num; i++){
       document.getElementsByClassName('imagewani')[0].remove();
   }
}

let memberbutton = document.querySelector('#member');
memberbutton.addEventListener('click', allmemberdisplay);

function allmemberdisplay (){
  
  remove("addclass");

  let div1 = document.createElement('div1');
   div1.className = "memberbox";
   div1.classList.add("addclass");
   div1.setAttribute("id", "memberboxid");
   document.getElementById('mainpage').appendChild(div1);

   let div5 = document.createElement('div5');
   div5.className = "memberchange";
   div5.classList.add("addclass");
   div5.setAttribute("id", "allmemberid");
   div5.innerText = "全メンバー表示";
   div5.setAttribute('onclick', 'allmemberdisplay()');
   document.getElementById('memberboxid').appendChild(div5);


   let div6= document.createElement('div6');
   div6.className = "memberchange";
   div6.classList.add("addclass");
   div6.setAttribute("id", "ippanmemberid");
   div6.innerText = "一般選手";
   div6.setAttribute('onclick', 'memberchangefunc(this)');
   document.getElementById('memberboxid').appendChild(div6);

   let div7= document.createElement('div7');
   div7.className = "memberchange";
   div7.classList.add("addclass");
   div7.setAttribute("id", "womenmemberid");
   div7.innerText = "女性選手";
   div7.setAttribute('onclick', 'memberchangefunc(this)');
   document.getElementById('memberboxid').appendChild(div7);

   let div8= document.createElement('div8');
   div8.className = "memberchange";
   div8.classList.add("addclass");
   div8.setAttribute("id", "seniormemberid");
   div8.innerText = "シニア選手";
   div8.setAttribute('onclick', 'memberchangefunc(this)');
   document.getElementById('memberboxid').appendChild(div8);

   let div9= document.createElement('div9');
   div9.className = "memberchange";
   div9.classList.add("addclass");
   div9.setAttribute("id", "managermemberid");
   div9.innerText = "マネージャー";
   div9.setAttribute('onclick', 'memberchangefunc(this)');
   document.getElementById('memberboxid').appendChild(div9);

   let div10= document.createElement('div10');
   div10.className = "memberchange";
   div10.classList.add("addclass");
   div10.setAttribute("id", "graphchangeid");
   div10.innerText = "グラフ";
   div10.setAttribute('onclick', 'allgraphchange()');
   document.getElementById('memberboxid').appendChild(div10);

   let div11= document.createElement('div11');
   div11.className = "memberchange";
   div11.classList.add("addclass");
   div11.setAttribute("id", "introductionchangeid");
   div11.innerText = "自己紹介";
   div11.setAttribute('onclick', 'allintroductionchange()');
   document.getElementById('memberboxid').appendChild(div11);

  for (let i=0; i<memberarray.length; i++){
    persondisplay(i);
  }
}


//メンバー紹介で一人ずつ要素作る関数（i番目の人の要素を作る）
function persondisplay(i){
  let div1 = document.createElement('div');
  div1.className = "person" ;
  let divid1 = "person" + String(i);
  div1.setAttribute("id", divid1);
  div1.classList.add("addclass");
  div1.classList.add("addclassperson");
 document.getElementById('mainpage').appendChild(div1);
  
  
 let div2 = document.createElement('div');
  div2.className = "personphoto" ;
  div2.classList.add("addclass");
  let divid2 = "personphoto" + String(i);
  div2.setAttribute("id", divid2);    
  div2.classList.add("addclassperson");
  document.getElementById(divid1).appendChild(div2);
  
  let photo = document.createElement('img');
  photo.src = memberarray[i].pictureURL ;
  photo.className = "personphotoimg" ;
  photo.classList.add("addclass");
  photo.classList.add("addclassperson");
  document.getElementById(divid2).appendChild(photo);
  
  let name = document.createElement('p');
  name.innerText = memberarray[i].name;
  name.className = "name" ;
  name.classList.add("addclass");
  name.classList.add("addclassperson");
  let nameid = "name" + String(i);
  name.setAttribute("id", nameid);   
  document.getElementById(divid2).appendChild(name); 
  
  let part = document.createElement('p');
  part.innerText = "["+memberarray[i].part + "]" ;
  part.className = "part" ;
  part.classList.add("addclass");
  part.classList.add("addclassperson");
  document.getElementById(divid2).appendChild(part); 
  
  let record = document.createElement('p');
  record.innerText = "記録推移";
  record.className = "record" ;
  record.classList.add("addclass");
  record.setAttribute('onclick', 'recorddisplay(this)');
  record.classList.add("addclassperson");
  let recordid = "record" + String(i);
  record.setAttribute("id", recordid); 
  document.getElementById(divid2).appendChild(record); 
  
let addclass2name = "addclass2" + String(i);

     let div3 = document.createElement('div');
  div3.className = "textzone" ;
  div3.classList.add("addclass");
  div3.classList.add(addclass2name);
  let divid3 = "textzone" + String(i);
  div3.setAttribute("id", divid3);    
  div3.classList.add("addclassperson");
  document.getElementById(divid1).appendChild(div3);
  
  let division = document.createElement('li');
  division.className = "addclass";
  division.classList.add(addclass2name);
  division.innerText = '所属 :'+ memberarray[i].division ;
  division.classList.add("addclassperson");
document.getElementById(divid3).appendChild(division); 
  
      let birthplace = document.createElement('li');
  birthplace.innerText ='出身 ：'+ memberarray[i].birthplace ;
  birthplace.className = "addclass";
  birthplace.classList.add(addclass2name);
  birthplace.classList.add("addclassperson");
document.getElementById(divid3).appendChild(birthplace); 
  
      let hobby = document.createElement('li');
  hobby.innerText ='趣味 ：'+  memberarray[i].hobby  ;
  hobby.className = "addclass";
  hobby.classList.add(addclass2name);
  hobby.classList.add("addclassperson");
document.getElementById(divid3).appendChild(hobby);
  
      let best= document.createElement('li');
  best.innerText = 'ベスト記録 ：'+ memberarray[i].best  ;
  best.className = "addclass";
  best.classList.add(addclass2name);
  best.classList.add("addclassperson");
document.getElementById(divid3).appendChild(best); 
  
          let comment= document.createElement('li');
  comment.innerText = '一言 :'+ memberarray[i].comment ;
  comment.className = "addclass";
  comment.classList.add(addclass2name);
  comment.classList.add("addclassperson");
document.getElementById(divid3).appendChild(comment); 
}



function removeaddclass2(classname){
 let risunko = document.getElementsByClassName(classname);
 let num = risunko.length;
 for(let i=0; i<num;i++ ){
  let risunkofor = document.getElementsByClassName(classname);
  if(risunkofor.length === 0){
    i = num-1;
  } else{
   risunkofor[0].remove();
 }
}
}

function recorddisplay(element){
let id = element.getAttribute("id");
let number =  Number(id.slice(-(id.length-6)));
let classname = "addclass2"+String(number);
let nameclass = document.getElementsByClassName(classname);
let numberofclass = nameclass.length;
let addclass2name = "addclass2" + String(number);
let div1id = "person"+String(number);
let recordid = "record" + String(number);
let record = document.getElementById(recordid);

if(numberofclass >2){
  record.innerText = "自己紹介再表示";
  let personname = memberarray[number].name;
  let recorddata = monthlyrecord[personname];
  removeaddclass2(classname);

    if (typeof recorddata !== "undefined"){
    let canvas = document.createElement('canvas');
    canvas.className = "canvas" ;
    canvas.classList.add("addclass");
    canvas.classList.add(addclass2name);
    let canvasid = "canvas" + String(number);
    canvas.setAttribute("id", canvasid); 
    document.getElementById(div1id).appendChild(canvas); 
    let sum = 0;
    let count = 0;
    let max=60;
    let min=1200;

      for (let i=0; i<recorddata.length; i++){
        if(i===0){
          if(typeof recorddata[i] === "number"){
            sum = sum + recorddata[i];
            count = count +1;
            max = recorddata[i];
            min = recorddata[i];
          }else{
          }
        } else{
        if(typeof recorddata[i] === "number"){
          if (recorddata[i] <= max && recorddata[i] >= min){
           sum = sum + recorddata[i];
           count = count +1;
          } else if (recorddata[i] > max){
            sum = sum + recorddata[i];
            count = count +1;
            max = recorddata[i];
          } else if (recorddata[i]<min){
           sum = sum + recorddata[i];
            count = count +1;
            min = recorddata[i];
          }
         }
        }
      }
    let average = sum / count ;
    let ctx = document.getElementById(canvasid);
    let myLineChart = new Chart(ctx, {
     // グラフの種類：折れ線グラフを指定
     type: 'line',
     data: {
       // x軸の各メモリ
            labels: ['2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月'],
            datasets: [
                        {
                          label: '2.4kmタイム（月別最高値）の推移　換算タイム含む',
                          data: recorddata,
                          borderColor: "#2260ea",
                          backgroundColor: "#00000000",
                          lineTension :0,
                          spanGaps: true
                        }
                      ],
            },
     options: {
       scales: {
         yAxes: [{
           ticks: {
             suggestedMax: max+(30-max%30),
             suggestedMin: min-min%30,
             stepSize: 30,  // 縦メモリのステップ数
             callback: function(value, index, values){
               return  Math.floor(value/60) + '分' + value % 60 + '秒'  // 各メモリのステップごとの表記（valueは各ステップの値）
             }
           }
         }]
       },
     }
    });

  } else {   //記録なしの人の場合
    let canvas = document.createElement('p3');
    canvas.className = "canvas" ;
    canvas.classList.add("addclass");
    canvas.classList.add("norecordmember");
    canvas.classList.add(addclass2name);
    let canvasid = "canvas" + String(number);
    canvas.setAttribute("id", canvasid); 
    document.getElementById(div1id).appendChild(canvas); 
    canvas.innerText = "今年の記録はありません";
  }
}else{　//既にグラフが表示されていた場合(＝assclass2を付与している項目数が1個しかない)
  removeaddclass2(classname);

  record.innerText = "記録推移グラフ";

 let div3 = document.createElement('div');
    div3.className = "textzone" ;
    div3.classList.add("addclass");
    div3.classList.add(addclass2name);
    let divid3 = "textzone" + number;
    div3.setAttribute("id", divid3);   
    document.getElementById(div1id).appendChild(div3);
  
   let division = document.createElement('li');
    division.className = "addclass";
    division.classList.add(addclass2name);
    division.innerText = '所属 :'+ memberarray[number].division ;
 document.getElementById(divid3).appendChild(division); 
    
        let birthplace = document.createElement('li');
    birthplace.innerText ='出身 ：'+ memberarray[number].birthplace ;
    birthplace.className = "addclass";
    birthplace.classList.add(addclass2name);
 document.getElementById(divid3).appendChild(birthplace); 
    
        let hobby = document.createElement('li');
    hobby.innerText ='趣味 ：'+  memberarray[number].hobby  ;
    hobby.className = "addclass";
    hobby.classList.add(addclass2name);
 document.getElementById(divid3).appendChild(hobby);
    
        let best= document.createElement('li');
    best.innerText = 'ベスト記録 ：'+ memberarray[number].best  ;
    best.className = "addclass";
    best.classList.add(addclass2name);
 document.getElementById(divid3).appendChild(best); 
    
            let comment= document.createElement('li');
    comment.innerText = '一言 :'+ memberarray[number].comment ;
    comment.className = "addclass";
    comment.classList.add(addclass2name);
 document.getElementById(divid3).appendChild(comment); 
  
} 
}

//メンバー紹介の中で「一般」「女性」など切り替える時の関数
//（一旦メンバー紹介全部消して、押されたボタンのidを取得して、そのidからどれを表示させるか判断して、
//partのキー中身が含むならそれを再度表示させるようにする）

function memberchangefunc(element) {
remove("addclassperson");
 let id = element.getAttribute("id");
 let partnamehiragana;
  if (id === "ippanmemberid"){
    partnamehiragana = "一般男子";
  } else if(id === "womenmemberid"){
    partnamehiragana = "女性";
  }else if(id === "seniormemberid"){
    partnamehiragana = "シニア";
  }else if(id === "managermemberid"){
    partnamehiragana = "マネージャー";
  }else {
    window.alert('一般女性シニアマネどれでもないボタン？？おかしい！')
  }

 
    function memberfilter(partname){
      for (let i=0; i<memberarray.length; i++){
        if(memberarray[i]["part"].indexOf(partname) !== -1){
          persondisplay(i);
        } else{
        }
     }
    }
 memberfilter(partnamehiragana);
}


//全てをグラフに切り替えるボタン用関数
function allgraphchange(){
let displaymember = document.getElementsByClassName("person");
  for (let i=0; i<displaymember.length; i++){
    let id = displaymember[i].getAttribute("id");
    let number =  Number(id.slice(-(id.length-6)));
    let personnamei = document.getElementById("name" + String(number)).innerText;
    console.log(personnamei,number,id)
    tograph(personnamei,number);
}
}

//指定されたperson name漢字とnumber（idの表示順）からその要素をグラフに切り替える
function tograph(personname,number){
  removeaddclass2("addclass2"+number); //各personブロックの中のグラフor自己紹介領域のみ消去
  let div1id = "person"+String(number);
  let recordid = "record" + String(number);
  let record = document.getElementById(recordid);
  let recorddata = monthlyrecord[personname];
  record.innerText = "自己紹介再表示";
    if (typeof recorddata !== "undefined"){
      let canvas = document.createElement('canvas');
       canvas.className = "canvas" ;
       canvas.classList.add("addclass");
       canvas.classList.add("addclass2"+number);
       let canvasid = "canvas" + String(number);
       canvas.setAttribute("id", canvasid); 
      document.getElementById(div1id).appendChild(canvas); 
      let sum = 0;
      let count = 0;
      let max=60;
      let min=1200;

      for (let i=0; i<recorddata.length; i++){
        if(i===0){
          if(typeof recorddata[i] === "number"){
            sum = sum + recorddata[i];
            count = count +1;
            max = recorddata[i];
            min = recorddata[i];
          }else{
          }
        } else{
        if(typeof recorddata[i] === "number"){
          if (recorddata[i] <= max && recorddata[i] >= min){
           sum = sum + recorddata[i];
           count = count +1;
          } else if (recorddata[i] > max){
            sum = sum + recorddata[i];
            count = count +1;
            max = recorddata[i];
          } else if (recorddata[i]<min){
           sum = sum + recorddata[i];
            count = count +1;
            min = recorddata[i];
          }
         }
        }
      }
    let ctx = document.getElementById(canvasid);
    let myLineChart = new Chart(ctx, {
     // グラフの種類：折れ線グラフを指定
     type: 'line',
     data: {
       // x軸の各メモリ
            labels: ['2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月'],
            datasets: [
                        {
                          label: '2.4kmタイム（月別最高値）の推移　換算タイム含む',
                          data: recorddata,
                          borderColor: "#2260ea",
                          backgroundColor: "#00000000",
                          lineTension :0,
                          spanGaps: true
                        }
                      ],
            },
     options: {
       scales: {
         yAxes: [{
           ticks: {
             suggestedMax: max+(30-max%30),
             suggestedMin: min-min%30,
             stepSize: 30,  // 縦メモリのステップ数
             callback: function(value, index, values){
               return  Math.floor(value/60) + '分' + value % 60 + '秒'  // 各メモリのステップごとの表記（valueは各ステップの値）
             }
           }
         }]
       },
     }
    });

  } else {   //記録なしの人の場合
    let canvas = document.createElement('p3');
    canvas.className = "canvas" ;
    canvas.classList.add("addclass");
    canvas.classList.add("norecordmember");
    canvas.classList.add("addclass2"+number);
    let canvasid = "canvas" + String(number);
    canvas.setAttribute("id", canvasid); 
    document.getElementById(div1id).appendChild(canvas); 
    canvas.innerText = "今年の記録はありません";
  }
}

//全てを自己紹介に切り替えるボタン用関数
function allintroductionchange(){
  let displaymember = document.getElementsByClassName("person");
  for (let i=0; i<displaymember.length; i++){
    let id = displaymember[i].getAttribute("id");
    let number =  Number(id.slice(-(id.length-6)));
    console.log(id,number);
  introductionchange(number);
  }
  }

//指定されたperson name漢字とnumber（idの表示順）からその要素を自己紹介に切り替える
function introductionchange(number){
  let div1id = "person"+String(number);
  let addclass2name = "addclass2"+number
removeaddclass2(addclass2name);
let recordid = "record" + String(number);
let record = document.getElementById(recordid);
record.innerText = "記録推移グラフ";

 let div3 = document.createElement('div');
    div3.className = "textzone" ;
    div3.classList.add("addclass");
    div3.classList.add(addclass2name);
    let divid3 = "textzone" + number;
    div3.setAttribute("id", divid3);   
    document.getElementById(div1id).appendChild(div3);
  
   let division = document.createElement('li');
    division.className = "addclass";
    division.classList.add(addclass2name);
    division.innerText = '所属 :'+ memberarray[number].division ;
 document.getElementById(divid3).appendChild(division); 
    
        let birthplace = document.createElement('li');
    birthplace.innerText ='出身 ：'+ memberarray[number].birthplace ;
    birthplace.className = "addclass";
    birthplace.classList.add(addclass2name);
 document.getElementById(divid3).appendChild(birthplace); 
    
        let hobby = document.createElement('li');
    hobby.innerText ='趣味 ：'+  memberarray[number].hobby  ;
    hobby.className = "addclass";
    hobby.classList.add(addclass2name);
 document.getElementById(divid3).appendChild(hobby);
    
        let best= document.createElement('li');
    best.innerText = 'ベスト記録 ：'+ memberarray[number].best  ;
    best.className = "addclass";
    best.classList.add(addclass2name);
 document.getElementById(divid3).appendChild(best); 
    
            let comment= document.createElement('li');
    comment.innerText = '一言 :'+ memberarray[number].comment ;
    comment.className = "addclass";
    comment.classList.add(addclass2name);
 document.getElementById(divid3).appendChild(comment); 
}






//表示けしボタン
let refreshed = document.querySelector('#refresh');
refreshed.addEventListener('click', addclassremove);

//表示けしボタンのためだけに作った関数
function addclassremove(){
  remove("addclass");
}

//クラスネームを引数に持ってそのクラスネームのつく要素を全て削除する関数
function remove(classname){
  let risunko = document.getElementsByClassName(classname);
  if(risunko.length === 0){
  } else{
  let num = risunko.length;
  for(let i=0; i<num;i++ ){
   let risunkofor = document.getElementsByClassName(classname);
   if(risunkofor.length === 0){
     i = num-1;
   } else{
    risunkofor[0].remove();
  }
 }
 }
}

function schedule (){
  remove("addclass");

let mymainpage = document.getElementById("mainpage");
let myp = document.createElement("p5");
let mytable = document.createElement("table");
let mytbody = document.createElement("tbody");
let mytr1 = document.createElement("tr");
let myth1 = document.createElement("th");
let myth2 = document.createElement("th");
let myth3 = document.createElement("th");
let myth4 = document.createElement("th");
let myth5 = document.createElement("th");

myth1.textContent ="練習日";
myth2.textContent = "練習場所";
myth3.textContent = "集合時間";
myth4.textContent = "練習メニュー";
myth5.textContent = "備考";

let thisMonth = new Date().getMonth() + 1;
let thisdate = new Date().getDate();

myp.textContent = "本日  "+ thisMonth + "月　"　+ thisdate + "日　以降の練習予定";

myp.className ="addclass";  
mytable.className ="addclass";
mytbody.className ="addclass";
mytr1.className ="addclass";
myth1.className ="addclass";
myth2.className ="addclass";
myth3.className ="addclass";
myth4.className ="addclass";
myth5.className ="addclass";


mytr1.appendChild(myth1);
mytr1.appendChild(myth2);
mytr1.appendChild(myth3);
mytr1.appendChild(myth4);
mytr1.appendChild(myth5);
mytbody.appendChild(mytr1);
mytable.appendChild(myp);
mytable.appendChild(mytbody);
mymainpage.appendChild(mytable); 

for (const element of schedulearray){
 let date = new Date(Number(element.year), Number(element.month), Number(element.date));
 let today = new Date()  
 let rest = date.getTime() - today.getTime();
   if(rest>0){
   let mytr = document.createElement("tr");
   mytr.className = "addclass";
   mytbody.appendChild(mytr);
     for (const key in element){
       if (key !== "year" && key !== "month" && key !== "date"){
         let mytd= document.createElement("td");
         mytd.className = "addclass";
         mytd.textContent = element[key];
         mytr.appendChild(mytd);
       }
     }
   }
}
}

let schedulebutton = document.querySelector('#schedule');
schedulebutton.addEventListener('click', schedule);

function ranking (){
  remove("addclass");

  let mymainbox = document.createElement("div");
  let mymainpage = document.getElementById("mainpage");
  mymainbox.className ="addclass";
  mymainpage.appendChild(mymainbox); 
  mymainbox.setAttribute("id", "mainbox"); 


    function makerankmatrix(rankarray,ptagname,boxname,ptext) {
      let mybox = document.createElement("div");
      let myp = document.createElement(ptagname);
      let mytable = document.createElement("table");
      let mytbody = document.createElement("tbody");
      let mytr1 = document.createElement("tr");
      let myth1 = document.createElement("th");
      let myth2 = document.createElement("th");
      let myth3 = document.createElement("th");
      let myth4 = document.createElement("th");
 
      myth1.textContent ="順位";
      myth2.textContent = "名前";
      myth3.textContent = "2.4km";
      myth4.textContent = "時速[/k]";
      myp.textContent = ptext;
 
      myp.className ="addclass";  
      mytable.className ="addclass";
      mytbody.className ="addclass";
      mytr1.className ="addclass";
      myth1.className ="addclass";
      myth2.className ="addclass";
      myth3.className ="addclass";
      myth4.className ="addclass";
      mybox.className ="addclass";
      mybox.setAttribute("id", boxname); 
      myp.setAttribute("id", ptagname); 
 
      mytr1.appendChild(myth1);
      mytr1.appendChild(myth2);
      mytr1.appendChild(myth3);
      mytr1.appendChild(myth4);
      mytbody.appendChild(mytr1);
      mytable.appendChild(myp);
      mytable.appendChild(mytbody);
      mybox.appendChild(mytable); 
      mymainbox.appendChild(mybox); 
      

        for (const element of rankarray){
         let mytr = document.createElement("tr");
         mytr.className = "addclass";
         mytbody.appendChild(mytr);
          for (const key in element){
             let mytd= document.createElement("td");
             mytd.className = "addclass";
             mytd.textContent = element[key];
             mytr.appendChild(mytd);
          }
         }
 }
 makerankmatrix (ippanrank,"p6","boxippan","一般男子の部ランキング");
 setTimeout (makerankmatrix (womenrank,"p7","boxwomen","女性の部ランキング"),1000);
 setTimeout (makerankmatrix (seniorrank,"p8","boxsenior","シニアの部ランキング"),1000);
}
 
 let rankbutton = document.querySelector('#rank');
 rankbutton.addEventListener('click', ranking);

function underconstruction (){
  remove("addclass");
 let photo = document.createElement('img');
 let url = "https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/underconstruction.jpg?raw=true " ;
 photo.src = url ;
 photo.className = "kouji" ;
 photo.classList.add("addclass");
 document.getElementById("mainpage").appendChild(photo);
}

let infobutton = document.querySelector('#info');
infobutton.addEventListener('click', underconstruction);

let picturebutton = document.querySelector('#picture');
picturebutton.addEventListener('click', underconstruction);

let csbutton = document.querySelector('#customerfirst');
csbutton.addEventListener('click', ending);

let wanicounter = 21;


const endingarray = ["d","i","g","ki","so","kou","za","sai","syu","bi","!","a","ri","ga","to","u","go","za2","i2","ma","shi","ta","!"];
const urlbefore ="https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/";
const urlafter = ".jpg?raw=true";




function ending (){
  remove("addclass");
let wanibox1 = document.createElement("div");
let wanibox2 = document.createElement("div");
wanibox1.className = "addclass";
wanibox1.setAttribute("id", "wanibox1");
wanibox2.className = "addclass";
wanibox2.setAttribute("id", "wanibox2");
document.getElementById('mainpage').appendChild(wanibox1);
document.getElementById('mainpage').appendChild(wanibox2);
let wanibox3 = document.createElement("div");
let wanibox4 = document.createElement("div");
wanibox3.className = "addclass";
wanibox3.setAttribute("id", "wanibox3");
wanibox4.className = "addclass";
wanibox4.setAttribute("id", "wanibox4");
document.getElementById('mainpage').appendChild(wanibox3);
document.getElementById('mainpage').appendChild(wanibox4);

  for(let i=0; i<23; i++){
    if(i<7){
        let url = urlbefore+endingarray[i]+urlafter;
        let wanichan = document.createElement('img')
        wanichan.class = "addclass";
        wanichan.src = url;
        wanichan.classList.add("endingwani");
        wanibox1.appendChild(wanichan);
        console.log("waniroop1回ったよ");

    }else if (i>=7 && i<11){
        let url = urlbefore+endingarray[i]+urlafter;
        let wanichan = document.createElement('img')
        wanichan.class = "addclass";
        wanichan.src = url;
        wanichan.classList.add("endingwani");
        document.getElementById('wanibox2').appendChild(wanichan);
        console.log("waniroop2回ったよ");
    }else if (i>=11 && i<16){

        let url = urlbefore+endingarray[i]+urlafter;
        let wanichan = document.createElement('img')
        wanichan.class = "addclass";
        wanichan.src = url;
        wanichan.classList.add("endingwani");
        document.getElementById('wanibox3').appendChild(wanichan);
        console.log("waniroop3回ったよ");

    } else  {
        let url = urlbefore+endingarray[i]+urlafter;
        let wanichan = document.createElement('img')
        wanichan.class = "addclass";
        wanichan.src = url;
        wanichan.classList.add("endingwani");
        document.getElementById('wanibox4').appendChild(wanichan);
        console.log("waniroop4回ったよ");

    }
   }
}
;



 const memberarray =[{name :"伊藤公一",part :"シニア(部長)",deptcode : "部付", division :"部長",birthplace :"静岡県",hobby :"映画、運動",best :"5分／ km × 2.5km が精一杯！",comment :"健康増進！安全第一！ 楽しくチャレンジ！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/ito_koichi.jpg?raw=true"},{name :"伊藤賢",part :"シニア(総監督)",deptcode : "C", division :"適合管理室",birthplace :"愛知県田原市（現住豊田市）",hobby :"ウォーキング",best :"スポセン2.8km 10 分 08 秒10km38 分位ハーフ：1 時間 26 分 58 秒フル：3 時間 37 分 47 秒",comment :"健康第一！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/ito_takashi.jpg?raw=true"},{name :"和田龍太",part :"一般男子(監督)",deptcode : "K", division :"企画室デジタル化推進G",birthplace :"東京都東久留米市",hobby :"ランニング（観戦も）、文学の朗読聞く等",best :"マラソン2時間45分、5000m 15分41秒、スポセン2.8km 8分51秒",comment :"ここ４年くらい品保客品チームの駅伝監督（プレーヤー兼）やらせていただいてます。皆さんが楽しく安全に活動できるよう運営盛り上げていきたいと思います！勿論選手個人としても頑張ります！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/wada.jpg?raw=true"},{name :"尾野貴広",part :"一般男子(編集長)",deptcode : "K", division :"企画室品質政策体制 G",birthplace :"福岡県福岡市",hobby :"スポーツ観戦サッカー・野球 etc",best :"駅伝大会ベスト：11 分 7 秒 (ハーフベスト：1 時間 54 分 59 秒 安曇野オンライン駅伝ベスト：9 分 27 秒 (",comment :"コロナで駅伝活動がオンライン中心になって以降、各種情報をお届けする編集長 をしております！今年も色んな情報を楽しく配信します！ランの方は常にベストを目指します！！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/ono_takahiro.jpg?raw=true"},{name :"中山拓弥",part :"一般男子(大臣)",deptcode : "T11", division :"先進・ZEV 品質係 811 組",birthplace :"三重県松阪市",hobby :"スポーツ観戦（野球）、読書",best :"全社駅伝ベスト：9:35 /2.8km(18 年：18:01/5.2km(17 年ハーフベスト1 時間 22 分 12 秒 犬山",comment :"恐縮ながら21 年より大臣と大きな役職名を頂いております。活動内においては主に情報展開などの広報を務めさせていただきます。BANDや会社メールにて多く情報を発信しますが、よろしくお願いします！走る面においては、17~18 年頃のベストタイムに戻れるよう頑張ります！！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/nakayama_takuya.jpg?raw=true"},{name :"大家瑞希",part :"女性(女子cap)",deptcode : "CQ", division :"お客様品質づくり室",birthplace :"ー",hobby :"ー",best :"2.8km 13'40",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/oya.jpg?raw=true"},{name :"岡田弥生",part :"女性",deptcode : "CQ", division :"お客様品質づくり室",birthplace :"岐阜県在住大阪 仙台 浦和など",hobby :"旅行。読書。子供と遊ぶ。",best :"陣馬山トレイル7 位丹後100k ウルトラ 13 時間 40 分くらいフル 4 時間 16 分",comment :"とりあえず、20 歳くらい下であろう未来のママ友に負けない走力をつけたい（果たしてママ友で競走する機会があるかは謎・・・",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/okada.jpg?raw=true"},{name :"中山亜美",part :"マネージャー",deptcode : "T23", division :"材料品質係932 組",birthplace :"福岡県八女市",hobby :"吹奏楽・カラオケ・音楽鑑賞",best :"記録もないです・・・",comment :"走りはしませんが、マネージャーとして選手の皆さんをしっかりサポートできるよう、元気に頑張ります！よろしくお願いします！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/nakayama_ami.jpg?raw=true"},{name :"清原椎渚",part :"マネージャー",deptcode : "T14", division :"CV/TC車両品質係",birthplace :"福岡県筑紫野市",hobby :"ミュージカル",best :"小学生の時、応募して毎年マラソン大会に出場してました！今は動けません",comment :"今回、マネージャーとして参加させて頂きます。選手の皆さんのサポート出来る様頑張りますのでよろしくお願いします！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/kiyohara.jpg?raw=true"},{name :"篠原達也",part :"一般男子",deptcode : "K", division :"企画室＆BR-もっといい車づくりGr",birthplace :"鹿児島県出水市",hobby :"テニス・旅行・映画を見る・音楽を聴く・バラエティーを見る",best :"2.8km 12分17秒",comment :"みなさんと楽しく続けられればと考えています！よろしくお願いします！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/shinohara.jpg?raw=true"},{name :"小野裕喜",part :"一般男子",deptcode : "K", division :"企画室　保証政策体制G",birthplace :"奈良県奈良市",hobby :"スポーツ観戦（野球・サッカー）",best :"スポセン2.4km 10'12　フルマラソン４回完走（タイムは聞かないで）",comment :"今年は幹事兼任のためサボらず頑張ります！まだまだ顔と名前が知れ渡っていないため、駅伝を通して皆さんと交流を深めたいと思ってます！よろしくお願いします！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/ono_yuki.jpg?raw=true"},{name :"中川孝二",part :"シニア",deptcode : "K", division :"企画室　保証政策体制G",birthplace :"愛知県名古屋市",hobby :"テニス、山登り",best :"ハーフマラソン：９０分、マラソン：３時間３０分",comment :"最近太って走れません、これを機会にダイエットしたいと思います",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/nakagawa.jpg?raw=true"},{name :"工藤泰丈",part :"シニア",deptcode : "CQ", division :"お客様品質づくり室内外装・塗装G",birthplace :"青森市",hobby :"ランニング、オートバイ、温泉、スキー",best :"フルマラソン：４時間３分、ハーフ：１時間４３分",comment :"もうすぐ念願のリタイア、楽しく余生を過ごせるように、ランニングで健康維持",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/kudo.jpg?raw=true"},{name :"安芸優一",part :"一般男子",deptcode : "T23", division :"材料品質係932 組",birthplace :"愛知県岡崎市",hobby :"アニメ、自重トレ、美容と健康に気を遣うこと",best :"スポセン2.8km 8分44秒（全社駅伝区間2位）",comment :"今でも部内では速い方ですが、全盛期には遠く及ばないのでなるばく戻したい。学生時代から変わらぬ肉体美が自慢で、体づくりにおいて僕の右に出るものはいないので、走ること以外でもなんでも聞きたいことがあれば聞いてください。アニメもほぼ毎日見るくらい好きなので話会うかたお話しましょう！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/aki.jpg?raw=true"},{name :"坂尻雅",part :"一般男子(新人)",deptcode : "T12", division :"MS車両品質係８２２組",birthplace :"熊本県熊本市",hobby :"体を動かすこと",best :"ー",comment :"元気に楽しく活動するために積極的にコミュニケーションをとっていきたいと思います",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/sakajiri.jpg?raw=true"},{name :"永尾大樹",part :"一般男子",deptcode : "T12", division :"MS車両品質係８２１組",birthplace :"佐賀県武雄市　⇦ 魅力教えます",hobby :"登山・バドミントン・ボーリング",best :"3km 10分14秒(中学時代)、現在はスポセン2.8kmベスト9分59秒",comment :"長距離は苦手ですが、持ち味のスピードを活かして頑張ります！あとコミュニケーション、がばいとって駅伝を盛り上げるばい！！※舛田がサボり気味なので練習に連れていきます。",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/nagao.jpg?raw=true"},{name :"伊藤新太",part :"一般男子",deptcode : "T12", division :"MS車両品質係８２２組",birthplace :"三重県四日市市",hobby :"御朱印巡り",best :"ー",comment :"高校卒業以来ほとんど運動をしておらず、体力が心配ですが一生懸命練習して体力をつけていきます。今年初参加なので沢山コミュニケーションを図っていきます！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/ito_arata.jpg?raw=true"},{name :"井上史弥",part :"一般男子",deptcode : "CQ", division :"お客様品質づくり室",birthplace :"大阪府羽曳市",hobby :"スポーツ観戦・読書・ゲーム・フェス参加・飲み会etc",best :"スポセン2.4km 9'05 ハーフ　1:50:00位",comment :"入社してからは全く運動してませんでしたが、昨年よりオンライン駅伝に参加させて頂きました。昨年前半は走る度にタイム更新していたものの、後半は伸び悩みました。。今年は、その壁を越えられるように、（できるだけ）練習を欠かさないようにします！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/inoue_fumiya.jpg?raw=true"},{name :"浦瀬翔太",part :"一般男子",deptcode : "CQ", division :"お客様品質づくり室",birthplace :"兵庫県・南あわじ市（淡路島）",hobby :"旅行、フットサル、欧州サッカー、料理、読書",best :"スポセン（2.4km ? 9:59",comment :"ここ数か月走れてないので、また体を絞るためにもオンライン駅伝に参加させていただきます！ダイエット目的ですが、 2.4km10 分切りを再び達成できるよう頑張ります！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/urase.jpg?raw=true"},{name :"武田朋樹",part :"一般男子",deptcode : "CQ", division :"お客様品質づくり室",birthplace :"愛知県みよし市",hobby :"カヌーポロ、スプリント、からだを動かすことサッカーを見る",best :"2.8km 10’005.2km 19’54",comment :"最近はなかなか走ることができておりませんので、みなさまと楽しく・元気に健康づくりに励んでいきたいと思います。気軽にお声かけいただけると嬉しいです。どうぞよろしくお願いいたします。",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/takeda.jpg?raw=true"},{name :"南智裕",part :"一般男子",deptcode : "CQ", division :"お客様品質づくり室",birthplace :"滋賀県野洲市",hobby :"クルマ・バイク・ギター",best :"2.4km：10 分 57 秒 ",comment :"去年は何とか11 分を切ることができたので、今年は 10 分半切り を目指して楽しく走ります！！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/minami.jpg?raw=true"},{name :"村上貴紀",part :"一般男子",deptcode : "MA", division :"モビリティ保証室プロジェクト 1G（開発車両の未然防止）",birthplace :"神奈川県川崎市",hobby :"野球観戦",best :"これから頑張ります！",comment :"最近少し太ったので、健康維持に努めます！応援団として頑張ります。",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/murakami.jpg?raw=true"},{name :"平宗一郎",part :"シニア",deptcode : "C", division :"適合管理室海外法規 Gr（号口車両の海外法規適合しくみづくり）",birthplace :"大分県中津市",hobby :"トレーニング、SPARTAN レース",best :"スポセン2.4km : 10'3210 分or ４分半 /kmを目指したい一",comment :"１回週はランを鍛えるメニューに取り組んでいきます。",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/taira.jpg?raw=true"},{name :"杉岡俊斗",part :"一般男子",deptcode : "T11", division :"先進・ZEV 品質係 811 組（先進安全機能・MM ・リモサ・ SU 監査）",birthplace :"愛知県豊田市土橋町",hobby :"野球（4 チーム所属）バレーボール、アイドルのLIVE",best :"保見ベスト：９:00/2.4km 18 年）全社駅伝20:27/5.2km 19 年）ハーフベスト：1 時間 25 分 (18 年 ))＠保見",comment :"ダイエット成功目指して頑張ります。",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/sugioka.jpg?raw=true"},{name :"浅田有都",part :"一般男子(新人)",deptcode : "T11", division :"先進・ZEV 品質係 812 組",birthplace :"愛知県岡崎市",hobby :"音楽鑑賞（DJ ）、水泳",best :"目標：体力向上を目指します！すみません、タイムは覚えてません",comment :"体力向上に努めると共に、コミュニケーションを沢山取りたいです！よろしくお願いします！！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/asada.jpg?raw=true"},{name :"加地友也",part :"一般男子",deptcode : "T12", division :"MS車両品質係 ８２２組（プロジェクト・未然防止・EDER",birthplace :"北海道標茶町",hobby :"スニーカー・古着・車いじり,ウインタースポーツ・マラソン",best :"須原公園2.36 ㎞ 9 分 40 秒",comment :"昼休みに、本社周りを走ってます！現状を維持しつつ、楽しみながら走りたいです！！よろしくお願い致します！！！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/kaji.jpg?raw=true"},{name :"古沢大地",part :"一般男子",deptcode : "T13", division :"LI・ GR 品質係 8 3 1 組(LEXUS ・ GR 車両の PRJ ・ EDER",birthplace :"奈良県御所市",hobby :"野球・ゲーム/11 年入社後： 3 年目まで全社駅伝出場",best :"全社駅伝ベスト：9:29 /2.8km(3年目）",comment :"昨年、肺に穴が空いて（肺気胸）、運動を控えていたので、今年からリハビリを兼ねて健康第一で頑張っていこうと思います！よろしくお願いします！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/furusawa.jpg?raw=true"},{name :"舛田空",part :"一般男子",deptcode : "T13", division :"LI・ GR 品質係832 組（号口EDER 調査 /PJT 評価）",birthplace :"北海道旭川市",hobby :"旅行、カメラ、スポーツ（バレー・野球・ボード系）",best :"全社駅伝ベスト：9:53/2.8 ㎞ 19 年）",comment :"まずは、体力を戻すところから頑張ります！ライバルは、永尾君です！今のところ負けっぱなしですけど",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/masuda.jpg?raw=true"},{name :"丸山宗也",part :"一般男子(新人)",deptcode : "T13", division :"LI・ GR 品質係831組（プロジェクト評価・号口EDER 業務）",birthplace :"岐阜県郡上市",hobby :"ゲーム、アニメ、少々の運動",best :"スポセン2.4km1 周： 8 分 15 秒 高校時代",comment :"体力づくりとして積極的に練習に参加していきたいです！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/maruyama.jpg?raw=true"},{name :"森竜也",part :"一般男子",deptcode : "T14", division :"CV/TC車両品質係（CV 車両の開発車評価、 EDER",birthplace :"三重県四日市市",hobby :"フットサル愛知県選抜",best :"駅伝不定期参加昔はまぁまぁ早かった(2.8km:9'28)",comment :"走らないといけないけど、なかなか走れない「走るぞ」という意思表示のために登録しました。でも涼しいところで子供と遊ぶのを優先してしまうことも・・・",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/mori.jpg?raw=true"},{name :"今村遼太郎",part :"一般男子(新人)",deptcode : "T14", division :"CV/TC車両品質係 841 組（CV カンパニー車両監査・ EDER",birthplace :"熊本県荒尾市",hobby :"絵画・美術館・ピアノ高校：バドミントン部",best :"20km1 時間 50 分？",comment :"超文化系の人間ですが、新入社員の若さで頑張ります！！！！！！！！！！！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/imamura.jpg?raw=true"},{name :"野田大樹",part :"一般男子",deptcode : "T15", division :"基準化・G 品質係852 組（海外EDER 、 調査解析サポート）",birthplace :"福岡県大牟田市",hobby :"車！自転車！ランニング！カブトムシ育成",best :"・2.8 ㎞： 9 分 18秒・シンガポールマラソン42.195 ㎞：5 時間 30 分 おそ 笑",comment :"ケガをしないように少しずつ頑張ります。年齢を言い訳にせず練習すればもとに戻ると信じたいです",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/noda.jpg?raw=true"},{name :"齋藤貴広",part :"一般男子",deptcode : "T15", division :"基準化・G 品質係８５１組（再発防止・評価基準づくりなど)",birthplace :"北海道札幌市 出身 （みよし市黒笹在住",hobby :"プロスピ、スポーツ観戦（野球・バスケ ・ラグビーなど）スノーボード、LEGO （息子より夢中になっちゃう",best :"2.8㎞： 10 分 8 秒 19 歳当時）順調に下降中",comment :"３年ぶりに選手登録します。結婚してから、活動参加が停滞＆運動不足になってましたが、息子が自転車に乗れるようになったので、ジョギングを再開し一緒に運動しようと思います。だんだんと若い方々の顔と名前が一致しなくなってきたので、親睦会をきっかけに仲良くなってヤングパワーを分けてもらおうと思います。【目標 】 ハーフマラソンにチャレンジ！（狙い： 2023 名古屋シティマラソン）2019御嶽合宿",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/saito.jpg?raw=true"},{name :"西﨑和希",part :"一般男子",deptcode : "T15", division :"基準化・G 品質係 852 組（ｱｼﾞｱJ CBU 調査・海外事業体ｻﾎﾟｰﾄ）",birthplace :"愛知県豊橋市（田原工場から車で5 分）",hobby :"朝活・MLB 観戦（大谷翔平ファン）社会人：ほどほどに筋トレ",best :"マラソン参加経験無しですが週２ペースで２３ km ラン継続中です",comment :"昨年途中から参加させていただいてます。運営陣の皆様ありがとうございます。今年も駅伝をきっかけに多くの方と関われることが1 番楽しみです！！走ることは苦手ですが「4 分半 /km 切り」を目指して頑張ります。個人的に減量チャレンジしてますので「年内6 ㎏減」を目指して追い込みます。",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/nishizaki.jpg?raw=true"},{name :"吉野智",part :"シニア",deptcode : "T16", division :"統括係（設備・計測機器保全業務）",birthplace :"大分県竹田市",hobby :"ジョギング、登山、家庭菜園、語学学習カラオケ",best :"スポセン2.8km 10 分 08 秒3.6km 1 2 分 31 秒5.2km 1 8 分 36 秒6.6km 24 分 31 秒10km3 6 分 47 秒（一色）ハーフ1 時間 33 分 23 秒（ナガシマ）フル3 時間 14 分 35 秒（いびがわ）",comment :"社内駅伝30 回大会より参加、今年最後の参加になります。「終り良ければ全てよし」の気持ちでケガ無く安全に頑張ります。",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/yoshino.jpg?raw=true"},{name :"夏目信義",part :"シニア",deptcode : "T16", division :"統括係（人財育成",birthplace :"現在の住まい：TTC-S の近く",hobby :"飲酒,ランニング・ハイキング",best :"５分ｋｍ",comment :"オンライン参加ですが、よろしくお願いします！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/natsume.jpg?raw=true"},{name :"本多孝志",part :"シニア",deptcode : "T16", division :"統括係８６３組（課内資格取得、指名業務）",birthplace :"愛知県豊田市",hobby :"畑の草刈り（釣りに行けないので）",best :"フルマラソン：２時間45 分（２？歳）",comment :"足腰が衰えないように、また体重が増えないように走っています。だけど・・・",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/honda.jpg?raw=true"},{name :"澤田剛志",part :"シニア",deptcode : "T16", division :"統括係（各種教育事務局）",birthplace :"愛知県豊田市",hobby :"テニス、ゴルフ、ドライブ",best :"最近の記録がありません",comment :"大ベテランの先輩に誘われ、約１５年ぶりに参加させていただいております。健康第一で楽しんで走りたいと思います。よろしくお願いします。",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/sawada.jpg?raw=true"},{name :"田中哲史",part :"シニア",deptcode : "T22", division :"法規・部品品質係　９２２組（部品強度・信頼性評価）",birthplace :"三重県津市河芸町",hobby :"最近ゴルフを復活させました",best :"なし",comment :"ケガしない程度に頑張ります！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/tanaka.jpg?raw=true"},{name :"竹平忠司",part :"シニア",deptcode : "T24", division :"電子・電池品質係941 組（電子 部品の未然防止評価、市場不具合調査）",birthplace :"静岡県磐田市",hobby :"Yariscup 手伝い,93年入社からコロナ中止前まで社内駅伝27 年連続出場",best :"全社駅伝：95 年 1 区 25:35/7.2km01年 4 区 18:20/5.2km03年 7 区 10:31/2.8km",comment :"社内駅伝を長く続けてきましたが、コロナから練習量が激減し、体重が激増。ダイエットを兼ねてもう一度がんばります。",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/takehira.jpg?raw=true"},{name :"柳井美智也",part :"シニア",deptcode : "T25", division :"モビリティ DX 品質係（デジタル化推進）",birthplace :"島根県益田市",hobby :"バイク・キャンプ・もちろん走る事も・・・",best :"2.6km4’41”毎回5 秒ぐらいずつ縮めて行けたらいいな",comment :"健康維持と誰かのために ””（タスキをつなぐために）を実践するためにやってます。皆さんと良い記録を残したいです写真をここに貼って下さい！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/yanai.jpg?raw=true"},{name :"岩本雅弘",part :"一般男子",deptcode : "T25", division :"モビリティ DX 品質係（各種データ活用：CAN300 ・ SNS",birthplace :"愛知県豊田市",hobby :"トレッキング",best :"忘れました！",comment :"故障しないように、少しずつ走りたいと思います！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/iwamoto.jpg?raw=true"},{name :"去石遥音",part :"一般男子",deptcode : "T25", division :"モビリティ DX 品質係 951 組（コト・サービス品質の監査体制構築）",birthplace :"東京都練馬区",hobby :"ドライブ・御朱印集め",best :"入社時はB チームのアンカーやってました！→今は見る影もないです",comment :"速く走るだけの体力は無いですが、ダイエットとして頑張ります！飲み会の皆勤賞を目指します！笑",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/sariishi.jpg?raw=true"},{name :"中村華愛",part :"マネージャー",deptcode : "T25", division :"モビリティ DX 品質係951 組（サービス品質の監査体制 構築",birthplace :"広島県廿日市市",hobby :"小～中学：水泳やってました素敵な趣味をご紹介ください！",best :"ないです",comment :"まずは皆さんの顔と名前を全力で覚えます",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/nakamura.jpg?raw=true"},{name :"寺田周平",part :"一般男子(幹事長)",deptcode : "Q3", division :"第３車両室先進安全Ｇ（TSS 、 PKSB 等の EDER ・市場処置）",birthplace :"愛知県日進市 現住：みよし市",hobby :"テニス、料理、 ゴルフ",best :"時速8km ぐら いでのんびり走るのが好き最近の記録は2.4km を 13 14 分ぐらい",comment :"燃えろ！中性脂肪！！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/terada.jpg?raw=true"},{name :"西村昭博",part :"一般男子",deptcode : "Q1", division :"第1 車両室・ミッドサイズ１ G（EDER ・市場処置",birthplace :"熊本県荒尾市",hobby :"旅行",best :"無しです（すいません）",comment :"自分に厳しく、（ときには優しく）頑張ります！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/nishimura.jpg?raw=true"},{name :"佐藤郁雄",part :"シニア",deptcode : "Q1", division :"第1 車両室・シャシー調査 Gr（シャシー部品 S/A 案件）",birthplace :"山口県・下関市",hobby :"ゴルフ・キャンプ・釣り・ドラゴンズの応援",best :"1500m4:58 （高校時2.8Km11:15 20 年前社内駅伝）10km：棄権（熱中症で救急搬送ハーフマラソン：1:50:35 (5 年前）フルマラソン：4:36:30 （昨年",comment :"昨年の出場したフルマラソン大会で、高校時代の当時帰宅部だった友人に負けてしまい今年 11 月の大会でリベンジを果たしたくて、駅伝メンバーへの参加を決意しました。ただ過去に10km マラソンで苦い経験があり、 家族からは「がんばらないでくれ」といつも反対されていて、日々後ろめたさを思いにトレーニングしていますが、がんばります。",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/sato.jpg?raw=true"},{name :"後藤博隆",part :"シニア",deptcode : "Q2", division :"お客様品質部第 2 車両室 ミニバン G（ノア、ヴォクシーのEDER 担当）",birthplace :"岐阜県大垣市",hobby :"読書、動画鑑賞、ゲームだけど、今は子育て",best :"2008年 いび川 フルマラソン完走2018年 いび川 フルマラソン完走2019年 ダラス フルマラソン完走",comment :"最近は運動不足でメタボ気味。休日も子育てメインで中々運動の時間を設けることが大変ですが、一歩ずつ、一走ずつ、時間を見つけて頑張ります。",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/goto.jpg?raw=true"},{name :"山田眞也",part :"一般男子",deptcode : "M", division :"技術統括室企画G（客品の将来検討、クレーム室移転etc",birthplace :"ボストン３歳～ 東京都文京区",hobby :"読書、スポーツ観戦（野球、サッカー）グルメ、（コロナ前）旅行",best :"ベストスポセン2.8km 11’54 [2013]",comment :"タイムは遅いですが、自分のペースでベスト更新 できたらと思っています。よろしくお願い致します！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/yamada.jpg?raw=true"},{name :"結城耕平",part :"一般男子",deptcode : "M", division :"技術統括室企画 G（部の将来像の検討と推進）",birthplace :"千葉県鎌ケ谷市",hobby :"カメラ、犬との散歩これ",best :"2021年から週 1 回 5km ほど ランニング",comment :"楽しみながら、自己ベスト目指して頑張ります！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/yuki.jpg?raw=true"},{name :"佐藤亮介",part :"一般男子",deptcode : "Q2", division :"第2 車両室・コンパクト G（小型乗用車のEDER 推進）",birthplace :"豊田市",hobby :"週末のビール、家族で旅行",best :"写真は8 年前のリレーマラソンの時のです。記録は残ってませんでした。",comment :"最近全然運動できてないのでこれをきっかけに運動したいです！",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/sato_ryosuke.jpg?raw=true"},{name :"松本崇敬",part :"一般男子",deptcode : "CQ", division :"お客様品質づくり室",birthplace :"ー",hobby :"ー",best :"ー",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/noimage.jpg?raw=true"},{name :"押野和馬",part :"一般男子",deptcode : "CQ", division :"お客様品質づくり室",birthplace :"ー",hobby :"ー",best :"2.8km 10'17",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/oshino.jpg?raw=true"},{name :"平方実",part :"一般男子",deptcode : "CQ", division :"お客様品質づくり室",birthplace :"ー",hobby :"ー",best :"ー",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/hirakata.jpg?raw=true"},{name :"永田翔吾",part :"一般男子",deptcode : "CQ", division :"お客様品質づくり室",birthplace :"ー",hobby :"ー",best :"2.8km 10'53",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/nagata.jpg?raw=true"},{name :"成谷和汰流",part :"一般男子",deptcode : "T12", division :"MS車両品質係",birthplace :"ー",hobby :"ー",best :"ー",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/noimage.jpg?raw=true"},{name :"竹内瑞貴",part :"一般男子",deptcode : "T12", division :"MS車両品質係",birthplace :"ー",hobby :"ー",best :"2.8km 11'45",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/takeuchi.jpg?raw=true"},{name :"高山菜摘",part :"女性",deptcode : "T14", division :"CV/TC車両品質係",birthplace :"ー",hobby :"ー",best :"2.8km 13'33",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/takayama.jpg?raw=true"},{name :"戸板誠詞",part :"マネージャー",deptcode : "T22", division :"法規・部品品質係　９２２組",birthplace :"ー",hobby :"ー",best :"ー",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/toita.jpg?raw=true"},{name :"矢崎孝明",part :"一般男子",deptcode : "T25", division :"モビリティ DX 品質係",birthplace :"ー",hobby :"ー",best :"2.8km 9'46",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/noimage.jpg?raw=true"},{name :"前山和義",part :"一般男子",deptcode : "Q3", division :"第３車両室",birthplace :"ー",hobby :"ー",best :"ー",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/maeyama.jpg?raw=true"},{name :"山村竜久",part :"マネージャー",deptcode : "T15", division :"基準化・G 品質係",birthplace :"ー",hobby :"ー",best :"ー",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/yamamura.jpg?raw=true"},{name :"井上琴凛",part :"マネージャー",deptcode : "T25", division :"モビリティ DX 品質係",birthplace :"ー",hobby :"ー",best :"ー",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/inoue_kotori.jpg?raw=true"},{name :"井比大空",part :"一般男子(新人)",deptcode : "T25", division :"モビリティ DX 品質係",birthplace :"ー",hobby :"ー",best :"ー",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/ibi.jpg?raw=true"},{name :"高本政博",part :"部外/海外",deptcode : "部外海外", division :"TME(ベルギー)",birthplace :"ー",hobby :"ー",best :"2.8km 9'48 マラソン2時間51分",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/takamoto.jpg?raw=true"},{name :"宮嶋雅章",part :"部外/海外",deptcode : "部外海外", division :"TDB(ブラジル)",birthplace :"ー",hobby :"ー",best :"2.8km 10'17",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/miyajima.jpg?raw=true"},{name :"根本祐希",part :"部外/海外",deptcode : "部外海外", division :"TKM(インド)",birthplace :"ー",hobby :"ー",best :"2.8km 10'56",comment :"入社3年目あたりから体重増加が気になり、個人的にランニングを始めました。◆モチベーション体型、体力維持！◆走りながら考えていること無心を心がけています◆悩みタイムが思うように伸びないスピード練習が苦手◆工夫習慣にして、細く長く続けるその後、駅伝に誘われて参加しました。",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/nemoto.jpg?raw=true"},{name :"小山英一郎",part :"部外/海外",deptcode : "部外海外", division :"サービス統括部",birthplace :"ー",hobby :"ー",best :"2.8km 10'09",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/koyama.jpg?raw=true"},{name :"諸角泰裕",part :"部外/海外",deptcode : "部外海外", division :"C&A事業部",birthplace :"ー",hobby :"ー",best :"・スポセン2.8Km：10分51秒（2015年　C&A練習時タイム　：前述の24歳頃：10分30秒位）　　・10km：41分02秒（2014年　みよし池マラソン大会）　・ハーフ：　92分28秒（2016年：犬山）　・フル：３時間17分46秒（2016年：ナゴヤアドベンチャー）⇒フルは2015年~18年にかけて7連続サブ3.5を達成。　・2017～　ウルトラマラソン(100km）に挑戦。　高山・東尋坊・白山白河郷・丹後等の大会（計７回）に出場。　　⇒　ベストは白山白河郷　12時間16分31秒　現在７連続完走中..。　　なので2.8kmは苦手です。　",comment :"◆[ﾓﾁﾍﾞｰｼｮﾝ]健康維持と世代を超えて和田君等の知り合いができる事ですかね。　あと、100Kmマラソン完走時は、達成感や自分に感動し涙が出そうになります。◆[悩み]歳とってきて、現状維持が精一杯。　それでウルトラマラソンに挑戦/シフトしているわけですが…。　◆[色々工夫している所]：あきないように練習強度のメリハリと靴は結構こだわりますかね…。またトレールランも好きです。",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/morozumi.jpg?raw=true"},{name :"小林淳一",part :"部外/海外",deptcode : "部外海外", division :"サービス統括部",birthplace :"ー",hobby :"ー",best :"2.8km 10'52",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/kobayashi.jpg?raw=true"},{name :"千葉大輔",part :"部外/海外",deptcode : "部外海外", division :"サービス統括部",birthplace :"ー",hobby :"ー",best :"2.8km 12'04",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/noimage.jpg?raw=true"},{name :"朝隈晃生",part :"部外/海外",deptcode : "部外海外", division :"部品技術情報部",birthplace :"ー",hobby :"ー",best :"2.8km 9'13",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/asakuma.jpg?raw=true"},{name :"葛谷亮太",part :"部外/海外",deptcode : "部外海外", division :"豊田合成㈱",birthplace :"ー",hobby :"ー",best :"10㎞マラソンのタイムは一時間ちょっとです。",comment :"出向元の豊田合成でも規模は小さいですが駅伝大会があり、若手要因として駆り出されたのがきっかけです。最初は気が向いたときに家の周りを走る程度でしたが、そんな自分に影響されて？母親、姉も走るようになり、今では家族で競う様に暇を見つけてランニングする毎日です。",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/kuzuya.jpg?raw=true"},{name :"伊藤綱基",part :"部外/海外",deptcode : "部外海外", division :"C&A事業部",birthplace :"ー",hobby :"ー",best :"ー",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/noimage.jpg?raw=true"},{name :"中公寿",part :"部外/海外",deptcode : "部外海外", division :"サービス統括部",birthplace :"ー",hobby :"ー",best :"2.8km 10'44 (品保客品でのベスト）",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/naka.jpg?raw=true"},{name :"寺本彩乃",part :"女性",deptcode : "C", division :"適合管理室",birthplace :"ー",hobby :"ー",best :"2.8km 14'26",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/teramoto.jpg?raw=true"},{name :"岡由希子",part :"女性",deptcode : "C", division :"適合管理室",birthplace :"ー",hobby :"ー",best :"2.8km 17'04",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/oka.jpg?raw=true"},{name :"磯野春",part :"女性",deptcode : "MA", division :"モビリティ保証室",birthplace :"ー",hobby :"ー",best :"2.8km 16'19",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/isono.jpg?raw=true"},{name :"相馬あきは",part :"女性",deptcode : "T23", division :"材料品質係931 組",birthplace :"ー",hobby :"ー",best :"2.8km 16'51",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/soma.jpg?raw=true"},{name :"岩崎未来",part :"女性",deptcode : "T23", division :"材料品質係931 組",birthplace :"ー",hobby :"ー",best :"2.8km 18'32",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/iwasaki.jpg?raw=true"},{name :"石川真弓",part :"女性",deptcode : "K", division :"企画室",birthplace :"ー",hobby :"ー",best :"2.8km 15'24",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/ishikawa.jpg?raw=true"},{name :"川崎正雅",part :"シニア",deptcode : "C", division :"適合管理室",birthplace :"ー",hobby :"ー",best :"2.8km 10'05",comment :"ー",pictureURL :"https://github.com/risunko3/ekidenmember_pic_english.github.io/blob/main/kawasaki.jpg?raw=true"}]



const schedulearray = [{ year : "2022", month : "10", date : "16" , datedisplay : "11/16(水)" , place : "スポーツセンター" , time : "18:30" , menu : "2.8kmコースタイムトライアル" , ref : ""}, { year : "2022", month : "10", date : "19" , datedisplay : "11/19(土)" , place : "スポーツセンター" , time : "10:30" , menu : "2.8kmコースタイムトライアル" , ref : ""}, { year : "2022", month : "10", date : "23" , datedisplay : "11/23(水)" , place : "本社グラウンド" , time : "17:30" , menu : "3000mトライアル" , ref : ""}, { year : "2022", month : "10", date : "26" , datedisplay : "11/26(土)" , place : "岡崎龍北グラウンド" , time : "9:30" , menu : "" , ref : ""}, { year : "2022", month : "10", date : "30" , datedisplay : "11/30(水)" , place : "本社グラウンド" , time : "17:30" , menu : "3000mトライアル" , ref : ""}, { year : "2022", month : "11", date : "3" , datedisplay : "12/3(土)" , place : "本社グラウンド" , time : "9:30" , menu : "各自調整" , ref : ""}, { year : "2022", month : "11", date : "4" , datedisplay : "12/4(日)" , place : "スポーツセンター" , time : "8:00" , menu : "ー" , ref : "全社駅伝大会！！"}, { year : "2022", month : "11", date : "7" , datedisplay : "12/7(水)" , place : "本社グラウンド" , time : "17:30" , menu : "3000mトライアル" , ref : ""}, { year : "2022", month : "11", date : "10" , datedisplay : "12/10(土)" , place : "スポーツセンター" , time : "9:30" , menu : "10km 〜 20km距離走" , ref : ""}, { year : "2022", month : "11", date : "14" , datedisplay : "12/14(水)" , place : "本社グラウンド" , time : "17:30" , menu : "各自調整" , ref : ""}, { year : "2022", month : "12", date : "17" , datedisplay : "12/17(土)" , place : "スポーツセンター" , time : "8:00" , menu : "ー" , ref : "部内駅伝大会！！"}]

const monthlyrecord = {安芸優一 : [484, , 470, , , 478, 499, 512, 457, 427 ], 伊藤公一 : [778, , , , 732, , , , , 715 ], 伊藤新太 : [, , , , , 649, 617, 577, 573, 572 ], 井上史弥 : [618, 571, , , 663, , 590, 545, 530, 529 ], 井比大空 : [, , , , , 822, , , , 730 ], 浦瀬翔太 : [, 752, , , , , , 760, 633,  ], 永田翔吾 : [776, 769, , , , 715, 670, , 713,  ], 永尾大樹 : [542, 557, , , , 548, 595, 522, 489, 499 ], 押野和馬 : [766, 723, 660, , , , 673, 682, 687,  ], 岡田弥生 : [, , , , , 712, , 684, , 684 ], 岡由希子 : [, , , , , , , , , 812 ], 加地友也 : [, , , , , 584, , 608, 589, 568 ], 夏目信義 : [, , , , , 666, 655, 651, 649,  ], 葛谷亮太 : [627, 627, 621, , 748, 709, 693, 747, 692,  ], 丸山宗也 : [, , , , , 610, , , ,  ], 岩本雅弘 : [, , , , , 590, , 640, ,  ], 吉野智 : [, , , , , 652, , , ,  ], 宮嶋雅章 : [670, 626, 644, , 641, 660, 654, 655, 647, 676 ], 去石遥音 : [, , , , , 660, , 728, 671, 630 ], 結城耕平 : [636, 650, 662, , 711, 711, , 656, 648,  ], 古沢大地 : [, , , , , 820, , , ,  ], 後藤博隆 : [, , , , , 952, 855, , , 773 ], 工藤泰丈 : [706, 705, 710, , 696, 689, 683, 672, 695, 685 ], 高山菜摘 : [, , , , 677, 732, 677, , ,  ], 高本政博 : [675, 658, 635, , , 621, 635, 631, 625,  ], 今村遼太郎 : [, , , , , 686, 688, 651, 674, 656 ], 佐藤郁雄 : [, , , , , , , , ,  ], 佐藤亮介 : [, , , , , 745, 757, 757, 750, 744 ], 坂尻雅 : [, , , , , 562, 561, 536, 501, 522 ], 三浦守道 : [1046, 910, , , , , , , ,  ], 山田眞也 : [, , 751, , 722, 745, 801, 721, 734, 705 ], 寺田周平 : [, , , , , 697, 706, 634, 645, 626 ], 寺本彩乃 : [, , , , , , , , , 687 ], 篠原達也 : [681, 706, 720, , 729, 728, , , , 823 ], 小山英一郎 : [, , 571, , 565, 636, , 597, 654,  ], 小野裕喜 : [635, 617, 650, , 613, 659, 636, 619, 638, 654 ], 小林淳一 : [, 738, , , , , , , ,  ], 杉岡俊斗 : [, , , , 656, 681, 621, , , 588 ], 西崎和希 : [, , , , , , , , 748,  ], 西村昭博 : [, , , , , 759, 731, 739, 749,  ], 西﨑和希 : [709, 669, 678, , , 692, 706, , ,  ], 千葉大輔 : [, , , , , 690, 722, , ,  ], 浅田有都 : [, , , , , 599, 649, 595, , 569 ], 舛田空 : [599, , , , , 590, , , 509, 487 ], 前山和義 : [, , , , , , , 655, 698,  ], 相馬あきは : [, , , , , , , , , 802 ], 大家瑞希 : [807, 782, , , , 855, , 843, 728, 650 ], 竹内瑞貴 : [, , , , , , , , 807, 821 ], 竹平忠司 : [, , , , , , , , 696, 652 ], 中公寿 : [, , , , , , , , 577,  ], 中山拓弥 : [532, 545, 553, , 550, 532, 535, 515, 508, 505 ], 中川孝二 : [, , , , , , , , 603, 571 ], 朝隈晃生 : [532, 511, 498, , 509, 490, 511, 545, 511, 474 ], 田中哲史 : [695, 660, 663, , 663, 646, 694, 684, 661, 652 ], 南智裕 : [736, 700, , , , 728, , 698, 586, 770 ], 尾野貴広 : [581, 571, 577, , 591, 598, 594, 574, 542, 633 ], 武田朋樹 : [, , , , , 635, 613, 585, 573, 538 ], 平宗一郎 : [, , 909, , 694, 725, 683, 701, 703, 655 ], 平方実 : [, , , , , , , 725, 706,  ], 本多孝志 : [, , , , , , , , 676, 625 ], 野田大樹 : [784, , , , 839, 624, 739, 637, 638,  ], 柳井美智也 : [671, , , , 677, 741, , 713, ,  ], 和田龍太 : [464, 474, 471, , 471, 464, 460, 461, 455, 439 ], 澤田剛志 : [, , , , , 772, 718, 783, 772,  ], 齋藤貴広 : [, , , , , 666, 919, 855, 742,  ], 石川真弓 : [, , , , , , , , , 733 ], 高城和広 : [, , , , , , , , , 734 ], 磯野春 : [, , , , , , , , , 776 ], 岩崎未来 : [, , , , , , , , , 882 ], 清原椎渚 : [, , , , , , , , , 969 ]}

const ippanrank = [{ rank : "1位", name : "安芸優一", time : "7分19秒 ", speed : "19.3" },{ rank : "2位", name : "和田龍太", time : "7分35秒 ", speed : "18.6" },{ rank : "3位", name : "永尾大樹", time : "8分9秒 ", speed : "17.3" },{ rank : "4位", name : "朝隈晃生", time : "8分10秒 ", speed : "17.3" },{ rank : "5位", name : "坂尻雅", time : "8分21秒 ", speed : "16.9" },{ rank : "6位", name : "舛田空", time : "8分22秒 ", speed : "16.9" },{ rank : "7位", name : "中山拓弥", time : "8分25秒 ", speed : "16.8" },{ rank : "8位", name : "井上史弥", time : "8分49秒 ", speed : "16" },{ rank : "9位", name : "尾野貴広", time : "9分2秒 ", speed : "15.6" },{ rank : "10位", name : "伊藤新太", time : "9分32秒 ", speed : "14.8" },{ rank : "11位", name : "武田朋樹", time : "9分33秒 ", speed : "14.8" },{ rank : "12位", name : "中公寿", time : "9分37秒 ", speed : "14.7" },{ rank : "13位", name : "加地友也", time : "9分44秒 ", speed : "14.5" },{ rank : "14位", name : "浅田有都", time : "9分45秒 ", speed : "14.5" },{ rank : "15位", name : "南智裕", time : "9分46秒 ", speed : "14.4" },{ rank : "16位", name : "杉岡俊斗", time : "9分48秒 ", speed : "14.4" },{ rank : "17位", name : "岩本雅弘", time : "9分50秒 ", speed : "14.3" },{ rank : "18位", name : "丸山宗也", time : "10分10秒 ", speed : "13.9" },{ rank : "19位", name : "小野裕喜", time : "10分13秒 ", speed : "13.8" },{ rank : "20位", name : "高本政博", time : "10分21秒 ", speed : "13.6" },{ rank : "21位", name : "葛谷亮太", time : "10分21秒 ", speed : "13.6" },{ rank : "22位", name : "野田大樹", time : "10分24秒 ", speed : "13.6" },{ rank : "23位", name : "寺田周平", time : "10分26秒 ", speed : "13.5" },{ rank : "24位", name : "去石遥音", time : "10分30秒 ", speed : "13.4" },{ rank : "25位", name : "浦瀬翔太", time : "10分33秒 ", speed : "13.4" },{ rank : "26位", name : "結城耕平", time : "10分36秒 ", speed : "13.3" },{ rank : "27位", name : "今村遼太郎", time : "10分51秒 ", speed : "13" },{ rank : "28位", name : "前山和義", time : "10分55秒 ", speed : "12.9" },{ rank : "29位", name : "押野和馬", time : "11分0秒 ", speed : "12.8" },{ rank : "30位", name : "齋藤貴広", time : "11分6秒 ", speed : "12.7" },{ rank : "31位", name : "西﨑和希", time : "11分9秒 ", speed : "12.6" },{ rank : "32位", name : "永田翔吾", time : "11分10秒 ", speed : "12.6" },{ rank : "33位", name : "篠原達也", time : "11分21秒 ", speed : "12.4" },{ rank : "34位", name : "千葉大輔", time : "11分30秒 ", speed : "12.3" },{ rank : "35位", name : "平方実", time : "11分46秒 ", speed : "12" },{ rank : "36位", name : "山田眞也", time : "12分1秒 ", speed : "11.7" },{ rank : "37位", name : "井比大空", time : "12分10秒 ", speed : "11.6" },{ rank : "38位", name : "西村昭博", time : "12分11秒 ", speed : "11.6" },{ rank : "39位", name : "佐藤亮介", time : "12分25秒 ", speed : "11.4" },{ rank : "40位", name : "西崎和希", time : "12分28秒 ", speed : "11.3" },{ rank : "41位", name : "竹内瑞貴", time : "13分27秒 ", speed : "10.5" },{ rank : "42位", name : "古沢大地", time : "13分40秒 ", speed : "10.3" }]

const womenrank =[{ rank : "1位", name : "大家瑞希", time : "11分6秒 ", speed : "12.7" },{ rank : "2位", name : "高山菜摘", time : "11分17秒 ", speed : "12.5" },{ rank : "3位", name : "岡田弥生", time : "11分24秒 ", speed : "12.4" },{ rank : "4位", name : "寺本彩乃", time : "12分27秒 ", speed : "11.3" },{ rank : "5位", name : "岡由希子", time : "14分47秒 ", speed : "9.5" },{ rank : "6位", name : "相馬あきは", time : "15分25秒 ", speed : "9.1" }];

const seniorrank = [{ rank : "1位", name : "小山英一郎", time : "9分25秒 ", speed : "15" },{ rank : "2位", name : "中川孝二", time : "9分31秒 ", speed : "14.8" },{ rank : "3位", name : "宮嶋雅章", time : "10分26秒 ", speed : "13.5" },{ rank : "4位", name : "田中哲史", time : "10分46秒 ", speed : "13.1" },{ rank : "5位", name : "夏目信義", time : "10分49秒 ", speed : "13" },{ rank : "6位", name : "吉野智", time : "10分52秒 ", speed : "13" },{ rank : "7位", name : "柳井美智也", time : "11分11秒 ", speed : "12.6" },{ rank : "8位", name : "工藤泰丈", time : "11分12秒 ", speed : "12.6" },{ rank : "9位", name : "本多孝志", time : "11分16秒 ", speed : "12.5" },{ rank : "10位", name : "平宗一郎", time : "11分23秒 ", speed : "12.4" },{ rank : "11位", name : "竹平忠司", time : "11分36秒 ", speed : "12.2" },{ rank : "12位", name : "伊藤公一", time : "11分55秒 ", speed : "11.8" },{ rank : "13位", name : "澤田剛志", time : "11分58秒 ", speed : "11.8" },{ rank : "14位", name : "小林淳一", time : "12分18秒 ", speed : "11.5" },{ rank : "15位", name : "後藤博隆", time : "14分15秒 ", speed : "9.9" },{ rank : "16位", name : "三浦守道", time : "15分10秒 ", speed : "9.3" }];


