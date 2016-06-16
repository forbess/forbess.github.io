function ikiTabaninaCevir() 
	{
        
        document.getElementById('BaseTwoNumberButton').maxLength = "4";
        //maxlength artık çalışmıyor.
        
        var girilenRakam = document.getElementById('BaseTwoNumberButton').value;
		var numberArray = [girilenRakam];
		var x =(girilenRakam[0] + girilenRakam[1] + girilenRakam[2]); //bi işe yaramıyor
      
      var i = 0;
      var text = "";
      var text2 = "";
     

     while (i < 12 ) //Rakamlar ters taraftan çözümleniyor.
				{
     var elementCozumlenmisHal = (girilenRakam[i] * 2);
     var CozumlenmisHal = (girilenRakam[i] * Math.pow(2,i));
	text += "<br>Rakam " + (i+1) + " = " + girilenRakam[i];
                  
    text2 += "<br>Rakam " + (i+1) + " , 2 basamağındaki değeri: " + CozumlenmisHal + " /// AÇIKLAMA :==> " + " ( " + girilenRakam[i] + " * (2^" + i + ") )";
                  
                  i++;
                  
      if (girilenRakam[i] === undefined) {
        break; // Yanlışlıkla buldum Kappa
      } 
      
          
}
     document.getElementById('demo').innerHTML = text;
     document.getElementById('demo2').innerHTML= text2;
        }