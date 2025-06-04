document.getElementById('submit').addEventListener('click',function(){
    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error_message');
    const inputBox = emailInput.parentElement;
console.log("click")
    // simple email regex for validation
    const emailPattern  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailPattern.test(emailInput.value.trim())){
        inputBox.classList.remove('error');
        inputBox.classList.add('success');
        errorMessage.style.display = 'none'; // Hide error message
    }else{
        inputBox.classList.add('error');
        errorMessage.style.display = 'block' // Show error message
    }
})