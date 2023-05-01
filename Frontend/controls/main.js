const input=document.querySelector('#input');
const handleCange = event =>{
    input.classList.toggle("has-value",event.target.value);
}