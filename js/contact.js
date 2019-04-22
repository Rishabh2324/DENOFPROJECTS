var x =document.getElementById("form_sample")
var createForm = document.createElement("form")  
    createForm.setAttribute("action","");
    createForm.setAttribute("method","post");
     x.appendChild(createForm)
//heading
var heading = docu.createElement("h2");
    heading.innerHTML="Contact Form"
    createForm.appendChild (heading);


var line=document.createElement("hr");
    createForm.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel =document.createElement("label");
namelabel.innerHTML= "Your Name";
createForm.appendChild(namelabel);

var inputElement =document.createElement("input");
inputElement.setAttribute ("type","text");
inputElement.setAttribute ("name","dname");
createForm.appendChild (inputElement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel =document.createElement ("label");
emaillabel.innerHTML ="Your Email";
createForm.appendChild(emaillabel);

var inputElement = document.createElement ("input");
inputElement.setAttribute ("type","text");
inputElement.setAttribute ("email","demail");
createForm.appendChild(inputElement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var messageLabel =document.createElement ("label");
messageLabel.innerHTML = "Message";
createForm.appendChild(messageLabel);
  
r texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreakbreak);


var submitelement = document.createElement('input'); // Appen   d Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);









