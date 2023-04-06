// Попытка реализации RedInput

function get ( selectorName ) {
//Get HTML element by id or class only
	let d = document
	let id = d.getElementById(selectorName);
	return ( id ) ? id : d.getElementsByClassName(selectorName);
}

function FIG ( ) {

	this.past = function ( str ) {
		this.input.value = str;
	}
	this.iner = function ( str ) {
		this.fig.innerHTML = str;
	}
	this.display = function () {
		if (getComputedStyle(this.fig).display==='block')
			this.fig.style.display = 'none';
		else
			this.fig.style.display = 'block';
	}
	this.evenin = function ( feature ) {
	
		this.input.addEventListener('input',feature);
	}

}

function INPUT ( input, messageError )
{

function Mask (event) {

	this.last = this.value.slice(-1);
	this.untilast = this.value.replace(/.$/,'');
	this.length = this.value.length;
	this.difference = this.length - that.value.length;

	if ( this.difference === 1 ) { //При вводе
	alert("при вводе");
		if ( isNaN( +(this.last) ) ) { //Если значение не цифра
		alert("не число");
		event.preventDefault();
		}
	} 
	if ( this.length === 2 || this.length === 5 ) { //Вставка точки после 2 и 5 символа
	alert("вставка точки");
		that.past( this.value+'.' );
	} else if ( this.length === 3 || this.length === 6 ) { //Точка ставится между 2/5 и 3/6 символом
	alert("автоточка");
		that.past( this.untilast+'.'+this.last );
	} else {
	alert("иначе");
		if ( this.last === '.' ) { //При удалении 3/6 символа точка удаляется самостоятельно
		alert("исчезающая точка");
			that.past( this.last );
		}
	}
	that.value = that.input.value;
	alert(that.value);
	
}

	this.norm = new Input(input);
	this.fig = get( messageError );
let that = this.norm.self();
	
	/*this.top = this.Minput.input.getBoundingClientRect().y + window.pageYOffset;
	this.left = this.input.getBoundingClientRect().x + window.pageXOffset;
	this.pseudo = '<inut type="text" id="inputError" />';
	this.message = new Input*/
	
	
	this.norm.evenin(Mask);

}

function Input ( input, value ) {
let that = this;

	this.input = get(input);
	this.value = ( !(+value) ) ? this.input.value : value;
	
	this.self = function () {
		return that;
	}
	
	this.input.addEventListener('paste', function(event) {
		event.preventDefault();
	});
}


window.onload = function ( ) {
	let Fig = new FIG ();
	Input.prototype = Fig;
	let I = new INPUT ('input','messageError');
	

	
};