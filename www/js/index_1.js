
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

	var l1 = mkln([{cls:"pause pa60",nm:"."},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"ALAN WALKER"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"MADISSON MARS"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"DON DIABLO"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"ALESSO"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"ARMIN VAN BUUREN"}]);
	var l2 = mkln([{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"FILATOV & KARAS"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"FLUX PAVILLION"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"ALOK"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"RAE SREMMURD"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"TCHAMI"}]);
	var l3 = mkln([{cls:"pause pa60",nm:"."},{cls:"pause pa30",nm:"."},{cls:"artist ar45",nm:"MARC"},{cls:"artist ar45",nm:"PAWL"},{cls:"artist ar60",nm:"ALLY & SIGER"},{cls:"artist ar60",nm:"THE SECOND LEVEL"},{cls:"artist ar60",nm:"MATRIX & FUTUREBOUND"},{cls:"artist ar60",nm:"SUB FOCUS"},{cls:"artist ar60",nm:"CAMO & KROOKED"},{cls:"artist ar60",nm:"BRENNAN HEART"},{cls:"artist ar60",nm:"WILD MOTHERFUCKERS"}]);
	$("#s1").html('<div class="ss">MAIN Stage</div>'+l1);
	$("#s2").html('<div class="ss">WKND STAGE</div>'+l2);
	$("#s3").html('<div class="ss">Future stage</div>'+l3);

	var l12 = mkln([{cls:"pause pa60",nm:"."},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"NOEP"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"THE CHAINSMOKERS"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"TUNGEVAAG & RAABAN"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"KNIFE PARTY"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"DEDMAU5"}]);
	var l22 = mkln([{cls:"artist ar60",nm:"MILWIN"},{cls:"artist ar60",nm:"PEGBOARD NERDS"},{cls:"pause pa15",nm:"."},{cls:"artist ar45",nm:"KISMA"},{cls:"artist ar60",nm:"R3HAB"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"VALENTINO KHAN"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"JAUZ"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"CLEAN BANDIT"}]
);
	var l32 = mkln([{cls:"artist ar60",nm:"CHRISTIAN SABURO"},{cls:"artist ar60",nm:"HOT N HANDSOME"},{cls:"artist ar60",nm:"ANDRES PUUSEPP"},{cls:"artist ar60",nm:"KRISTJAN HIRMO"},{cls:"artist ar60",nm:"KERT KLAUS"},{cls:"artist ar60",nm:"BOMBOSSA BROTHERS"},{cls:"artist ar60",nm:"ALEX MATTSON"},{cls:"artist ar60",nm:"PROTEUS"},{cls:"artist ar60",nm:"RADICAL REDEMPTION"},{cls:"artist ar60",nm:"ANGERFIST"}]);
	$("#s12").html('<div class="ss">MAIN Stage</div>'+l12);
	$("#s22").html('<div class="ss">WKND STAGE</div>'+l22);
	$("#s32").html('<div class="ss">Future stage</div>'+l32);
	
	var l13 = mkln([{cls:"pause pa60",nm:"."},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"KUNGS"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"SYN COLE"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"CARTOON"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"CHASE & STATUS"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"MARTIN GARRIX"}]);
	var l23 = mkln([{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"FOX STEVENSON"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"EPRODWERK"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"PUR MUD"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"ALMA"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"BEBE REXHA"},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"CHEAT CODES"}]);
	var l33 = mkln([{cls:"artist ar60",nm:"MAREK TALIVERE"},{cls:"artist ar60",nm:"ERKKI SARAPUU"},{cls:"artist ar60",nm:"COVERK X BYTE"},{cls:"artist ar60",nm:"[EX] DA BASS"},{cls:"artist ar60",nm:"SVEN ARUSOO"},{cls:"artist ar60",nm:"FUTURISTIK"},{cls:"artist ar60",nm:"MHKL"},{cls:"artist ar60",nm:"GTA"},{cls:"artist ar60",nm:"MACKY GEE"},{cls:"artist ar60",nm:"BASS MODILATORS"}]);
	$("#s13").html('<div class="ss">MAIN Stage</div>'+l13);
	$("#s23").html('<div class="ss">WKND STAGE</div>'+l23);
	$("#s33").html('<div class="ss">Future stage</div>'+l33);
	
}


function hall(){
	$("#fmap").hide();
	$("#cmap").hide();
	$("#smap").hide();
	$("#mm").hide();
}

function fmap(){
	hall();
	$("#fmap").html('<img src="img/fmap17_s.jpg">');
	$("#fmap").show();
}
function cmap(){
	hall();
	$("#cmap").html('<img src="img/cmap17_s.jpg">');
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

