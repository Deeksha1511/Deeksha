//----------------------------------------------------------------
//Superhero Hunter App API Initialization
(async function initialize() {
	try {
		const url = "https://gateway.marvel.com/v1/public/characters/a?apikey=5a4f5d89062e7fddfcd65cbe479e094c";

		// const url = "https://superhero-hunter-app-mini-server.onrender.com";
		const response = await fetch(url);
		if (response.ok) console.log("API Running Successfully");
		if (!response.ok) console.log("API Not Running");
	} catch (error) {
		console.log(error);
	}
})();

//Superhero Hunter App Initialization
superHeroApp.initialize();
//----------------------------------------------------------------
