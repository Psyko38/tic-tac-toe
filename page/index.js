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
				let win = ChekAllTable();
				if (win == "X") {
					document.querySelector(".bg").style.display = "flex";
					document.querySelector(".pupuX").style.display = "flex";
				} else if (win == "O") {
					document.querySelector(".bg").style.display = "flex";
					document.querySelector(".pupuO").style.display = "flex";
				}
			}
		}
	});
}

let table = [];

function GetTable() {
	table = [];
	for (let c of btn) {
		table.push(c.querySelector("img").alt);
	}
}

function ChekTable(space, index) {
	let car = table[index];
	let pass = 0;
	let i = index;
	for (let c = 0; c < 3; c++) {
		if (table[i] == car) {
			pass++;
		}
		i = i + space;
	}
	if (pass == 3) {
		return car;
	}
}

function ChekAllTable() {
	GetTable();
	let Result = "";

	Result = ChekTable(1, 0);
	if (Result == "X" || Result == "O") {
		return Result;
	}
	Result = ChekTable(1, 3);
	if (Result == "X" || Result == "O") {
		return Result;
	}
	Result = ChekTable(1, 6);
	if (Result == "X" || Result == "O") {
		return Result;
	}
	Result = ChekTable(2, 2);
	if (Result == "X" || Result == "O") {
		return Result;
	}
	Result = ChekTable(3, 0);
	if (Result == "X" || Result == "O") {
		return Result;
	}
	Result = ChekTable(3, 1);
	if (Result == "X" || Result == "O") {
		return Result;
	}
	Result = ChekTable(3, 2);
	if (Result == "X" || Result == "O") {
		return Result;
	}
	Result = ChekTable(4, 0);
	if (Result == "X" || Result == "O") {
		return Result;
	}
}
