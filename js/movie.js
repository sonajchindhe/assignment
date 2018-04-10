function searchMovies() {
    var input;
    input = document.getElementById("search_bar").value;

    if(input.length > 0){
    	var url = "https://api.themoviedb.org/4/search/movie?api_key=0966de1c9897da0f4a24d952c76bd603&query="+input;
    }else{
    	var url = "https://api.themoviedb.org/4/list/1?api_key=0966de1c9897da0f4a24d952c76bd603";
    }
    
	$(".image_section").addClass('loader');
	$(".image_section").empty();

	 $.ajax({ 
		headers:{ 
			"Accept":"application/json",
		}, 
		url: url, 
		success:function(response){ 			
			var search_count = 0;
			$(".image_section").empty();

			if(response.results.length > 0){
				 $.each(response.results , function(key , val){
				 	if(search_count < 10){			
				 		var release_date = response.results[key].release_date.split('-');
				 		$(".image_section").append(
				 			"<section>"+
					 			"<img src='http://image.tmdb.org/t/p/w185"+response.results[key].poster_path+"' class='image'>"+
					 			"<figcaption>"+
						 			"<p class='title'><label>Movie Name : </label>"+response.results[key].title.toUpperCase()+"</p>"+
						 			"<p class='date'><label>Movie Name : </label>"+release_date[0]+"</p>"+
					 			"</figcaption>"+
				 			"</section>"
				 		);				
						search_count++;		 	
				 	}
				 	else{
				 		return false;
				 	}
				 });
			}
			else{
				$(".image_section").removeClass('loader');
				$(".image_section").append('No Data Found');

			}

			$(".image_section").removeClass('loader');
		} 
	});   
}



$(document).ready(function(){

	searchMovies();

});

