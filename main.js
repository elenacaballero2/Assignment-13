$(document).ready(function(){

	$("#input").keypress(function(event){
		if(event.keyCode == 13){
			var searchTerm = $("#input").val();
			$("h1").remove();
			$.ajax({
				'url':"https://api.musixmatch.com/ws/1.1/artist.search?",
				'method': "GET",
				'dataType': "JSONP",
				'data':{
					'apikey':"3cded554eb33d306f358f7fdce2ac783",
					'q_artist': searchTerm
				},

				success:function(data){
					console.log(data);
					var mySongs = artist.search;
					for(var i=0; i<mySongs.length; i++){
						if(artist.search[i] != searchTerm){
							var newHeader = $("<h1>" + artist.search[i] + "</h1>");
							$('body').append(newHeader);
						}
					}
				},
				error: function(data, textStatus, errorThrown){
					console.log("oops")
					console.log(errorThrown);
				}

			});
		}
	});
})