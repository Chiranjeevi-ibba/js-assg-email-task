let ulEle = document.getElementById("un-order-list")
let plusBtnIdEle = document.getElementById("plus-btn")
let defaultBtnEle = document.getElementById("deafult-btn")
let defautlErrorEle = document.getElementById("default-error")

count = 1
function onClickPlusBtn() {
    if (count <= 9) {
        count++
        let liEle = document.createElement("li")
        liEle.setAttribute("class", "each-li")
        ulEle.appendChild(liEle)

        let divEle = document.createElement("div")
        divEle.setAttribute("class", "input-container")
        liEle.appendChild(divEle)

        let inputEle = document.createElement("input")
        inputEle.placeholder = "Enter Email"
        inputEle.setAttribute('class', "input-field")
        /* inputEle.setAttribute("onblur", `onBlurDynamicInputFields(${inputEle})`) */
        inputEle.addEventListener("blur", function() {
            onBlurDynamicInputFields(inputEle.value, spanEle)
        })
        divEle.appendChild(inputEle)

        let spanEle = document.createElement("span")
        spanEle.setAttribute("class", "error")
        divEle.append(spanEle)

        let plusBtn = document.createElement("button")
        plusBtn.textContent = "+"
        plusBtn.setAttribute('class', "plus-btn")
        plusBtn.setAttribute("onclick", "onClickPlusBtn()")
        liEle.appendChild(plusBtn)

        let minusBtn = document.createElement("button")
        minusBtn.textContent = "-"
        minusBtn.setAttribute("class", "minus-btn")
        minusBtn.addEventListener("click", function() {
            onClickMinusBtn(liEle)
        })
        liEle.appendChild(minusBtn)
        }
    else{
        alert("Maximum limit is 10 only.")
    }
}

function onClickMinusBtn(liEle) {
    ulEle.removeChild(liEle)
    count--
}

function validation() {
    let regexp = /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9\.-_]+).([a-z]{2,10})(.[a-z]{2,10})?$/
    if (defaultBtnEle.value === ""){
        defautlErrorEle.textContent = "*required"
    }else if (!regexp.test(defaultBtnEle.value)){
        defautlErrorEle.textContent = "please enter valid email"
    }else {
        defautlErrorEle.textContent = ""
    }
}

function onBlurDynamicInputFields(inputEleValue, spanEle) {
    console.log(inputEleValue);
    let regexp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9-_\.]+).([a-z]{2,10})(.[a-z]{2,10})?$/
    if (inputEleValue === "") {
        spanEle.textContent = "*required"
    }else if (!regexp.test(inputEleValue)){
        spanEle.textContent = "please enter valid email"
    } else {
        spanEle.textContent = ""
    }
}