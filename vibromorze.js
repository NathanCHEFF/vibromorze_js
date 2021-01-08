(function(){
    function vibromorze(){ 
  	  this.symbols = {
          'A': ".-",
          'B': "-...",
          'C': "-.-.",
          'D': "-..",
          'E': ".",
          'F': "..-.",
          'G': "--.",
          'H': "....",
          'I': "..",
          'J': ".---",
          'K': "-.-",
          'L': ".-..",
          'M': "--",
          'N': "-.",
          'O': "---",
          'P': ".--.",
          'Q': "--.-",
          'R': ".-.",
          'S': "...",
          'T': "-",
          'U': "..-",
          'V': "...-",
          'W': ".--",
          'X': "-..-",
          'Y': "-.--",
          'Z': "--..",

          '1': ".----",
          '2': "..---",
          '3': "...--",
          '4': "....-",
          '5': ".....",
          '6': "-....",
          '7': "--...",
          '8': "---..",
          '9': "----.",
          '0': "-----",
          ' ': "SPACE"
        };
     
        this.dot = 300;
        this.line = 3 * this.dot;

        this.pauseElement = ( 1 * this.dot );			//	pause between element of letter
        this.pauseletter  = ( 3 * this.dot );			//	pause between letters 
        this.pauseWords   = ( 7 * this.dot );			//	pause between words
        return this
  } 
  
  vibromorze.prototype.play = function( string ){
	 
    var i = string.split('').length;
	  
	var position = 0;
    var array_play = new Array();

    while(position < i){
    
      let letter =  string[position].toUpperCase();
      let symbol = this.symbols[letter];
       
      if(symbol == "SPACE" ){ 
      	array_play.push(this.pauseWords);						//	pause between words
        continue;
      }
      let cnt = symbol.split('').length
      console.log(  symbol.split('').length, symbol.split('') )
      for(k=0;k<cnt;k++){
      	(symbol[k] == '.')? array_play.push(this.dot) : array_play.push(this.line);	
        arr1.push(this.pauseElement);                   // pause between element
      } 
      //alert(symbol)
      array_play.push(0);							            // push null vibration for wait
      array_play.push(this.dot * 2);							// Thats no right // pause between letter
      position++;
	}
    window.navigator.vibrate( array_play );
  }
  
  window.vibromorze = vibromorze;
  return vibromorze;
})();
