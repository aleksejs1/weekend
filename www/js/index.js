
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
	$("#dats").html('<div class="ss">Th</div><div class="ti">14:00</div><div class="ti2">14:15</div><div class="ti">14:30</div><div class="ti2">14:45</div><div class="ti">15:00</div><div class="ti2">15:15</div><div class="ti">15:30</div><div class="ti2">15:45</div><div class="ti">16:00</div><div class="ti2">16:15</div><div class="ti">16:30</div><div class="ti2">16:45</div><div class="ti">17:00</div><div class="ti2">17:15</div><div class="ti">17:30</div><div class="ti2">17:45</div><div class="ti">18:00</div><div class="ti2">18:15</div><div class="ti">18:30</div><div class="ti2">18:45</div><div class="ti">19:00</div><div class="ti2">19:15</div><div class="ti">19:30</div><div class="ti2">19:45</div><div class="ti">20:00</div><div class="ti2">20:15</div><div class="ti">20:30</div><div class="ti2">20:45</div><div class="ti">21:00</div><div class="ti2">21:15</div><div class="ti">21:30</div><div class="ti2">21:45</div><div class="ti">22:00</div><div class="ti2">22:15</div><div class="ti">22:30</div><div class="ti2">22:45</div><div class="ti">23:00</div><div class="ti2">23:15</div><div class="ti">23:30</div><div class="ti2">23:45</div><div class="ti">0:00</div><div class="ti2">0:15</div><div class="ti">0:30</div><div class="ti2">0:45</div>');
	$("#dats1").html('<div class="ss">Fr</div><div class="ti">14:00</div><div class="ti2">14:15</div><div class="ti">14:30</div><div class="ti2">14:45</div><div class="ti">15:00</div><div class="ti2">15:15</div><div class="ti">15:30</div><div class="ti2">15:45</div><div class="ti">16:00</div><div class="ti2">16:15</div><div class="ti">16:30</div><div class="ti2">16:45</div><div class="ti">17:00</div><div class="ti2">17:15</div><div class="ti">17:30</div><div class="ti2">17:45</div><div class="ti">18:00</div><div class="ti2">18:15</div><div class="ti">18:30</div><div class="ti2">18:45</div><div class="ti">19:00</div><div class="ti2">19:15</div><div class="ti">19:30</div><div class="ti2">19:45</div><div class="ti">20:00</div><div class="ti2">20:15</div><div class="ti">20:30</div><div class="ti2">20:45</div><div class="ti">21:00</div><div class="ti2">21:15</div><div class="ti">21:30</div><div class="ti2">21:45</div><div class="ti">22:00</div><div class="ti2">22:15</div><div class="ti">22:30</div><div class="ti2">22:45</div><div class="ti">23:00</div><div class="ti2">23:15</div><div class="ti">23:30</div><div class="ti2">23:45</div><div class="ti">0:00</div><div class="ti2">0:15</div><div class="ti">0:30</div><div class="ti2">0:45</div>');
	$("#dats2").html('<div class="ss">Sa</div><div class="ti">14:00</div><div class="ti2">14:15</div><div class="ti">14:30</div><div class="ti2">14:45</div><div class="ti">15:00</div><div class="ti2">15:15</div><div class="ti">15:30</div><div class="ti2">15:45</div><div class="ti">16:00</div><div class="ti2">16:15</div><div class="ti">16:30</div><div class="ti2">16:45</div><div class="ti">17:00</div><div class="ti2">17:15</div><div class="ti">17:30</div><div class="ti2">17:45</div><div class="ti">18:00</div><div class="ti2">18:15</div><div class="ti">18:30</div><div class="ti2">18:45</div><div class="ti">19:00</div><div class="ti2">19:15</div><div class="ti">19:30</div><div class="ti2">19:45</div><div class="ti">20:00</div><div class="ti2">20:15</div><div class="ti">20:30</div><div class="ti2">20:45</div><div class="ti">21:00</div><div class="ti2">21:15</div><div class="ti">21:30</div><div class="ti2">21:45</div><div class="ti">22:00</div><div class="ti2">22:15</div><div class="ti">22:30</div><div class="ti2">22:45</div><div class="ti">23:00</div><div class="ti2">23:15</div><div class="ti">23:30</div><div class="ti2">23:45</div><div class="ti">0:00</div><div class="ti2">0:15</div><div class="ti">0:30</div><div class="ti2">0:45</div>');

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
	var l32 = mkln([{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"JUSTIN PRIME"},{cls:"artist ar60",nm:"TIGERLILY"},{cls:"artist ar60",nm:"CHICANE"},{cls:"artist ar60",nm:"ARONCHUPA"},{cls:"artist ar60",nm:"ALEX MATTSON"},{cls:"artist ar60",nm:"BRENNAN HEART"},{cls:"artist ar60",nm:"MICHAEL CALFAN"},{cls:"artist ar60",nm:"HEADHUNTERZ"}]);
	var l42 = mkln([{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"ERKKI SARPUU"},{cls:"artist ar60",nm:"ANDRES PUUSEPP"},{cls:"artist ar60",nm:"KERMO HERT"},{cls:"artist ar60",nm:"SVEN ARUSOO"},{cls:"artist ar60",nm:"PLANEET"},{cls:"artist ar60",nm:"BOMBOSSA BROTHERS"},{cls:"artist ar60",nm:"DR. PHILGOOD"},{cls:"artist ar60",nm:"[EX] DA BASS"},{cls:"artist ar60",nm:"ORKIDEA"}]);
	$("#s12").html('<div class="ss">WKND stage</div>'+l12);
	$("#s22").html('<div class="ss">WKND Live stage</div>'+l22);
	$("#s32").html('<div class="ss">Future stage</div>'+l32);
	$("#s42").html('<div class="ss">Digital stage</div>'+l42);

	var l13 = mkln([{cls:"pause pa90",nm:"."},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"NETSKY"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"ATB"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"TUNGEVAAG & RAABAN"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"RUDIMENTAL DJ"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"AFROJACK"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"DMITRI VEGAS & LIKE MIKE"}]);
	var l23 = mkln([{cls:"pause pa45",nm:"."},{cls:"artist ar60",nm:"EPORDWERK"},{cls:"pause pa45",nm:"."},{cls:"artist ar60",nm:"WURFFEL"},{cls:"pause pa45",nm:"."},{cls:"artist ar60",nm:"NOEP"},{cls:"pause pa45",nm:"."},{cls:"artist ar60",nm:"ISAC ELLIOT"},{cls:"pause pa45",nm:"."},{cls:"artist ar60",nm:"CARTOON"}]);
	var l33 = mkln([{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"RADISTAI"},{cls:"artist ar60",nm:"PEP & RASH"},{cls:"artist ar60",nm:"WILDSTYLEZ"},{cls:"artist ar60",nm:"COONE"},{cls:"artist ar60",nm:"DA TWEEKAZ"},{cls:"artist ar60",nm:"BASSJACKERS"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"SIGALA"},{cls:"artist ar60",nm:"DON DIABLO"}]);
	var l43 = mkln([{cls:"artist ar60",nm:"HOT N'HANDSOM"},{cls:"artist ar60",nm:"DIANA D"},{cls:"artist ar60",nm:"LIA LASSE"},{cls:"artist ar60",nm:"FUTURISTIK"},{cls:"artist ar60",nm:"COVERK X BYTE"},{cls:"artist ar60",nm:"NISKERONE"},{cls:"artist ar60",nm:"ALEX WAVE"},{cls:"artist ar60",nm:"MHKL"},{cls:"artist ar60",nm:"PROTEUS"},{cls:"artist ar60",nm:"THE SECOND LEVEL"}]);
	$("#s13").html('<div class="ss">WKND stage</div>'+l13);
	$("#s23").html('<div class="ss">WKND Live stage</div>'+l23);
	$("#s33").html('<div class="ss">Future stage</div>'+l33);
	$("#s43").html('<div class="ss">Digital stage</div>'+l43);
}


function hall(){
	$("#fmap").hide();
	$("#cmap").hide();
	$("#smap").hide();
	$("#mm").hide();
}

function fmap(){
	hall();
	$("#fmap").html('<img src="img/fmap.jpg">');
	$("#fmap").show();
}
function cmap(){
	hall();
	$("#fmap").html('<img src="img/cmap.jpg">');
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

