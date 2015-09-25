/* Adapted from Sir Justin Schuyler's Code */
//Cwm262

function stageContent(content) {
    $("#stage").html(content);
};


function evaluatePath(path) {
    // Clean up the endpoint
    var request = path.split("/").pop();

    //Remove active class from old nav tab
    $("ul.nav li").removeClass("active");


    // Request the content
    if (request == "about") {
        $.get("about.html", stageContent);
        $("#about").addClass("active"); //Add active to nav tab
    }
    else if (request == "contact") {
        $.get("contact.html", stageContent);
        $("#contact").addClass("active"); //Add active to nav tab
    }
    else {
        $.get("home.html", stageContent);
        $("#home").addClass("active"); //Add active to nav tab
    }
}


$(function(){

	evaluatePath(location.pathname);

	// When a link is clicked...
	$("nav[role=navigation] a").click(function(e) {
	    // Don't follow its href
	    e.preventDefault();
	    
	    // Instead remember its href
	    var request = $(this).attr("href");
	    var title = $(this).attr("title");
	    
	    // And add it to the browser's history
	    //Use history.js. Give it the title, too.
	    History.pushState(null, title, request);
	    
	    // Then evaluate it
	    evaluatePath(request);
	    
	});

	//Handle back button. uses history.js's getState.
	//Give evaluatePath the url of the state object returned by getState
	$(window).bind('statechange',function(){
		var state = History.getState();
		evaluatePath(state.url);
	});
    
});
