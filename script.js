let today = new Date,
	bday = new Date("18 February 2006"),
	years = today - bday;
document.getElementById("age")
	.innerHTML = new Date(years)
	.getFullYear() - 1970