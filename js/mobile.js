/* Toggle between adding and removing the "responsive" class to menu when the user clicks on the icon */

var oldClassName;
function mobileMenu() {
    var x = document.getElementsByClassName("mobile")[0];
    if (x.className.indexOf("mobile") > -1) 
		if(x.className.indexOf("responsive") == -1){
			oldClassName = x.className;
			x.className += " responsive";
		} else {
			x.className = oldClassName;
		}
}
menubars = document.createElement("a");
/*menubars.innerHTML = "<div class=\"menu-bars\"></div>";*/
menubars.setAttribute("class","icon");
menubars.addEventListener("click",mobileMenu, false);

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        mobilemenu = document.getElementsByClassName("mobilebars")[0];
		if(mobilemenu != undefined)
			mobilemenu.insertBefore(menubars,mobilemenu.firstChild);
		
		/* Skip-to-next Button */
		skipParent = document.getElementsByClassName("skip")[0];
		if(skipParent != undefined)
		{
			skipButton = document.createElement("div");
			skipButton.innerHTML = "<svg class=\"mk-svg-icon\" data-name=\"mk-jupiter-icon-arrow-bottom\" data-cacheid=\"icon-5be0a21f64f1b\" style=\" height:16px; width: 16px; \" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M512 121.6c0 8-3.2 16-8 22.4l-225.6 240c-6.4 6.4-14.4 9.6-24 9.6-8 0-16-3.2-22.4-9.6l-224-240c-11.2-12.8-11.2-33.6 1.6-44.8 12.8-12.8 32-11.2 44.8 1.6l201.6 214.4 203.2-216c11.2-12.8 32-12.8 44.8 0 4.8 6.4 8 14.4 8 22.4z\"></path></svg>";
			skipButton.setAttribute("class","skip-to-next");
			skipButton.setAttribute("title","Skip to next");
			skipButton.addEventListener("click",skipToNext, false);
			skipParent.insertBefore(skipButton,skipParent.lastChild.nextSibling);

		}
    }
}
/* Skip-to-next Button */
var skipToNext = function(event) {
	skipParent = document.getElementsByClassName("skip")[0];
	var rect = skipParent.getBoundingClientRect();
    document.body.scrollTop = rect.bottom; // For Safari
    document.documentElement.scrollTop = rect.bottom; // For Chrome, Firefox, IE and Opera
};
/* Scroll up Button */
/* When the user scrolls down 300px from the top of the document, show the button. */
function scrollFunction() {
	
	theParent = document.getElementsByClassName("scrollUp")[0];
		if(theParent != undefined) {
			theParent.insertBefore(scrollButton,theParent.firstChild);
		
		if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {		
			document.getElementById("scrollUpBtn").style.display = "block";
		} else {
			document.getElementById("scrollUpBtn").style.display = "none";
		}
	}
}
window.onscroll = function() {scrollFunction()};

/* When the user clicks on the button, scroll to the top of the document */
var scrollUp = function(event) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
scrollButton = document.createElement("button");
scrollButton.innerHTML = "^";
scrollButton.setAttribute("id","scrollUpBtn");
scrollButton.setAttribute("title","Scroll up");
scrollButton.addEventListener("click",scrollUp, false);
