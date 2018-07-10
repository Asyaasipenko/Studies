var form_button = document.getElementById("button"); 

function Validate(event){
  event.preventDefault(); 
  var form_Your_name = document.getElementById("Your_name"); 
  var form_Your_Email = document.getElementById("Your_Email");

  var value = form_Your_name.value; 
  var value = form_Your_Email.value;

  if (!value){ 
      form_Your_name.style.border = "2px solid red"; 
      form_Your_Email.style.border = "2px solid red"
    } else {
            form_Your_name.style.border = "1px solid gray"; 
      
            form_Your_Email.style.border = "1px solid gray";
          }
          console.log(value);
        }

form_button.addEventListener("click", Validate); 
