window.onload = function getTimes() {
    const allTimeZones = document.getElementsByClassName("timezone");

    let date = new Date();

    for (let currTimeZone of allTimeZones) {
        let timezone = currTimeZone.dataset.timezone;
        currTimeZone.textContent = date.toLocaleTimeString("en-US", {timeZone: timezone});
    }
};