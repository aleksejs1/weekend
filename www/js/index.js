
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
    	init();
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
		// getMyLocation();
    }
};


function init(){
	$("#mm").html("LOOOOOL");
	var l1 = mkln([{cls:"pause pa90",nm:"."},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"DARUDE"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"LOST FREQUENCIES"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"KNIFE PARTY"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"DVBBS"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"STEVE AOKI"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"AVICII"}
]);

	$("#s2").html('<div class="ss">WKND stage</div>'+l1);
}


function hall(){
	$("#fmap").hide();
	$("#cmap").hide();
	$("#smap").hide();
	$("#mm").hide();
}

function fmap(){
	hall();
	$("#fmap").show();
}
function cmap(){
	hall();
	$("#cmap").show();
}
function smap(){
	hall();
	$("#smap").show();
}

function mkln(ar){
	var s = '';
	for(var k in ar) {
		s = s + '<div class="' + ar[k].cls + '">' + ar[k].nm + '</div>';
	}
	return s;
}


init();

