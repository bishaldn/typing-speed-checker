/* Steps:
    1. Fisrt Target required tags;
    2. Create a array of sentences;
    3. Add EventListner to button and make visible of sentences
*/



/* step:1*/
const title = document.getElementById('title');
const msg   = document.getElementById('msg');
const  btn   = document.getElementById('btn');
let startTime, endTime;
const showSpeed = document.getElementById('t-speed');
const showRight = document.getElementById('c-words');
const showWrong = document.getElementById('w-words');
const showtotalTime = document.getElementById('t-time');
msg.disabled = true;
/* step:2*/
const SetofSencs = ['JavaScript is super fun', 'CSS is little bit complex, but once you get uesd to of it you will become master of it', 'HTML is just the skull, CSS gives it a shape , and JavaScript gives it brain'];
const len = SetofSencs.length;
/* step:3*/
const apearSencs = ()=>{
    let randomNum = Math.floor(Math.random()*len);
    title.innerHTML = SetofSencs[randomNum];
    btn.innerHTML = 'Stop';
    let time = new Date();
    startTime = time.getTime();
}
const getResult =()=>{
    let time = new Date();
    endTime = time.getTime();
    let totalTime =  ((endTime-startTime)/1000);
    console.log(totalTime);
    let msgValue = msg.value;
    let NumberofWords = msgValue.split(' ').length;
    console.log(NumberofWords);
    let TypeSpeed = Math.round((NumberofWords/totalTime)*60);
    showSpeed.innerHTML = TypeSpeed + " " + 'Words/Minutes';
    let GivenWords = title.innerText.split(' ');
    let FinalWords = msgValue.split(' ');
    let count = 0;
    GivenWords.forEach((item,index) => {
        if(item==FinalWords[index]){
            count++;
        }
    });
    let wrongWords = (GivenWords.length-count);
    showRight.innerHTML = count + " " + 'out of'+" "+GivenWords.length+" "+ "words";
    showWrong.innerHTML = wrongWords + " " + 'words';
    showtotalTime.innerHTML = `You took ${Math.round(totalTime)} seconds to complete the task.`; 


}

btn.addEventListener('click', function(){
       if(this.innerText=='Start'){
        msg.disabled= false;
        apearSencs();
        msg.value = '';
       }
       else if(this.innerText=='Stop'){
        msg.disabled = true;
        btn.innerHTML = 'Start';
        getResult();
        if((msg.value)==''){
            showSpeed.innerHTML = 0 + ' ' + 'Words/Minutes';
        }
       }
});


