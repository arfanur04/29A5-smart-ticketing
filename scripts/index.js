let seatArray = [];
document
	.getElementById("seat-container")
	.addEventListener("click", function (e) {
		const seatID = e.target.id;
		if (seatArray.length === 4) {
			console.log("You have reached you limit");
		} else {
			if (seatID) {
				if (seatArray.length === 0) {
					seatArray.push(seatID);
					setSeatLeft();
				} else if (!seatArray.includes(seatID)) {
					seatArray.push(seatID);
					setSeatLeft();
				}
				setBackgroundColorById(seatID);
				// selected seat count
				setTextElementValueById("selected-seat-length", seatArray.length);
				// append ticked
				appendTicket(seatID);
			}
		}

		if (seatArray.length) {
			console.log(seatArray);
		}
	});
