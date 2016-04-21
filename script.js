var quotes = [
	{
		lyric: "Lyric 1",
		songTitle: "Title 1",
		albumTitle: "Album 1"
	},
	{
		lyric: "Lyric 2",
		songTitle: "Title 2",
		albumTitle: "Album 2"
	},
	{
		lyric: "Lyric 3",
		songTitle: "Title 3",
		albumTitle: "Album 3"
	},
	{
		lyric: "Lyric 4",
		songTitle: "Title 4",
		albumTitle: "Album 4"
	}
];

button.addEventListener("click", function() {
	var randomQuote = Math.floor(Math.random() * quotes.length);
	var getQuote = quotes[randomQuote];
	
	document.getElementById("quote").innerText = getQuote.lyric;
	document.getElementById("song").innerText = getQuote.songTitle;
	document.getElementById("album").innerText = getQuote.albumTitle;
});