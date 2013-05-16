/**
 * Script Robert
 */

function retornaTelefone(letras){
	var letrasLower = $.trim(letras);
	letrasLower = letrasLower.toLowerCase().replace(/\s+/,'-').split('');

	var tags = {
		'a':2,
		'b':2,
		'c':2,
		'd':3,
		'e':3,
		'f':3,
		'g':4,
		'h':4,
		'i':4,
		'j':5,
		'k':5,
		'l':5,
		'm':6,
		'n':6,
		'o':6,
		'p':7,
		'q':7,
		'r':7,
		's':7,
		't':8,
		'u':8,
		'v':8,
		'w':9,
		'x':9,
		'y':9,
		'z':9,
		'-':'-',
		'1':1,
		'0':0
	};

	if (letras === ''){
		return 'valor invalido';
	};

	var retorno = '';
	$.each(letrasLower, function(i, val){

		if (tags[val] === undefined) {
			retorno = 'valor invalido';
		}else{
			retorno += tags[val];
		};

	});
	console.log(retorno);

	return retorno;
}
