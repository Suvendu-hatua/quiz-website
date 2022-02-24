const startBtn = document.getElementById("startButton");
const disclaimer = document.querySelector(".disclaimer");
const quiz = document.querySelector(".quiz");
const result=document.querySelector(".result");
const head=document.getElementById("heading");
const Questions = [
    {
        heading: "What is the Capital of Gujrat ?",
        option1: "KolKata",
        option2: "Mumbai",
        option3: "Surat",
        option4: "Gandhinagar",
        answer:  "Gandhinagar"
    },
    {
        heading: "What is the Capital of Pakistan ?",
        option1: "KolKata",
        option2: "Islamabad",
        option3: "Jalalabad",
        option4: "Karachi",
        answer:  "Islamabad"
    },
    {
        heading: "What is the Capital of Bihar ?",
        option1: "KolKata",
        option2: "Ranchi",
        option3: "Patna",
        option4: "Bhagalpur",
        answer:  "Patna"
    },
    {
        heading: "What is the Capital of Monipur?",
        option1: "Imphal",
        option2: "Kohima",
        option3: "Thispur",
        option4: "Itanagar",
        answer:  "Imphal"
    },
    {
        heading: "Who is the Finance Minister of India Right Now ?",
        option1: "Smt N.Sitharaman",
        option2: "Shri Arun Jaitley",
        option3: "P.Chidambaram",
        option4: "None of above",
        answer :"Smt N.Sitharaman"
    },
    {
        heading: "What is the Capital of Madhya Pradesh?",
        option1: "Bhopal",
        option2: "Islamabad",
        option3: "Jalalabad",
        option4: "Karachi",
        answer : "Bhopal"
    },
    {
        heading: "Who is the Chief Minister of Bihar ?",
        option1: "Nitish Kumar",
        option2: "Lalu Prasad",
        option3: "N.Pattyanayek",
        option4: "Pratap Yadav",
        answer :"Nitish Kumar"
    },
    {
        heading: "What is the Capital of Maharastra?",
        option1: "Bhopal",
        option2: "Mumbai",
        option3: "Goa",
        option4: "Chennai",
        answer: "Mumbai"
    },
    {
        heading: "What is the Capital of Tamil Nadu?",
        option1: "Chennai",
        option2: "Mumbai",
        option3: "Bangalore",
        option4: "Karachi",
        answer:"Chennai"
    },
    {
        heading: "What is the Capital of Goa?",
        option1: "Chennai",
        option2: "Mumbai",
        option3: "Panaji",
        option4: "Karachi",
        answer:"Panaji"
    }
]

let total=0;
let i=0;
window.addEventListener("load", function (e) {
    startBtn.style.display = "block";
    head.style.display="block";
})
startBtn.addEventListener("click", function (e) {
    startBtn.style.display = "none";
    disclaimer.style.display = "block"
     head.style.display="none";
})

const exitBtn = document.getElementById("exit");
const continueBtn = document.getElementById("continue");
exitBtn.addEventListener("click", function (param) {
    startBtn.style.display = "block";
    disclaimer.style.display = "none";
    head.style.display="block";
})
continueBtn.addEventListener("click", function (param) {
    startBtn.style.display = "none";
    disclaimer.style.display = "none";
    quiz.style.display = "block";
    let ques = document.querySelector(".ques");
    ques.innerHTML = `   <div>
      <h2>${Questions[0].heading}</h2>
  </div>
  <div class="option">
      <div class="inner">
          <h4 class="options">${Questions[0].option1}</h4>
  
          <h4 class="options">${Questions[0].option2}</h4>
      </div>
      <div class="inner">
      <h4 class="options">${Questions[0].option3}</h4>
     
      <h4 class="options">${Questions[0].option4}</h4>
      </div>
  </div>
  <hr>`
  console.log("first question")
  document.getElementById("foot-span").innerHTML=1;
  const options=document.getElementsByClassName("options");
  for( let j=0;j<4;j++)
  {
   
    options[j].addEventListener("click",function (param) { 

        if(options[j].innerHTML===Questions[0].answer)
        {
            options[j].style.backgroundColor="#06FF00";
            total++;
        }
         else{
            options[j].style.backgroundColor="red";
         } 
        document.querySelector(".option").style.pointerEvents="none";
     })
  }
  i++;
})

const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", function (param) {
    
    if(i===Questions.length)
    {
        quiz.style.display="none";
        result.style.display="block";
        document.getElementById("score").innerHTML=total;
        const restartBtn=document.getElementById("restartBtn");
        restartBtn.addEventListener("click",function () {
            result.style.display="none";
            startBtn.style.display="block";
            head.style.display="block";
            i=0;
            total=0;
          })
    }
    else{
        let ques = document.querySelector(".ques");
        ques.innerHTML = `   <div>
          <h2>${Questions[i].heading}</h2>
      </div>
      <div class="option">
          <div class="inner">
              <h4 class="options">${Questions[i].option1}</h4>
      
              <h4 class="options">${Questions[i].option2}</h4>
    
          </div>
          <div class="inner">
          <h4 class="options">${Questions[i].option3}</h4>
         
          <h4 class="options">${Questions[i].option4}</h4>
          </div>
      </div>
      <hr>`
      if(i==0)
      {
          console.log("first question.....")
      }
      document.getElementById("foot-span").innerHTML=i+1;
      const options=document.getElementsByClassName("options");
      for( let j=0;j<4;j++)
      {
        options[j].addEventListener("click",function (param) { 
            if(options[j].innerHTML===Questions[i-1].answer)
            {
                options[j].style.backgroundColor="#06FF00";
                total++;
            }
             else{
                options[j].style.backgroundColor="red";
             } 
            document.querySelector(".option").style.pointerEvents="none";
         })
      }
        i++;
    }

})   

