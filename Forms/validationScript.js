
    var input = document.getElementById("myForm");

    input.addEventListener("submit", function(event){ 
      const textInput = document.getElementById("inputField").value; // Retrieve the input field value
      let pattern = new RegExp(/^[a-zA-Z0-9]+$/); //regular expression


      if(!(pattern.test(textInput))) //test alphanumeric input on regular expression
       {  
        event.preventDefault(); // Prevent form from submitting
        alert("Not a valid entry. Please enter a valid entry."); //error message
       }//end if
      else
       {
        confirm("Do you want to submit?");
         if(input.checkValidity()) //checks validity
         {
          checkVal();
         }
       }  
    })//end function

     function checkVal()
     {
      alert("Thank you for your submission");
     }
    