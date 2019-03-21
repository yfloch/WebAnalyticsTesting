module.exports = {
	isAnalyticsUrl: function (url) {
		return (url.indexOf("piwik.php") > -1) + (url.indexOf("google-analytics.com/r/collect?") > -1) ;
	},
	waitForPixelTracking : function(pixelTrackingRecorder,nbPixelTracking){
		return  new Promise((r, j)=>{
			var timeoutms=4000;
			var check = () => {
			  console.warn('checking')
			  if(pixelTrackingRecorder.getNumberOfPixelTracking()>nbPixelTracking) 
				r()
			  else if((timeoutms -= 100) < 0)
				j('No new pixel Tracking Found number of pixel tracking was :' + pixelTrackingRecorder.getNumberOfPixelTracking() + ' and is  : '+ nbPixelTracking )
			  else
				setTimeout(check, 100)
			}
			setTimeout(check, 100)
		  })





/*		casper.waitFor(function waitForPixelTracking() {
			return pixelTrackingRecorder.getNumberOfPixelTracking()>nbPixelTracking;  
			}, 
			function then() {casper.log('pixel tracking found' , 'debug');}
			,
			function timeout() { casper.log('No new pixel Tracking Found number of pixel tracking was :' + pixelTrackingRecorder.getNumberOfPixelTracking() + ' and is  : '+ nbPixelTracking  ,'warning');}	
		);*/
	}
	 // in this module this were there was some waiting method like wait from loader in a prevous version
};
 
  
