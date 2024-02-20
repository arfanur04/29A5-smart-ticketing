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
			applyButton();
		}
		if (seatArray.length) {
			console.log(seatArray);
		}
	});
