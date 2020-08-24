"use strict"

const entryArea = document.getElementById("entryArea")
const submitButton = document.getElementById('submit')
const cancelButton = document.getElementById('cancel')
const messageBox = document.getElementById('messageContainer')

const nounMessageInputs = document.querySelectorAll(".message-body #noun")
const verbMessageInputs = document.querySelectorAll(".message-body #verb")
const adjectiveMessageInputs = document.querySelectorAll(".message-body #adj")
const allInputOnForm = document.querySelectorAll("#entryArea .input")
console.log(allInputOnForm)
let buttonItemArr =[];

// let array1 = [10,20,21,12,200,2334]
// console.log(array1.sort((a,b)=>{return a-b}))
// entryArea.appendChild(formFieldDiv)
// formFieldDiv.appendChild(formLabel)
// formFieldDiv.appendChild(controlDiv)
// controlDiv.appendChild(formInput)

function createNewInputForm(){
    nounMessageInputs.forEach((input)=>{
        console.log(input)
        const formFieldDiv = document.createElement("div")
        const formLabel = document.createElement("label")
        const controlDiv = document.createElement('div')
        const formInput = document.createElement('input')               
        entryArea.appendChild(formFieldDiv)
        formFieldDiv.appendChild(formLabel)
        formFieldDiv.appendChild(controlDiv)
        controlDiv.appendChild(formInput)
        formFieldDiv.classList.add("field")
        formLabel.classList.add("label")
        formLabel.innerHTML = "Noun"
        controlDiv.classList.add('control')
        formInput.classList.add('input')
        formInput.classList.add('is-danger')
        formInput.id = "nounInput"
        formInput.type = "text"
        formInput.placeholder = "noun"
    });
    verbMessageInputs.forEach((input)=>{
        const formFieldDiv = document.createElement("div")
        const formLabel = document.createElement("label")
        const controlDiv = document.createElement('div')
        const formInput = document.createElement('input')               
        entryArea.appendChild(formFieldDiv)
        formFieldDiv.appendChild(formLabel)
        formFieldDiv.appendChild(controlDiv)
        controlDiv.appendChild(formInput)
        formFieldDiv.classList.add("field")
        formLabel.classList.add("label")
        formLabel.innerHTML = "Verb"
        controlDiv.classList.add('control')
        formInput.classList.add('input')
        formInput.classList.add('is-danger')
        formInput.id = "verbInput"
        formInput.type = "text"
        formInput.placeholder = "verb"
    });
    adjectiveMessageInputs.forEach((input)=>{
        const formFieldDiv = document.createElement("div")
        const formLabel = document.createElement("label")
        const controlDiv = document.createElement('div')
        const formInput = document.createElement('input')               
        entryArea.appendChild(formFieldDiv)
        formFieldDiv.appendChild(formLabel)
        formFieldDiv.appendChild(controlDiv)
        controlDiv.appendChild(formInput)
        formFieldDiv.classList.add("field")
        formLabel.classList.add("label")
        formLabel.innerHTML = "Adjective" //unique
        controlDiv.classList.add('control')
        formInput.classList.add('input', 'is-danger')
        //formInput.classList.add('is-danger')
        formInput.id = "adjInput" //unique
        formInput.type = "text"
        formInput.placeholder = "adj"
    })
}
createNewInputForm()

const createOptionButtons=()=>{
    const fieldDiv = document.createElement('div')
    messageBox.appendChild(fieldDiv)
    const controlDiv = document.createElement('div')
    const buttonItem = document.createElement('button')
    for (let i = 1; i < 3; i++){
        fieldDiv.appendChild(controlDiv)
        controlDiv.classList.add('control')
        controlDiv.appendChild(buttonItem)
        buttonItem.id = "option" + i
        buttonItem.classList.add('button', 'is-link', 'is-light')
        buttonItem.innerHTML = buttonItemArr[i-1]
    }

}

const nounInputsForm = document.querySelectorAll('#nounInput')
const verbInputsForm = document.querySelectorAll('#verbInput')
const adjInputsForm = document.querySelectorAll('#adjInput')
console.log(nounInputsForm)

let adjArray =[]

submitButton.addEventListener('click', (e)=>{
    nounMessageInputs.forEach((input, index)=>{
        input.value = nounInputsForm[index].value
        input.classList.add("is-success")
        input.classList.remove('is-danger')
    })
    verbMessageInputs.forEach((input, index)=>{
        input.value = verbInputsForm[index].value
        input.classList.add("is-success")
        input.classList.remove('is-danger')
    })
    Array.from(adjectiveMessageInputs).map((adjectiveMessageInputs)=>{
        Array.from(adjInputsForm).map(input => {
            adjectiveMessageInputs.value = input.value
            adjectiveMessageInputs.classList.add('is-success')
            adjectiveMessageInputs.classList.remove('is-danger')
        })
    })
    nounInputsForm.forEach((input) => {
        input.value = ""
    })
    verbInputsForm.forEach((input) => {
        input.value = ""
    })
    adjInputsForm.forEach((input) => {
        input.value = ""
    })
});

nounInputsForm.addEventListener('keyup', (e)=>{
    nounInputsForm.forEach((input)=>{
        if (input !== "") {
            input.classList.add('is-success')
            input.classList.remove('is-danger')
        }
    })
})

switchInputFormat()

cancelButton.addEventListener('click', (e)=>{

})

// formFieldDiv.classList.add("field")
// formLabel.classList.add("label")
// formLabel.innerHTML = "Noun"
// controlDiv.classList.add('control')
// formInput.classList.add('input')
// formInput.classList.add('is-danger')
// formInput.id = "noun"
// formInput.type = "text"
// formInput.placeholder = "noun"