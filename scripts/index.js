let seatArray = [];
document
	.getElementById("seat-container")
	.addEventListener("click", function (e) {
		if (e.target.id.length === 2 && seatArray.length !== 4) {
			const seatID = e.target.id;
			if (!seatArray.includes(seatID)) {
				seatArray.push(seatID);
				setLeftSeat();
				appendTicket(seatID);
				totalPrice(seatArray.length);
				grandTotal(seatArray.length);
				setBackgroundColorById(seatID);
				// count selected seat and display on ui
				setTextElementValueById("selected-seat-length", seatArray.length);
			}
		}
		if (seatArray.length === 4) {
			enableButton("coupon-apply");
			showTextById(
				"selected-seat-alert",
				"4 seat selected, You can't select more"
			);
			showElementById("selected-seat-alert");
			hideElementById("wrong-coupon");
		}
	});

function applyCoupon() {
	const couponFieldElement = document.getElementById("coupon-field");
	const value = couponFieldElement.value;

	if (value.length) {
		if (value === "NEW15") {
			grandTotalCoupon(15);
		} else if (value === "Couple 20") {
			grandTotalCoupon(20);
		} else {
			showElementById("wrong-coupon");
			showTextById(
				"wrong-coupon",
				"wrong coupon, please provide a valid coupon"
			);
		}
	} else {
		showElementById("wrong-coupon");
		showTextById("wrong-coupon", "You haven't entered a coupon");
	}

	couponFieldElement.value = "";
	hideElementById("selected-seat-alert");
}

document
	.getElementById("passenger-number")
	.addEventListener("keyup", function (e) {
		nextButtonEnable();
	});

document.body.addEventListener("click", function () {
	nextButtonEnable();
});

function nextButton() {
	console.log("nextButton");
}
