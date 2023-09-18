document.addEventListener("DOMContentLoaded", init);

function init() {

    // get dom elements
    const copyButton = document.querySelector(".copy_password")
    const generateButton = document.querySelector(".generate_password")
    const generatedPasswordInput = document.querySelector(".password_input")


    // generate initial password
    const initialPassword = generatePassword()
    generatedPasswordInput.value = initialPassword


    // generate password
    generateButton.addEventListener('click', ()=> {


        console.log("generate password now")

        // generate password
        const newPassword = generatePassword()
        generatedPasswordInput.value = newPassword
    })

    // copy password
    copyButton.addEventListener('click', ()=> {


        console.log("copy password now")

        // copy
        // var input = document.createElement("textarea")
        // input.textContent = "Sup my MAte"
        // document.body.appendChild(input)
        // input.select()
        // deprecated
        // var copiedText = document.execCommand("copy")
  
        // get password
        const password = generatedPasswordInput.value

        // 
        // navigator.clipboard.writeText(chrome.runtime.getURL("./default_popup.html"))
        navigator.clipboard.writeText(password)
                            .then(()=> {
                                
                                console.log("text copied")
                            })
                            .catch((error)=> {
                                
                                console.log("text copy error ", error)
                            })
    })



}


const generatePassword = ()=> {

    // return Math.random().toString(36).slice(4) + Math.random().toString(36).toUpperCase().slice(4)

    const specialChars = "@#$"
    let pass = specialChars.charAt(Math.floor(Math.random() * specialChars.length + 1));
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
 
    for (let i = 1; i <= 11; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
 
        pass += str.charAt(char)
    }
 
    return pass;
}
