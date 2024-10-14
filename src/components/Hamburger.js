function Hamburger(){
	const burger = document.querySelector(".hamburger");
	const menu = document.querySelector(".dropdown");
	menu.classList.toggle('active');
	burger.classList.toggle('active');
	
}

export default Hamburger;