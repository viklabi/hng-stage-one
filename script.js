function updateTimeAndDay() {
	setInterval(() => {
		const date = new Date();
		const hour = date.getHours();
		const minute = date.getMinutes();
		const seconds = date.getSeconds();
		const dayOfWeek = date.toLocaleDateString("en-GB", { weekday: "long" });
		document.getElementById("current-day").innerText = dayOfWeek;
		document.getElementById("current-time").innerText = `${hour
			.toString()
			.padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${seconds
			.toString()
			.padStart(2, "0")}`;
	});
}
updateTimeAndDay();