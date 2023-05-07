let inputContainers = document.querySelectorAll(".input");
let gender = document.querySelector("select[name='gender']");
let otherGender = document.querySelector(".other-gender");
let religion = document.querySelector("select[name='religion']");
let otherReligion = document.querySelector(".other-religion");
let work = document.querySelector("select[name='work-type']");
let otherWork = document.querySelector(".other-work");

const checkEmpty = (inputBox) => {
    let inputField = inputBox.querySelector(".input__field");
    if (inputField) {
        inputField.addEventListener('focusout', () => {
            if (inputField.value == null || inputField.value == ""){
                inputBox.classList.remove('input--filled')
            } else {
                inputBox.classList.add('input--filled');
            }
        })   
    }
}

inputContainers.forEach(elem => {
    checkEmpty(elem);
})

otherDisplay = (elem, other) => {
    elem.addEventListener("change", () => {
        if (elem.value === "others") {
            other.style.display = "inline-block";
        } else {
            other.style.display = "none";
        }
    })
}

otherDisplay(gender, otherGender);
otherDisplay(religion, otherReligion);
otherDisplay(work, otherWork);


/* For the dropdown options in the addresses */
let provinces = {
    'Abra'  : [
		'Bangued','Boliney','Bucay','Bucloc','Daguioman','Danglas',
		'Dolores','La Paz','Lacub','Lagangilang','Lagayan','Langiden',
		'Licuan-Baay','Luba','Malibcong','Manabo','Peñarrubia','Pidigan',
		'Pilar','Sallapadan','San Isidro','San Juan','San Quintin','Tayum',
		'Tineg','Tubo','Villaviciosa'
		],
	'Agusan Del Norte' : [
		'Buenavista','Butuan','Cabadbaran','Carmen','Jabonga','Kitcharao',
		'Las Nieves','Magallanes','Nasipit','Remedios T. Romualdez','Santiago',
		'Tubay'
		],
	'Agusan Del Sur' : [
		'Bayugan','Bunawan','Esperanza','La Paz','Loreto','Prosperidad',
		'Rosario','San Francisco','San Luis','Santa Josefa','Sibagat',
		'Talacogon','Trento','Veruela'
		],
	'Aklan' : [
		'Altavas','Balete','Banga','Batan','Buruanga','Ibajay',
		'Kalibo','Lezo','Libacao','Madalag','Makato','Malay',
		'Malinao','Nabas','New Washington','Numancia','Tangalan'
		],
	'Albay' : [
		'Bacacay','Camalig','Daraga','Guinobatan','Jovellar','Legazpi',
		'Libon','Ligao','Malilipot','Malinao','Manito','Oas',
		'Pio Duran','Polangui','Rapu-Rapu','Santo Domingo','Tabaco',
		'Tiwi'
		],
	'Antique' : [
		'Anini-y','Barbaza','Belison','Bugasong','Caluya','Culasi',
		'Hamtic','Laua-an','Libertad','Pandan','Patnongon','San Jose de Buenavista',
		'San Remigio','Sebaste','Sibalom','Tibiao','Tobias Fornier','Valderrama'
		],
	'Apayao' : [
		'Calanasan','Conner','Flora','Kabugao','Luna','Pudtol',
		'Santa Marcela'
		],
	'Aurora' : [
		'Baler','Casiguran','Dilasag','Dinalungan','Dingalan','Dipaculao',
		'Maria Aurora','San Luis'
		],
	'Basilan' : [
		'Akbar','Al-Barka','Hadji Mohammad Ajul','Hadji Muhtamad','Isabela City','Lamitan',
		'Lantawan','Maluso','Sumisip','Tabuan-Lasa','Tipo-Tipo','Tuburan',
		'Ungkaya Pukan'
		],
	'Bataan' : [
		'Abucay','Bagac','Balanga','Dinalupihan','Hermosa','Limay',
		'Mariveles','Morong','Orani','Orion','Pilar','Samal',
		],
	'Batanes' : [
		'Basco','Itbayat','Ivana','Mahatao','Sabtang','Uyugan'
		],
	'Batangas' : [
		'Agoncillo','Alitagtag','Balayan','Balete','Batangas City','Bauan',
		'Calaca','Calatagan','Cuenca','Ibaan','Laurel','Lemery',
		'Lian','Lipa','Lobo','Mabini', 'Malvar','Mataas na kahoy',
		'Nasugbu','Padre Garcia','Rosario','San Jose','San Juan','San Luis',
		'San Nicolas','San Pascual','Santa Teresita','Santo Tomas','Taal',
		'Talisay','Tanauan','Taysan','Tingloy','Tuy'
		],
	'Benguet' : [
		'Atok','Baguio','Bakun','Bokod','Buguias','Itogon',
		'Kabayan','Kapangan','Kibungan','La Trinidad','Mankayan','Sablan',
		'Tuba','Tublay'
		],
	'Biliran' : [
		'Almeria','Biliran','Cabucgayan','Caibiran','Culaba','Kawayan',
		'Maripipi','Naval'
		],
	'Bohol' : [
		'Alicia','Anda','Batuan','Bilar','Candijay','Carmen',
		'Dimiao','Duero','Garcia Hernandez','Guindulman','Jagna','Sevilla',
		'Lila','Loay','Loboc','Mabini', 'Pilar','Sierra Bullones',
		'Valencia'
		],	
	'Bukidnon' : [
		'Baungon','Cabanglasan','Damulog','Dangcagan','Don Carlos','Impasugong',
		'Kadingilan','Kalilangan','Kibawe','Kitaotao','Lantapan','Libona',
		'Malaybalay','Malitbog','Manolo Fortich','Maramag', 'Pangantucan','Quezon',
		'San Fernando','Sumilao','Talakag','Valencia'
		],
	'Bulacan' : [
		'Angat','Balagtas','Baliuag','Bocaue','Bulakan','Bustos',
		'Calumpit','Doña Remedios Trinidad','Guiguinto','Hagonoy','Malolos','Marilao',
		'Meycauayan','Norzagaray','Obando','Pandi', 'Paombong','Plaridel',
		'Pulilan','San Ildefonso','San Jose del Monte','San Miguel','San Rafael','Santa Maria'
		],
	'Cagayan' : [
		'Abulug','Alcala','Allacapan','Amulung','Aparri','Baggao',
		'Ballesteros','Buguey','Calayan','Camalaniugan','Claveria','Enrile',
		'Gattaran','Gonzaga','Iguig','Lal-lo', 'Lasam','Pamplona',
		'Peñablanca','Piat','Rizal','Sanchez-Mira','Santa Ana','Santa Praxedes',
		'Santa Teresita','Santo Niño','Solana','Tuao','Tuguegarao City'
		],	
	'Camarines Norte' : [
		'Basud','Capalonga','Daet','Jose Panganiban','Labo','Mercedes',
		'Paracale','San Lorenzo Ruiz','San Vicente','Santa Elena','Talisay','Vinzons',
		],
	'Camarines Sur' : [
		'Baao','Balatan','Bato','Bombon','Buhi','Bula',
		'Cabusao','Calabanga','Camaligan','Canaman','Caramoan','Del Gallego',
		'Gainza','Garchitorena','Goa','Iriga','Lagonoy','Libmanan',
		'Lupi','Magarao','Milaor','Minalabac','Nabua','Naga',
		'Ocampo','Pamplona','Pasacao','Pili','Presentacion','Ragay',
		'Sagñay','San Fernando','San Jose','Sipocot','Siruma','Tigaon',
		'Tinambac'
		],
	'Camiguin' : [
		'Catarman','Guinsiliban','Mahinog','Mambajao','Sagay'
		],
	'Capiz' : [
		'Cuartero','Dao','Dumalag','Dumarao','Ivisan','Jamindan',
		'Maayon','Mambusao','Panay','Panitan','Pilar','Pontevedra',
		'President Roxas','Roxas City','Sapian','Sigma', 'Tapaz'
		],
	'Catanduanes' : [
		'Bagamanoc','Baras','Bato','Caramoran','Gigmoto','Pandan',
		'Panganiban','San Andres','San Miguel','Viga','Virac'
		],
	'Cavite' : [
		'Alfonso','Amadeo','Bacoor','Carmona','Cavite City','Dasmariñas',
		'General Emilio Aguinaldo','General Mariano Alvarez','General Trias','Imus','Indang','Kawit',
		'Magallanes','Maragondon','Mendez','Naic','Noveleta','Rosario',
		'Silang','Tagaytay','Tanza','Ternate','Trece Martires'
		],
	'Cebu' : [
		'Alcantara','Alcoy','Alegria','Aloguinsan','Argao','Asturias',
		'Badian','Balamban','Bantayan','Barili','Bogo','Boljoon',
		'Borbon','Carcar','Carmen','Catmon','Cebu City','Compostela',
		'Consolacion','Cordova','Daanbantayan','Dalaguete','Danao','Dumanjug',
		'Ginatilan','Lapu-Lapu','Liloan','Madridejos','Malabuyoc','Mandaue',
		'Medellin','Minglanilla','Moalboal','Naga','Oslob','Pilar',
		'Pinamungajan','Poro','Ronda','Samboan','San Fernando','San Francisco',
		'San Remigio','Santa Fe','Santander','Sibonga','Sogod','Tabogon',
		'Tabuelan','Talisay','Toledo','Tuburan','Tudela'
		],
	'Compostela Valley' : [
		'Compostela','Laak','Mabini','Maco','Maragusan','Mawab',
		'Monkayo','Montevista','Nabunturan','New Bataan','Pantukan'
		],
	'Cotabato' : [
		'Alamada','Aleosan','Antipas','Arakan','Banisilan','Carmen',
		'Kabacan','Kidapawan','Libungan','M\'lang','Magpet','Makilala',
		'Matalam','Midsayap','Pigcawayan','Pikit','President Roxas','Tulunan'
		],
	'Davao Del Norte' : [
		'Asuncion','Braulio E. Dujali','Carmen','Kapalong','New Corella','Panabo',
		'Samal','San Isidro','Santo Tomas','Tagum','Talaingod'
		],	
	'Davao Del Sur' : [
		'Bansalan','Davao City','Digos','Hagonoy','Kiblawan','Magsaysay',
		'Malalag','Matanao','Padada','Santa Cruz','Sulop'
		],
	'Davao Oriental' : [
		'Baganga','Banaybanay','Boston','Caraga','Cateel','Governor Generoso',
		'Lupon','Manay','Mati','San Isidro','Tarragona'
		],	
	'Dinagat Islands' : [
		'Basilisa','Cagdianao','Dinagat','Libjo','Loreto','San Jose',
		'Tubajon'
		],
	'Eastern Samar' : [
		'Arteche','Balangiga','Balangkayan','Borongan','Can-avid','Dolores',
		'General MacArthur','Giporlos','Guiuan','Hernani','Jipapad','Lawaan',
		'Llorente','Maslog','Maydolong','Mercedes','Oras','Quinapondan',
		'Salcedo','San Julian','San Policarpo','Sulat','Taft'
		],	
	'Guimaras' : [
		'Buenavista','Jordan','Nueva Valencia','San Lorenzo','Sibunag'
		],
	'Ifugao' : [
		'Aguinaldo','Alfonso Lista','Asipulo','Banaue','Hingyon','Hungduan',
		'Kiangan','Lagawe','Lamut','Mayoyao','Tinoc'
		],	
	'Ilocos Norte' : [
		'Adams','Bacarra','Badoc','Bangui','Banna','Batac',
		'Burgos','Carasi','Currimao','Dingras','Dumalneg','Laoag',
		'Marcos','Nueva Era','Pagudpud','Paoay','Pasuquin','Piddig',
		'Pinili','San Nicolas','Sarrat','Solsona','Vintar'
		],
	'Ilocos Sur' : [
		'Alilem','Banayoyo','Bantay','Burgos','Cabugao','Candon',
		'Caoayan','Cervantes','Galimuyod','Gregorio del Pilar','Lidlidda','Magsingal',
		'Nagbukel','Narvacan','Quirino','Salcedo','San Emilio','San Esteban',
		'San Ildefonso','San Juan','San Vicente','Santa','Santa Catalina','Santa Cruz',
		'Santa Lucia','Santa Maria','Santiago','Santo Domingo','Sigay','Sinait',
		'Sugpon','Suyo','Tagudin','Vigan'
		],
	'Iloilo' : [
		'Ajuy','Alimodian','Anilao','Badiangan','Balasan','Banate',
		'Barotac Nuevo','Barotac Viejo','Batad','Bingawan','Cabatuan','Calinog',
		'Carles','Concepcion','Dingle','Dueñas','Dumangas','Estancia',
		'Guimbal','Igbaras','Iloilo City','Janiuay','Lambunao','Leganes',
		'Lemery','Leon','Maasin','Miagao','Mina','New Lucena',
		'Oton','Passi','Pavia','Pototan','San Dionisio','San Enrique',
		'San Joaquin','San Miguel','San Rafael','Santa Barbara','Sara','Tigbauan',
		'Tubungan','Zarraga'
		],
	'Isabela' : [
		'Alicia','Angadanan','Aurora','Benito Soliven','Burgos','Cabagan',
		'Cabatuan','Cauayan','Cordon','Delfin Albano','Dinapigue','Divilacan',
		'Echague','Gamu','Ilagan','Jones','Luna','Maconacon',
		'Mallig','Naguilian','Palanan','Quezon','Quirino','Ramon',
		'Reina Mercedes','Roxas','San Agustin','San Guillermo','San Isidro','San Manuel',
		'San Mariano','San Mateo','San Pablo','Santa Maria','Santiago','Santo Tomas',
		'Tumauini'
		],
	'Kalinga' : [
		'Balbalan','Lubuagan','Pasil','Pinukpuk','Rizal','Tabuk',
		'Tanudan','Tinglayan'
		],
	'La Union' : [
		'Agoo','Aringay','Bacnotan','Bagulin','Balaoan','Bangar',
		'Bauang','Burgos','Caba','Luna','Naguilian','Pugo',
		'Rosario','San Fernando','San Gabriel','San Juan','Santo Tomas','Santol',
		'Sudipen','Tubao'
		],
	'Laguna' : [
		'Alaminos','Bay','Biñan','Cabuyao','Calamba','Calauan',
		'Cavinti','Famy','Kalayaan','Liliw','Los Baños','Luisiana',
		'Lumban','Mabitac','Magdalena','Majayjay','Nagcarlan','Paete',
		'Pagsanjan','Pakil','Pangil','Pila','Rizal','San Pablo','San Pedro',
		'Santa Cruz','Santa Maria','Santa Rosa','Siniloan','Victoria'
		],
	'Lanao Del Norte' : [
		'Bacolod','Baloi','Baroy','Iligan','Kapatagan','Kauswagan',
		'Kolambugan','Lala','Linamon','Magsaysay','Maigo','Matungao',
		'Munai','Nunungan','Pantao Ragat','Pantar','Poona Piagapo','Salvador',
		'Sapad','Sultan Naga Dimaporo','Tagoloan','Tangcal','Tubod'
		],
	'Lanao del Sur' : [
		'Amai Manabilang','Bacolod-Kalawi','Balabagan','Balindong','Bayang','Binidayan',
		'Buadiposo-Buntong','Bubong','Butig','Calanogas','Ditsaan-Ramain','Ganassi',
		'Kapai','Kapatagan','Lumba-Bayabao','Lumbaca-Unayan','Lumbatan','Lumbayanague',
		'Madalum','Madamba','Maguing','Malabang','Marantao','Marawi',
		'Marogong','Masiu','Mulondo','Pagayawan','Piagapo','Picong',
		'Poona Bayabao','Pualas','Saguiaran','Sultan Dumalondong','Tagoloan II','Tamparan',
		'Taraka','Tubaran','Tugaya','Wao'
		],
	'Leyte' : [
		'Abuyog','Alangalang','Albuera','Babatngon','Barugo','Bato',
		'Baybay','Burauen','Calubian','Capoocan','Carigara','Dagami',
		'Dulag','Hilongos','Hindang','Inopacan','Isabel','Jaro',
		'Javier','Julita','Kananga','La Paz','Leyte','MacArthur',
		'Mahaplag','Matag-ob','Matalom','Mayorga','Merida','Ormoc',
		'Palo','Palompon','Pastrana','San Isidro','San Miguel','Santa Fe',
		'Tabango','Tabontabon','Tacloban','Tanauan','Tolosa','Tunga',
		'Villaba'
		],
	'Maguindanao' : [
		'Barira','Buldon','Datu Anggal Midtimbang','Datu Blah T. Sinsuat','Datu Odin Sinsuat','Kabuntalan',
		'Matanog','Northern Kabuntalan','Parang','Sultan Kudarat','Sultan Mastura','Sultan Sumagka',
		'Upi'
		],
	'Marinduque' : [
		'Boac','Buenavista','Gasan','Mogpog','Santa Cruz','Torrijos'
		],	
	'Masbate' : [
		'Aroroy','Baleno','Balud','Batuan','Cataingan','Cawayan',
		'Claveria','Dimasalang','Esperanza','Mandaon','Masbate City','Milagros',
		'Mobo','Monreal','Palanas','Pio V. Corpuz','Placer','San Fernando',
		'San Jacinto','San Pascual','Uson'	
		],
	'Metro Manila' : [
		'Caloocan','Las Piñas','Makati','Malabon','Mandaluyong','Manila',
		'Marikina','Muntinlupa','Navotas','Parañaque','Pasay','Pasig',
		'Pateros','Quezon City','San Juan','Taguig','Valenzuela'
		],
	'Misamis Occidental' : [
		'Aloran','Baliangao','Bonifacio','Calamba','Clarin','Concepcion',
		'Don Victoriano Chiongbian','Jimenez','Lopez Jaena','Oroquieta','Ozamiz','Panaon',
		'Plaridel','Sapang Dalaga','Sinacaban','Tangub','Tudela'
		],
	'Misamis Oriental' : [
		'Alubijid','Balingasag','Balingoan','Binuangan','Cagayan de Oro','Claveria',
		'El Salvador','Gingoog','Gitagum','Initao','Jasaan','Kinoguitan',
		'Lagonglong','Laguindingan','Libertad','Lugait','Magsaysay','Manticao',
		'Medina','Naawan','Opol','Salay','Sugbongcogon','Tagoloan',	
		'Talisayan','Villanueva'
		],
	'Mountain Province' : [
		'Barlig','Bauko','Besao','Bontoc','Natonin','Paracelis',
		'Sabangan','Sadanga','Sagada','Tadian'
		],	
	'Negros Occidental' : [
		'Bacolod','Bago','Binalbagan','Cadiz','Calatrava','Candoni',
		'Cauayan','Enrique B. Magalona','Escalante','Himamaylan','Hinigaran','Hinoba-an',
		'Ilog','Isabela','Kabankalan','La Carlota','La Castellana','Manapla',
		'Moises Padilla','Murcia','Pontevedra','Pulupandan','Sagay','Salvador Benedicto',
		'San Carlos','San Enrique','Silay','Sipalay','Talisay','Toboso',
		'Valladolid','Victorias'
		],		
	'Negros Oriental' : [
		'Amlan','Ayungon','Bacong','Bais','Basay','Bayawan',
		'Bindoy','Canlaon','Dauin','Dumaguete','Guihulngan','Jimalalud',
		'La Libertad','Mabinay','Manjuyod','Pamplona','San Jose','Santa Catalina',
		'Siaton','Sibulan','Tanjay','Tayasan','Valencia','Vallehermoso',
		'Zamboanguita'
		],
	'Northern Samar' : [
		'Allen','Biri','Bobon','Capul','Catarman','Catubig',
		'Gamay','Laoang','Lapinig','Las Navas','Lavezares','Lope de Vega',
		'Mapanas','Mondragon','Palapag','Pambujan','Rosario','San Antonio',
		'San Isidro','San Jose','San Roque','San Vicente','Silvino Lobos','Victoria'
		],	
	'Nueva Ecija' : [
		'Aliaga','Bongabon','Cabanatuan','Cabiao','Carranglan','Cuyapo',
		'Gabaldon','Gapan','General Mamerto Natividad','General Tinio','Guimba','Jaen',
		'Laur','Licab','Llanera','Lupao','Muñoz','Nampicuan',
		'Palayan','Pantabangan','Peñaranda','Quezon','Rizal','San Antonio',
		'San Isidro','Cabaritan','San Leonardo','Santa Rosa','Santo Domingo','Talavera',
		'Talugtug','Zaragoza'
		],
	'Nueva Vizcaya' : [
		'Alfonso Castañeda','Ambaguio','Aritao','Bagabag','Bambang','Bayombong',
		'Diadi','Dupax del Norte','Dupax del Sur','Kasibu','Kayapa','Quezon',
		'Santa Fe','Solano','Villaverde'
		],
	'Occidental Mindoro' : [
		'Abra de Ilog','Calintaan','Looc','Lubang','Magsaysay','Mamburao',
		'Paluan','Rizal','Sablayan','San Jose','Santa Cruz'
		],
	'Oriental Mindoro' : [
		'Baco','Bansud','Bongabong','Bulalacao','Calapan','Gloria',
		'Mansalay','Naujan','Pinamalayan','Pola','Puerto Galera','Roxas',
		'San Teodoro','Socorro','Victoria'
		],
	'Palawan' : [
		'Aborlan','Agutaya','Araceli','Balabac','Bataraza','Brooke\'s Point',
		'Busuanga','Cagayancillo','Coron','Culion','Cuyo','Dumaran',
		'El Nido','Kalayaan','Linapacan','Magsaysay','Narra','Puerto Princesa',		
		'Quezon','Rizal','Roxas','San Vicente','Sofronio Española','Taytay'
		],	
	'Pampanga' : [
		'Angeles','Apalit','Arayat','Bacolor','Candaba','Floridablanca',
		'Guagua','Lubao','Mabalacat','Macabebe','Magalang','Masantol',
		'Mexico','Minalin','Porac','San Fernando','San Luis','San Simon',		
		'Santa Ana','Santa Rita','Santo Tomas','Sasmuan'
		],
	'Pangasinan' : [
		'Agno','Aguilar','Alaminos','Alcala','Anda','Asingan',
		'Balungao','Bani','Basista','Bautista','Bayambang','Binalonan',
		'Binmaley','Bolinao','Bugallon','Burgos','Calasiao','Dasol',		
		'Dagupan','Dasol','Infanta','Labrador','Laoac','Lingayen',
		'Mabini','Malasiqui','Manaoag','Mangaldan','Mangatarem','Mapandan',
		'Natividad','Pozorrubio','Rosales','San Carlos','San Fabian','San Jacinto',	
		'San Manuel','San Nicolas','San Quintin','Santa Barbara','Santa Maria','Santo Tomas',
		'Sison','Sual','Tayug','Umingan','Urbiztondo','Urdaneta',
		'Villasis'
		],
	'Quezon' : [
		'Agdangan','Alabat','Atimonan','Buenavista','Burdeos','Calauag',
		'Candelaria','Catanauan','Dolores','General Luna','General Nakar','Guinayangan',
		'Gumaca','Infanta','Jomalig','Lopez','Lucban','Lucena',		
		'Macalelon','Mauban','Mulanay','Padre Burgos','Pagbilao','Panukulan',
		'Patnanungan','Perez','Pitogo','Plaridel','Polillo','Quezon',
		'Real','Sampaloc','San Andres','San Antonio','San Francisco','San Narciso',	
		'Sariaya','Tagkawayan','Tayabas','Tiaong','Unisan'
		],		
	'Quirino' : [
		'Aglipay','Cabarroguis','Diffun','Maddela','Nagtipunan','Saguday'
		],
	'Rizal' : [
		'Angono','Antipolo','Baras','Binangonan','Cainta','Cardona',
		'Jalajala','Morong','Pililla','Rodriguez','San Mateo','Tanay',
		'Taytay','Teresa'		
		],
	'Romblon' : [
		'Alcantara','Banton','Cajidiocan','Calatrava','Concepcion','Corcuera',
		'Ferrol','Looc','Magdiwang','Odiongan','Romblon','San Agustin',
		'San Andres','San Fernando','San Jose','Santa Fe','Santa Maria'		
		],
	'Samar' : [
		'Almagro','Basey','Calbayog','Calbiga','Catbalogan','Daram',
		'Gandara','Hinabangan','Jiabong','Marabut','Matuguinao','Motiong',
		'Pagsanghan','Paranas','Pinabacdao','San Jorge','San Jose de Buan','San Sebastian',		
		'Santa Margarita','Santa Rita','Santo Niño','Tagapul-an','Talalora','Tarangnan',
		'Villareal','Zumarraga'
		],
	'Sarangani' : [
		'Alabel','Glan','Kiamba','Maasim','Maitum','Malapatan',
		'Malungon'	
		],
	'Shariff Kabunsuan' : [
		'Barira','Buldon','Datu Blah T. Sinsuat','Datu Odin Sinsuat','Kabuntalan','Matanog',
		'Northern Kabuntalan','Parang','Sultan Kudarat','Sultan Mastura','Upi'		
		],		
	'Siquijor' : [
		'Enrique Villanueva','Larena','Lazi','Maria','San Juan','Siquijor'
		],
	'Sorsogon' : [
		'Barcelona','Bulan','Bulusan','Casiguran','Castilla','Donsol',
		'Gubat','Irosin','Juban','Magallanes','Matnog','Pilar',
		'Prieto Diaz','Santa Magdalena','Sorsogon City'
		],	
	'South Cotabato' : [
		'Banga','General Santos','Koronadal','Lake Sebu','Norala','Polomolok',
		'Santo Niño','Surallah','T\'Boli','Tampakan','Tantangan','Tupi'
		],
	'Southern Leyte' : [
		'Anahawan','Bontoc','Hinunangan','Hinundayan','Libagon','Liloan',
		'Limasawa','Maasin','Macrohon','Malitbog','Padre Burgos','Pintuyan',
		'Saint Bernard','San Francisco','San Juan','San Ricardo','Silago','Sogod',		
		'Tomas Oppus'
		],
	'Sultan Kudarat' : [
		'Bagumbayan','Columbio','Esperanza','Isulan','Kalamansig','Lambayong',
		'Lebak','Lutayan','Palimbang','President Quirino','Senator Ninoy Aquino','Tacurong'
		],
	'Sulu' : [
		'Banguingui','Hadji Panglima Tahil','Indanan','Jolo','Kalingalan Caluang','Lugus',
		'Luuk','Maimbung','Old Panamao','Omar','Pandami','Panglima Estino',
		'Pangutaran','Parang','Pata','Patikul','Siasi','Talipao',		
		'Tapul'
		],
	'Surigao Del Norte' : [
		'Alegria','Bacuag','Burgos','Claver','Dapa','Del Carmen',
		'General Luna','Gigaquit','Mainit','Malimono','Pilar','Placer',
		'San Benito','San Francisco','San Isidro','Santa Monica','Sison','Socorro',		
		'Surigao City','Tagana-an','Tubod'
		],	
	'Surigao Del Sur' : [
		'Barobo','Bayabas','Bislig','Cagwait','Cantilan','Carmen',
		'Carrascal','Cortes','Hinatuan','Lanuza','Lianga','Lingig',
		'Madrid','Marihatag','San Agustin','San Miguel','Tagbina','Tago',		
		'Tandag'
		],		
	'Tarlac' : [
		'Anao','Bamban','Camiling','Capas','Concepcion','Gerona',
		'La Paz','Mayantoc','Moncada','Paniqui','Pura','Ramos',
		'San Clemente','San Jose','San Manuel','Santa Ignacia','Tarlac City','Victoria'
		],
	'Tawi-Tawi' : [
		'Bongao','Languyan','Mapun','Panglima Sugala','Sapa-Sapa','Sibutu',
		'Simunul','Sitangkai','South Ubian','Tandubas','Turtle Islands'
		],
	'Zambales' : [
		'Botolan','Cabangan','Candelaria','Iba','Masinloc','Olongapo',
		'Palauig','San Antonio','San Felipe','San Marcelino','San Narciso',
		'Santa Cruz','Subic'		
		],
	'Zamboanga Del Norte' : [
		'Baliguian','Dapitan','Dipolog','Godod','Gutalac','Jose Dalman',
		'Kalawit','Katipunan','La Libertad','Labason','Leon B. Postigo','Liloy',
		'Manukan','Mutia','Piñan','Polanco','President Manuel A. Roxas','Rizal',		
		'Salug','Sergio Osmeña Sr.','Siayan','Sibuco','Sibutad','Sindangan',
		'Siocon','Sirawai','Tampilisan'
		],
	'Zamboanga Del Sur' : [
		'Aurora','Bayog','Dimataling','Dinas','Dumalinao','Dumingag',
		'Guipos','Josefina','Kumalarang','Labangan','Lakewood','Lapuyan',
		'Mahayag','Margosatubig','Midsalip','Molave','Pagadian','Pitogo',		
		'Ramon Magsaysay','San Miguel','San Pablo','Sominot','Tabina','Tambulig',
		'Tigbao','Tukuran','Vincenzo A. Sagun','Zamboanga City'
		],
	'Zamboanga Sibugay' : [
		'Alicia','Buug','Diplahan','Imelda','Ipil','Kabasalan',
		'Mabuhay','Malangas','Naga','Olutanga','Payao','Roseller Lim',
		'Siay','Talusan','Titay','Tungawan'
		],			
}

