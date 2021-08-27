(function(){
    function vibromorze(){

      this.translater =
      {
        "Ё":"YO",
        "Й":"I",
        "Ц":"TS",
        "У":"U",
        "К":"K",
        "Е":"E",
        "Н":"N",
        "Г":"G",
        "Ш":"SH",
        "Щ":"SCH",
        "З":"Z",
        "Х":"H",
        "Ъ":"'",
        "ё":"yo",
        "й":"i",
        "ц":"ts",
        "у":"u",
        "к":"k",
        "е":"e",
        "н":"n",
        "г":"g",
        "ш":"sh",
        "щ":"sch",
        "з":"z",
        "х":"h",
        "ъ":"'",
        "Ф":"F",
        "Ы":"I",
        "В":"V",
        "А":"a",
        "П":"P",
        "Р":"R",
        "О":"O",
        "Л":"L",
        "Д":"D",
        "Ж":"ZH",
        "Э":"E",
        "ф":"f",
        "ы":"i",
        "в":"v",
        "а":"a",
        "п":"p",
        "р":"r",
        "о":"o",
        "л":"l",
        "д":"d",
        "ж":"zh",
        "э":"e",
        "Я":"Ya",
        "Ч":"CH",
        "С":"S",
        "М":"M",
        "И":"I",
        "Т":"T",
        "Ь":"'",
        "Б":"B",
        "Ю":"YU",
        "я":"ya",
        "ч":"ch",
        "с":"s",
        "м":"m",
        "и":"i",
        "т":"t",
        "ь":"'",
        "б":"b",
        "ю":"yu"
      };

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

  vibromorze.prototype.translate = function( string ){
    return word.split('').map(function (char) {
      return this.translater[char] || char;
    }).join("");
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
	      position++;									//	add increment
        continue;
      }
      let cnt = symbol.split('').length
      console.log(  symbol.split('').length, symbol.split('') )
      for(k=0;k<cnt;k++){
        if(symbol[k] == undefined){
          symbol[k] = this.translate(symbol[k])
        }
      	(symbol[k] == '.')? array_play.push(this.dot) : array_play.push(this.line);
        array_play.push(this.pauseElement);                   				// pause between element
      }
      //alert(symbol)
      array_play.push(0);							        // push null vibration for wait
      array_play.push(this.dot * 2);							// Thats no right // pause between letter
      position++;
	}
    window.navigator.vibrate( array_play );
  }

  window.vibromorze = vibromorze;
  return vibromorze;
})();
