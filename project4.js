console.log('project Number 4')
const Name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validuser = false;
let validEmail = false;
let validPhone = false;
$('#success').hide()
$('#failure').hide()

// console.log(Name, email, phone);
Name.addEventListener('blur', ()=>{
    console.log("Name is blured ")
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = Name.value;
    console.log(str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        Name.classList.remove('is-invalid');
        validuser = true;
    }
    else {
        console.log('Your name is not valid');
        Name.classList.add('is-invalid');
        validuser = false;
    };
})
email.addEventListener('blur', ()=>{
    console.log("email is blured ")
    //validate email here
    let regex = /^([_\-\.0-9a-z]+)@([_\-\.0-9a-z]+)\.([a-z]){2,20}$/;
    let str = email.value;
    console.log(str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    };
})
phone.addEventListener('blur', ()=>{
    console.log("Phone is blured ")
    //validate phone here
    let regex = /^([0-9]){2,10}$/;
    let str = phone.value;
    console.log(str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    };
})

let submit = document.getElementById('submit')
submit.addEventListener('click', func1);

function func1(e) {
  console.log("Thanks", e);
  e.preventDefault();
  //Submit from here
  if(validEmail && validuser && validPhone){
    let failure = document.getElementById('failure');

    console.log('Phone, email and user are valid. Submitting the form');
    let success = document.getElementById('success');
    success.classList.add('show');
    // failure.classList.remove('show');
    // $('#failure').alert('close');
    $('#failure').hide();
    $('#success').show();
    
}
else{
    console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
    let failure = document.getElementById('failure');
    failure.classList.add('show');
    // success.classList.remove('show');
    // $('#success').alert('hide');
    $('#success').hide();
    $('#failure').show();
    }



}

// let submit = document.getElementById('submit');
// submit.addEventListener('click', (e)=>{
//     e.preventDefault();

//     console.log('You clicked on submit');
//     console.log(validEmail, validuser, validPhone);
    
//     // Submit your form here
//     if(validEmail && validuser && validPhone){
//         let failure = document.getElementById('failure');

//         console.log('Phone, email and user are valid. Submitting the form');
//         let success = document.getElementById('success');
//         success.classList.add('show');
//         // failure.classList.remove('show');
//         // $('#failure').alert('close');
//         $('#failure').hide();
//         $('#success').show();
        
//     }
//     else{
//         console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
//         let failure = document.getElementById('failure');
//         failure.classList.add('show');
//         // success.classList.remove('show');
//         // $('#success').alert('hide');
//         $('#success').hide();
//         $('#failure').show();
//         }

    
    
// })