let countries = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

let countrySelection = document.querySelector("#present-country");
let provinceSelection = document.querySelector("#present-province");
let citySelection = document.querySelector("#present-city");
let permCountrySelection = document.querySelector("#permanent-country");
let permProvinceSelection = document.querySelector("#permanent-province");
let permCitySelection = document.querySelector("#permanent-city");

generateProvinces = () => {
    for (let prop in provinces) {
        if (Object.prototype.hasOwnProperty.call(provinces, prop)){
            let newOpt = document.createElement('option');
            newOpt.textContent = prop;
            newOpt.value = nameConverter(prop);
            const clone = newOpt.cloneNode(true);
            provinceSelection.appendChild(newOpt);
            permProvinceSelection.appendChild(clone);
        }
    }
}

generateCities = (province) => {
    removeOptions(citySelection);
    let value = nameReverter(province.value);
    if (value in provinces) {
        provinces[value].forEach((city) => {
            let newOpt = document.createElement('option');
            newOpt.textContent = city;
            newOpt.value = nameConverter(city);
            citySelection.appendChild(newOpt);
            }
        )
    }
}

generatePermCities = (province) => {
    removeOptions(permCitySelection);
    let value = nameReverter(province.value);
    if (value in provinces) {
        provinces[value].forEach((city) => {
            let newOpt = document.createElement('option');
            newOpt.textContent = city;
            newOpt.value = nameConverter(city);
            permCitySelection.appendChild(newOpt);
            }
        )
    }
}

