module.exports = {
	start: function (ul) {
		this.started=true;
		this.analyticUrls=new Array();

	},
	stop: function () {
		this.started=false;
		this.analyticUrl="";
		this.analyticUrls=[]; 
	},
	isStarted : function(){
		return this.started
	},
	addRecord: function(url){
		//console.log('pixel addRecord : ' + url , 'debug')
		this.analyticUrls.push(url);
		console.log('number of url ' + this.getNumberOfPixelTracking() );
		this.logUrlParamValue(url);
	},
	getNumberOfPixelTracking: function(){
		return this.analyticUrls.length;
	},
	logUrlParamValue : function(url){
		var params = url.substr(url.indexOf("?")+1);
		  
		params = params.split("&");
			// split param and value into individual pieces
			for (var i=0; i<params.length; i++)
				 {
					 temp = params[i].split("=");
					 //if ( [temp[0]] == sname ) { sval = temp[1]; }
					 console.log(  temp[0] + ' : ' + decodeURIComponent(temp[1]) );
					}
	},getValueForTheKeyForTheLastRecord : function(name){
		searchLocation=this.analyticUrls[this.analyticUrls.length-1].toString().split("?")[1];
		searchDecoded = decodeURIComponent(searchLocation);
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
					results = regex.exec(searchLocation);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

};

//this.started=false;
//this.analyticUrl="";
 