var slideIndex = 1;
var nameofitem;
var duemonth;
var dueday;
var dueyear;
var importance;
var reminder;
var temp;

function formAppear()
{
	
	document.getElementById('done').remove()
	document.getElementById('itemAddButton').remove()
	document.getElementById('todolist').innerHTML += "<div id='newItemQuestions'>"
	document.getElementById('todolist').innerHTML += '<p id="question1">Name of Item:</p> <input type="text" id="name"><br>'
	document.getElementById('todolist').innerHTML += '<p id="question2">Date Due (month):</p> <input type="number" id="duemonth">'
	document.getElementById('todolist').innerHTML += '<p id="question3">Date Due (day):</p> <input type="number" id="dueday">'
	document.getElementById('todolist').innerHTML += '<p id="question4">Date Due (year):</p> <input type="number" id="dueyear"><br>'
	document.getElementById('todolist').innerHTML += '<p id="question5">Importance (1-10):</p> <input type="number" id="importance"><br>'
	document.getElementById('todolist').innerHTML += '<p id="question6">Reminder:</p> <select id="reminder"> <option>-------Select-------</option> <option>1 day before</option> <option>2 days before</option> <option>1 week before</option> <option>2 weeks before</option>'
	document.getElementById('todolist').innerHTML += '</select><br><br>'
	document.getElementById('todolist').innerHTML += '</div>'
	document.getElementById('todolist').innerHTML += '<button id="newItemAddButton" onclick="itemAdd()">Add Item</button>'
	document.getElementById('todolist').innerHTML += '</select><br><br>'
	
	
	
}

function itemAdd()
{
	nameofitem = document.getElementById('name').value
	duemonth = document.getElementById('duemonth').value
	dueday = document.getElementById('dueday').value
	dueyear = document.getElementById('dueyear').value
	importance = document.getElementById('importance').value
	reminder = document.getElementById('reminder')
	
	document.getElementById('newItemQuestions').remove()
	document.getElementById('name').remove()
	document.getElementById('duemonth').remove()
	document.getElementById('dueday').remove()
	document.getElementById('dueyear').remove()
	document.getElementById('importance').remove()
	document.getElementById('reminder').remove()
	document.getElementById('newItemAddButton').remove()
	document.getElementById('question1').remove()
	document.getElementById('question2').remove()
	document.getElementById('question3').remove()
	document.getElementById('question4').remove()
	document.getElementById('question5').remove()
	document.getElementById('question6').remove()
	
	
	
	
	
	document.getElementById('todolist').innerHTML += "<p id='" + nameofitem + "'>" + nameofitem + " (Due " + duemonth + "/" + dueday + "/" + dueyear + ")" + "</p>"
	document.getElementById('todolist').innerHTML += '<button id="itemAddButton" onclick="formAppear()">Add Item</button>'
	document.getElementById('todolist').innerHTML += "<p id='done'></p>"
	

}