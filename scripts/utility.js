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
	const couponElements = document.getElementById("coupon-element");
	const grandTotalElement = document.getElementById("grand-total");
	const selectedSeatElement = document.getElementById("selected-seat-length");
	const selectedSeatNumber = parseInt(selectedSeatElement.innerText);
	const totalPrice = selectedSeatNumber * 550;
	const discountPrice = totalPrice - totalPrice * (discountPercent / 100);
	grandTotalElement.innerText = discountPrice;
	couponElements.classList.add("hidden");
}

function enableButton(elementId) {
	const Element = document.getElementById(elementId);
	Element.classList.remove("btn-disabled");
}

function hideElementById(elementId) {
	const element = document.getElementById(elementId);
	element.classList.add("hidden");
}
