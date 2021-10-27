async function onInit() {
	let desc = await contract.description();
	desc = JSON.parse(`{"d":"${desc}"}`).d;
	document.querySelector('input[name="desc"]').value = desc;
}

function onChange() {
	let name = document.querySelector('input[name="name"]').value;
	let image = document.querySelector('input[name="image"]').value;

	document.querySelector('#preview >div >h3').textContent = name;
	document.querySelector('#preview >div >img').src = image;
}

function onMintClick() {
	let name = document.querySelector('input[name="name"]').value;
	let image = document.querySelector('input[name="image"]').value;
	
	contract.mint(name, image);
}
