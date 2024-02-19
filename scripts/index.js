let seatArray = [];
document
	.getElementById("seat-container")
	.addEventListener("click", function (e) {
		// const seatID = e.target.id;
		if (e.target.id.length === 2 && seatArray.length !== 4) {
			const seatID = e.target.id;

			if (seatArray.length === 0) {
				seatArray.push(seatID);
				setLeftSeat();
				appendTicket(seatID);
				totalPrice(seatArray.length);
				grandTotal(seatArray.length);
			} else if (!seatArray.includes(seatID)) {
				seatArray.push(seatID);
				setLeftSeat();
				appendTicket(seatID);
				totalPrice(seatArray.length);
				grandTotal(seatArray.length);
			}
			setBackgroundColorById(seatID);
			// selected seat count and display on ui
			setTextElementValueById("selected-seat-length", seatArray.length);
			if (seatArray.length === 4) {
				console.log("You have reached your limit");
				applyButton();
			}
		}

		if (seatArray.length) {
			console.log(seatArray);
		}
	});
