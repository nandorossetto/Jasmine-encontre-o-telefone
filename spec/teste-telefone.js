describe("Modulo telefone", function(){
	it("Letra A deve retornar 2", function(){
		expect(retornaTelefone('A')).toEqual('2');
	});

	it("A letra D deve retornar 3", function(){
		expect(retornaTelefone('D')).toEqual('3');
	});

	it("A palavra CASA deve retornar 2272", function(){
		expect(retornaTelefone('CASA')).toEqual('2272');
	});

	it("A palavra DISK-PIZZA deve retornar 3475-74992", function(){
		expect(retornaTelefone('DISK-PIZZA')).toEqual('3475-74992');
	});	

	it("A palavra 1-DISK-PIZZA deve retornar 1-3475-74992", function(){
		expect(retornaTelefone('1-DISK-PIZZA')).toEqual('1-3475-74992');
	});

	it("A palavra 0-DISK-PIZZA deve retornar 0-3475-74992", function(){
		expect(retornaTelefone('0-DISK-PIZZA')).toEqual('0-3475-74992');
	});
});

describe("Validacoes de entrada", function(){
	it("Uma string vazia deve retornar 'valor invalido'", function(){
		expect(retornaTelefone('')).toEqual('valor invalido');
	});

	it("Uma string com espaço deve retornar o valor com '-'", function(){
		expect(retornaTelefone('DISK PIZZA')).toEqual('3475-74992');
	});

	it("Uma string com 2 espaços em sequencia deve retornar '-'", function(){
		expect(retornaTelefone('DISK  PIZZA')).toEqual('3475-74992');
	});

	it("Uma string com mais de 2 espaços em sequencia deve retornar '-'", function(){
		expect(retornaTelefone('DISK                 PIZZA')).toEqual('3475-74992');
	});

	it("Uma string com espaços antes e/ou deve retornar o valor sem os espaços", function(){
		expect(retornaTelefone(' DISK PIZZA ')).toEqual('3475-74992');
	});

	it("Caracteres especiais devem retorna 'valor invalido'", function(){
		expect(retornaTelefone('DISK PIZZA.')).toEqual('valor invalido');
	});
});