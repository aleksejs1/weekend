
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
	var l1 = mkln([{cls:"pause pa90",nm:"."},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"DARUDE"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"LOST FREQUENCIES"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"KNIFE PARTY"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"DVBBS"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"STEVE AOKI"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"AVICII"}
]);
	var l2 = mkln([{cls:"pause pa90",nm:"."},{cls:"pause pa90",nm:"."},{cls:"artist ar60",nm:"SIGMA"},{cls:"pause pa30",nm:"."},{cls:"artist ar45",nm:"ANGERFEIST"},{cls:"pause pa45",nm:"."},{cls:"artist ar60",nm:"REDFOO"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"INDECTED MUSHROOM"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"EXAMPLE"}]);
	var l3 = mkln([{cls:"pause pa90",nm:"."},{cls:"pause pa45",nm:"."},{cls:"artist ar45",nm:"JACK PERRY"},{cls:"artist ar45",nm:"MR.BELT & WEZOL"},{cls:"artist ar45",nm:"WATERMARK"},{cls:"artist ar45",nm:"MATISSE & SADKO"},{cls:"artist ar45",nm:"SAM FELDT"},{cls:"artist ar60",nm:"WILL SPARKS"},{cls:"artist ar60",nm:"DJ BL3ND"},{cls:"artist ar60",nm:"TJR"},{cls:"artist ar60",nm:"UMMET OZCAN"}]);
	var l4 = mkln([{cls: "pause pa90",nm:"."},{cls: "pause pa90",nm:"."},{cls: "artist ar60",nm:"CC LATVIAN WINNER"},{cls: "artist ar60",nm:"CLUBMUSIC TAKEOVER"},{cls: "artist ar60",nm:"PAUL OJA"},{cls: "artist ar60",nm:"BAD J"},{cls: "artist ar60",nm:"HEAVYWEIGHT"},{cls: "artist ar60",nm:"KERT KLAUS"},{cls: "artist ar60",nm:"HRISTJAN HURMO"}]);
	$("#s1").html('<div class="ss">WKND stage</div>'+l1);
	$("#s2").html('<div class="ss">WKND Live stage</div>'+l2);
	$("#s3").html('<div class="ss">Future stage</div>'+l3);
	$("#s4").html('<div class="ss">Digital stage</div>'+l4);

	var l12 = mkln([{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"TEMPER2"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"SYN COLE"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"AXWELL & INGRESSO"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"OTTO KNOWS"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"SHOWTEK"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"ROBIN SHULZ"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"MARTIN GARRIX"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"TIESTO"}]);
	var l22 = mkln([{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"ELINA BORN"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"I WEAR EXPERIMENT"},{cls:"pause pa45",nm:"."},{cls:"artist ar60",nm:"PER"},{cls:"pause pa45",nm:"."},{cls:"artist ar60",nm:"ALAN WALKER"},{cls:"pause pa45",nm:"."},{cls:"artist ar60",nm:"BRAINSTORM"}]);
	$("#s12").html('<div class="ss">WKND stage</div>'+l12);
	$("#s22").html('<div class="ss">WKND stage</div>'+l22);
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

