function initMap() {
	// Create center marker at UCSD
	var ucsd_ltlng = {lat:32.880, lng: -117.236};
	var ssc = {lat:32.8788033, lng:-117.23591210000001};

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		//center: ucsd_ltlng,
		center: ssc,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		//position: ucsd_ltlng,
		position: ssc,
		map: map,
		title: "Student Services Center"
	});
}