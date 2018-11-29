$(document).ready(function(){

	$("#input").keypress(function(event){
		if(event.keyCode == 13){
			var searchTerm = $("#input").val();
			$("h3").remove();
			$.ajax({
				'url':"https://api.musixmatch.com/ws/1.1/track.search?",
				'method': "GET",
				'dataType': "JSONP",
				'data':{
					'apikey':"3cded554eb33d306f358f7fdce2ac783",
					'q_artist': searchTerm,
					'q_track': searchTerm,
					'format': 'JSONP'
				},

				success:function(data){
					console.log(data);
					var mySongs = data.message.body.track_list;
					for(var i=0; i<mySongs.length; i++){
						if(mySongs[i].track.track_name != searchTerm){
							var newHeader = $("<h3>" + mySongs[i].track.track_name + "</h3>");
							$('body').append(newHeader);
						}
					}

				},
				error: function(data, textStatus, errorThrown){
					console.log("oops")
					console.log(errorThrown);
				},

			});
		}
	});
})