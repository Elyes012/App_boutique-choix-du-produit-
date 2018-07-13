





function calcule() {
 var x = document.getElementById("produit");
 var w = x.options[x.selectedIndex].value;

var y = document.getElementById("taille");
var z = y.options[y.selectedIndex].value;

    
    if ((w === "Chemises") && (z === "T.Small"))
     {
        document.getElementById("res").value = "120dt";
    }
    else if ((w === "Chemises") && (z === "T.Medium"))
    {
       document.getElementById("res").value = "125dt";
   }

   else if ((w === "Chemises") && (z === "T.Large"))
   {
      document.getElementById("res").value = "130dt";
  }




  if ((w === "Polos") && (z === "T.Small"))
  {
     document.getElementById("res").value = "80dt";
 }
 else if ((w === "Polos") && (z === "T.Medium"))
 {
    document.getElementById("res").value = "90dt";
}

else if ((w === "Polos") && (z === "T.Large"))
{
   document.getElementById("res").value = "95dt";
}




if ((w === "T-shirts") && (z === "T.Small"))
{
   document.getElementById("res").value = "50dt";
}
else if ((w === "T-shirts") && (z === "T.Medium"))
{
  document.getElementById("res").value = "52dt";
}

else if ((w === "T-shirts") && (z === "T.Large"))
{
 document.getElementById("res").value = "54dt";
}






}






 


 