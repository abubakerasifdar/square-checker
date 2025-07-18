document.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                myFunction();
                document.getElementById('input1').value = "";
                  document.getElementById('input2').value = "";
            }
        })
 
 //1 
    //1 
     //1 
     //1 
   //1 
   //1 
//1 
           //1 
//1 
              //1 
//1 
//1 
//1 
//1 
//1 
//1 
         //1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
        // 12 line of code total is 38
        function myFunction() {
            var input1 = document.getElementById("input1").value;
            var input2 = document.getElementById("input2").value;
            var result;
            if (input2 % input1 == 0) {
                result = input2 + " is the square of " + input1;
                document.getElementById("output").style.background = "green"
            }
            else {
                result = input2 + " is not the square of " + input1;
                 document.getElementById("output").style.background = "red"
            }
            document.getElementById("output").style.display = "flex"
            document.getElementById("output").innerHTML = result;
        }

   