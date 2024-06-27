let k;
    // let level=prompt("which level would you like to play 1 or 2");
    // if(level==2)
    // k=7;
    // else
  k=4; 

let cnt=0;
  //גודל המטריצה
let span;
let newRow;
let numbers;
//שליחה לפונקציה פעם ראשונה עם קיי שווה ארבע
function ostart(k)
{
    document.getElementById("wh").remove();
    start(k);

}
function start(k)
{
let rand1=Math.floor(Math.random() * (k*10))+1;//רינדום מספר ללמעלה-המספר שצריך למצוא
let ri=Math.floor(Math.random() * k)+1;//אינדקס למספר שלמעלה
let rj=Math.floor(Math.random() *k )+1;//כנ"ל
let numid;//האינדקס שבו נמצא האיבר שאותו מחפשים
document.getElementById("lookfor").innerHTML=rand1;//מכניס ללוק פור את המספר שצריך לחפש שם הוא יוצג בגדול
let board = document.getElementById("board");//משתנה שבו שמרתי את בורד מה body

for (let i = k; i >= 1; i--)//לולאה שיוצרת את השורות 
{
newRow = document.createElement("div");      //יוצר אלמנט מסוג דיב כל השורות הם דיבים
newRow.classList.add("row");             //הקלאס של השורה שנוצרה הוא ROW
board.appendChild(newRow);         //השורה שנוצרה היא נהיית הילד של הלוח
for (let j = k; j >= 1; j--)          //לולאה שיוצרת את העמודות
{
let numbers = i *k -j+1;               //חישוב בשביל האי די של התא
span = document.createElement("span");  //יוצרת אובייקט מסוג ספאן ומכניסה למשתנה
if(k==4)                                //אם קיי שווה ארבע זה אומר שהוא בשלב הראשון
{
span.classList.add("square");            //הוא שייך לקלאס סקוואר
}
if(k==7)                                //אם קיי שווה שבע זה אומר שהוא בשלב השני של המשחק
{
span.classList.add("square7");//הוא שייך לקלאס סקוואר שבע
}
span.setAttribute("id", "a" + numbers);//יוצרת אי די למשתנה 
newRow.appendChild(span);//מגדירה אותו בתור הילד של השורה שבא הוא נמצא
if(k==10)   //זה אומר שאתה בשלב השלישי של המשחק
{
span.classList.add("square10");//אתה שייך לסקוואר עשר
}
 if(ri==i&&rj==j)//אם התא שבו אני נמצאת שווה לתא שאליו רציתי להכניס את המספר שאני צריכה למצוא
{
  span.textContent=rand1;//התא יכיל את המספר המבוקש
  numid=numbers;//עכשיו יהיה שמור לי במשתנה נאמאידי  
   
}
else
{
  let rand2=Math.floor(Math.random() * (k*10))+1;//רינדום מספר להכנסה לתא במטריצה
  while(rand1==rand2)//כל עוד את השווה למספר שצריך למצוא תמשיך לרנדם מספרים אחרים כי לא רוצים שהוא יופיע יותר מפעם אחת במטריצה
   rand2=Math.floor(Math.random() * (k*10))+1; 
   span.textContent=rand2;//ספאן יכיל את המספר המרונדם 
 
}
  
}//סוגרת פור פנימי
}//סוגרת פור חיצוני
document.getElementById( "a" + numid).addEventListener("click", chek);//אם הוא לוחץ על התא הנכון זאת אומרת על המספר המבוקש לך לפונקצייה צאק


function chek( )
{

document.getElementById("c").innerHTML=++cnt;//לך לדיב סי ותשים בו את מספר הנקודות 
document.getElementById("board").innerHTML="";//לך לבורד תאתחל לי אותו לריק
if(cnt==4)//זה אומר שהוא סיים שלב ראשון בהצלחה
{
k=7;//ככשיו נצטרך להגדיר מטריצה גדולה יותר שבע על שבע
document.getElementById("star1").src="איקון הרשמה.png";//תשנה את הדיב הריק לתמונת כוכב
}
if(cnt==7)//זה אומר שהוא סיים שלב שני בהצלחה
{
k=10;//עכשיו נצטרך להגדיר מטריצה גדולה יותר עשר על עשר
document.getElementById("star2").src="איקון הרשמה.png";
}
if(cnt==10)//זה אומר שהוא סיים שלש שלישי בהצלחה
{
document.getElementById("star3").src="איקון הרשמה.png";
}
if(cnt==13)//הוא סיים שלב רביעי בהצלחה
{
k=0;
let finishh = document.createElement("div");//יוצר דיב ומכניס למשתנה פיניש
span.setAttribute("id", "finish");
}
start(k);//
}
}
console.log(span);
document.getElementById("try").addEventListener('click',function()
{
    window.open("newProject.html");
})
function logine()
{
  document.getElementById("container").style.display="inline-block";
  let arrUser; 
} 
document.getElementById ("t2").addEventListener("click",function()
{
localStorage.setItem("name",document.getElementById("t1").value);
})
document.querySelector(h1).innerHTML="welcom to "+ localStorage.getItem("name");
let i;
