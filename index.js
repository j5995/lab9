window.addEventListener("DOMContentLoaded", init);

function init(){
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      try{
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
      }
      catch(err){
        if((firstNum==="") || (secondNum==="")){
          throw new ValidationError("Blank input");
        }      
        else if(typeof(firstNum)!="number" || typeof(firstNum)!="number"){
          throw new ValidationError("Input a number");
        }
        else{
          throw(err);
        }
      }
      finally{
        console.log("Input two more numbers!");
      }
      
    });
    window.onerror = function(){
        console.log("Javascript error occurred");
    }
    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    // Start your code here
    // You may move this JS to another file if you wish
    errorBtns[0].addEventListener('click', ()=>{
      console.log("Console.log demo");
    });
    errorBtns[1].addEventListener('click', ()=>{
      console.error("Console.error demo");
    });
    errorBtns[2].addEventListener('click', ()=>{
      console.count();
    });
    errorBtns[3].addEventListener('click', ()=>{
      console.warn("Console.warn demo");
    });
    errorBtns[4].addEventListener('click', ()=>{
      console.assert(true==false, "Console.assert demo, true is not equal to false");
    });
    errorBtns[5].addEventListener('click', ()=>{
      console.clear();
    });
    errorBtns[6].addEventListener('click', ()=>{
      console.dir(document.head);
    });
    errorBtns[7].addEventListener('click', ()=>{
      console.dirxml(document);
    });
    errorBtns[8].addEventListener('click', ()=>{
      console.group("Test");
      console.log("Group start Test console.log");
    });
    errorBtns[9].addEventListener('click', ()=>{
      console.groupEnd("Test");
    });
    errorBtns[10].addEventListener('click', ()=>{
      console.table([
      {
        first: 'René',
        last: 'Magritte',
      },
      {
        first: 'Chaim',
        last: 'Soutine',
        birthday: '18930113',
      },
      {
        first: 'Henri',
        last: 'Matisse',
      }
      ]);
    });
    errorBtns[11].addEventListener('click', ()=>{
      console.time();
    });
    errorBtns[12].addEventListener('click', ()=>{
      console.timeEnd();
    });
    errorBtns[13].addEventListener('click', ()=>{
      const first = () => { second(); };
      const second = () => { third(); };
      const third = () => { fourth(); };
      const fourth = () => { console.trace(); };
      first();    
    });
    errorBtns[14].addEventListener('click', ()=>{
      bad();
    });
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
