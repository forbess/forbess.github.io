function ikiTabaninaCevir() 
	{
        
        document.getElementById('BaseTwoNumberButton').maxLength = "4";
        //maxlength artık çalışmıyor.
        
        var girilenRakam = document.getElementById('BaseTwoNumberButton').value;
		
		
      
      var i = 0;
      var toplam = 0;
      var text = "";
      var text2 = "";
      var uzunluk = girilenRakam.length;
      var j = (uzunluk-1);
      
     // alert(uzunluk);
     

     while (i < 12 && uzunluk < 12 ) //Rakamlar ters taraftan çözümleniyor. ÇÖZÜLDÜ
				{
    // var elementCozumlenmisHal = (girilenRakam[i] * 2);
     var CozumlenmisHal = (girilenRakam[i] * Math.pow(5,j));
	 // text += "<br>Rakam " + (i+1) + " = " + girilenRakam[i];
                  
     // text2 += "<br>Rakam " + (i+1) + " , 2 basamağındaki değeri: " + CozumlenmisHal + " /// AÇIKLAMA :==> " + " ( " + girilenRakam[i] + " * (2^" + j + ") )";
    toplam += CozumlenmisHal;
        //girilenRakam[1] değeri ile (2^j) değeri çarpılarak her basamağın 10'luk tabandaki değeri bulunur.
                  i++;
                  j--;
                 // alert(CozumlenmisHal);  
                  
      if (girilenRakam[i] === undefined) {
        break; // Yanlışlıkla buldum Kappa
      } 
      
          
}
    // document.getElementById('demo').innerHTML = text;
    // document.getElementById('demo2').innerHTML= text2;
     document.getElementById('demo3').innerHTML = ("Girdinizin 10 basamağındaki değeri : " + toplam);
        }