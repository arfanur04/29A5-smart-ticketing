function setBackgroundColorById(elementId) {
	const element = document.getElementById(elementId);
	element.classList.add("bg-[#1dd100]");
}

function setSeatLeft() {
	const element = document.getElementById("total-seat-left");
	const previousTotal = parseInt(element.innerText);
	const updatedTotal = previousTotal - 1;
	element.innerText = updatedTotal;
}

function setTextElementValueById(elementId, value) {
	const element = document.getElementById(elementId);
	element.innerText = value;
}

function appendTicket(seatID) {
	const tbodyElementById = document.getElementById("tbody");
	// const list = document.createElement(`<tr>
	//    <td>${seatID}</td>
	//    <td>Economy</td>
	//    <td>550</td>
	// </tr>`);
	// tbodyElementById.append(list);
	// console.log(tbodyElementById, seatID);
	// console.log(`${seatID}`);
}
