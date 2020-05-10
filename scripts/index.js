document.getElementById("menu-button").addEventListener("click", function() {
	let nav = document.getElementById("mobile-nav");
	if(nav.style.width == "0%") {
		//alert('open life');
		change_button();
		//document.getElementById("menu-nav").style.width = "100%";
		nav.style.width = "100%";
		//nav.style.display = "block";
		document.getElementById("page-title").classList.toggle("white");
	}
	else {
		change_button();
		document.getElementById("mobile-nav").style.width = "0%";
		//nav.style.display = "none";
		document.getElementById("page-title").classList.toggle("white");
	}
})

const change_button = () => {
	document.getElementById("menu-button").classList.toggle('change');
}

var menu = document.getElementsByClassName("menu-item");

for(var i = 0; i < menu.length; i++) {
	menu[i].addEventListener("click", function(e) {
		//console.log('life');
		change_button();
		document.getElementById("mobile-nav").style.width = "0%";
		//nav.style.display = "none";
		document.getElementById("page-title").classList.toggle("white");
		e.preventDefault();
		let hash = this.hash
		var element = document.querySelector(hash);
		element.scrollIntoView();
	})
}