generateCountries = () => {
    countries.forEach(country => {
        let newOpt = document.createElement('option');
        newOpt.textContent = country;
        newOpt.value = country;
        const clone = newOpt.cloneNode(true);
        countrySelection.appendChild(newOpt);
        permCountrySelection.appendChild(clone);
    })
}

//To retain the naming convention in value attribute
nameConverter = (name) => {
    name = name.toLowerCase().replaceAll(' ', '-');
    return name;
}

//To revert naming convention to fit into the province keys
nameReverter = (name) => {
    let words = name.split("-");
    words.forEach((word, index, array) => {
         array[index] = word.charAt(0).toUpperCase() + word.slice(1);
    })
    return words.join(" ");
}

generateCountries();
generateProvinces();

provinceSelection.addEventListener('change', () => generateCities(provinceSelection));
permProvinceSelection.addEventListener('change', () => generatePermCities(permProvinceSelection));

let event = new Event('change');
provinceSelection.dispatchEvent(event);
permProvinceSelection.dispatchEvent(event);

function removeOptions(selection) {
    var i, L = selection.options.length - 1;
    for(i = L; i >= 0; i--) {
       selection.remove(i);
    }
 }
 


 //Input Validations
 const firstName = document.querySelector("#first-name");
 const middleName = document.querySelector("#middle-name");
 const familyName = document.querySelector("#family-name");
 const phoneNum = document.querySelector("#phone-num");
 const email = document.querySelector("#email");
 const birthday = document.querySelector("#birthday");
 const inputBoxes = [firstName, middleName, familyName, phoneNum, email, birthday] ;
 const nameBoxes = [firstName, middleName, familyName]; 

