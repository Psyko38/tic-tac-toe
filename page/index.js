const btn = document.querySelectorAll(".gride > button");
const Oimg = "O.svg";
const Ximg = "X.svg";

let turn = 0;
for (let c of btn) {
	c.addEventListener("click", (event) => {
		const clickedButton = event.currentTarget;
		const img = clickedButton.querySelector("img");
		if (clickedButton.innerHTML == '<img src="" alt="">') {
			if (img.src !== "") {
				if (turn == 1) {
					img.src = Oimg;
					img.alt = "O";
					turn = 0;
				} else {
					img.src = Ximg;
					img.alt = "X";
					turn = 1;
				}
			}
		}
		GetTable();
	});
}

let table = [];

function GetTable() {
	table = [];
	for (let c of btn) {
		table.push(c.querySelector("img").alt);
	}
	console.log(table);
}
