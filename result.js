function setAge()

 	{
                
    	let age = document.form.yourAge.value;

      reg = age.match(/[0-9]+/)

        if(age < 2) {
          plural = "an.";
        } else {
          plural = "ans.";
        }

       		if (age == "") {
        		document.getElementById("error").innerHTML = "Votre âge ne peut pas être vide. <br>";
            document.getElementById("show").innerHTML = "";
      		} else if(age != reg) {
              document.getElementById("error").innerHTML = "Veuillez entrer un âge valide. Exemple : 18 ans. <br>";
              document.getElementById("show").innerHTML = "";
          } else if(age < 18) {
              document.getElementById("error").innerHTML = "";
              document.getElementById("show").innerHTML = "Vous êtes mineur. (" + age + ") " + plural;
       		} else {
             document.getElementById("show").innerHTML = "Vous êtes majeur. (" + age + ") " + plural;
          }
   	}