const checkEmptyValid = (elem) => {
	return elem.value.trim().length === 0;
}

const checkNameLength = (elem) => {
	return elem.value.trim().length <= 50; 
}

const containsNaN = (elem) => {
	return /^\d+$/.test(elem.value.trim());
}

const containsAt = (elem) => {
	return elem.value.trim().includes('@');
}
 
const validateInputs = () => {
	nameBoxes.forEach(elem => {
		if (checkEmptyValid(elem)) {
			setError(elem, 'Must not be empty')
		} else if (!checkNameLength(elem)) {
			setError(elem, 'Must be less than 51 characters')
		} else {
			setSuccess(elem, 'Valid Input')
		}
	})

	if (checkEmptyValid(phoneNum)) {
		setError(phoneNum, 'Must not be empty')
	} else if (!containsNaN(phoneNum)) {
		setError(phoneNum, 'Only numbers are allowed');
	} else {
		setSuccess(phoneNum, 'Valid Input')
	}

	if (checkEmptyValid(email)) {
		setError(email, 'Must not be empty')
	} else if (!containsAt(email)) {
		setError(email, 'Must contain @ symbol');
	} else {
		setSuccess(email, 'Valid Input')
	}
}

const setError = (element, message) => {
	const inputContainer = element.parentElement;
	const errorDisplay = inputContainer.querySelector('.error-con');

	errorDisplay.textContent = message;
	errorDisplay.classList.add('error');
	errorDisplay.classList.remove('success');
}

const setSuccess = (element, message) => {
	const inputContainer = element.parentElement;
	const errorDisplay = inputContainer.querySelector('.error-con');

	errorDisplay.textContent = message;
	errorDisplay.classList.add('success');
	errorDisplay.classList.remove('error');
}



inputBoxes.forEach((elem) => {
	elem.addEventListener('focusout', () => {
		validateInputs();
	})
})