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
			console.log("You have reached your limit");
			enableButton("coupon-apply");
		}
		// if (seatArray.length) {
		// 	console.log(seatArray);
		// }
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
			console.log("wrong coupon, please provide a valid coupon");
		}
	} else {
		console.log("You haven't entered a coupon");
	}

	couponFieldElement.value = "";
}
