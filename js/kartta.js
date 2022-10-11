//Tehnyt: Jere, päivitetty 7.10.2022
//Tehty Googlen maps ja places API esimerkkien pohjalta ja niitä yhdistelemällä
//Hakee käyttäjän paikan ja etsii lähistöltä koirapuistot 5km säteellä
let map, infoWindow;

//keskittää kartan Helsingin kohdalle
function initMap() {
	map = new google.maps.Map(document.getElementById("kartta"), {
		center: { lat: 60.2, lng: 24.9 },
		zoom: 12,
	});
	infoWindow = new google.maps.InfoWindow();

	const locationButton = document.createElement("button");

	locationButton.textContent = "Paikanna minut";
	locationButton.classList.add("custom-map-control-button");
	map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(
		locationButton
	);

	//oman sijainnin hakeminen
	locationButton.addEventListener("click", () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const pos = {
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					};
					infoWindow.setPosition(pos);
					infoWindow.setContent("Olet tässä.");
					infoWindow.open(map);
					map.setCenter(pos);

					const paikkaLA = position.coords.latitude;
					const paikkaLO = position.coords.longitude;
					const paikka = new google.maps.LatLng(paikkaLA, paikkaLO);

					//paikkojen haku lähistöltä
					const haku = new google.maps.places.PlacesService(map);
					const hTeksti = {
						location: paikka,
						radius: "5000",
						keyword: "koirapuisto",
						type: ["park"],
					};
					//hakee paikat ja lisää niiden päälle markerin
					haku.nearbySearch(hTeksti, function (results, status) {
						if (
							status === google.maps.places.PlacesServiceStatus.OK
						) {
							for (var i = 0; i < results.length; i++) {
								const marker = new google.maps.Marker({
									map,
									position: results[i].geometry.location,
								});
							}
						}
					});
				},
				() => {
					handleLocationError(true, infoWindow, map.getCenter());
				}
			);
		} else {
			handleLocationError(false, infoWindow, map.getCenter());
		}
	});
}
//Errorit jos paikan haku ei toimi
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(
		browserHasGeolocation
			? "Error: The Geolocation service failed."
			: "Error: Your browser doesn't support geolocation."
	);
	infoWindow.open(map);
}

window.initMap = initMap;
