
// image click event for all 8 images in the products page/ code from Ms.Emmer
// by Youssef
document.getElementById("demo0").onclick = function() {myFunction()};

	function myFunction() {
		document.getElementById("demo0").innerHTML = "The Milky way is always the best way,";
	}
	
document.getElementById("demo1").onclick = function() {myFunction1()};

	function myFunction1() {
		document.getElementById("demo1").innerHTML = "Nothing better than a full cup of Coffe";
	}
	
document.getElementById("demo2").onclick = function() {myFunction2()};

	function myFunction2() {
		document.getElementById("demo2").innerHTML = "Coffee late with a touch of home made honey";
	}
	
document.getElementById("demo3").onclick = function() {myFunction3()};

	function myFunction3() {
		document.getElementById("demo3").innerHTML = "Birthday or not, this is your Cake!!";
	}
	
	
document.getElementById("demo4").onclick = function() {myFunction4()};

	function myFunction4() {
		document.getElementById("demo4").innerHTML = "Its not about how the cake looks, its about the taste";
	}
	
document.getElementById("demo5").onclick = function() {myFunction5()};

	function myFunction5() {
		document.getElementById("demo5").innerHTML = "Old but gold !!!";
	}
	
document.getElementById("demo6").onclick = function() {myFunction6()};

	function myFunction6() {
		document.getElementById("demo6").innerHTML = "Is there anything better than raw coffe?";
	}
	
document.getElementById("demo7").onclick = function() {myFunction7()};

	function myFunction7() {
		document.getElementById("demo7").innerHTML = "An Old classic, always packs a punch";
	}
	
document.getElementById("demo8").onclick = function() {myFunction8()};

	function myFunction8() {
		document.getElementById("demo8").innerHTML = "The best selection";
	}
	
		
// Youssefs and Abduls code for Validation form, w3schools DOM Validation forms
	
	
	function validateForm() {
		// form name section
		let x = document.forms["AbdulsForm"]["name"].value;
		if (x == "") {
			alert("Please Fill in the name");
			return false;
		}
	}
	// form number section
	function validateForm() {
		
		let x = document.forms["AbdulsForm"]["number"].value;
		if (x == "") {
			alert("Please fill out all the boxes outlined below");
			return false;
		}
	}
	// form email section
	function validateForm() {
		
		let x = document.forms["AbdulsForm"]["email"].value;
		if (x == "") {
			alert("Please fill out all the boxes outlined below");
			return false;
		}
	}
	//form Query section
	function validateForm() {
		
		let x = document.forms["AbdulsForm"]["subject"].value;
		if (x == "") {
			alert("Please fill out all the boxes outlined below");
			return false;
		}
	}
	
	
	
