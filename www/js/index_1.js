
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

    var l1 = mkln([{cls:"pause pa60",nm:"."},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"AROP"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"DESIIGNER"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"OLIVER HELDENS"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"AFROJACK"},{cls:"pause pa45",nm:"."},{cls:"artist ar60",nm:"POST MALONE"},{cls:"pause pa45",nm:"."},{cls:"artist ar60",nm:"AXWELL & INGROSSO"}]);
    var l2 = mkln([{cls:"pause pa60",nm:"."},{cls:"pause pa60",nm:"."},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"LEMAITRE"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"ZHU"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"A BOOGIE WIT DA HOODIE"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"$UICIDEBOY$"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"SWANKY TUNES"}]);
    var l3 = mkln([{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"CITYFLASH & LAURA-LY"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"THE SECOND LEVEL"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"FRANK WALKER"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"MOKSI"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"SLUSHII"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"ALAN WALKER"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"BRENNAN HEART"}]);
    var l4 = mkln([{cls:"pause pa60",nm:"."},{cls:"artist ar90",nm:"KAAREL SEIN"},{cls:"artist ar90",nm:"EISI"},{cls:"artist ar90",nm:"RULERS OF THE DEEP"},{cls:"artist ar120",nm:"MAJAMASIN"},{cls:"artist ar90",nm:"BOMBOSSA BROTHERS"}]);
    $("#s1").html('<div class="ss">MAIN stage</div>'+l1);
    $("#s2").html('<div class="ss">WKND stage</div>'+l2);
    $("#s3").html('<div class="ss">Future stage</div>'+l3);
    $("#s4").html('<div class="ss">KATEL</div>'+l4);

    var l12 = mkln([{cls:"pause pa60",nm:"."},{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"PUR MUDO"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"HEADHUNTERZ"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"R3HAB"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"GALANTIS"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"KYGO"},{cls:"pause pa30",nm:"."},{cls:"artist ar90",nm:"DAVID GUETTA"}]);
    var l22 = mkln([{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"ANDRES PUUSEPP B2B ANDRES ALJASTE"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"RAMMAR DJ’S"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"5 MIINUST"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"RELANEX"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"BIG SHAQ"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"LEMON FIGHT"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"DON DIABLO"}]);
    var l32 = mkln([{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"SANDER VALGE & SIIM TABA"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"KERT KLAUS"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"BROOKS"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"MADISSON MARS"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"SYN COLE"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"MARTIN JENSEN"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"MALAA"}]);
    var l42 = mkln([{cls:"artist ar60",nm:"REDUCERBOY"},{cls:"artist ar60",nm:"THE RENEGADE B2B P-PROJECT"},{cls:"artist ar60",nm:"PROTEUS"},{cls:"artist ar60",nm:"HARDSTYLE TOYS"},{cls:"artist ar60",nm:"HYPIX"},{cls:"artist ar60",nm:"ZERO OPACITY"},{cls:"artist ar60",nm:"CRITICAL ENEMIEZ B2B PARALYZE"},{cls:"artist ar60",nm:"SUNNY DEE B2B CITYFLASH"},{cls:"artist ar60",nm:"KORSAKOFF"}]);
    $("#s12").html('<div class="ss">MAIN stage</div>'+l12);
    $("#s22").html('<div class="ss">WKND stage</div>'+l22);
    $("#s32").html('<div class="ss">Future stage</div>'+l32);
    $("#s42").html('<div class="ss">HARD NATION</div>'+l42);

    var l13 = mkln([{cls:"pause pa60",nm:"."},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"TUNGEVAAG & RAABAN"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"SIGMA"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"MARTIN SOLVEIG"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"KSHMR"},{cls:"pause pa45",nm:"."},{cls:"artist ar90",nm:"THE PRODIGY"},{cls:"pause pa30",nm:"."},{cls:"artist ar75",nm:"HARDWELL"}]);
    var l23 = mkln([{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"GETTER JAANI"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"KERMO HERT"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"GORGON CITY"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"INNA"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"NETSKY"},{cls:"pause pa30",nm:"."},{cls:"artist ar60",nm:"TUJAMO"}]);
    var l33 = mkln([{cls:"pause pa60",nm:"."},{cls:"artist ar60",nm:"MAREK TALIVERE"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"ERKKI SARAPUU"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"STACEY JAMES & KEVIN KMK"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"COVERXBYTE"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"ANDY C"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"AC SLATER"},{cls:"pause pa15",nm:"."},{cls:"artist ar60",nm:"WATEVA"}]);
    var l43 = mkln([{cls:"artist ar90",nm:"TARMO PALUOJA"},{cls:"artist ar90",nm:"KEKKONEN & OIS"},{cls:"artist ar90",nm:"FOX YEE"},{cls:"artist ar90",nm:"MARIMELL"},{cls:"artist ar90",nm:"BAS MODY"},{cls:"artist ar90",nm:"PFIRTER"}]);
    $("#s13").html('<div class="ss">MAIN stage</div>'+l13);
    $("#s23").html('<div class="ss">WKND stage</div>'+l23);
    $("#s33").html('<div class="ss">Future stage</div>'+l33);
    $("#s43").html('<div class="ss">MACHINE NATION</div>'+l43);

}


function hall(){
    $("#fmap").hide();
    $("#cmap").hide();
    $("#smap").hide();
    $("#mm").hide();
}

function fmap(){
    hall();
    $("#fmap").html('<img src="img/fmap18.jpg">');
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

