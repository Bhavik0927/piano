const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");


let allKeys = [];
let audio = new Audio("tunes/a.wav")  // by default, audio src is 'a' tune

const playTune = (key) => {
    //passing audio src based on key passed
    audio.src = `tunes/${key}.wav`;  
    audio.play();
    

    // getting clicked key element
    const clickedKey = document.querySelector(`[data-key = "${key}"]`);
    clickedKey.classList.add("active"); //adding active tag
    
    setTimeout(() => {
        // for removing active tag
        clickedKey.classList.remove("active"); 
    }, 150)
}


pianoKeys.forEach(key => { 
    //adding  data-key value to the allkeys array
    allKeys.push(key.dataset.key);
    key.addEventListener('click', () => {
        //Calling playTune function with passing data-key value as an argument
        playTune(key.dataset.key)
    })
     
})




// for keyboard keys
const pressedKey = (e) => {
    // if the pressed key is in the allkeys array,only call the palyTune  function
    if(allKeys.includes(e.key)) {
        playTune(e.key);
    }
}

// for show/hide button
const  showHideKeys = () =>{
    // toggling hide class from each keys on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle('hide'))
}

// for volume slider
const  handleVolume = (e) =>{
    //passing the range slider value as an audio volume
    audio.volume = e.target.value;
}

keysCheckbox.addEventListener('click',showHideKeys)
volumeSlider.addEventListener('input',handleVolume);
document.addEventListener('keydown', pressedKey);  