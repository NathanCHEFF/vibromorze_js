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
    

    this.dot = 30;
    this.line = 3 * this.dot;

    this.pauseElement = ( 1 * this.dot );			//	pause between element of letter
    this.pauseletter  = ( 3 * this.dot );			//	pause between letters 
    this.pauseWords   = ( 7 * this.dot );			//	pause between words
  	return this
  }
  
  vibromorze.prototype.play = function( string ){
		var i = input.lenght;
		var position = 0;
    var arr1 = new Array();

		while(position <= i){
    
    	let letter =  string[position].toUpperCase();
      let symbol = this.symbols[letter];
      
      if(symbol == "SPACE" ){
      	arr1.push(this.pauseWords);						//	pause between words
        continue;
      }
      let cnt = symbol.lenght
      for(k=0;k<cnt;k++){
      	(symbol[k] == '.')? arr1.push(this.dot) : arr1.push(this.line);	
        arr1.push(this.pauseElement);
      }
      arr1.push(this.dot * 2);								// Thats no right
		}
    window.navigator.vibrate( arr1 );
  }
  
  window.vibromorze = vibromorze;
})();
