
function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}


 const SynonymMaker =(array)=>{
   const variable = array.map(element =>`<span class="btn">${element}</span>`).join("")
  return  variable

}

const loadLessons =()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res)=>res.json())
    .then((json)=> displayLesson(json.data))
}

const manageSpiner = (stat) =>{
  if(stat == true){
    document.getElementById("spinner").classList.remove("hidden")
    document.getElementById("word-container").classList.add("hidden")
  }
  else{
    document.getElementById("spinner").classList.add("hidden")
    document.getElementById("word-container").classList.remove("hidden")
  }
}

const removeActive =()=>{

  const lessonmButton = document.querySelectorAll(".lesson-btn")
  lessonmButton.forEach(btn =>{
    btn.classList.remove("active")
  })

   
}

const LoadWordDetail = async(id) =>
{
   
   const url =`https://openapi.programming-hero.com/api/word/${id}`
   
   const res = await fetch(url)
   const details = await res.json();
  
    displayWordDetails(details.data);
}

const displayWordDetails = (word) =>{
 
  const detailsBox = document.getElementById("details-container")
  detailsBox.innerHTML=`<div class="">
          <h2 class="text-2xl font-bold">${word.word} (<i class="fa-solid fa-microphone-lines"></i>) : ${word.pronunciation}</h2>

        </div>
        <div class="">
          <h2 class="font-bold">meaning</h2>
          <p>${word.meaning}</p>
          
        </div>
        <div class="">
          <h2 class="font-bold">Example</h2>
          <p> ${word.sentence}</p>
          
        </div>
        <div class="">
          <h2 class="font-bold"> Synonym</h2>
          
          
           ${SynonymMaker(word.synonyms)}
          
          
        </div>`;
  document.getElementById("word_modal").showModal();
}

const loadLevelWord = (id)=>{

   manageSpiner(true)
  const url =`https://openapi.programming-hero.com/api/level/${id}`
  fetch(url)
  .then(res => res.json())
  .then(info => { 
    
    removeActive()
    const clickBtn = document.getElementById(`lesson-btn-${id}`)
    clickBtn.classList.add("active")
    displayLevelWord(info.data)
  })
}


const displayLevelWord = (words)=>{
    const wordContainer = document.getElementById("word-container")
    wordContainer.innerHTML=""

     if(words.length ==0 ){
      wordContainer.innerHTML=`

       <div class="text-center col-span-full space-y-6 font-bangla">
       <img src="./assets/alert-error.png" class="mx-auto" alt="">
  <p class="text-xs font-medium text-gray-500">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
   <h2 class="text-3xl font-bold">একটি next Select করুন।</h2>

 </div>
      `
      manageSpiner(false)
      return;
     }
    words.forEach(word => {
        const card =document.createElement("div");
        card.innerHTML=`  <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">

    <h2 class="font-bold text-2xl">${word.word}</h2>
    <p class="font-semibold">Meaning/pronunciation</p>
    <div class="text-2xl  font-medium font-bangla">${word.meaning} /${word.pronunciation}</div>

    <div class="flex justify-between items-center">
      <button onclick="LoadWordDetail(${word.id})" class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]"><i class="fa-solid fa-circle-info"></i></button>
      <button onClick="pronounceWord('${word.word}')" class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]"> <i class="fa-solid fa-volume-high"></i></button>
    </div>
  </div>`

  wordContainer.append(card);
        
    });
    manageSpiner(false)
}



const displayLesson = (lessons) =>{

//    1. get the container  and empty it 
      const levelContainer = document.getElementById("level-container")
      levelContainer.innerHTML="";


//    2.get into every lessons 

       for( let lesson of lessons)
       {
         const btnDiv = document.createElement("div")
         btnDiv.innerHTML=` <button id="lesson-btn-${lesson.level_no}" onClick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
         <i class="fa-solid fa-book-open"></i> Lesson-${lesson.level_no}</button>`

          levelContainer.append(btnDiv)
       }
      
    
}






loadLessons()



document.getElementById("btn-search").addEventListener("click",()=>{

  removeActive()
  const input =document.getElementById("input-search")
  const searchValue = input.value.trim().toLowerCase()
  

  fetch("https://openapi.programming-hero.com/api/words/all")
  .then(res => res.json())
  .then(data => {
    const allWords = data.data ;
    
    const fileterWords =allWords.filter(word => word.word.toLowerCase().includes(searchValue))
    displayLevelWord(fileterWords)
  })
  
  
})