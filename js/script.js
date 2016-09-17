$(function() {
	$('#go').click(function() {
		function checkRaceComplete() {
			if( raceComplete == false) {
				raceComplete = true;
			} else {
				place = 'second';
			}
		}
		
		var carWidth = $('.car').width();
		var raceTrackWidth = $(window).width() - carWidth;
		var raceTime1 = Math.floor( (Math.random() * 5000) +1 );
		var raceTime2 = Math.floor( (Math.random() * 5000) +1 );
		var raceComplete =  false;
		var place =  'first';
		
		$('#car-1').animate({
				left: raceTrackWidth
			}, raceTime1, function() {
				checkRaceComplete();
				$('#race-info-1 span').text('Finished in ' + place + ' place and finished in a time of ' + raceTime1 + ' milliseconds!');
		}); 
		$('#car-2').animate({
				left: raceTrackWidth
			}, raceTime2, function() {
				checkRaceComplete();
				$('#race-info-2 span').text('Finished in ' + place + ' place and finished in a time of ' + raceTime2 + ' milliseconds!');
		}); 		
	});
	$('#reset').click(function() {
		$('.car').css('left','0');
		$('.race-info span').text('');
	});		
});
    
