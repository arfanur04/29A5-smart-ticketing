function setBackgroundColorById(elementId) {
	const element = document.getElementById(elementId);
	element.classList.add("bg-[#1dd100]");
}

function setLeftSeat() {
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
	const tr = document.createElement("tr");
	tr.innerHTML = `<td>${seatID}</td>
	    <td>Economy</td>
	    <td>550</td>`;
	tbodyElementById.appendChild(tr);
}

function totalPrice(arrayLength) {
	const totalPriceElement = document.getElementById("total-price");
	const totalPriceValue = arrayLength * 550;
	totalPriceElement.innerText = totalPriceValue;
}

function grandTotal(arrayLength) {
	const grandTotalElement = document.getElementById("grand-total");
	const totalPrice = arrayLength * 550;
	grandTotalElement.innerText = totalPrice;
}

function grandTotalCoupon(discountPercent) {
	const grandTotalElement = document.getElementById("grand-total");
	const selectedSeatElement = document.getElementById("selected-seat-length");
	const selectedSeatNumber = parseInt(selectedSeatElement.innerText);
	const totalPrice = selectedSeatNumber * 550;
	const discountPrice = totalPrice - totalPrice * (discountPercent / 100);
	grandTotalElement.innerText = discountPrice;
	hideElementById("coupon-element");
	hideElementById("wrong-coupon");
}

function enableButton(elementId) {
	const Element = document.getElementById(elementId);
	Element.classList.remove("btn-disabled");
}

function hideElementById(elementId) {
	const element = document.getElementById(elementId);
	element.classList.add("hidden");
}

function showTextById(elementId, text) {
	const element = document.getElementById(elementId);
	element.innerText = text;
}

function showElementById(elementId) {
	const element = document.getElementById(elementId);
	element.classList.remove("hidden");
}

function getTextElementValueById(elementId) {
	const element = document.getElementById(elementId);
	const elementValueText = element.innerText;
	const value = parseInt(elementValueText);
	return value;
}

function nextButtonEnable() {
	const seatNumber = getTextElementValueById("selected-seat-length");
	const inputNumber = parseInt(
		document.getElementById("passenger-number").value
	);
	if (inputNumber && seatNumber) {
		enableButton("next-button");
	}
}
