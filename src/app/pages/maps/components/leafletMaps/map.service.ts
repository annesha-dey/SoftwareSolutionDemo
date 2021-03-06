import {Injectable} from '@angular/core';

@Injectable()
export class MapsService {

  LocData = [
    {
      "name":"Walney Island",
      "city":"Barrow Island, United Kingdom",
      "iata_faa":"BWF",
      "icao":"EGNL",
      "lat":54.131167,
      "lng":-3.263667,
      "alt":173,
      "tz":"Europe/London"
    },{
      "name":"Leeds Bradford",
      "city":"Leeds, United Kingdom",
      "iata_faa":"LBA",
      "icao":"EGNM",
      "lat":53.865897,
      "lng":-1.660569,
      "alt":681,
      "tz":"Europe/London"
    },{
      "name":"Warton",
      "city":"Warton, United Kingdom",
      "icao":"EGNO",
      "lat":53.745097,
      "lng":-2.883061,
      "alt":55,
      "tz":"Europe/London"
    },{
      "name":"Hawarden",
      "city":"Hawarden, United Kingdom",
      "iata_faa":"CEG",
      "icao":"EGNR",
      "lat":53.178056,
      "lng":-2.977778,
      "alt":45,
      "tz":"Europe/London"
    },{
      "name":"Isle Of Man",
      "city":"Isle Of Man, Isle of Man",
      "iata_faa":"IOM",
      "icao":"EGNS",
      "lat":54.083333,
      "lng":-4.623889,
      "alt":52,
      "tz":"Europe/Isle_of_Man"
    },{
      "name":"Newcastle",
      "city":"Newcastle, United Kingdom",
      "iata_faa":"NCL",
      "icao":"EGNT",
      "lat":55.0375,
      "lng":-1.691667,
      "alt":266,
      "tz":"Europe/London"
    },{
      "name":"Durham Tees Valley Airport",
      "city":"Teesside, United Kingdom",
      "iata_faa":"MME",
      "icao":"EGNV",
      "lat":54.509189,
      "lng":-1.429406,
      "alt":120,
      "tz":"Europe/London"
    },{
      "name":"Nottingham East Midlands",
      "city":"East Midlands, United Kingdom",
      "iata_faa":"EMA",
      "icao":"EGNX",
      "lat":52.831111,
      "lng":-1.328056,
      "alt":306,
      "tz":"Europe/London"
    },{
      "name":"Llanbedr",
      "city":"Llanbedr, United Kingdom",
      "icao":"EGOD",
      "lat":52.811744,
      "lng":-4.123575,
      "alt":30,
      "tz":"Europe/London"
    },{
      "name":"Ternhill",
      "city":"Ternhill, United Kingdom",
      "icao":"EGOE",
      "lat":52.871164,
      "lng":-2.533561,
      "alt":272,
      "tz":"Europe/London"
    },{
      "name":"Shawbury",
      "city":"Shawbury, United Kingdom",
      "icao":"EGOS",
      "lat":52.798169,
      "lng":-2.668042,
      "alt":249,
      "tz":"Europe/London"
    },{
      "name":"Woodvale",
      "city":"Woodvale, United Kingdom",
      "icao":"EGOW",
      "lat":53.581575,
      "lng":-3.055522,
      "alt":37,
      "tz":"Europe/London"
    },{
      "name":"Kirkwall",
      "city":"Kirkwall, United Kingdom",
      "iata_faa":"KOI",
      "icao":"EGPA",
      "lat":58.957778,
      "lng":-2.905,
      "alt":50,
      "tz":"Europe/London"
    },{
      "name":"Sumburgh",
      "city":"Sumburgh, United Kingdom",
      "iata_faa":"LSI",
      "icao":"EGPB",
      "lat":59.878889,
      "lng":-1.295556,
      "alt":20,
      "tz":"Europe/London"
    },{
      "name":"Wick",
      "city":"Wick, United Kingdom",
      "iata_faa":"WIC",
      "icao":"EGPC",
      "lat":58.458889,
      "lng":-3.093056,
      "alt":126,
      "tz":"Europe/London"
    },{
      "name":"Dyce",
      "city":"Aberdeen, United Kingdom",
      "iata_faa":"ABZ",
      "icao":"EGPD",
      "lat":57.201944,
      "lng":-2.197778,
      "alt":215,
      "tz":"Europe/London"
    },{
      "name":"Inverness",
      "city":"Inverness, United Kingdom",
      "iata_faa":"INV",
      "icao":"EGPE",
      "lat":57.5425,
      "lng":-4.0475,
      "alt":31,
      "tz":"Europe/London"
    },{
      "name":"Glasgow",
      "city":"Glasgow, United Kingdom",
      "iata_faa":"GLA",
      "icao":"EGPF",
      "lat":55.871944,
      "lng":-4.433056,
      "alt":26,
      "tz":"Europe/London"
    },{
      "name":"Edinburgh",
      "city":"Edinburgh, United Kingdom",
      "iata_faa":"EDI",
      "icao":"EGPH",
      "lat":55.95,
      "lng":-3.3725,
      "alt":135,
      "tz":"Europe/London"
    },{
      "name":"Islay",
      "city":"Islay, United Kingdom",
      "iata_faa":"ILY",
      "icao":"EGPI",
      "lat":55.681944,
      "lng":-6.256667,
      "alt":56,
      "tz":"Europe/London"
    },{
      "name":"Prestwick",
      "city":"Prestwick, United Kingdom",
      "iata_faa":"PIK",
      "icao":"EGPK",
      "lat":55.509444,
      "lng":-4.586667,
      "alt":65,
      "tz":"Europe/London"
    },{
      "name":"Benbecula",
      "city":"Benbecula, United Kingdom",
      "iata_faa":"BEB",
      "icao":"EGPL",
      "lat":57.481111,
      "lng":-7.362778,
      "alt":19,
      "tz":"Europe/London"
    },{
      "name":"Scatsta",
      "city":"Scatsta, United Kingdom",
      "iata_faa":"SDZ",
      "icao":"EGPM",
      "lat":60.432778,
      "lng":-1.296111,
      "alt":81,
      "tz":"Europe/London"
    },{
      "name":"Dundee",
      "city":"Dundee, United Kingdom",
      "iata_faa":"DND",
      "icao":"EGPN",
      "lat":56.452499,
      "lng":-3.025833,
      "alt":17,
      "tz":"Europe/London"
    },{
      "name":"Stornoway",
      "city":"Stornoway, United Kingdom",
      "iata_faa":"SYY",
      "icao":"EGPO",
      "lat":58.215556,
      "lng":-6.331111,
      "alt":26,
      "tz":"Europe/London"
    },{
      "name":"Tiree",
      "city":"Tiree, United Kingdom",
      "iata_faa":"TRE",
      "icao":"EGPU",
      "lat":56.499167,
      "lng":-6.869167,
      "alt":38,
      "tz":"Europe/London"
    },{
      "name":"Leuchars",
      "city":"Leuchars, United Kingdom",
      "iata_faa":"ADX",
      "icao":"EGQL",
      "lat":56.372889,
      "lng":-2.868444,
      "alt":38,
      "tz":"Europe/London"
    },{
      "name":"Lossiemouth",
      "city":"Lossiemouth, United Kingdom",
      "iata_faa":"LMO",
      "icao":"EGQS",
      "lat":57.705214,
      "lng":-3.339169,
      "alt":42,
      "tz":"Europe/London"
    },{
      "name":"Cambridge",
      "city":"Cambridge, United Kingdom",
      "iata_faa":"CBG",
      "icao":"EGSC",
      "lat":52.205,
      "lng":0.175,
      "alt":47,
      "tz":"Europe/London"
    },{
      "name":"Conington",
      "city":"Peterborough, United Kingdom",
      "icao":"EGSF",
      "lat":52.468056,
      "lng":-0.251111,
      "alt":26,
      "tz":"Europe/London"
    },{
      "name":"Norwich",
      "city":"Norwich, United Kingdom",
      "iata_faa":"NWI",
      "icao":"EGSH",
      "lat":52.675833,
      "lng":1.282778,
      "alt":117,
      "tz":"Europe/London"
    },{
      "name":"Stansted",
      "city":"London, United Kingdom",
      "iata_faa":"STN",
      "icao":"EGSS",
      "lat":51.885,
      "lng":0.235,
      "alt":348,
      "tz":"Europe/London"
    },{
      "name":"North Weald",
      "city":"North Weald, United Kingdom",
      "icao":"EGSX",
      "lat":51.721667,
      "lng":0.154167,
      "alt":321,
      "tz":"Europe/London"
    },{
      "name":"Sheffield City",
      "city":"Fowlmere, United Kingdom",
      "icao":"EGSY",
      "lat":53.394256,
      "lng":-1.388486,
      "alt":231,
      "tz":"Europe/London"
    },{
      "name":"Cranfield",
      "city":"Cranfield, United Kingdom",
      "icao":"EGTC",
      "lat":52.072222,
      "lng":-0.616667,
      "alt":358,
      "tz":"Europe/London"
    },{
      "name":"Exeter",
      "city":"Exeter, United Kingdom",
      "iata_faa":"EXT",
      "icao":"EGTE",
      "lat":50.734444,
      "lng":-3.413889,
      "alt":102,
      "tz":"Europe/London"
    },{
      "name":"Bristol Filton",
      "city":"Bristol, United Kingdom",
      "iata_faa":"FZO",
      "icao":"EGTG",
      "lat":51.519444,
      "lng":-2.590833,
      "alt":226,
      "tz":"Europe/London"
    },{
      "name":"Kidlington",
      "city":"Oxford, United Kingdom",
      "iata_faa":"OXF",
      "icao":"EGTK",
      "lat":51.836944,
      "lng":-1.32,
      "alt":270,
      "tz":"Europe/London"
    },{
      "name":"Benson",
      "city":"Benson, United Kingdom",
      "icao":"EGUB",
      "lat":51.616389,
      "lng":-1.095833,
      "alt":226,
      "tz":"Europe/London"
    },{
      "name":"Lakenheath",
      "city":"Lakenheath, United Kingdom",
      "icao":"EGUL",
      "lat":52.409333,
      "lng":0.561,
      "alt":32,
      "tz":"Europe/London"
    },{
      "name":"Mildenhall",
      "city":"Mildenhall, United Kingdom",
      "iata_faa":"MHZ",
      "icao":"EGUN",
      "lat":52.361933,
      "lng":0.486406,
      "alt":33,
      "tz":"Europe/London"
    },{
      "name":"Wattisham",
      "city":"Wattisham, United Kingdom",
      "icao":"EGUW",
      "lat":52.127283,
      "lng":0.956264,
      "alt":284,
      "tz":"Europe/London"
    },{
      "name":"Wyton",
      "city":"Wyton, United Kingdom",
      "icao":"EGUY",
      "lat":52.357167,
      "lng":-0.107833,
      "alt":135,
      "tz":"Europe/London"
    },{
      "name":"Fairford",
      "city":"Fairford, United Kingdom",
      "iata_faa":"FFD",
      "icao":"EGVA",
      "lat":51.682167,
      "lng":-1.790028,
      "alt":286,
      "tz":"Europe/London"
    },{
      "name":"Brize Norton",
      "city":"Brize Norton, United Kingdom",
      "iata_faa":"BZZ",
      "icao":"EGVN",
      "lat":51.749964,
      "lng":-1.583617,
      "alt":288,
      "tz":"Europe/London"
    },{
      "name":"Odiham",
      "city":"Odiham, United Kingdom",
      "iata_faa":"ODH",
      "icao":"EGVO",
      "lat":51.234139,
      "lng":-0.942825,
      "alt":405,
      "tz":"Europe/London"
    },{
      "name":"Cosford",
      "city":"Cosford, United Kingdom",
      "icao":"EGWC",
      "lat":52.640028,
      "lng":-2.305578,
      "alt":272,
      "tz":"Europe/London"
    },{
      "name":"Northolt",
      "city":"Northolt, United Kingdom",
      "iata_faa":"NHT",
      "icao":"EGWU",
      "lat":51.553,
      "lng":-0.418167,
      "alt":124,
      "tz":"Europe/London"
    },{
      "name":"Coningsby",
      "city":"Coningsby, United Kingdom",
      "iata_faa":"QCY",
      "icao":"EGXC",
      "lat":53.093014,
      "lng":-0.166014,
      "alt":25,
      "tz":"Europe/London"
    },{
      "name":"Dishforth",
      "city":"Dishforth, United Kingdom",
      "icao":"EGXD",
      "lat":54.137186,
      "lng":-1.420253,
      "alt":117,
      "tz":"Europe/London"
    },{
      "name":"Leeming",
      "city":"Leeming, United Kingdom",
      "icao":"EGXE",
      "lat":54.292383,
      "lng":-1.5354,
      "alt":132,
      "tz":"Europe/London"
    },{
      "name":"Church Fenton",
      "city":"Church Fenton, United Kingdom",
      "icao":"EGXG",
      "lat":53.834333,
      "lng":-1.1955,
      "alt":29,
      "tz":"Europe/London"
    },{
      "name":"Honington",
      "city":"Honington, United Kingdom",
      "iata_faa":"BEQ",
      "icao":"EGXH",
      "lat":52.342611,
      "lng":0.772939,
      "alt":174,
      "tz":"Europe/London"
    },{
      "name":"Cottesmore",
      "city":"Cottesmore, United Kingdom",
      "icao":"EGXJ",
      "lat":52.735711,
      "lng":-0.648769,
      "alt":461,
      "tz":"Europe/London"
    },{
      "name":"Scampton",
      "city":"Scampton, United Kingdom",
      "icao":"EGXP",
      "lat":53.307778,
      "lng":-0.550833,
      "alt":202,
      "tz":"Europe/London"
    },{
      "name":"Wittering",
      "city":"Wittering, United Kingdom",
      "icao":"EGXT",
      "lat":52.612558,
      "lng":-0.476453,
      "alt":273,
      "tz":"Europe/London"
    },{
      "name":"Linton On Ouse",
      "city":"Linton-on-ouse, United Kingdom",
      "icao":"EGXU",
      "lat":54.048911,
      "lng":-1.252747,
      "alt":53,
      "tz":"Europe/London"
    },{
      "name":"Waddington",
      "city":"Waddington, United Kingdom",
      "iata_faa":"WTN",
      "icao":"EGXW",
      "lat":53.166167,
      "lng":-0.523811,
      "alt":231,
      "tz":"Europe/London"
    },{
      "name":"Goroka",
      "city":"Goroka, Papua New Guinea",
      "iata_faa":"GKA",
      "icao":"AYGA",
      "lat":-6.081689,
      "lng":145.391881,
      "alt":5282,
      "tz":"Pacific/Port_Moresby"
    },{
      "name":"Madang",
      "city":"Madang, Papua New Guinea",
      "iata_faa":"MAG",
      "icao":"AYMD",
      "lat":-5.207083,
      "lng":145.7887,
      "alt":20,
      "tz":"Pacific/Port_Moresby"
    },{
      "name":"Mount Hagen",
      "city":"Mount Hagen, Papua New Guinea",
      "iata_faa":"HGU",
      "icao":"AYMH",
      "lat":-5.826789,
      "lng":144.295861,
      "alt":5388,
      "tz":"Pacific/Port_Moresby"
    },{
      "name":"Nadzab",
      "city":"Nadzab, Papua New Guinea",
      "iata_faa":"LAE",
      "icao":"AYNZ",
      "lat":-6.569828,
      "lng":146.726242,
      "alt":239,
      "tz":"Pacific/Port_Moresby"
    },{
      "name":"Port Moresby Jacksons Intl",
      "city":"Port Moresby, Papua New Guinea",
      "iata_faa":"POM",
      "icao":"AYPY",
      "lat":-9.443383,
      "lng":147.22005,
      "alt":146,
      "tz":"Pacific/Port_Moresby"
    },{
      "name":"Wewak Intl",
      "city":"Wewak, Papua New Guinea",
      "iata_faa":"WWK",
      "icao":"AYWK",
      "lat":-3.583828,
      "lng":143.669186,
      "alt":19,
      "tz":"Pacific/Port_Moresby"
    },{
      "name":"Narsarsuaq",
      "city":"Narssarssuaq, Greenland",
      "iata_faa":"UAK",
      "icao":"BGBW",
      "lat":61.160517,
      "lng":-45.425978,
      "alt":112,
      "tz":"America/Godthab"
    },{
      "name":"Nuuk",
      "city":"Godthaab, Greenland",
      "iata_faa":"GOH",
      "icao":"BGGH",
      "lat":64.190922,
      "lng":-51.678064,
      "alt":283,
      "tz":"America/Godthab"
    },{
      "name":"Sondre Stromfjord",
      "city":"Sondrestrom, Greenland",
      "iata_faa":"SFJ",
      "icao":"BGSF",
      "lat":67.016969,
      "lng":-50.689325,
      "alt":165,
      "tz":"America/Godthab"
    },{
      "name":"Thule Air Base",
      "city":"Thule, Greenland",
      "iata_faa":"THU",
      "icao":"BGTL",
      "lat":76.531203,
      "lng":-68.703161,
      "alt":251,
      "tz":"America/Thule"
    },{
      "name":"Akureyri",
      "city":"Akureyri, Iceland",
      "iata_faa":"AEY",
      "icao":"BIAR",
      "lat":65.659994,
      "lng":-18.072703,
      "alt":6,
      "tz":"Atlantic/Reykjavik"
    },{
      "name":"Egilsstadir",
      "city":"Egilsstadir, Iceland",
      "iata_faa":"EGS",
      "icao":"BIEG",
      "lat":65.283333,
      "lng":-14.401389,
      "alt":76,
      "tz":"Atlantic/Reykjavik"
    },{
      "name":"Hornafjordur",
      "city":"Hofn, Iceland",
      "iata_faa":"HFN",
      "icao":"BIHN",
      "lat":64.295556,
      "lng":-15.227222,
      "alt":24,
      "tz":"Atlantic/Reykjavik"
    },{
      "name":"Husavik",
      "city":"Husavik, Iceland",
      "iata_faa":"HZK",
      "icao":"BIHU",
      "lat":65.952328,
      "lng":-17.425978,
      "alt":48,
      "tz":"Atlantic/Reykjavik"
    },{
      "name":"Isafjordur",
      "city":"Isafjordur, Iceland",
      "iata_faa":"IFJ",
      "icao":"BIIS",
      "lat":66.058056,
      "lng":-23.135278,
      "alt":8,
      "tz":"Atlantic/Reykjavik"
    },{
      "name":"Keflavik International Airport",
      "city":"Keflavik, Iceland",
      "iata_faa":"KEF",
      "icao":"BIKF",
      "lat":63.985,
      "lng":-22.605556,
      "alt":171,
      "tz":"Atlantic/Reykjavik"
    },{
      "name":"Patreksfjordur",
      "city":"Patreksfjordur, Iceland",
      "iata_faa":"PFJ",
      "icao":"BIPA",
      "lat":65.555833,
      "lng":-23.965,
      "alt":11,
      "tz":"Atlantic/Reykjavik"
    },{
      "name":"Reykjavik",
      "city":"Reykjavik, Iceland",
      "iata_faa":"RKV",
      "icao":"BIRK",
      "lat":64.13,
      "lng":-21.940556,
      "alt":48,
      "tz":"Atlantic/Reykjavik"
    },{
      "name":"Siglufjordur",
      "city":"Siglufjordur, Iceland",
      "iata_faa":"SIJ",
      "icao":"BISI",
      "lat":66.133333,
      "lng":-18.916667,
      "alt":10,
      "tz":"Atlantic/Reykjavik"
    },{
      "name":"Vestmannaeyjar",
      "city":"Vestmannaeyjar, Iceland",
      "iata_faa":"VEY",
      "icao":"BIVM",
      "lat":63.424303,
      "lng":-20.278875,
      "alt":326,
      "tz":"Atlantic/Reykjavik"
    },{
      "name":"Sault Ste Marie",
      "city":"Sault Sainte Marie, Canada",
      "iata_faa":"YAM",
      "icao":"CYAM",
      "lat":46.485001,
      "lng":-84.509445,
      "alt":630,
      "tz":"America/Toronto"
    },{
      "name":"Winnipeg St Andrews",
      "city":"Winnipeg, Canada",
      "iata_faa":"YAV",
      "icao":"CYAV",
      "lat":50.056389,
      "lng":-97.0325,
      "alt":760,
      "tz":"America/Winnipeg"
    },{
      "name":"Shearwater",
      "city":"Halifax, Canada",
      "iata_faa":"YAW",
      "icao":"CYAW",
      "lat":44.639721,
      "lng":-63.499444,
      "alt":167,
      "tz":"America/Halifax"
    },{
      "name":"St Anthony",
      "city":"St. Anthony, Canada",
      "iata_faa":"YAY",
      "icao":"CYAY",
      "lat":51.391944,
      "lng":-56.083056,
      "alt":108,
      "tz":"America/St_Johns"
    },{
      "name":"Tofino",
      "city":"Tofino, Canada",
      "iata_faa":"YAZ",
      "icao":"CYAZ",
      "lat":49.082222,
      "lng":-125.7725,
      "alt":80,
      "tz":"America/Vancouver"
    },{
      "name":"Kugaaruk",
      "city":"Pelly Bay, Canada",
      "iata_faa":"YBB",
      "icao":"CYBB",
      "lat":68.534444,
      "lng":-89.808056,
      "alt":56,
      "tz":"America/Edmonton"
    },{
      "name":"Baie Comeau",
      "city":"Baie Comeau, Canada",
      "iata_faa":"YBC",
      "icao":"CYBC",
      "lat":49.1325,
      "lng":-68.204444,
      "alt":71,
      "tz":"America/Toronto"
    },{
      "name":"Bagotville",
      "city":"Bagotville, Canada",
      "iata_faa":"YBG",
      "icao":"CYBG",
      "lat":48.330555,
      "lng":-70.996391,
      "alt":522,
      "tz":"America/Toronto"
    },{
      "name":"Baker Lake",
      "city":"Baker Lake, Canada",
      "iata_faa":"YBK",
      "icao":"CYBK",
      "lat":64.298889,
      "lng":-96.077778,
      "alt":59,
      "tz":"America/Winnipeg"
    },{
      "name":"Campbell River",
      "city":"Campbell River, Canada",
      "iata_faa":"YBL",
      "icao":"CYBL",
      "lat":49.950832,
      "lng":-125.270833,
      "alt":346,
      "tz":"America/Vancouver"
    },{
      "name":"Brandon Muni",
      "city":"Brandon, Canada",
      "iata_faa":"YBR",
      "icao":"CYBR",
      "lat":49.91,
      "lng":-99.951944,
      "alt":1343,
      "tz":"America/Winnipeg"
    },{
      "name":"Cambridge Bay",
      "city":"Cambridge Bay, Canada",
      "iata_faa":"YCB",
      "icao":"CYCB",
      "lat":69.108055,
      "lng":-105.138333,
      "alt":90,
      "tz":"America/Edmonton"
    },{
      "name":"Nanaimo",
      "city":"Nanaimo, Canada",
      "iata_faa":"YCD",
      "icao":"CYCD",
      "lat":49.052333,
      "lng":-123.870167,
      "alt":93,
      "tz":"America/Vancouver"
    },{
      "name":"Castlegar",
      "city":"Castlegar, Canada",
      "iata_faa":"YCG",
      "icao":"CYCG",
      "lat":49.296389,
      "lng":-117.6325,
      "alt":1624,
      "tz":"America/Vancouver"
    },{
      "name":"Miramichi",
      "city":"Chatham, Canada",
      "iata_faa":"YCH",
      "icao":"CYCH",
      "lat":47.007778,
      "lng":-65.449167,
      "alt":108,
      "tz":"America/Halifax"
    },{
      "name":"Charlo",
      "city":"Charlo, Canada",
      "iata_faa":"YCL",
      "icao":"CYCL",
      "lat":47.990833,
      "lng":-66.330278,
      "alt":132,
      "tz":"America/Halifax"
    },{
      "name":"Kugluktuk",
      "city":"Coppermine, Canada",
      "iata_faa":"YCO",
      "icao":"CYCO",
      "lat":67.816667,
      "lng":-115.143889,
      "alt":74,
      "tz":"America/Edmonton"
    },{
      "name":"Coronation",
      "city":"Coronation, Canada",
      "iata_faa":"YCT",
      "icao":"CYCT",
      "lat":52.075001,
      "lng":-111.445278,
      "alt":2595,
      "tz":"America/Edmonton"
    },{
      "name":"Chilliwack",
      "city":"Chilliwack, Canada",
      "iata_faa":"YCW",
      "icao":"CYCW",
      "lat":49.152779,
      "lng":-121.93889,
      "alt":32,
      "tz":"America/Vancouver"
    },{
      "name":"Clyde River",
      "city":"Clyde River, Canada",
      "iata_faa":"YCY",
      "icao":"CYCY",
      "lat":70.486111,
      "lng":-68.516667,
      "alt":87,
      "tz":"America/Toronto"
    },{
      "name":"Fairmont Hot Springs",
      "city":"Coral Harbour, Canada",
      "iata_faa":"YZS",
      "icao":"CYCZ",
      "lat":64.193333,
      "lng":-83.359444,
      "alt":2661,
      "tz":"America/Coral_Harbour"
    },{
      "name":"Dawson City",
      "city":"Dawson, Canada",
      "iata_faa":"YDA",
      "icao":"CYDA",
      "lat":64.043056,
      "lng":-139.127778,
      "alt":1215,
      "tz":"America/Vancouver"
    },{
      "name":"Burwash",
      "city":"Burwash, Canada",
      "iata_faa":"YDB",
      "icao":"CYDB",
      "lat":61.371111,
      "lng":-139.040556,
      "alt":2647,
      "tz":"America/Vancouver"
    },{
      "name":"Princeton",
      "city":"Princeton, Canada",
      "iata_faa":"YDC",
      "icao":"CYDC",
      "lat":49.468056,
      "lng":-120.511389,
      "alt":2298,
      "tz":"America/Vancouver"
    },{
      "name":"Deer Lake",
      "city":"Deer Lake, Canada",
      "iata_faa":"YDF",
      "icao":"CYDF",
      "lat":49.210833,
      "lng":-57.391388,
      "alt":72,
      "tz":"America/St_Johns"
    },{
      "name":"Dease Lake",
      "city":"Dease Lake, Canada",
      "iata_faa":"YDL",
      "icao":"CYDL",
      "lat":58.422222,
      "lng":-130.032222,
      "alt":2600,
      "tz":"America/Vancouver"
    },{
      "name":"Dauphin Barker",
      "city":"Dauphin, Canada",
      "iata_faa":"YDN",
      "icao":"CYDN",
      "lat":51.100834,
      "lng":-100.0525,
      "alt":999,
      "tz":"America/Winnipeg"
    },{
      "name":"Dawson Creek",
      "city":"Dawson Creek, Canada",
      "iata_faa":"YDQ",
      "icao":"CYDQ",
      "lat":55.742333,
      "lng":-120.183,
      "alt":2148,
      "tz":"America/Dawson_Creek"
    },{
      "name":"Edmonton Intl",
      "city":"Edmonton, Canada",
      "iata_faa":"YEG",
      "icao":"CYEG",
      "lat":53.309723,
      "lng":-113.579722,
      "alt":2373,
      "tz":"America/Edmonton"
    },{
      "name":"Arviat",
      "city":"Eskimo Point, Canada",
      "iata_faa":"YEK",
      "icao":"CYEK",
      "lat":61.094166,
      "lng":-94.070833,
      "alt":32,
      "tz":"America/Winnipeg"
    },{
      "name":"Estevan",
      "city":"Estevan, Canada",
      "iata_faa":"YEN",
      "icao":"CYEN",
      "lat":49.210278,
      "lng":-102.965833,
      "alt":1905,
      "tz":"America/Regina"
    },{
      "name":"Edson",
      "city":"Edson, Canada",
      "iata_faa":"YET",
      "icao":"CYET",
      "lat":53.578888,
      "lng":-116.465,
      "alt":3041,
      "tz":"America/Edmonton"
    },{
      "name":"Eureka",
      "city":"Eureka, Canada",
      "iata_faa":"YEU",
      "icao":"CYEU",
      "lat":79.994722,
      "lng":-85.814167,
      "alt":256,
      "tz":"America/Winnipeg"
    },{
      "name":"Inuvik Mike Zubko",
      "city":"Inuvik, Canada",
      "iata_faa":"YEV",
      "icao":"CYEV",
      "lat":68.304167,
      "lng":-133.482778,
      "alt":224,
      "tz":"America/Edmonton"
    },{
      "name":"Iqaluit",
      "city":"Iqaluit, Canada",
      "iata_faa":"YFB",
      "icao":"CYFB",
      "lat":63.75639,
      "lng":-68.555832,
      "alt":110,
      "tz":"America/Toronto"
    },{
      "name":"Fredericton",
      "city":"Fredericton, Canada",
      "iata_faa":"YFC",
      "icao":"CYFC",
      "lat":45.868889,
      "lng":-66.537222,
      "alt":68,
      "tz":"America/Halifax"
    },{
      "name":"Forestville",
      "city":"Forestville, Canada",
      "icao":"CYFE",
      "lat":48.746111,
      "lng":-69.097222,
      "alt":293,
      "tz":"America/Toronto"
    },{
      "name":"Flin Flon",
      "city":"Flin Flon, Canada",
      "iata_faa":"YFO",
      "icao":"CYFO",
      "lat":54.678055,
      "lng":-101.681667,
      "alt":997,
      "tz":"America/Winnipeg"
    },{
      "name":"Fort Resolution",
      "city":"Fort Resolution, Canada",
      "iata_faa":"YFR",
      "icao":"CYFR",
      "lat":61.180832,
      "lng":-113.689722,
      "alt":526,
      "tz":"America/Edmonton"
    },{
      "name":"Fort Simpson",
      "city":"Fort Simpson, Canada",
      "iata_faa":"YFS",
      "icao":"CYFS",
      "lat":61.760153,
      "lng":-121.236525,
      "alt":555,
      "tz":"America/Edmonton"
    },{
      "name":"Kingston",
      "city":"Kingston, Canada",
      "iata_faa":"YGK",
      "icao":"CYGK",
      "lat":44.225277,
      "lng":-76.596944,
      "alt":305,
      "tz":"America/Toronto"
    },{
      "name":"La Grande Riviere",
      "city":"La Grande Riviere, Canada",
      "iata_faa":"YGL",
      "icao":"CYGL",
      "lat":53.625278,
      "lng":-77.704167,
      "alt":639,
      "tz":"America/Toronto"
    },{
      "name":"Gaspe",
      "city":"Gaspe, Canada",
      "iata_faa":"YGP",
      "icao":"CYGP",
      "lat":48.775278,
      "lng":-64.478611,
      "alt":108,
      "tz":"America/Toronto"
    },{
      "name":"Geraldton Greenstone Regional",
      "city":"Geraldton, Canada",
      "iata_faa":"YGQ",
      "icao":"CYGQ",
      "lat":49.778332,
      "lng":-86.939445,
      "alt":1144,
      "tz":"America/Toronto"
    },{
      "name":"Iles De La Madeleine",
      "city":"Iles De La Madeleine, Canada",
      "iata_faa":"YGR",
      "icao":"CYGR",
      "lat":47.424721,
      "lng":-61.778056,
      "alt":35,
      "tz":"America/Toronto"
    },{
      "name":"Hudson Bay",
      "city":"Hudson Bay, Canada",
      "iata_faa":"YHB",
      "icao":"CYHB",
      "lat":52.816666,
      "lng":-102.31139,
      "alt":1175,
      "tz":"America/Regina"
    },{
      "name":"Dryden Rgnl",
      "city":"Dryden, Canada",
      "iata_faa":"YHD",
      "icao":"CYHD",
      "lat":49.831667,
      "lng":-92.744167,
      "alt":1354,
      "tz":"America/Winnipeg"
    },{
      "name":"Ulukhaktok Holman",
      "city":"Holman Island, Canada",
      "iata_faa":"YHI",
      "icao":"CYHI",
      "lat":70.762778,
      "lng":-117.806111,
      "alt":117,
      "tz":"America/Edmonton"
    },{
      "name":"Gjoa Haven",
      "city":"Gjoa Haven, Canada",
      "iata_faa":"YHK",
      "icao":"CYHK",
      "lat":68.635556,
      "lng":-95.849722,
      "alt":152,
      "tz":"America/Edmonton"
    },{
      "name":"Hamilton",
      "city":"Hamilton, Canada",
      "iata_faa":"YHM",
      "icao":"CYHM",
      "lat":43.173611,
      "lng":-79.935,
      "alt":780,
      "tz":"America/Toronto"
    },{
      "name":"St Hubert",
      "city":"Montreal, Canada",
      "iata_faa":"YHU",
      "icao":"CYHU",
      "lat":45.5175,
      "lng":-73.416944,
      "alt":90,
      "tz":"America/Toronto"
    },{
      "name":"Hay River",
      "city":"Hay River, Canada",
      "iata_faa":"YHY",
      "icao":"CYHY",
      "lat":60.839722,
      "lng":-115.782778,
      "alt":543,
      "tz":"America/Edmonton"
    },{
      "name":"Halifax Intl",
      "city":"Halifax, Canada",
      "iata_faa":"YHZ",
      "icao":"CYHZ",
      "lat":44.880833,
      "lng":-63.50861,
      "alt":477,
      "tz":"America/Halifax"
    },{
      "name":"Atikokan Muni",
      "city":"Atikokan, Canada",
      "iata_faa":"YIB",
      "icao":"CYIB",
      "lat":48.773888,
      "lng":-91.638611,
      "alt":1408,
      "tz":"America/Coral_Harbour"
    },{
      "name":"Pond Inlet",
      "city":"Pond Inlet, Canada",
      "iata_faa":"YIO",
      "icao":"CYIO",
      "lat":72.683334,
      "lng":-77.966667,
      "alt":181,
      "tz":"America/Toronto"
    },{
      "name":"St Jean",
      "city":"St. Jean, Canada",
      "iata_faa":"YJN",
      "icao":"CYJN",
      "lat":45.294445,
      "lng":-73.281111,
      "alt":136,
      "tz":"America/Toronto"
    },{
      "name":"Stephenville",
      "city":"Stephenville, Canada",
      "iata_faa":"YJT",
      "icao":"CYJT",
      "lat":48.544167,
      "lng":-58.549999,
      "alt":80,
      "tz":"America/St_Johns"
    },{
      "name":"Kamloops",
      "city":"Kamloops, Canada",
      "iata_faa":"YKA",
      "icao":"CYKA",
      "lat":50.702222,
      "lng":-120.444444,
      "alt":1133,
      "tz":"America/Vancouver"
    },{
      "name":"Waterloo",
      "city":"Waterloo, Canada",
      "iata_faa":"YKF",
      "icao":"CYKF",
      "lat":43.460833,
      "lng":-80.378611,
      "alt":1054,
      "tz":"America/Toronto"
    },{
      "name":"Schefferville",
      "city":"Schefferville, Canada",
      "iata_faa":"YKL",
      "icao":"CYKL",
      "lat":54.805278,
      "lng":-66.805278,
      "alt":1709,
      "tz":"America/Toronto"
    },{
      "name":"Kindersley",
      "city":"Kindersley, Canada",
      "iata_faa":"YKY",
      "icao":"CYKY",
      "lat":51.5175,
      "lng":-109.180833,
      "alt":2277,
      "tz":"America/Regina"
    },{
      "name":"Buttonville Muni",
      "city":"Toronto, Canada",
      "iata_faa":"YKZ",
      "icao":"CYKZ",
      "lat":43.862221,
      "lng":-79.37,
      "alt":650,
      "tz":"America/Toronto"
    },{
      "name":"Chapleau",
      "city":"Chapleau, Canada",
      "iata_faa":"YLD",
      "icao":"CYLD",
      "lat":47.82,
      "lng":-83.346667,
      "alt":1470,
      "tz":"America/Toronto"
    },{
      "name":"Meadow Lake",
      "city":"Meadow Lake, Canada",
      "iata_faa":"YLJ",
      "icao":"CYLJ",
      "lat":54.125278,
      "lng":-108.522778,
      "alt":1576,
      "tz":"America/Regina"
    },{
      "name":"Lloydminster",
      "city":"Lloydminster, Canada",
      "iata_faa":"YLL",
      "icao":"CYLL",
      "lat":53.309166,
      "lng":-110.0725,
      "alt":2193,
      "tz":"America/Edmonton"
    },{
      "name":"Alert",
      "city":"Alert, Canada",
      "iata_faa":"YLT",
      "icao":"CYLT",
      "lat":82.517778,
      "lng":-62.280556,
      "alt":100,
      "tz":"America/Toronto"
    },{
      "name":"Kelowna",
      "city":"Kelowna, Canada",
      "iata_faa":"YLW",
      "icao":"CYLW",
      "lat":49.956112,
      "lng":-119.377778,
      "alt":1409,
      "tz":"America/Vancouver"
    },{
      "name":"Mayo",
      "city":"Mayo, Canada",
      "iata_faa":"YMA",
      "icao":"CYMA",
      "lat":63.616389,
      "lng":-135.868333,
      "alt":1653,
      "tz":"America/Vancouver"
    },{
      "name":"Moose Jaw Air Vice Marshal C M Mcewen",
      "city":"Moose Jaw, Canada",
      "iata_faa":"YMJ",
      "icao":"CYMJ",
      "lat":50.330278,
      "lng":-105.559167,
      "alt":1892,
      "tz":"America/Regina"
    },{
      "name":"Fort Mcmurray",
      "city":"Fort Mcmurray, Canada",
      "iata_faa":"YMM",
      "icao":"CYMM",
      "lat":56.653333,
      "lng":-111.221944,
      "alt":1211,
      "tz":"America/Edmonton"
    },{
      "name":"Moosonee",
      "city":"Moosonee, Canada",
      "iata_faa":"YMO",
      "icao":"CYMO",
      "lat":51.291111,
      "lng":-80.607778,
      "alt":30,
      "tz":"America/Toronto"
    },{
      "name":"Maniwaki",
      "city":"Maniwaki, Canada",
      "iata_faa":"YMW",
      "icao":"CYMW",
      "lat":46.272778,
      "lng":-75.990556,
      "alt":656,
      "tz":"America/Toronto"
    },{
      "name":"Montreal Intl Mirabel",
      "city":"Montreal, Canada",
      "iata_faa":"YMX",
      "icao":"CYMX",
      "lat":45.681944,
      "lng":-74.005278,
      "alt":270,
      "tz":"America/Toronto"
    },{
      "name":"Natashquan",
      "city":"Natashquan, Canada",
      "iata_faa":"YNA",
      "icao":"CYNA",
      "lat":50.19,
      "lng":-61.789167,
      "alt":39,
      "tz":"America/Toronto"
    },{
      "name":"Gatineau",
      "city":"Gatineau, Canada",
      "iata_faa":"YND",
      "icao":"CYND",
      "lat":45.521694,
      "lng":-75.563589,
      "alt":211,
      "tz":"America/Toronto"
    },{
      "name":"Matagami",
      "city":"Matagami, Canada",
      "iata_faa":"YNM",
      "icao":"CYNM",
      "lat":49.761667,
      "lng":-77.802778,
      "alt":918,
      "tz":"America/Toronto"
    },{
      "name":"Old Crow",
      "city":"Old Crow, Canada",
      "iata_faa":"YOC",
      "icao":"CYOC",
      "lat":67.570556,
      "lng":-139.839167,
      "alt":824,
      "tz":"America/Vancouver"
    },{
      "name":"Cold Lake",
      "city":"Cold Lake, Canada",
      "iata_faa":"YOD",
      "icao":"CYOD",
      "lat":54.404999,
      "lng":-110.279444,
      "alt":1775,
      "tz":"America/Edmonton"
    },{
      "name":"High Level",
      "city":"High Level, Canada",
      "iata_faa":"YOJ",
      "icao":"CYOJ",
      "lat":58.621389,
      "lng":-117.164722,
      "alt":1110,
      "tz":"America/Edmonton"
    },{
      "name":"Ottawa Macdonald Cartier Intl",
      "city":"Ottawa, Canada",
      "iata_faa":"YOW",
      "icao":"CYOW",
      "lat":45.3225,
      "lng":-75.669167,
      "alt":374,
      "tz":"America/Toronto"
    },{
      "name":"Prince Albert Glass Field",
      "city":"Prince Albert, Canada",
      "iata_faa":"YPA",
      "icao":"CYPA",
      "lat":53.214167,
      "lng":-105.672778,
      "alt":1405,
      "tz":"America/Regina"
    },{
      "name":"Peace River",
      "city":"Peace River, Canada",
      "iata_faa":"YPE",
      "icao":"CYPE",
      "lat":56.226944,
      "lng":-117.447222,
      "alt":1873,
      "tz":"America/Edmonton"
    },{
      "name":"Southport",
      "city":"Portage-la-prairie, Canada",
      "iata_faa":"YPG",
      "icao":"CYPG",
      "lat":49.903056,
      "lng":-98.273889,
      "alt":885,
      "tz":"America/Winnipeg"
    },{
      "name":"Pitt Meadows",
      "city":"Pitt Meadows, Canada",
      "icao":"CYPK",
      "lat":49.21611,
      "lng":-122.71,
      "alt":11,
      "tz":"America/Vancouver"
    },{
      "name":"Pickle Lake",
      "city":"Pickle Lake, Canada",
      "iata_faa":"YPL",
      "icao":"CYPL",
      "lat":51.446388,
      "lng":-90.214167,
      "alt":1267,
      "tz":"America/Coral_Harbour"
    },{
      "name":"Port Menier",
      "city":"Port Menier, Canada",
      "iata_faa":"YPN",
      "icao":"CYPN",
      "lat":49.836389,
      "lng":-64.288611,
      "alt":167,
      "tz":"America/Toronto"
    },{
      "name":"Peterborough",
      "city":"Peterborough, Canada",
      "iata_faa":"YPQ",
      "icao":"CYPQ",
      "lat":44.23,
      "lng":-78.363333,
      "alt":628,
      "tz":"America/Toronto"
    },{
      "name":"Prince Rupert",
      "city":"Prince Pupert, Canada",
      "iata_faa":"YPR",
      "icao":"CYPR",
      "lat":54.28611,
      "lng":-130.444722,
      "alt":116,
      "tz":"America/Vancouver"
    },{
      "name":"Fort Chipewyan",
      "city":"Fort Chipewyan, Canada",
      "iata_faa":"YPY",
      "icao":"CYPY",
      "lat":58.767223,
      "lng":-111.117222,
      "alt":761,
      "tz":"America/Edmonton"
    },{
      "name":"Muskoka",
      "city":"Muskoka, Canada",
      "iata_faa":"YQA",
      "icao":"CYQA",
      "lat":44.974722,
      "lng":-79.303333,
      "alt":925,
      "tz":"America/Toronto"
    },{
      "name":"Quebec Jean Lesage Intl",
      "city":"Quebec, Canada",
      "iata_faa":"YQB",
      "icao":"CYQB",
      "lat":46.791111,
      "lng":-71.393333,
      "alt":244,
      "tz":"America/Toronto"
    },{
      "name":"Red Deer Regional",
      "city":"Red Deer Industrial, Canada",
      "iata_faa":"YQF",
      "icao":"CYQF",
      "lat":52.182222,
      "lng":-113.894444,
      "alt":2968,
      "tz":"America/Edmonton"
    },{
      "name":"Windsor",
      "city":"Windsor, Canada",
      "iata_faa":"YQG",
      "icao":"CYQG",
      "lat":42.275556,
      "lng":-82.955556,
      "alt":622,
      "tz":"America/Toronto"
    },{
      "name":"Watson Lake",
      "city":"Watson Lake, Canada",
      "iata_faa":"YQH",
      "icao":"CYQH",
      "lat":60.116389,
      "lng":-128.8225,
      "alt":2255,
      "tz":"America/Vancouver"
    },{
      "name":"Kenora",
      "city":"Kenora, Canada",
      "iata_faa":"YQK",
      "icao":"CYQK",
      "lat":49.788334,
      "lng":-94.363056,
      "alt":1332,
      "tz":"America/Winnipeg"
    },{
      "name":"Lethbridge",
      "city":"Lethbridge, Canada",
      "iata_faa":"YQL",
      "icao":"CYQL",
      "lat":49.630278,
      "lng":-112.799722,
      "alt":3047,
      "tz":"America/Edmonton"
    },{
      "name":"Greater Moncton Intl",
      "city":"Moncton, Canada",
      "iata_faa":"YQM",
      "icao":"CYQM",
      "lat":46.112221,
      "lng":-64.678611,
      "alt":232,
      "tz":"America/Halifax"
    },{
      "name":"Comox",
      "city":"Comox, Canada",
      "iata_faa":"YQQ",
      "icao":"CYQQ",
      "lat":49.710833,
      "lng":-124.886667,
      "alt":84,
      "tz":"America/Vancouver"
    },{
      "name":"Regina Intl",
      "city":"Regina, Canada",
      "iata_faa":"YQR",
      "icao":"CYQR",
      "lat":50.431944,
      "lng":-104.665833,
      "alt":1894,
      "tz":"America/Regina"
    },{
      "name":"Thunder Bay",
      "city":"Thunder Bay, Canada",
      "iata_faa":"YQT",
      "icao":"CYQT",
      "lat":48.371944,
      "lng":-89.323889,
      "alt":653,
      "tz":"America/Toronto"
    },{
      "name":"Grande Prairie",
      "city":"Grande Prairie, Canada",
      "iata_faa":"YQU",
      "icao":"CYQU",
      "lat":55.179722,
      "lng":-118.885,
      "alt":2195,
      "tz":"America/Edmonton"
    },{
      "name":"Yorkton Muni",
      "city":"Yorkton, Canada",
      "iata_faa":"YQV",
      "icao":"CYQV",
      "lat":51.264721,
      "lng":-102.461667,
      "alt":1635,
      "tz":"America/Regina"
    },{
      "name":"North Battleford",
      "city":"North Battleford, Canada",
      "iata_faa":"YQW",
      "icao":"CYQW",
      "lat":52.769167,
      "lng":-108.24361,
      "alt":1799,
      "tz":"America/Regina"
    },{
      "name":"Gander Intl",
      "city":"Gander, Canada",
      "iata_faa":"YQX",
      "icao":"CYQX",
      "lat":48.936944,
      "lng":-54.568056,
      "alt":496,
      "tz":"America/St_Johns"
    },{
      "name":"Sydney",
      "city":"Sydney, Canada",
      "iata_faa":"YQY",
      "icao":"CYQY",
      "lat":46.161388,
      "lng":-60.047779,
      "alt":203,
      "tz":"America/Halifax"
    },{
      "name":"Quesnel",
      "city":"Quesnel, Canada",
      "iata_faa":"YQZ",
      "icao":"CYQZ",
      "lat":53.026112,
      "lng":-122.510278,
      "alt":1789,
      "tz":"America/Vancouver"
    },{
      "name":"Resolute Bay",
      "city":"Resolute, Canada",
      "iata_faa":"YRB",
      "icao":"CYRB",
      "lat":74.716944,
      "lng":-94.969444,
      "alt":215,
      "tz":"America/Winnipeg"
    },{
      "name":"Riviere Du Loup",
      "city":"Riviere Du Loup, Canada",
      "iata_faa":"YRI",
      "icao":"CYRI",
      "lat":47.764444,
      "lng":-69.584722,
      "alt":427,
      "tz":"America/Toronto"
    },{
      "name":"Roberval",
      "city":"Roberval, Canada",
      "iata_faa":"YRJ",
      "icao":"CYRJ",
      "lat":48.52,
      "lng":-72.265556,
      "alt":586,
      "tz":"America/Toronto"
    },{
      "name":"Rocky Mountain House",
      "city":"Rocky Mountain House, Canada",
      "iata_faa":"YRM",
      "icao":"CYRM",
      "lat":52.429722,
      "lng":-114.904167,
      "alt":3244,
      "tz":"America/Edmonton"
    },{
      "name":"Rankin Inlet",
      "city":"Rankin Inlet, Canada",
      "iata_faa":"YRT",
      "icao":"CYRT",
      "lat":62.81139,
      "lng":-92.115833,
      "alt":94,
      "tz":"America/Winnipeg"
    },{
      "name":"Sudbury",
      "city":"Sudbury, Canada",
      "iata_faa":"YSB",
      "icao":"CYSB",
      "lat":46.625,
      "lng":-80.798889,
      "alt":1141,
      "tz":"America/Toronto"
    },{
      "name":"Sherbrooke",
      "city":"Sherbrooke, Canada",
      "iata_faa":"YSC",
      "icao":"CYSC",
      "lat":45.438611,
      "lng":-71.691389,
      "alt":792,
      "tz":"America/Toronto"
    },{
      "name":"Saint John",
      "city":"St. John, Canada",
      "iata_faa":"YSJ",
      "icao":"CYSJ",
      "lat":45.316111,
      "lng":-65.890278,
      "alt":357,
      "tz":"America/Halifax"
    },{
      "name":"Fort Smith",
      "city":"Fort Smith, Canada",
      "iata_faa":"YSM",
      "icao":"CYSM",
      "lat":60.020278,
      "lng":-111.961944,
      "alt":671,
      "tz":"America/Edmonton"
    },{
      "name":"Nanisivik",
      "city":"Nanisivik, Canada",
      "iata_faa":"YSR",
      "icao":"CYSR",
      "lat":72.982222,
      "lng":-84.613611,
      "alt":2106,
      "tz":"America/Toronto"
    },{
      "name":"Summerside",
      "city":"Summerside, Canada",
      "iata_faa":"YSU",
      "icao":"CYSU",
      "lat":46.440556,
      "lng":-63.833611,
      "alt":56,
      "tz":"America/Halifax"
    },{
      "name":"Sachs Harbour",
      "city":"Sachs Harbour, Canada",
      "iata_faa":"YSY",
      "icao":"CYSY",
      "lat":71.993889,
      "lng":-125.2425,
      "alt":282,
      "tz":"America/Edmonton"
    },{
      "name":"Cape Dorset",
      "city":"Cape Dorset, Canada",
      "iata_faa":"YTE",
      "icao":"CYTE",
      "lat":64.23,
      "lng":-76.526667,
      "alt":164,
      "tz":"America/Toronto"
    },{
      "name":"Thompson",
      "city":"Thompson, Canada",
      "iata_faa":"YTH",
      "icao":"CYTH",
      "lat":55.801111,
      "lng":-97.864166,
      "alt":729,
      "tz":"America/Winnipeg"
    },{
      "name":"Trenton",
      "city":"Trenton, Canada",
      "iata_faa":"YTR",
      "icao":"CYTR",
      "lat":44.118889,
      "lng":-77.528056,
      "alt":283,
      "tz":"America/Toronto"
    },{
      "name":"Timmins",
      "city":"Timmins, Canada",
      "iata_faa":"YTS",
      "icao":"CYTS",
      "lat":48.569721,
      "lng":-81.376667,
      "alt":967,
      "tz":"America/Toronto"
    },{
      "name":"City Centre",
      "city":"Toronto, Canada",
      "iata_faa":"YTZ",
      "icao":"CYTZ",
      "lat":43.627499,
      "lng":-79.396167,
      "alt":251,
      "tz":"America/Toronto"
    },{
      "name":"Tuktoyaktuk",
      "city":"Tuktoyaktuk, Canada",
      "iata_faa":"YUB",
      "icao":"CYUB",
      "lat":69.433334,
      "lng":-133.026389,
      "alt":15,
      "tz":"America/Edmonton"
    },{
      "name":"Pierre Elliott Trudeau Intl",
      "city":"Montreal, Canada",
      "iata_faa":"YUL",
      "icao":"CYUL",
      "lat":45.470556,
      "lng":-73.740833,
      "alt":118,
      "tz":"America/Toronto"
    },{
      "name":"Repulse Bay",
      "city":"Repulse Bay, Canada",
      "iata_faa":"YUT",
      "icao":"CYUT",
      "lat":66.521389,
      "lng":-86.224722,
      "alt":80,
      "tz":"America/Winnipeg"
    },{
      "name":"Hall Beach",
      "city":"Hall Beach, Canada",
      "iata_faa":"YUX",
      "icao":"CYUX",
      "lat":68.776111,
      "lng":-81.243611,
      "alt":27,
      "tz":"America/Toronto"
    },{
      "name":"Rouyn Noranda",
      "city":"Rouyn, Canada",
      "iata_faa":"YUY",
      "icao":"CYUY",
      "lat":48.206111,
      "lng":-78.835556,
      "alt":988,
      "tz":"America/Toronto"
    },{
      "name":"La Ronge",
      "city":"La Ronge, Canada",
      "iata_faa":"YVC",
      "icao":"CYVC",
      "lat":55.15139,
      "lng":-105.261944,
      "alt":1242,
      "tz":"America/Regina"
    },{
      "name":"Vermilion",
      "city":"Vermillion, Canada",
      "iata_faa":"YVG",
      "icao":"CYVG",
      "lat":53.355833,
      "lng":-110.82389,
      "alt":2025,
      "tz":"America/Edmonton"
    },{
      "name":"Qikiqtarjuaq",
      "city":"Broughton Island, Canada",
      "iata_faa":"YVM",
      "icao":"CYVM",
      "lat":67.545833,
      "lng":-64.031389,
      "alt":21,
      "tz":"America/Toronto"
    },{
      "name":"Val D Or",
      "city":"Val D'or, Canada",
      "iata_faa":"YVO",
      "icao":"CYVO",
      "lat":48.053333,
      "lng":-77.782778,
      "alt":1107,
      "tz":"America/Toronto"
    },{
      "name":"Kuujjuaq",
      "city":"Quujjuaq, Canada",
      "iata_faa":"YVP",
      "icao":"CYVP",
      "lat":58.096111,
      "lng":-68.426944,
      "alt":129,
      "tz":"America/Toronto"
    },{
      "name":"Norman Wells",
      "city":"Norman Wells, Canada",
      "iata_faa":"YVQ",
      "icao":"CYVQ",
      "lat":65.281617,
      "lng":-126.798219,
      "alt":238,
      "tz":"America/Edmonton"
    },{
      "name":"Vancouver Intl",
      "city":"Vancouver, Canada",
      "iata_faa":"YVR",
      "icao":"CYVR",
      "lat":49.193889,
      "lng":-123.184444,
      "alt":14,
      "tz":"America/Vancouver"
    },{
      "name":"Buffalo Narrows",
      "city":"Buffalo Narrows, Canada",
      "iata_faa":"YVT",
      "icao":"CYVT",
      "lat":55.841944,
      "lng":-108.4175,
      "alt":1444,
      "tz":"America/Regina"
    },{
      "name":"Wiarton",
      "city":"Wiarton, Canada",
      "iata_faa":"YVV",
      "icao":"CYVV",
      "lat":44.745834,
      "lng":-81.107222,
      "alt":729,
      "tz":"America/Toronto"
    },{
      "name":"Petawawa",
      "city":"Petawawa, Canada",
      "iata_faa":"YWA",
      "icao":"CYWA",
      "lat":45.952221,
      "lng":-77.319168,
      "alt":427,
      "tz":"America/Toronto"
    },{
      "name":"Winnipeg Intl",
      "city":"Winnipeg, Canada",
      "iata_faa":"YWG",
      "icao":"CYWG",
      "lat":49.910036,
      "lng":-97.239886,
      "alt":783,
      "tz":"America/Winnipeg"
    },{
      "name":"Wabush",
      "city":"Wabush, Canada",
      "iata_faa":"YWK",
      "icao":"CYWK",
      "lat":52.921944,
      "lng":-66.864444,
      "alt":1808,
      "tz":"America/Halifax"
    },{
      "name":"Williams Lake",
      "city":"Williams Lake, Canada",
      "iata_faa":"YWL",
      "icao":"CYWL",
      "lat":52.183056,
      "lng":-122.054167,
      "alt":3085,
      "tz":"America/Vancouver"
    },{
      "name":"Wrigley",
      "city":"Wrigley, Canada",
      "iata_faa":"YWY",
      "icao":"CYWY",
      "lat":63.209444,
      "lng":-123.436667,
      "alt":489,
      "tz":"America/Edmonton"
    },{
      "name":"Canadian Rockies Intl",
      "city":"Cranbrook, Canada",
      "iata_faa":"YXC",
      "icao":"CYXC",
      "lat":49.612222,
      "lng":-115.781944,
      "alt":3084,
      "tz":"America/Edmonton"
    },{
      "name":"Edmonton City Centre",
      "city":"Edmonton, Canada",
      "iata_faa":"YXD",
      "icao":"CYXD",
      "lat":53.5725,
      "lng":-113.520556,
      "alt":2200,
      "tz":"America/Edmonton"
    },{
      "name":"Saskatoon J G Diefenbaker Intl",
      "city":"Saskatoon, Canada",
      "iata_faa":"YXE",
      "icao":"CYXE",
      "lat":52.170834,
      "lng":-106.699722,
      "alt":1653,
      "tz":"America/Regina"
    },{
      "name":"Medicine Hat",
      "city":"Medicine Hat, Canada",
      "iata_faa":"YXH",
      "icao":"CYXH",
      "lat":50.01889,
      "lng":-110.720833,
      "alt":2352,
      "tz":"America/Edmonton"
    },{
      "name":"Fort St John",
      "city":"Fort Saint John, Canada",
      "iata_faa":"YXJ",
      "icao":"CYXJ",
      "lat":56.238056,
      "lng":-120.740278,
      "alt":2280,
      "tz":"America/Dawson_Creek"
    },{
      "name":"Sioux Lookout",
      "city":"Sioux Lookout, Canada",
      "iata_faa":"YXL",
      "icao":"CYXL",
      "lat":50.113889,
      "lng":-91.905278,
      "alt":1258,
      "tz":"America/Winnipeg"
    },{
      "name":"Pangnirtung",
      "city":"Pangnirtung, Canada",
      "iata_faa":"YXP",
      "icao":"CYXP",
      "lat":66.145,
      "lng":-65.713611,
      "alt":75,
      "tz":"America/Toronto"
    },{
      "name":"Timiskaming Rgnl",
      "city":"Earlton, Canada",
      "iata_faa":"YXR",
      "icao":"CYXR",
      "lat":47.695,
      "lng":-79.848889,
      "alt":798,
      "tz":"America/Toronto"
    },{
      "name":"Prince George",
      "city":"Prince George, Canada",
      "iata_faa":"YXS",
      "icao":"CYXS",
      "lat":53.889444,
      "lng":-122.678889,
      "alt":2267,
      "tz":"America/Vancouver"
    },{
      "name":"Terrace",
      "city":"Terrace, Canada",
      "iata_faa":"YXT",
      "icao":"CYXT",
      "lat":54.468508,
      "lng":-128.576219,
      "alt":713,
      "tz":"America/Vancouver"
    },{
      "name":"London",
      "city":"London, Canada",
      "iata_faa":"YXU",
      "icao":"CYXU",
      "lat":43.033056,
      "lng":-81.151111,
      "alt":912,
      "tz":"America/Toronto"
    },{
      "name":"Abbotsford",
      "city":"Abbotsford, Canada",
      "iata_faa":"YXX",
      "icao":"CYXX",
      "lat":49.025278,
      "lng":-122.360556,
      "alt":195,
      "tz":"America/Vancouver"
    },{
      "name":"Whitehorse Intl",
      "city":"Whitehorse, Canada",
      "iata_faa":"YXY",
      "icao":"CYXY",
      "lat":60.709553,
      "lng":-135.067269,
      "alt":2317,
      "tz":"America/Vancouver"
    },{
      "name":"North Bay",
      "city":"North Bay, Canada",
      "iata_faa":"YYB",
      "icao":"CYYB",
      "lat":46.363611,
      "lng":-79.422778,
      "alt":1215,
      "tz":"America/Toronto"
    },{
      "name":"Calgary Intl",
      "city":"Calgary, Canada",
      "iata_faa":"YYC",
      "icao":"CYYC",
      "lat":51.113888,
      "lng":-114.020278,
      "alt":3557,
      "tz":"America/Edmonton"
    },{
      "name":"Smithers",
      "city":"Smithers, Canada",
      "iata_faa":"YYD",
      "icao":"CYYD",
      "lat":54.824722,
      "lng":-127.182778,
      "alt":1712,
      "tz":"America/Vancouver"
    },{
      "name":"Fort Nelson",
      "city":"Fort Nelson, Canada",
      "iata_faa":"YYE",
      "icao":"CYYE",
      "lat":58.836389,
      "lng":-122.596944,
      "alt":1253,
      "tz":"America/Vancouver"
    },{
      "name":"Penticton",
      "city":"Penticton, Canada",
      "iata_faa":"YYF",
      "icao":"CYYF",
      "lat":49.463056,
      "lng":-119.602222,
      "alt":1129,
      "tz":"America/Vancouver"
    },{
      "name":"Charlottetown",
      "city":"Charlottetown, Canada",
      "iata_faa":"YYG",
      "icao":"CYYG",
      "lat":46.290001,
      "lng":-63.121111,
      "alt":160,
      "tz":"America/Halifax"
    },{
      "name":"Taloyoak",
      "city":"Spence Bay, Canada",
      "iata_faa":"YYH",
      "icao":"CYYH",
      "lat":69.546667,
      "lng":-93.576667,
      "alt":92,
      "tz":"America/Edmonton"
    },{
      "name":"Victoria Intl",
      "city":"Victoria, Canada",
      "iata_faa":"YYJ",
      "icao":"CYYJ",
      "lat":48.646944,
      "lng":-123.425833,
      "alt":63,
      "tz":"America/Vancouver"
    },{
      "name":"Lynn Lake",
      "city":"Lynn Lake, Canada",
      "iata_faa":"YYL",
      "icao":"CYYL",
      "lat":56.863888,
      "lng":-101.07611,
      "alt":1170,
      "tz":"America/Winnipeg"
    },{
      "name":"Swift Current",
      "city":"Swift Current, Canada",
      "iata_faa":"YYN",
      "icao":"CYYN",
      "lat":50.291944,
      "lng":-107.690556,
      "alt":2680,
      "tz":"America/Regina"
    },{
      "name":"Churchill",
      "city":"Churchill, Canada",
      "iata_faa":"YYQ",
      "icao":"CYYQ",
      "lat":58.739167,
      "lng":-94.065,
      "alt":94,
      "tz":"America/Winnipeg"
    },{
      "name":"Goose Bay",
      "city":"Goose Bay, Canada",
      "iata_faa":"YYR",
      "icao":"CYYR",
      "lat":53.319168,
      "lng":-60.425833,
      "alt":160,
      "tz":"America/Halifax"
    },{
      "name":"St Johns Intl",
      "city":"St. John's, Canada",
      "iata_faa":"YYT",
      "icao":"CYYT",
      "lat":47.61861,
      "lng":-52.751945,
      "alt":461,
      "tz":"America/St_Johns"
    },{
      "name":"Kapuskasing",
      "city":"Kapuskasing, Canada",
      "iata_faa":"YYU",
      "icao":"CYYU",
      "lat":49.413889,
      "lng":-82.4675,
      "alt":743,
      "tz":"America/Toronto"
    },{
      "name":"Armstrong",
      "city":"Armstrong, Canada",
      "iata_faa":"YYW",
      "icao":"CYYW",
      "lat":50.290279,
      "lng":-88.909721,
      "alt":1058,
      "tz":"America/Toronto"
    },{
      "name":"Mont Joli",
      "city":"Mont Joli, Canada",
      "iata_faa":"YYY",
      "icao":"CYYY",
      "lat":48.608612,
      "lng":-68.208056,
      "alt":172,
      "tz":"America/Toronto"
    },{
      "name":"Lester B Pearson Intl",
      "city":"Toronto, Canada",
      "iata_faa":"YYZ",
      "icao":"CYYZ",
      "lat":43.677223,
      "lng":-79.630556,
      "alt":569,
      "tz":"America/Toronto"
    },{
      "name":"Downsview",
      "city":"Toronto, Canada",
      "iata_faa":"YZD",
      "icao":"CYZD",
      "lat":43.7425,
      "lng":-79.465556,
      "alt":652,
      "tz":"America/Toronto"
    },{
      "name":"Gore Bay Manitoulin",
      "city":"Gore Bay, Canada",
      "iata_faa":"YZE",
      "icao":"CYZE",
      "lat":45.885277,
      "lng":-82.567778,
      "alt":635,
      "tz":"America/Toronto"
    },{
      "name":"Yellowknife",
      "city":"Yellowknife, Canada",
      "iata_faa":"YZF",
      "icao":"CYZF",
      "lat":62.462778,
      "lng":-114.440278,
      "alt":675,
      "tz":"America/Edmonton"
    },{
      "name":"Slave Lake",
      "city":"Slave Lake, Canada",
      "iata_faa":"YZH",
      "icao":"CYZH",
      "lat":55.293056,
      "lng":-114.777222,
      "alt":1912,
      "tz":"America/Edmonton"
    },{
      "name":"Sandspit",
      "city":"Sandspit, Canada",
      "iata_faa":"YZP",
      "icao":"CYZP",
      "lat":53.254333,
      "lng":-131.813833,
      "alt":21,
      "tz":"America/Vancouver"
    },{
      "name":"Chris Hadfield",
      "city":"Sarnia, Canada",
      "iata_faa":"YZR",
      "icao":"CYZR",
      "lat":42.999444,
      "lng":-82.308889,
      "alt":594,
      "tz":"America/Toronto"
    },{
      "name":"Port Hardy",
      "city":"Port Hardy, Canada",
      "iata_faa":"YZT",
      "icao":"CYZT",
      "lat":50.680556,
      "lng":-127.366667,
      "alt":71,
      "tz":"America/Vancouver"
    },{
      "name":"Whitecourt",
      "city":"Whitecourt, Canada",
      "iata_faa":"YZU",
      "icao":"CYZU",
      "lat":54.14389,
      "lng":-115.786667,
      "alt":2567,
      "tz":"America/Edmonton"
    },{
      "name":"Sept Iles",
      "city":"Sept-iles, Canada",
      "iata_faa":"YZV",
      "icao":"CYZV",
      "lat":50.223333,
      "lng":-66.265556,
      "alt":180,
      "tz":"America/Toronto"
    },{
      "name":"Teslin",
      "city":"Teslin, Canada",
      "iata_faa":"YZW",
      "icao":"CYZW",
      "lat":60.172779,
      "lng":-132.742778,
      "alt":2313,
      "tz":"America/Vancouver"
    },{
      "name":"Greenwood",
      "city":"Greenwood, Canada",
      "iata_faa":"YZX",
      "icao":"CYZX",
      "lat":44.984444,
      "lng":-64.916944,
      "alt":92,
      "tz":"America/Halifax"
    },{
      "name":"Faro",
      "city":"Faro, Canada",
      "iata_faa":"ZFA",
      "icao":"CZFA",
      "lat":62.2075,
      "lng":-133.375833,
      "alt":2351,
      "tz":"America/Vancouver"
    },{
      "name":"Fort Mcpherson",
      "city":"Fort Mcpherson, Canada",
      "iata_faa":"ZFM",
      "icao":"CZFM",
      "lat":67.4075,
      "lng":-134.860556,
      "alt":116,
      "tz":"America/Edmonton"
    },{
      "name":"Blida",
      "city":"Blida, Algeria",
      "icao":"DAAB",
      "lat":36.503613,
      "lng":2.814167,
      "alt":535,
      "tz":"Africa/Algiers"
    },{
      "name":"Bou Saada",
      "city":"Bou Saada, Algeria",
      "icao":"DAAD",
      "lat":35.3325,
      "lng":4.206389,
      "alt":1506,
      "tz":"Africa/Algiers"
    },{
      "name":"Soummam",
      "city":"Bejaja, Algeria",
      "iata_faa":"BJA",
      "icao":"DAAE",
      "lat":36.711997,
      "lng":5.069922,
      "alt":20,
      "tz":"Africa/Algiers"
    },{
      "name":"Houari Boumediene",
      "city":"Algier, Algeria",
      "iata_faa":"ALG",
      "icao":"DAAG",
      "lat":36.691014,
      "lng":3.215408,
      "alt":82,
      "tz":"Africa/Algiers"
    },{
      "name":"Tiska",
      "city":"Djanet, Algeria",
      "iata_faa":"DJG",
      "icao":"DAAJ",
      "lat":24.292767,
      "lng":9.452444,
      "alt":3176,
      "tz":"Africa/Algiers"
    },{
      "name":"Boufarik",
      "city":"Boufarik, Algeria",
      "iata_faa":"QFD",
      "icao":"DAAK",
      "lat":36.545834,
      "lng":2.876111,
      "alt":335,
      "tz":"Africa/Algiers"
    },{
      "name":"Reggane",
      "city":"Reggan, Algeria",
      "icao":"DAAN",
      "lat":26.710103,
      "lng":0.285647,
      "alt":955,
      "tz":"Africa/Algiers"
    },{
      "name":"Illizi Takhamalt",
      "city":"Illizi, Algeria",
      "iata_faa":"VVZ",
      "icao":"DAAP",
      "lat":26.723536,
      "lng":8.622653,
      "alt":1778,
      "tz":"Africa/Algiers"
    },{
      "name":"Ain Oussera",
      "city":"Ain Oussera, Algeria",
      "icao":"DAAQ",
      "lat":35.525414,
      "lng":2.878714,
      "alt":2132,
      "tz":"Africa/Algiers"
    },{
      "name":"Tamanrasset",
      "city":"Tamanrasset, Algeria",
      "iata_faa":"TMR",
      "icao":"DAAT",
      "lat":22.811461,
      "lng":5.451075,
      "alt":4518,
      "tz":"Africa/Algiers"
    },{
      "name":"Jijel",
      "city":"Jijel, Algeria",
      "iata_faa":"GJL",
      "icao":"DAAV",
      "lat":36.795136,
      "lng":5.873608,
      "alt":36,
      "tz":"Africa/Algiers"
    },{
      "name":"Mecheria",
      "city":"Mecheria, Algeria",
      "icao":"DAAY",
      "lat":33.535853,
      "lng":-0.242353,
      "alt":3855,
      "tz":"Africa/Algiers"
    },{
      "name":"Relizane",
      "city":"Relizane, Algeria",
      "icao":"DAAZ",
      "lat":35.752239,
      "lng":0.626272,
      "alt":282,
      "tz":"Africa/Algiers"
    },{
      "name":"Annaba",
      "city":"Annaba, Algeria",
      "iata_faa":"AAE",
      "icao":"DABB",
      "lat":36.822225,
      "lng":7.809167,
      "alt":16,
      "tz":"Africa/Algiers"
    },{
      "name":"Mohamed Boudiaf Intl",
      "city":"Constantine, Algeria",
      "iata_faa":"CZL",
      "icao":"DABC",
      "lat":36.276028,
      "lng":6.620386,
      "alt":2265,
      "tz":"Africa/Algiers"
    },{
      "name":"Cheikh Larbi Tebessi",
      "city":"Tebessa, Algeria",
      "iata_faa":"TEE",
      "icao":"DABS",
      "lat":35.431611,
      "lng":8.120717,
      "alt":2661,
      "tz":"Africa/Algiers"
    },{
      "name":"Hassi R Mel",
      "city":"Tilrempt, Algeria",
      "iata_faa":"HRM",
      "icao":"DAFH",
      "lat":32.930431,
      "lng":3.311542,
      "alt":2540,
      "tz":"Africa/Algiers"
    },{
      "name":"Bou Chekif",
      "city":"Tiaret, Algeria",
      "iata_faa":"TID",
      "icao":"DAOB",
      "lat":35.341136,
      "lng":1.463147,
      "alt":3245,
      "tz":"Africa/Algiers"
    },{
      "name":"Bou Sfer",
      "city":"Bou Sfer, Algeria",
      "icao":"DAOE",
      "lat":35.735389,
      "lng":-0.805389,
      "alt":187,
      "tz":"Africa/Algiers"
    },{
      "name":"Tindouf",
      "city":"Tindouf, Algeria",
      "iata_faa":"TIN",
      "icao":"DAOF",
      "lat":27.700372,
      "lng":-8.167103,
      "alt":1453,
      "tz":"Africa/Algiers"
    },{
      "name":"Ech Cheliff",
      "city":"Ech-cheliff, Algeria",
      "iata_faa":"QAS",
      "icao":"DAOI",
      "lat":36.212658,
      "lng":1.331775,
      "alt":463,
      "tz":"Africa/Algiers"
    },{
      "name":"Tafaraoui",
      "city":"Oran, Algeria",
      "iata_faa":"TAF",
      "icao":"DAOL",
      "lat":35.542444,
      "lng":-0.532278,
      "alt":367,
      "tz":"Africa/Algiers"
    },{
      "name":"Zenata",
      "city":"Tlemcen, Algeria",
      "iata_faa":"TLM",
      "icao":"DAON",
      "lat":35.016667,
      "lng":-1.45,
      "alt":814,
      "tz":"Africa/Algiers"
    },{
      "name":"Es Senia",
      "city":"Oran, Algeria",
      "iata_faa":"ORN",
      "icao":"DAOO",
      "lat":35.623858,
      "lng":-0.621183,
      "alt":295,
      "tz":"Africa/Algiers"
    },{
      "name":"Sidi Bel Abbes",
      "city":"Sidi Bel Abbes, Algeria",
      "icao":"DAOS",
      "lat":35.171775,
      "lng":-0.593275,
      "alt":1614,
      "tz":"Africa/Algiers"
    },{
      "name":"Ghriss",
      "city":"Ghriss, Algeria",
      "iata_faa":"MUW",
      "icao":"DAOV",
      "lat":35.207725,
      "lng":0.147142,
      "alt":1686,
      "tz":"Africa/Algiers"
    },{
      "name":"Touat Cheikh Sidi Mohamed Belkebir",
      "city":"Adrar, Algeria",
      "iata_faa":"AZR",
      "icao":"DAUA",
      "lat":27.837589,
      "lng":-0.186414,
      "alt":919,
      "tz":"Africa/Algiers"
    },{
      "name":"Biskra",
      "city":"Biskra, Algeria",
      "iata_faa":"BSK",
      "icao":"DAUB",
      "lat":34.793289,
      "lng":5.738231,
      "alt":289,
      "tz":"Africa/Algiers"
    },{
      "name":"El Golea",
      "city":"El Golea, Algeria",
      "iata_faa":"ELG",
      "icao":"DAUE",
      "lat":30.571294,
      "lng":2.859586,
      "alt":1306,
      "tz":"Africa/Algiers"
    },{
      "name":"Noumerat",
      "city":"Ghardaia, Algeria",
      "iata_faa":"GHA",
      "icao":"DAUG",
      "lat":32.384106,
      "lng":3.794114,
      "alt":1512,
      "tz":"Africa/Algiers"
    },{
      "name":"Oued Irara",
      "city":"Hassi Messaoud, Algeria",
      "iata_faa":"HME",
      "icao":"DAUH",
      "lat":31.672972,
      "lng":6.140444,
      "alt":463,
      "tz":"Africa/Algiers"
    },{
      "name":"In Salah",
      "city":"In Salah, Algeria",
      "iata_faa":"INZ",
      "icao":"DAUI",
      "lat":27.251022,
      "lng":2.512017,
      "alt":896,
      "tz":"Africa/Algiers"
    },{
      "name":"Sidi Mahdi",
      "city":"Touggourt, Algeria",
      "iata_faa":"TGR",
      "icao":"DAUK",
      "lat":33.067803,
      "lng":6.088672,
      "alt":279,
      "tz":"Africa/Algiers"
    },{
      "name":"Laghouat",
      "city":"Laghouat, Algeria",
      "iata_faa":"LOO",
      "icao":"DAUL",
      "lat":33.764383,
      "lng":2.928344,
      "alt":2510,
      "tz":"Africa/Algiers"
    },{
      "name":"Timimoun",
      "city":"Timimoun, Algeria",
      "iata_faa":"TMX",
      "icao":"DAUT",
      "lat":29.237119,
      "lng":0.276033,
      "alt":1027,
      "tz":"Africa/Algiers"
    },{
      "name":"Ouargla",
      "city":"Ouargla, Algeria",
      "iata_faa":"OGX",
      "icao":"DAUU",
      "lat":31.917223,
      "lng":5.412778,
      "alt":492,
      "tz":"Africa/Algiers"
    },{
      "name":"In Amenas",
      "city":"Zarzaitine, Algeria",
      "iata_faa":"IAM",
      "icao":"DAUZ",
      "lat":28.05155,
      "lng":9.642911,
      "alt":1847,
      "tz":"Africa/Algiers"
    },{
      "name":"Cadjehoun",
      "city":"Cotonou, Benin",
      "iata_faa":"COO",
      "icao":"DBBB",
      "lat":6.357228,
      "lng":2.384353,
      "alt":19,
      "tz":"Africa/Porto-Novo"
    },{
      "name":"Ouagadougou",
      "city":"Ouagadougou, Burkina Faso",
      "iata_faa":"OUA",
      "icao":"DFFD",
      "lat":12.353194,
      "lng":-1.512417,
      "alt":1037,
      "tz":"Africa/Ouagadougou"
    },{
      "name":"Bobo Dioulasso",
      "city":"Bobo-dioulasso, Burkina Faso",
      "iata_faa":"BOY",
      "icao":"DFOO",
      "lat":11.160056,
      "lng":-4.330969,
      "alt":1511,
      "tz":"Africa/Ouagadougou"
    },{
      "name":"Kotoka Intl",
      "city":"Accra, Ghana",
      "iata_faa":"ACC",
      "icao":"DGAA",
      "lat":5.605186,
      "lng":-0.166786,
      "alt":205,
      "tz":"Africa/Accra"
    },{
      "name":"Tamale",
      "city":"Tamale, Ghana",
      "iata_faa":"TML",
      "icao":"DGLE",
      "lat":9.557192,
      "lng":-0.863214,
      "alt":553,
      "tz":"Africa/Accra"
    },{
      "name":"Wa",
      "city":"Wa, Ghana",
      "icao":"DGLW",
      "lat":10.082664,
      "lng":-2.507694,
      "alt":1060,
      "tz":"Africa/Accra"
    },{
      "name":"Sunyani",
      "city":"Sunyani, Ghana",
      "iata_faa":"NYI",
      "icao":"DGSN",
      "lat":7.361828,
      "lng":-2.328756,
      "alt":1014,
      "tz":"Africa/Accra"
    },{
      "name":"Takoradi",
      "city":"Takoradi, Ghana",
      "iata_faa":"TKD",
      "icao":"DGTK",
      "lat":4.896056,
      "lng":-1.774756,
      "alt":21,
      "tz":"Africa/Accra"
    },{
      "name":"Abidjan Felix Houphouet Boigny Intl",
      "city":"Abidjan, Cote d'Ivoire",
      "iata_faa":"ABJ",
      "icao":"DIAP",
      "lat":5.261386,
      "lng":-3.926294,
      "alt":21,
      "tz":"Africa/Abidjan"
    },{
      "name":"Bouake",
      "city":"Bouake, Cote d'Ivoire",
      "iata_faa":"BYK",
      "icao":"DIBK",
      "lat":7.7388,
      "lng":-5.073667,
      "alt":1230,
      "tz":"Africa/Abidjan"
    },{
      "name":"Daloa",
      "city":"Daloa, Cote d'Ivoire",
      "iata_faa":"DJO",
      "icao":"DIDL",
      "lat":6.792808,
      "lng":-6.473189,
      "alt":823,
      "tz":"Africa/Abidjan"
    },{
      "name":"Korhogo",
      "city":"Korhogo, Cote d'Ivoire",
      "iata_faa":"HGO",
      "icao":"DIKO",
      "lat":9.387183,
      "lng":-5.556664,
      "alt":1214,
      "tz":"Africa/Abidjan"
    },{
      "name":"Man",
      "city":"Man, Cote d'Ivoire",
      "iata_faa":"MJC",
      "icao":"DIMN",
      "lat":7.272069,
      "lng":-7.587364,
      "alt":1089,
      "tz":"Africa/Abidjan"
    },{
      "name":"San Pedro",
      "city":"San Pedro, Cote d'Ivoire",
      "iata_faa":"SPY",
      "icao":"DISP",
      "lat":4.746717,
      "lng":-6.660817,
      "alt":26,
      "tz":"Africa/Abidjan"
    },{
      "name":"Yamoussoukro",
      "city":"Yamoussoukro, Cote d'Ivoire",
      "iata_faa":"ASK",
      "icao":"DIYO",
      "lat":6.903167,
      "lng":-5.365581,
      "alt":699,
      "tz":"Africa/Abidjan"
    },{
      "name":"Nnamdi Azikiwe Intl",
      "city":"Abuja, Nigeria",
      "iata_faa":"ABV",
      "icao":"DNAA",
      "lat":9.006792,
      "lng":7.263172,
      "alt":1123,
      "tz":"Africa/Lagos"
    },{
      "name":"Akure",
      "city":"Akure, Nigeria",
      "iata_faa":"AKR",
      "icao":"DNAK",
      "lat":7.246739,
      "lng":5.301008,
      "alt":1100,
      "tz":"Africa/Lagos"
    },{
      "name":"Benin",
      "city":"Benin, Nigeria",
      "iata_faa":"BNI",
      "icao":"DNBE",
      "lat":6.316981,
      "lng":5.599503,
      "alt":258,
      "tz":"Africa/Lagos"
    },{
      "name":"Calabar",
      "city":"Calabar, Nigeria",
      "iata_faa":"CBQ",
      "icao":"DNCA",
      "lat":4.976019,
      "lng":8.347197,
      "alt":210,
      "tz":"Africa/Lagos"
    },{
      "name":"Enugu",
      "city":"Enugu, Nigeria",
      "iata_faa":"ENU",
      "icao":"DNEN",
      "lat":6.474272,
      "lng":7.561961,
      "alt":466,
      "tz":"Africa/Lagos"
    },{
      "name":"Gusau",
      "city":"Gusau, Nigeria",
      "iata_faa":"QUS",
      "icao":"DNGU",
      "lat":12.171667,
      "lng":6.696111,
      "alt":1520,
      "tz":"Africa/Lagos"
    },{
      "name":"Ibadan",
      "city":"Ibadan, Nigeria",
      "iata_faa":"IBA",
      "icao":"DNIB",
      "lat":7.362458,
      "lng":3.978333,
      "alt":725,
      "tz":"Africa/Lagos"
    },{
      "name":"Ilorin",
      "city":"Ilorin, Nigeria",
      "iata_faa":"ILR",
      "icao":"DNIL",
      "lat":8.440211,
      "lng":4.493919,
      "alt":1126,
      "tz":"Africa/Lagos"
    },{
      "name":"Yakubu Gowon",
      "city":"Jos, Nigeria",
      "iata_faa":"JOS",
      "icao":"DNJO",
      "lat":9.639828,
      "lng":8.86905,
      "alt":4232,
      "tz":"Africa/Lagos"
    },{
      "name":"Kaduna",
      "city":"Kaduna, Nigeria",
      "iata_faa":"KAD",
      "icao":"DNKA",
      "lat":10.696025,
      "lng":7.320114,
      "alt":2073,
      "tz":"Africa/Lagos"
    },{
      "name":"Mallam Aminu Intl",
      "city":"Kano, Nigeria",
      "iata_faa":"KAN",
      "icao":"DNKN",
      "lat":12.047589,
      "lng":8.524622,
      "alt":1562,
      "tz":"Africa/Lagos"
    },{
      "name":"Maiduguri",
      "city":"Maiduguri, Nigeria",
      "iata_faa":"MIU",
      "icao":"DNMA",
      "lat":11.855347,
      "lng":13.08095,
      "alt":1099,
      "tz":"Africa/Lagos"
    },{
      "name":"Makurdi",
      "city":"Makurdi, Nigeria",
      "iata_faa":"MDI",
      "icao":"DNMK",
      "lat":7.703883,
      "lng":8.613939,
      "alt":371,
      "tz":"Africa/Lagos"
    },{
      "name":"Murtala Muhammed",
      "city":"Lagos, Nigeria",
      "iata_faa":"LOS",
      "icao":"DNMM",
      "lat":6.577369,
      "lng":3.321156,
      "alt":135,
      "tz":"Africa/Lagos"
    },{
      "name":"Minna New",
      "city":"Minna, Nigeria",
      "iata_faa":"MXJ",
      "icao":"DNMN",
      "lat":9.652172,
      "lng":6.462256,
      "alt":834,
      "tz":"Africa/Lagos"
    },{
      "name":"Port Harcourt Intl",
      "city":"Port Hartcourt, Nigeria",
      "iata_faa":"PHC",
      "icao":"DNPO",
      "lat":5.015494,
      "lng":6.949594,
      "alt":87,
      "tz":"Africa/Lagos"
    },{
      "name":"Sadiq Abubakar Iii Intl",
      "city":"Sokoto, Nigeria",
      "iata_faa":"SKO",
      "icao":"DNSO",
      "lat":12.916322,
      "lng":5.207189,
      "alt":1010,
      "tz":"Africa/Lagos"
    },{
      "name":"Yola",
      "city":"Yola, Nigeria",
      "iata_faa":"YOL",
      "icao":"DNYO",
      "lat":9.257553,
      "lng":12.430422,
      "alt":599,
      "tz":"Africa/Lagos"
    },{
      "name":"Zaria",
      "city":"Zaria, Nigeria",
      "iata_faa":"ZAR",
      "icao":"DNZA",
      "lat":11.130192,
      "lng":7.685806,
      "alt":2170,
      "tz":"Africa/Lagos"
    },{
      "name":"Maradi",
      "city":"Maradi, Niger",
      "iata_faa":"MFQ",
      "icao":"DRRM",
      "lat":13.502531,
      "lng":7.126753,
      "alt":1240,
      "tz":"Africa/Niamey"
    },{
      "name":"Diori Hamani",
      "city":"Niamey, Niger",
      "iata_faa":"NIM",
      "icao":"DRRN",
      "lat":13.481547,
      "lng":2.183614,
      "alt":732,
      "tz":"Africa/Niamey"
    },{
      "name":"Tahoua",
      "city":"Tahoua, Niger",
      "iata_faa":"THZ",
      "icao":"DRRT",
      "lat":14.875658,
      "lng":5.265358,
      "alt":1266,
      "tz":"Africa/Niamey"
    },{
      "name":"Manu Dayak",
      "city":"Agadez, Niger",
      "iata_faa":"AJY",
      "icao":"DRZA",
      "lat":16.965997,
      "lng":8.000114,
      "alt":1657,
      "tz":"Africa/Niamey"
    },{
      "name":"Dirkou",
      "city":"Dirkou, Niger",
      "icao":"DRZD",
      "lat":18.968703,
      "lng":12.86865,
      "alt":1273,
      "tz":"Africa/Niamey"
    },{
      "name":"Diffa",
      "city":"Diffa, Niger",
      "icao":"DRZF",
      "lat":13.372894,
      "lng":12.626686,
      "alt":994,
      "tz":"Africa/Niamey"
    },{
      "name":"Zinder",
      "city":"Zinder, Niger",
      "iata_faa":"ZND",
      "icao":"DRZR",
      "lat":13.778997,
      "lng":8.983761,
      "alt":1516,
      "tz":"Africa/Niamey"
    },{
      "name":"Habib Bourguiba Intl",
      "city":"Monastir, Tunisia",
      "iata_faa":"MIR",
      "icao":"DTMB",
      "lat":35.758056,
      "lng":10.754722,
      "alt":9,
      "tz":"Africa/Tunis"
    },{
      "name":"Carthage",
      "city":"Tunis, Tunisia",
      "iata_faa":"TUN",
      "icao":"DTTA",
      "lat":36.851033,
      "lng":10.227217,
      "alt":22,
      "tz":"Africa/Tunis"
    },{
      "name":"Sidi Ahmed Air Base",
      "city":"Bizerte, Tunisia",
      "icao":"DTTB",
      "lat":37.245447,
      "lng":9.791453,
      "alt":20,
      "tz":"Africa/Tunis"
    },{
      "name":"Remada",
      "city":"Remada, Tunisia",
      "icao":"DTTD",
      "lat":32.306156,
      "lng":10.382108,
      "alt":1004,
      "tz":"Africa/Tunis"
    },{
      "name":"Gafsa",
      "city":"Gafsa, Tunisia",
      "iata_faa":"GAF",
      "icao":"DTTF",
      "lat":34.422022,
      "lng":8.822503,
      "alt":1060,
      "tz":"Africa/Tunis"
    },{
      "name":"Gabes",
      "city":"Gabes, Tunisia",
      "iata_faa":"GAE",
      "icao":"DTTG",
      "lat":33.876919,
      "lng":10.103333,
      "alt":26,
      "tz":"Africa/Tunis"
    },{
      "name":"Borj El Amri",
      "city":"Bordj El Amri, Tunisia",
      "icao":"DTTI",
      "lat":36.721339,
      "lng":9.943147,
      "alt":108,
      "tz":"Africa/Tunis"
    },{
      "name":"Zarzis",
      "city":"Djerba, Tunisia",
      "iata_faa":"DJE",
      "icao":"DTTJ",
      "lat":33.875031,
      "lng":10.775461,
      "alt":19,
      "tz":"Africa/Tunis"
    },{
      "name":"El Borma",
      "city":"El Borma, Tunisia",
      "iata_faa":"EBM",
      "icao":"DTTR",
      "lat":31.704281,
      "lng":9.254619,
      "alt":827,
      "tz":"Africa/Tunis"
    },{
      "name":"Thyna",
      "city":"Sfax, Tunisia",
      "iata_faa":"SFA",
      "icao":"DTTX",
      "lat":34.717953,
      "lng":10.690972,
      "alt":85,
      "tz":"Africa/Tunis"
    },{
      "name":"Nefta",
      "city":"Tozeur, Tunisia",
      "iata_faa":"TOE",
      "icao":"DTTZ",
      "lat":33.939722,
      "lng":8.110556,
      "alt":287,
      "tz":"Africa/Tunis"
    },{
      "name":"Niamtougou International",
      "city":"Niatougou, Togo",
      "iata_faa":"LRL",
      "icao":"DXNG",
      "lat":9.767333,
      "lng":1.09125,
      "alt":1515,
      "tz":"Africa/Lome"
    },{
      "name":"Gnassingbe Eyadema Intl",
      "city":"Lome, Togo",
      "iata_faa":"LFW",
      "icao":"DXXX",
      "lat":6.165611,
      "lng":1.254511,
      "alt":72,
      "tz":"Africa/Lome"
    },{
      "name":"Deurne",
      "city":"Antwerp, Belgium",
      "iata_faa":"ANR",
      "icao":"EBAW",
      "lat":51.189444,
      "lng":4.460278,
      "alt":39,
      "tz":"Europe/Brussels"
    },{
      "name":"Beauvechain",
      "city":"Beauvechain, Belgium",
      "icao":"EBBE",
      "lat":50.75861,
      "lng":4.768333,
      "alt":370,
      "tz":"Europe/Brussels"
    },{
      "name":"Kleine Brogel",
      "city":"Kleine Brogel, Belgium",
      "icao":"EBBL",
      "lat":51.168333,
      "lng":5.47,
      "alt":200,
      "tz":"Europe/Brussels"
    },{
      "name":"Brussels Natl",
      "city":"Brussels, Belgium",
      "iata_faa":"BRU",
      "icao":"EBBR",
      "lat":50.901389,
      "lng":4.484444,
      "alt":184,
      "tz":"Europe/Brussels"
    },{
      "name":"Bertrix",
      "city":"Bertrix, Belgium",
      "icao":"EBBX",
      "lat":49.891667,
      "lng":5.223889,
      "alt":1514,
      "tz":"Europe/Brussels"
    },{
      "name":"Brussels South",
      "city":"Charleroi, Belgium",
      "iata_faa":"CRL",
      "icao":"EBCI",
      "lat":50.459197,
      "lng":4.453817,
      "alt":614,
      "tz":"Europe/Brussels"
    },{
      "name":"Chievres Ab",
      "city":"Chievres, Belgium",
      "icao":"EBCV",
      "lat":50.575833,
      "lng":3.831,
      "alt":193,
      "tz":"Europe/Brussels"
    },{
      "name":"Koksijde",
      "city":"Koksijde, Belgium",
      "icao":"EBFN",
      "lat":51.090278,
      "lng":2.652778,
      "alt":20,
      "tz":"Europe/Brussels"
    },{
      "name":"Florennes",
      "city":"Florennes, Belgium",
      "icao":"EBFS",
      "lat":50.243333,
      "lng":4.645833,
      "alt":935,
      "tz":"Europe/Brussels"
    },{
      "name":"Wevelgem",
      "city":"Kortrijk-vevelgem, Belgium",
      "iata_faa":"QKT",
      "icao":"EBKT",
      "lat":50.817222,
      "lng":3.204722,
      "alt":64,
      "tz":"Europe/Brussels"
    },{
      "name":"Liege",
      "city":"Liege, Belgium",
      "iata_faa":"LGG",
      "icao":"EBLG",
      "lat":50.637417,
      "lng":5.443222,
      "alt":659,
      "tz":"Europe/Brussels"
    },{
      "name":"Oostende",
      "city":"Ostend, Belgium",
      "iata_faa":"OST",
      "icao":"EBOS",
      "lat":51.198889,
      "lng":2.862222,
      "alt":13,
      "tz":"Europe/Brussels"
    },{
      "name":"Zutendaal",
      "city":"Zutendaal, Belgium",
      "icao":"EBSL",
      "lat":50.9475,
      "lng":5.590556,
      "alt":312,
      "tz":"Europe/Brussels"
    },{
      "name":"Sint Truiden",
      "city":"Sint-truiden, Belgium",
      "icao":"EBST",
      "lat":50.791944,
      "lng":5.201667,
      "alt":246,
      "tz":"Europe/Brussels"
    },{
      "name":"Saint Hubert Mil",
      "city":"St.-hubert, Belgium",
      "icao":"EBSU",
      "lat":50.035833,
      "lng":5.404167,
      "alt":1930,
      "tz":"Europe/Brussels"
    },{
      "name":"Ursel",
      "city":"Ursel, Belgium",
      "icao":"EBUL",
      "lat":51.144133,
      "lng":3.474361,
      "alt":95,
      "tz":"Europe/Brussels"
    },{
      "name":"Weelde",
      "city":"Weelde, Belgium",
      "icao":"EBWE",
      "lat":51.394783,
      "lng":4.960194,
      "alt":105,
      "tz":"Europe/Brussels"
    },{
      "name":"Zoersel",
      "city":"Zoersel, Belgium",
      "icao":"EBZR",
      "lat":51.264722,
      "lng":4.753333,
      "alt":53,
      "tz":"Europe/Brussels"
    },{
      "name":"Bautzen",
      "city":"Bautzen, Germany",
      "iata_faa":"BBJ",
      "icao":"EDAB",
      "lat":51.193531,
      "lng":14.519747,
      "alt":568,
      "tz":"Europe/Berlin"
    },{
      "name":"Altenburg Nobitz",
      "city":"Altenburg, Germany",
      "iata_faa":"AOC",
      "icao":"EDAC",
      "lat":50.981817,
      "lng":12.506361,
      "alt":640,
      "tz":"Europe/Berlin"
    },{
      "name":"Dessau",
      "city":"Dessau, Germany",
      "icao":"EDAD",
      "lat":51.831828,
      "lng":12.184033,
      "alt":187,
      "tz":"Europe/Berlin"
    },{
      "name":"Eisenhuttenstadt",
      "city":"Eisenhuettenstadt, Germany",
      "icao":"EDAE",
      "lat":52.197333,
      "lng":14.585667,
      "alt":149,
      "tz":"Europe/Berlin"
    },{
      "name":"Putnam County Airport",
      "city":"Greencastle, United States",
      "iata_faa":"4I7",
      "lat":39.6335556,
      "lng":-86.8138056,
      "alt":842,
      "tz":"America/New_York"
    },{
      "name":"Grossenhain",
      "city":"Suhl, Germany",
      "icao":"EDAK",
      "lat":51.308111,
      "lng":13.554973,
      "alt":417,
      "tz":"Europe/Berlin"
    },{
      "name":"Merseburg",
      "city":"Muehlhausen, Germany",
      "icao":"EDAM",
      "lat":51.363,
      "lng":11.940833,
      "alt":340,
      "tz":"Europe/Berlin"
    },{
      "name":"Halle Oppin",
      "city":"Halle, Germany",
      "icao":"EDAQ",
      "lat":51.552,
      "lng":12.052667,
      "alt":347,
      "tz":"Europe/Berlin"
    },{
      "name":"Riesa Gohlis",
      "city":"Riesa, Germany",
      "icao":"EDAU",
      "lat":51.2935,
      "lng":13.356,
      "alt":322,
      "tz":"Europe/Berlin"
    },{
      "name":"Rechlin Larz",
      "city":"Rechlin-laerz, Germany",
      "icao":"EDAX",
      "lat":53.306417,
      "lng":12.753139,
      "alt":220,
      "tz":"Europe/Berlin"
    },{
      "name":"Strausberg",
      "city":"Strausberg, Germany",
      "icao":"EDAY",
      "lat":52.579978,
      "lng":13.915683,
      "alt":263,
      "tz":"Europe/Berlin"
    },{
      "name":"Schonhagen",
      "city":"Schoenhagen, Germany",
      "icao":"EDAZ",
      "lat":52.203258,
      "lng":13.158408,
      "alt":131,
      "tz":"Europe/Berlin"
    },{
      "name":"Barth",
      "city":"Barth, Germany",
      "iata_faa":"BBH",
      "icao":"EDBH",
      "lat":54.33754,
      "lng":12.699705,
      "alt":23,
      "tz":"Europe/Berlin"
    },{
      "name":"Jena Schongleina",
      "city":"Jena, Germany",
      "icao":"EDBJ",
      "lat":50.915161,
      "lng":11.714519,
      "alt":1228,
      "tz":"Europe/Berlin"
    },{
      "name":"Kyritz",
      "city":"Kyritz, Germany",
      "icao":"EDBK",
      "lat":52.918833,
      "lng":12.425333,
      "alt":130,
      "tz":"Europe/Berlin"
    },{
      "name":"Magdeburg",
      "city":"Magdeburg, Germany",
      "icao":"EDBM",
      "lat":52.073658,
      "lng":11.626467,
      "alt":268,
      "tz":"Europe/Berlin"
    },{
      "name":"Rothenburg Gorlitz",
      "city":"Rothenburg/ol, Germany",
      "icao":"EDBR",
      "lat":51.363167,
      "lng":14.95,
      "alt":517,
      "tz":"Europe/Berlin"
    },{
      "name":"Anklam",
      "city":"Anklam, Germany",
      "icao":"EDCA",
      "lat":53.8327,
      "lng":13.669131,
      "alt":18,
      "tz":"Europe/Berlin"
    },{
      "name":"Cottbus Drewitz",
      "city":"Cottbus, Germany",
      "icao":"EDCD",
      "lat":51.889475,
      "lng":14.531986,
      "alt":274,
      "tz":"Europe/Berlin"
    },{
      "name":"Kamenz",
      "city":"Kamenz, Germany",
      "icao":"EDCM",
      "lat":51.29625,
      "lng":14.129,
      "alt":495,
      "tz":"Europe/Berlin"
    },{
      "name":"Schonefeld",
      "city":"Berlin, Germany",
      "iata_faa":"SXF",
      "icao":"EDDB",
      "lat":52.380001,
      "lng":13.5225,
      "alt":157,
      "tz":"Europe/Berlin"
    },{
      "name":"Dresden",
      "city":"Dresden, Germany",
      "iata_faa":"DRS",
      "icao":"EDDC",
      "lat":51.132767,
      "lng":13.767161,
      "alt":755,
      "tz":"Europe/Berlin"
    },{
      "name":"Erfurt",
      "city":"Erfurt, Germany",
      "iata_faa":"ERF",
      "icao":"EDDE",
      "lat":50.979811,
      "lng":10.958106,
      "alt":1036,
      "tz":"Europe/Berlin"
    },{
      "name":"Frankfurt Main",
      "city":"Frankfurt, Germany",
      "iata_faa":"FRA",
      "icao":"EDDF",
      "lat":50.026421,
      "lng":8.543125,
      "alt":364,
      "tz":"Europe/Berlin"
    },{
      "name":"Munster Osnabruck",
      "city":"Munster, Germany",
      "iata_faa":"FMO",
      "icao":"EDDG",
      "lat":52.134642,
      "lng":7.684831,
      "alt":160,
      "tz":"Europe/Berlin"
    },{
      "name":"Hamburg",
      "city":"Hamburg, Germany",
      "iata_faa":"HAM",
      "icao":"EDDH",
      "lat":53.630389,
      "lng":9.988228,
      "alt":53,
      "tz":"Europe/Berlin"
    },{
      "name":"Tempelhof",
      "city":"Berlin, Germany",
      "iata_faa":"THF",
      "icao":"EDDI",
      "lat":52.473025,
      "lng":13.403944,
      "alt":167,
      "tz":"Europe/Berlin"
    },{
      "name":"Koln Bonn",
      "city":"Cologne, Germany",
      "iata_faa":"CGN",
      "icao":"EDDK",
      "lat":50.865917,
      "lng":7.142744,
      "alt":302,
      "tz":"Europe/Berlin"
    },{
      "name":"Dusseldorf",
      "city":"Duesseldorf, Germany",
      "iata_faa":"DUS",
      "icao":"EDDL",
      "lat":51.289453,
      "lng":6.766775,
      "alt":147,
      "tz":"Europe/Berlin"
    },{
      "name":"Franz Josef Strauss",
      "city":"Munich, Germany",
      "iata_faa":"MUC",
      "icao":"EDDM",
      "lat":48.353783,
      "lng":11.786086,
      "alt":1487,
      "tz":"Europe/Berlin"
    },{
      "name":"Nurnberg",
      "city":"Nuernberg, Germany",
      "iata_faa":"NUE",
      "icao":"EDDN",
      "lat":49.4987,
      "lng":11.066897,
      "alt":1046,
      "tz":"Europe/Berlin"
    },{
      "name":"Leipzig Halle",
      "city":"Leipzig, Germany",
      "iata_faa":"LEJ",
      "icao":"EDDP",
      "lat":51.432447,
      "lng":12.241633,
      "alt":465,
      "tz":"Europe/Berlin"
    },{
      "name":"Saarbrucken",
      "city":"Saarbruecken, Germany",
      "iata_faa":"SCN",
      "icao":"EDDR",
      "lat":49.214553,
      "lng":7.109508,
      "alt":1058,
      "tz":"Europe/Berlin"
    },{
      "name":"Stuttgart",
      "city":"Stuttgart, Germany",
      "iata_faa":"STR",
      "icao":"EDDS",
      "lat":48.689878,
      "lng":9.221964,
      "alt":1276,
      "tz":"Europe/Berlin"
    },{
      "name":"Tegel",
      "city":"Berlin, Germany",
      "iata_faa":"TXL",
      "icao":"EDDT",
      "lat":52.559686,
      "lng":13.287711,
      "alt":122,
      "tz":"Europe/Berlin"
    },{
      "name":"Hannover",
      "city":"Hannover, Germany",
      "iata_faa":"HAJ",
      "icao":"EDDV",
      "lat":52.461056,
      "lng":9.685078,
      "alt":183,
      "tz":"Europe/Berlin"
    },{
      "name":"Neuenland",
      "city":"Bremen, Germany",
      "iata_faa":"BRE",
      "icao":"EDDW",
      "lat":53.0475,
      "lng":8.786667,
      "alt":14,
      "tz":"Europe/Berlin"
    },{
      "name":"Egelsbach",
      "city":"Egelsbach, Germany",
      "icao":"EDFE",
      "lat":49.960833,
      "lng":8.6415,
      "alt":385,
      "tz":"Europe/Berlin"
    },{
      "name":"Frankfurt Hahn",
      "city":"Hahn, Germany",
      "iata_faa":"HHN",
      "icao":"EDFH",
      "lat":49.948672,
      "lng":7.263892,
      "alt":1649,
      "tz":"Europe/Berlin"
    },{
      "name":"Mannheim City",
      "city":"Mannheim, Germany",
      "iata_faa":"MHG",
      "icao":"EDFM",
      "lat":49.472706,
      "lng":8.514264,
      "alt":309,
      "tz":"Europe/Berlin"
    },{
      "name":"Allendorf Eder",
      "city":"Allendorf, Germany",
      "icao":"EDFQ",
      "lat":51.034878,
      "lng":8.680839,
      "alt":1164,
      "tz":"Europe/Berlin"
    },{
      "name":"Worms",
      "city":"Worms, Germany",
      "icao":"EDFV",
      "lat":49.606511,
      "lng":8.3684,
      "alt":295,
      "tz":"Europe/Berlin"
    },{
      "name":"Mainz Finthen",
      "city":"Mainz, Germany",
      "icao":"EDFZ",
      "lat":49.968931,
      "lng":8.148336,
      "alt":760,
      "tz":"Europe/Berlin"
    },{
      "name":"Eisenach Kindel",
      "city":"Eisenach, Germany",
      "icao":"EDGE",
      "lat":50.992797,
      "lng":10.472711,
      "alt":1101,
      "tz":"Europe/Berlin"
    },{
      "name":"Siegerland",
      "city":"Siegerland, Germany",
      "icao":"EDGS",
      "lat":50.707658,
      "lng":8.082969,
      "alt":1966,
      "tz":"Europe/Berlin"
    },{
      "name":"Hamburg Finkenwerder",
      "city":"Hamburg, Germany",
      "iata_faa":"XFW",
      "icao":"EDHI",
      "lat":53.535886,
      "lng":9.837025,
      "alt":22,
      "tz":"Europe/Berlin"
    },{
      "name":"Kiel Holtenau",
      "city":"Kiel, Germany",
      "iata_faa":"KEL",
      "icao":"EDHK",
      "lat":54.3795,
      "lng":10.145167,
      "alt":101,
      "tz":"Europe/Berlin"
    },{
      "name":"Lubeck Blankensee",
      "city":"Luebeck, Germany",
      "iata_faa":"LBC",
      "icao":"EDHL",
      "lat":53.805367,
      "lng":10.719222,
      "alt":53,
      "tz":"Europe/Berlin"
    },{
      "name":"Dahlemer Binz",
      "city":"Dahlemer Binz, Germany",
      "icao":"EDKV",
      "lat":50.405888,
      "lng":6.528083,
      "alt":1896,
      "tz":"Europe/Berlin"
    },{
      "name":"Meinerzhagen",
      "city":"Meinerzhagen, Germany",
      "icao":"EDKZ",
      "lat":51.099445,
      "lng":7.601944,
      "alt":1548,
      "tz":"Europe/Berlin"
    },{
      "name":"Arnsberg Menden",
      "city":"Arnsberg, Germany",
      "iata_faa":"ZCA",
      "icao":"EDLA",
      "lat":51.483333,
      "lng":7.899333,
      "alt":794,
      "tz":"Europe/Berlin"
    },{
      "name":"Essen Mulheim",
      "city":"Essen, Germany",
      "iata_faa":"ESS",
      "icao":"EDLE",
      "lat":51.402333,
      "lng":6.937333,
      "alt":424,
      "tz":"Europe/Berlin"
    },{
      "name":"Bielefeld",
      "city":"Bielefeld, Germany",
      "icao":"EDLI",
      "lat":51.964833,
      "lng":8.544833,
      "alt":454,
      "tz":"Europe/Berlin"
    },{
      "name":"Monchengladbach",
      "city":"Moenchengladbach, Germany",
      "iata_faa":"MGL",
      "icao":"EDLN",
      "lat":51.230356,
      "lng":6.504494,
      "alt":125,
      "tz":"Europe/Berlin"
    },{
      "name":"Paderborn Lippstadt",
      "city":"Paderborn, Germany",
      "iata_faa":"PAD",
      "icao":"EDLP",
      "lat":51.614089,
      "lng":8.616317,
      "alt":699,
      "tz":"Europe/Berlin"
    },{
      "name":"Stadtlohn Vreden",
      "city":"Stadtlohn, Germany",
      "icao":"EDLS",
      "lat":51.995844,
      "lng":6.840667,
      "alt":157,
      "tz":"Europe/Berlin"
    },{
      "name":"Dortmund",
      "city":"Dortmund, Germany",
      "iata_faa":"DTM",
      "icao":"EDLW",
      "lat":51.518314,
      "lng":7.612242,
      "alt":425,
      "tz":"Europe/Berlin"
    },{
      "name":"Augsburg",
      "city":"Augsburg, Germany",
      "iata_faa":"AGB",
      "icao":"EDMA",
      "lat":48.425158,
      "lng":10.931764,
      "alt":1515,
      "tz":"Europe/Berlin"
    },{
      "name":"Biberach An Der Riss",
      "city":"Biberach, Germany",
      "icao":"EDMB",
      "lat":48.111,
      "lng":9.762833,
      "alt":1903,
      "tz":"Europe/Berlin"
    },{
      "name":"Eggenfelden",
      "city":"Eggenfelden, Germany",
      "icao":"EDME",
      "lat":48.396167,
      "lng":12.723667,
      "alt":1342,
      "tz":"Europe/Berlin"
    },{
      "name":"Mindelheim Mattsies",
      "city":"Mindelheim, Germany",
      "icao":"EDMN",
      "lat":48.108833,
      "lng":10.524333,
      "alt":1857,
      "tz":"Europe/Berlin"
    },{
      "name":"Oberpfaffenhofen",
      "city":"Oberpfaffenhofen, Germany",
      "iata_faa":"OBF",
      "icao":"EDMO",
      "lat":48.081364,
      "lng":11.283067,
      "alt":1947,
      "tz":"Europe/Berlin"
    },{
      "name":"Straubing",
      "city":"Straubing, Germany",
      "icao":"EDMS",
      "lat":48.90095,
      "lng":12.518186,
      "alt":1054,
      "tz":"Europe/Berlin"
    },{
      "name":"Vilshofen",
      "city":"Vilshofen, Germany",
      "icao":"EDMV",
      "lat":48.635167,
      "lng":13.195667,
      "alt":991,
      "tz":"Europe/Berlin"
    },{
      "name":"Leutkirch Unterzeil",
      "city":"Leutkirch, Germany",
      "icao":"EDNL",
      "lat":47.859117,
      "lng":10.014572,
      "alt":2099,
      "tz":"Europe/Berlin"
    },{
      "name":"Friedrichshafen",
      "city":"Friedrichshafen, Germany",
      "iata_faa":"FDH",
      "icao":"EDNY",
      "lat":47.671317,
      "lng":9.511486,
      "alt":1367,
      "tz":"Europe/Berlin"
    },{
      "name":"Schwerin Parchim",
      "city":"Parchim, Germany",
      "iata_faa":"SZW",
      "icao":"EDOP",
      "lat":53.426997,
      "lng":11.783436,
      "alt":166,
      "tz":"Europe/Berlin"
    },{
      "name":"Stendal Borstel",
      "city":"Stendal, Germany",
      "iata_faa":"ZSN",
      "icao":"EDOV",
      "lat":52.627778,
      "lng":11.818333,
      "alt":184,
      "tz":"Europe/Berlin"
    },{
      "name":"Aalen Heidenheim Elchingen",
      "city":"Aalen-heidenheim, Germany",
      "icao":"EDPA",
      "lat":48.777833,
      "lng":10.264667,
      "alt":1916,
      "tz":"Europe/Berlin"
    },{
      "name":"Bayreuth",
      "city":"Bayreuth, Germany",
      "iata_faa":"BYU",
      "icao":"EDQD",
      "lat":49.984428,
      "lng":11.638569,
      "alt":1601,
      "tz":"Europe/Berlin"
    },{
      "name":"Burg Feuerstein",
      "city":"Burg Feuerstein, Germany",
      "icao":"EDQE",
      "lat":49.793833,
      "lng":11.133167,
      "alt":1674,
      "tz":"Europe/Berlin"
    },{
      "name":"Hof Plauen",
      "city":"Hof, Germany",
      "iata_faa":"HOQ",
      "icao":"EDQM",
      "lat":50.288836,
      "lng":11.854919,
      "alt":1960,
      "tz":"Europe/Berlin"
    },{
      "name":"Hassfurt Schweinfurt",
      "city":"Hassfurt, Germany",
      "icao":"EDQT",
      "lat":50.018,
      "lng":10.5295,
      "alt":718,
      "tz":"Europe/Berlin"
    },{
      "name":"Koblenz Winningen",
      "city":"Koblenz, Germany",
      "iata_faa":"ZNV",
      "icao":"EDRK",
      "lat":50.3255,
      "lng":7.528667,
      "alt":640,
      "tz":"Europe/Berlin"
    },{
      "name":"Trier Fohren",
      "city":"Trier, Germany",
      "iata_faa":"ZQF",
      "icao":"EDRT",
      "lat":49.8635,
      "lng":6.788167,
      "alt":665,
      "tz":"Europe/Berlin"
    },{
      "name":"Speyer",
      "city":"Speyer, Germany",
      "iata_faa":"ZQC",
      "icao":"EDRY",
      "lat":49.302776,
      "lng":8.451195,
      "alt":312,
      "tz":"Europe/Berlin"
    },{
      "name":"Zweibrucken",
      "city":"Zweibruecken, Germany",
      "icao":"EDRZ",
      "lat":49.209525,
      "lng":7.400647,
      "alt":1133,
      "tz":"Europe/Berlin"
    },{
      "name":"Donaueschingen Villingen",
      "city":"Donaueschingen, Germany",
      "iata_faa":"ZQL",
      "icao":"EDTD",
      "lat":47.973331,
      "lng":8.522223,
      "alt":2231,
      "tz":"Europe/Berlin"
    },{
      "name":"Freiburg",
      "city":"Freiburg, Germany",
      "icao":"EDTF",
      "lat":48.022653,
      "lng":7.832583,
      "alt":799,
      "tz":"Europe/Berlin"
    },{
      "name":"Mengen Hohentengen",
      "city":"Mengen, Germany",
      "icao":"EDTM",
      "lat":48.053833,
      "lng":9.372833,
      "alt":1820,
      "tz":"Europe/Berlin"
    },{
      "name":"Schwabisch Hall",
      "city":"Schwaebisch Hall, Germany",
      "icao":"EDTY",
      "lat":49.118317,
      "lng":9.783956,
      "alt":1311,
      "tz":"Europe/Berlin"
    },{
      "name":"Finsterwalde Schacksdorf",
      "city":"Soest, Germany",
      "icao":"EDUS",
      "lat":51.6075,
      "lng":13.738,
      "alt":399,
      "tz":"Europe/Berlin"
    },{
      "name":"Braunschweig Wolfsburg",
      "city":"Braunschweig, Germany",
      "iata_faa":"BWE",
      "icao":"EDVE",
      "lat":52.319167,
      "lng":10.556111,
      "alt":295,
      "tz":"Europe/Berlin"
    },{
      "name":"Kassel Calden",
      "city":"Kassel, Germany",
      "iata_faa":"KSF",
      "icao":"EDVK",
      "lat":51.408394,
      "lng":9.377631,
      "alt":908,
      "tz":"Europe/Berlin"
    },{
      "name":"Hildesheim",
      "city":"Hildesheim, Germany",
      "icao":"EDVM",
      "lat":52.179833,
      "lng":9.945667,
      "alt":293,
      "tz":"Europe/Berlin"
    },{
      "name":"Bremerhaven",
      "city":"Bremerhaven, Germany",
      "iata_faa":"BRV",
      "icao":"EDWB",
      "lat":53.507081,
      "lng":8.572878,
      "alt":11,
      "tz":"Europe/Berlin"
    },{
      "name":"Emden",
      "city":"Emden, Germany",
      "iata_faa":"EME",
      "icao":"EDWE",
      "lat":53.391186,
      "lng":7.227408,
      "alt":2,
      "tz":"Europe/Berlin"
    },{
      "name":"Leer Papenburg",
      "city":"Leer, Germany",
      "icao":"EDWF",
      "lat":53.271592,
      "lng":7.442344,
      "alt":3,
      "tz":"Europe/Berlin"
    },{
      "name":"Wilhelmshaven Mariensiel",
      "city":"Wilhelmshaven, Germany",
      "iata_faa":"WVN",
      "icao":"EDWI",
      "lat":53.504833,
      "lng":8.053333,
      "alt":16,
      "tz":"Europe/Berlin"
    },{
      "name":"Borkum",
      "city":"Borkum, Germany",
      "iata_faa":"BMK",
      "icao":"EDWR",
      "lat":53.5955,
      "lng":6.709167,
      "alt":3,
      "tz":"Europe/Berlin"
    },{
      "name":"Norderney",
      "city":"Norderney, Germany",
      "iata_faa":"NRD",
      "icao":"EDWY",
      "lat":53.706822,
      "lng":7.230247,
      "alt":6,
      "tz":"Europe/Berlin"
    },{
      "name":"Flensburg Schaferhaus",
      "city":"Flensburg, Germany",
      "iata_faa":"FLF",
      "icao":"EDXF",
      "lat":54.771772,
      "lng":9.378214,
      "alt":130,
      "tz":"Europe/Berlin"
    },{
      "name":"Rendsburg Schachtholm",
      "city":"Rendsburg, Germany",
      "icao":"EDXR",
      "lat":54.220928,
      "lng":9.600803,
      "alt":23,
      "tz":"Europe/Berlin"
    },{
      "name":"Westerland Sylt",
      "city":"Westerland, Germany",
      "iata_faa":"GWT",
      "icao":"EDXW",
      "lat":54.91325,
      "lng":8.340472,
      "alt":51,
      "tz":"Europe/Berlin"
    },{
      "name":"Amari",
      "city":"Armari Air Force Base, Estonia",
      "icao":"EEEI",
      "lat":59.260286,
      "lng":24.208467,
      "alt":65,
      "tz":"Europe/Tallinn"
    },{
      "name":"Kardla",
      "city":"Kardla, Estonia",
      "iata_faa":"KDL",
      "icao":"EEKA",
      "lat":58.990756,
      "lng":22.830733,
      "alt":18,
      "tz":"Europe/Tallinn"
    },{
      "name":"Kuressaare",
      "city":"Kuressaare, Estonia",
      "iata_faa":"URE",
      "icao":"EEKE",
      "lat":58.229883,
      "lng":22.509494,
      "alt":14,
      "tz":"Europe/Tallinn"
    },{
      "name":"Parnu",
      "city":"Parnu, Estonia",
      "iata_faa":"EPU",
      "icao":"EEPU",
      "lat":58.419044,
      "lng":24.472819,
      "alt":47,
      "tz":"Europe/Tallinn"
    },{
      "name":"Tallinn",
      "city":"Tallinn-ulemiste International, Estonia",
      "iata_faa":"TLL",
      "icao":"EETN",
      "lat":59.413317,
      "lng":24.832844,
      "alt":131,
      "tz":"Europe/Tallinn"
    },{
      "name":"Tartu",
      "city":"Tartu, Estonia",
      "iata_faa":"TAY",
      "icao":"EETU",
      "lat":58.307461,
      "lng":26.690428,
      "alt":219,
      "tz":"Europe/Tallinn"
    },{
      "name":"Enontekio",
      "city":"Enontekio, Finland",
      "iata_faa":"ENF",
      "icao":"EFET",
      "lat":68.362586,
      "lng":23.424322,
      "alt":1005,
      "tz":"Europe/Helsinki"
    },{
      "name":"Eura",
      "city":"Eura, Finland",
      "icao":"EFEU",
      "lat":61.116112,
      "lng":22.201389,
      "alt":259,
      "tz":"Europe/Helsinki"
    },{
      "name":"Halli",
      "city":"Halli, Finland",
      "iata_faa":"KEV",
      "icao":"EFHA",
      "lat":61.85605,
      "lng":24.7866,
      "alt":479,
      "tz":"Europe/Helsinki"
    },{
      "name":"Helsinki Malmi",
      "city":"Helsinki, Finland",
      "iata_faa":"HEM",
      "icao":"EFHF",
      "lat":60.254558,
      "lng":25.042828,
      "alt":57,
      "tz":"Europe/Helsinki"
    },{
      "name":"Helsinki Vantaa",
      "city":"Helsinki, Finland",
      "iata_faa":"HEL",
      "icao":"EFHK",
      "lat":60.317222,
      "lng":24.963333,
      "alt":179,
      "tz":"Europe/Helsinki"
    },{
      "name":"Hameenkyro",
      "city":"Hameenkyro, Finland",
      "icao":"EFHM",
      "lat":61.689656,
      "lng":23.073744,
      "alt":449,
      "tz":"Europe/Helsinki"
    },{
      "name":"Hanko",
      "city":"Hanko, Finland",
      "icao":"EFHN",
      "lat":59.848864,
      "lng":23.083583,
      "alt":20,
      "tz":"Europe/Helsinki"
    },{
      "name":"Hyvinkaa",
      "city":"Hyvinkaa, Finland",
      "iata_faa":"HYV",
      "icao":"EFHV",
      "lat":60.654444,
      "lng":24.881111,
      "alt":430,
      "tz":"Europe/Helsinki"
    },{
      "name":"Kiikala",
      "city":"Kikala, Finland",
      "icao":"EFIK",
      "lat":60.462502,
      "lng":23.6525,
      "alt":381,
      "tz":"Europe/Helsinki"
    },{
      "name":"Immola",
      "city":"Immola, Finland",
      "icao":"EFIM",
      "lat":61.249172,
      "lng":28.903711,
      "alt":338,
      "tz":"Europe/Helsinki"
    },{
      "name":"Kitee",
      "city":"Kitee, Finland",
      "icao":"EFIT",
      "lat":62.166111,
      "lng":30.073611,
      "alt":364,
      "tz":"Europe/Helsinki"
    },{
      "name":"Ivalo",
      "city":"Ivalo, Finland",
      "iata_faa":"IVL",
      "icao":"EFIV",
      "lat":68.607269,
      "lng":27.405328,
      "alt":481,
      "tz":"Europe/Helsinki"
    },{
      "name":"Joensuu",
      "city":"Joensuu, Finland",
      "iata_faa":"JOE",
      "icao":"EFJO",
      "lat":62.662906,
      "lng":29.60755,
      "alt":398,
      "tz":"Europe/Helsinki"
    },{
      "name":"Jyvaskyla",
      "city":"Jyvaskyla, Finland",
      "iata_faa":"JYV",
      "icao":"EFJY",
      "lat":62.399453,
      "lng":25.678253,
      "alt":459,
      "tz":"Europe/Helsinki"
    },{
      "name":"Kauhava",
      "city":"Kauhava, Finland",
      "iata_faa":"KAU",
      "icao":"EFKA",
      "lat":63.127078,
      "lng":23.051442,
      "alt":151,
      "tz":"Europe/Helsinki"
    },{
      "name":"Kemi Tornio",
      "city":"Kemi, Finland",
      "iata_faa":"KEM",
      "icao":"EFKE",
      "lat":65.781889,
      "lng":24.5991,
      "alt":61,
      "tz":"Europe/Helsinki"
    },{
      "name":"Kajaani",
      "city":"Kajaani, Finland",
      "iata_faa":"KAJ",
      "icao":"EFKI",
      "lat":64.285472,
      "lng":27.692414,
      "alt":483,
      "tz":"Europe/Helsinki"
    },{
      "name":"Kauhajoki",
      "city":"Kauhajoki, Finland",
      "icao":"EFKJ",
      "lat":62.462502,
      "lng":22.393055,
      "alt":407,
      "tz":"Europe/Helsinki"
    },{
      "name":"Kruunupyy",
      "city":"Kruunupyy, Finland",
      "iata_faa":"KOK",
      "icao":"EFKK",
      "lat":63.721172,
      "lng":23.143131,
      "alt":84,
      "tz":"Europe/Helsinki"
    },{
      "name":"Kemijarvi",
      "city":"Kemijarvi, Finland",
      "icao":"EFKM",
      "lat":66.712883,
      "lng":27.156786,
      "alt":692,
      "tz":"Europe/Helsinki"
    },{
      "name":"Kuusamo",
      "city":"Kuusamo, Finland",
      "iata_faa":"KAO",
      "icao":"EFKS",
      "lat":65.987575,
      "lng":29.239381,
      "alt":866,
      "tz":"Europe/Helsinki"
    },{
      "name":"Kittila",
      "city":"Kittila, Finland",
      "iata_faa":"KTT",
      "icao":"EFKT",
      "lat":67.701022,
      "lng":24.84685,
      "alt":644,
      "tz":"Europe/Helsinki"
    },{
      "name":"Kuopio",
      "city":"Kuopio, Finland",
      "iata_faa":"KUO",
      "icao":"EFKU",
      "lat":63.00715,
      "lng":27.797756,
      "alt":323,
      "tz":"Europe/Helsinki"
    },{
      "name":"Lahti Vesivehmaa",
      "city":"Vesivehmaa, Finland",
      "icao":"EFLA",
      "lat":61.144158,
      "lng":25.693508,
      "alt":502,
      "tz":"Europe/Helsinki"
    },{
      "name":"Lappeenranta",
      "city":"Lappeenranta, Finland",
      "iata_faa":"LPP",
      "icao":"EFLP",
      "lat":61.044553,
      "lng":28.144397,
      "alt":349,
      "tz":"Europe/Helsinki"
    },{
      "name":"Mariehamn",
      "city":"Mariehamn, Finland",
      "iata_faa":"MHQ",
      "icao":"EFMA",
      "lat":60.122203,
      "lng":19.898156,
      "alt":17,
      "tz":"Europe/Mariehamn"
    },{
      "name":"Menkijarvi",
      "city":"Menkijarvi, Finland",
      "icao":"EFME",
      "lat":62.946667,
      "lng":23.518889,
      "alt":331,
      "tz":"Europe/Helsinki"
    },{
      "name":"Mikkeli",
      "city":"Mikkeli, Finland",
      "iata_faa":"MIK",
      "icao":"EFMI",
      "lat":61.6866,
      "lng":27.201794,
      "alt":329,
      "tz":"Europe/Helsinki"
    },{
      "name":"Nummela",
      "city":"Nummela, Finland",
      "icao":"EFNU",
      "lat":60.333889,
      "lng":24.296389,
      "alt":367,
      "tz":"Europe/Helsinki"
    },{
      "name":"Oulu",
      "city":"Oulu, Finland",
      "iata_faa":"OUL",
      "icao":"EFOU",
      "lat":64.930061,
      "lng":25.354564,
      "alt":47,
      "tz":"Europe/Helsinki"
    },{
      "name":"Piikajarvi",
      "city":"Piikajarvi, Finland",
      "icao":"EFPI",
      "lat":61.245558,
      "lng":22.193356,
      "alt":148,
      "tz":"Europe/Helsinki"
    },{
      "name":"Pori",
      "city":"Pori, Finland",
      "iata_faa":"POR",
      "icao":"EFPO",
      "lat":61.461686,
      "lng":21.799983,
      "alt":44,
      "tz":"Europe/Helsinki"
    },{
      "name":"Pudasjarvi",
      "city":"Pudasjarvi, Finland",
      "icao":"EFPU",
      "lat":65.402222,
      "lng":26.946944,
      "alt":397,
      "tz":"Europe/Helsinki"
    },{
      "name":"Pyhasalmi",
      "city":"Pyhasalmi, Finland",
      "icao":"EFPY",
      "lat":63.731917,
      "lng":25.926306,
      "alt":528,
      "tz":"Europe/Helsinki"
    },{
      "name":"Raahe Pattijoki",
      "city":"Pattijoki, Finland",
      "icao":"EFRH",
      "lat":64.688056,
      "lng":24.695833,
      "alt":118,
      "tz":"Europe/Helsinki"
    },{
      "name":"Rantasalmi",
      "city":"Rantasalmi, Finland",
      "icao":"EFRN",
      "lat":62.065481,
      "lng":28.356494,
      "alt":292,
      "tz":"Europe/Helsinki"
    },{
      "name":"Rovaniemi",
      "city":"Rovaniemi, Finland",
      "iata_faa":"RVN",
      "icao":"EFRO",
      "lat":66.564822,
      "lng":25.830411,
      "alt":642,
      "tz":"Europe/Helsinki"
    },{
      "name":"Rayskala",
      "city":"Rayskala, Finland",
      "icao":"EFRY",
      "lat":60.744722,
      "lng":24.107778,
      "alt":407,
      "tz":"Europe/Helsinki"
    },{
      "name":"Savonlinna",
      "city":"Savonlinna, Finland",
      "iata_faa":"SVL",
      "icao":"EFSA",
      "lat":61.943064,
      "lng":28.945136,
      "alt":311,
      "tz":"Europe/Helsinki"
    },{
      "name":"Selanpaa",
      "city":"Selanpaa, Finland",
      "icao":"EFSE",
      "lat":61.062389,
      "lng":26.798861,
      "alt":417,
      "tz":"Europe/Helsinki"
    },{
      "name":"Sodankyla",
      "city":"Sodankyla, Finland",
      "iata_faa":"SOT",
      "icao":"EFSO",
      "lat":67.395033,
      "lng":26.619133,
      "alt":602,
      "tz":"Europe/Helsinki"
    },{
      "name":"Tampere Pirkkala",
      "city":"Tampere, Finland",
      "iata_faa":"TMP",
      "icao":"EFTP",
      "lat":61.414147,
      "lng":23.604392,
      "alt":390,
      "tz":"Europe/Helsinki"
    },{
      "name":"Teisko",
      "city":"Teisko, Finland",
      "icao":"EFTS",
      "lat":61.77335,
      "lng":24.027006,
      "alt":515,
      "tz":"Europe/Helsinki"
    },{
      "name":"Turku",
      "city":"Turku, Finland",
      "iata_faa":"TKU",
      "icao":"EFTU",
      "lat":60.514142,
      "lng":22.262808,
      "alt":161,
      "tz":"Europe/Helsinki"
    },{
      "name":"Utti",
      "city":"Utti, Finland",
      "iata_faa":"QVY",
      "icao":"EFUT",
      "lat":60.896394,
      "lng":26.938353,
      "alt":339,
      "tz":"Europe/Helsinki"
    },{
      "name":"Vaasa",
      "city":"Vaasa, Finland",
      "iata_faa":"VAA",
      "icao":"EFVA",
      "lat":63.05065,
      "lng":21.762175,
      "alt":19,
      "tz":"Europe/Helsinki"
    },{
      "name":"Varkaus",
      "city":"Varkaus, Finland",
      "iata_faa":"VRK",
      "icao":"EFVR",
      "lat":62.171111,
      "lng":27.868611,
      "alt":286,
      "tz":"Europe/Helsinki"
    },{
      "name":"Ylivieska",
      "city":"Ylivieska-raudaskyla, Finland",
      "icao":"EFYL",
      "lat":64.060547,
      "lng":24.715953,
      "alt":252,
      "tz":"Europe/Helsinki"
    },{
      "name":"Belfast Intl",
      "city":"Belfast, United Kingdom",
      "iata_faa":"BFS",
      "icao":"EGAA",
      "lat":54.6575,
      "lng":-6.215833,
      "alt":268,
      "tz":"Europe/London"
    },{
      "name":"St Angelo",
      "city":"Enniskillen, United Kingdom",
      "iata_faa":"ENK",
      "icao":"EGAB",
      "lat":54.398889,
      "lng":-7.651667,
      "alt":155,
      "tz":"Europe/London"
    },{
      "name":"Belfast City",
      "city":"Belfast, United Kingdom",
      "iata_faa":"BHD",
      "icao":"EGAC",
      "lat":54.618056,
      "lng":-5.8725,
      "alt":15,
      "tz":"Europe/London"
    },{
      "name":"City of Derry",
      "city":"Londonderry, United Kingdom",
      "iata_faa":"LDY",
      "icao":"EGAE",
      "lat":55.042778,
      "lng":-7.161111,
      "alt":22,
      "tz":"Europe/London"
    },{
      "name":"Birmingham",
      "city":"Birmingham, United Kingdom",
      "iata_faa":"BHX",
      "icao":"EGBB",
      "lat":52.453856,
      "lng":-1.748028,
      "alt":327,
      "tz":"Europe/London"
    },{
      "name":"Coventry",
      "city":"Coventry, United Kingdom",
      "iata_faa":"CVT",
      "icao":"EGBE",
      "lat":52.369722,
      "lng":-1.479722,
      "alt":267,
      "tz":"Europe/London"
    },{
      "name":"Leicester",
      "city":"Leicester, United Kingdom",
      "icao":"EGBG",
      "lat":52.607778,
      "lng":-1.031944,
      "alt":469,
      "tz":"Europe/London"
    },{
      "name":"Gloucestershire",
      "city":"Golouchestershire, United Kingdom",
      "iata_faa":"GLO",
      "icao":"EGBJ",
      "lat":51.894167,
      "lng":-2.167222,
      "alt":101,
      "tz":"Europe/London"
    },{
      "name":"Wolverhampton",
      "city":"Halfpenny Green, United Kingdom",
      "icao":"EGBO",
      "lat":52.5175,
      "lng":-2.259444,
      "alt":283,
      "tz":"Europe/London"
    },{
      "name":"Kemble",
      "city":"Pailton, United Kingdom",
      "icao":"EGBP",
      "lat":51.668056,
      "lng":-2.056944,
      "alt":433,
      "tz":"Europe/London"
    },{
      "name":"Turweston",
      "city":"Turweston, United Kingdom",
      "icao":"EGBT",
      "lat":52.040833,
      "lng":-1.095556,
      "alt":448,
      "tz":"Europe/London"
    },{
      "name":"Wellesbourne Mountford",
      "city":"Wellesbourne, United Kingdom",
      "icao":"EGBW",
      "lat":52.192222,
      "lng":-1.614444,
      "alt":159,
      "tz":"Europe/London"
    },{
      "name":"Manchester",
      "city":"Manchester, United Kingdom",
      "iata_faa":"MAN",
      "icao":"EGCC",
      "lat":53.353744,
      "lng":-2.27495,
      "alt":257,
      "tz":"Europe/London"
    },{
      "name":"Manchester Woodford",
      "city":"Woodfort, United Kingdom",
      "icao":"EGCD",
      "lat":53.338056,
      "lng":-2.148889,
      "alt":295,
      "tz":"Europe/London"
    },{
      "name":"Chivenor",
      "city":"Chivenor, United Kingdom",
      "icao":"EGDC",
      "lat":51.087167,
      "lng":-4.150339,
      "alt":27,
      "tz":"Europe/London"
    },{
      "name":"St Mawgan",
      "city":"Newquai, United Kingdom",
      "iata_faa":"NQY",
      "icao":"EGDG",
      "lat":50.440558,
      "lng":-4.995408,
      "alt":390,
      "tz":"Europe/London"
    },{
      "name":"Lyneham",
      "city":"Lyneham, United Kingdom",
      "iata_faa":"LYE",
      "icao":"EGDL",
      "lat":51.505144,
      "lng":-1.993428,
      "alt":513,
      "tz":"Europe/London"
    },{
      "name":"Boscombe Down",
      "city":"Boscombe Down, United Kingdom",
      "icao":"EGDM",
      "lat":51.152189,
      "lng":-1.747414,
      "alt":407,
      "tz":"Europe/London"
    },{
      "name":"Culdrose",
      "city":"Culdrose, United Kingdom",
      "icao":"EGDR",
      "lat":50.086092,
      "lng":-5.255711,
      "alt":267,
      "tz":"Europe/London"
    },{
      "name":"St Athan",
      "city":"St. Athan, United Kingdom",
      "icao":"EGDX",
      "lat":51.404811,
      "lng":-3.43575,
      "alt":163,
      "tz":"Europe/London"
    },{
      "name":"Yeovilton",
      "city":"Yeovilton, United Kingdom",
      "iata_faa":"YEO",
      "icao":"EGDY",
      "lat":51.009358,
      "lng":-2.638819,
      "alt":75,
      "tz":"Europe/London"
    },{
      "name":"Haverfordwest",
      "city":"Haverfordwest, United Kingdom",
      "icao":"EGFE",
      "lat":51.833056,
      "lng":-4.961111,
      "alt":159,
      "tz":"Europe/London"
    },{
      "name":"Cardiff",
      "city":"Cardiff, United Kingdom",
      "iata_faa":"CWL",
      "icao":"EGFF",
      "lat":51.396667,
      "lng":-3.343333,
      "alt":220,
      "tz":"Europe/London"
    },{
      "name":"Swansea",
      "city":"Swansea, United Kingdom",
      "iata_faa":"SWS",
      "icao":"EGFH",
      "lat":51.605333,
      "lng":-4.067833,
      "alt":299,
      "tz":"Europe/London"
    },{
      "name":"Bristol",
      "city":"Bristol, United Kingdom",
      "iata_faa":"BRS",
      "icao":"EGGD",
      "lat":51.382669,
      "lng":-2.719089,
      "alt":622,
      "tz":"Europe/London"
    },{
      "name":"Liverpool",
      "city":"Liverpool, United Kingdom",
      "iata_faa":"LPL",
      "icao":"EGGP",
      "lat":53.333611,
      "lng":-2.849722,
      "alt":80,
      "tz":"Europe/London"
    },{
      "name":"Luton",
      "city":"London, United Kingdom",
      "iata_faa":"LTN",
      "icao":"EGGW",
      "lat":51.874722,
      "lng":-0.368333,
      "alt":526,
      "tz":"Europe/London"
    },{
      "name":"Plymouth",
      "city":"Plymouth, United Kingdom",
      "iata_faa":"PLH",
      "icao":"EGHD",
      "lat":50.422778,
      "lng":-4.105833,
      "alt":476,
      "tz":"Europe/London"
    },{
      "name":"Bournemouth",
      "city":"Bournemouth, United Kingdom",
      "iata_faa":"BOH",
      "icao":"EGHH",
      "lat":50.78,
      "lng":-1.8425,
      "alt":38,
      "tz":"Europe/London"
    },{
      "name":"Southampton",
      "city":"Southampton, United Kingdom",
      "iata_faa":"SOU",
      "icao":"EGHI",
      "lat":50.950261,
      "lng":-1.356803,
      "alt":44,
      "tz":"Europe/London"
    },{
      "name":"Lasham",
      "city":"Lasham, United Kingdom",
      "iata_faa":"QLA",
      "icao":"EGHL",
      "lat":51.187167,
      "lng":-1.0335,
      "alt":618,
      "tz":"Europe/London"
    },{
      "name":"Alderney",
      "city":"Alderney, Guernsey",
      "iata_faa":"ACI",
      "icao":"EGJA",
      "lat":49.706111,
      "lng":-2.214722,
      "alt":290,
      "tz":"Europe/Guernsey"
    },{
      "name":"Guernsey",
      "city":"Guernsey, Guernsey",
      "iata_faa":"GCI",
      "icao":"EGJB",
      "lat":49.434956,
      "lng":-2.601969,
      "alt":336,
      "tz":"Europe/Guernsey"
    },{
      "name":"Jersey",
      "city":"Jersey, Jersey",
      "iata_faa":"JER",
      "icao":"EGJJ",
      "lat":49.207947,
      "lng":-2.195508,
      "alt":277,
      "tz":"Europe/Jersey"
    },{
      "name":"Shoreham",
      "city":"Shoreham By Sea, United Kingdom",
      "iata_faa":"ESH",
      "icao":"EGKA",
      "lat":50.835556,
      "lng":-0.297222,
      "alt":7,
      "tz":"Europe/London"
    },{
      "name":"Biggin Hill",
      "city":"Biggin Hill, United Kingdom",
      "iata_faa":"BQH",
      "icao":"EGKB",
      "lat":51.330833,
      "lng":0.0325,
      "alt":598,
      "tz":"Europe/London"
    },{
      "name":"Gatwick",
      "city":"London, United Kingdom",
      "iata_faa":"LGW",
      "icao":"EGKK",
      "lat":51.148056,
      "lng":-0.190278,
      "alt":202,
      "tz":"Europe/London"
    },{
      "name":"City",
      "city":"London, United Kingdom",
      "iata_faa":"LCY",
      "icao":"EGLC",
      "lat":51.505278,
      "lng":0.055278,
      "alt":19,
      "tz":"Europe/London"
    },{
      "name":"Farnborough",
      "city":"Farnborough, United Kingdom",
      "iata_faa":"FAB",
      "icao":"EGLF",
      "lat":51.275833,
      "lng":-0.776333,
      "alt":238,
      "tz":"Europe/London"
    },{
      "name":"Chalgrove",
      "city":"Chalsgrove, United Kingdom",
      "icao":"EGLJ",
      "lat":51.676111,
      "lng":-1.080833,
      "alt":240,
      "tz":"Europe/London"
    },{
      "name":"Blackbushe",
      "city":"Blackbushe, United Kingdom",
      "iata_faa":"BBS",
      "icao":"EGLK",
      "lat":51.323889,
      "lng":-0.8475,
      "alt":325,
      "tz":"Europe/London"
    },{
      "name":"Heathrow",
      "city":"London, United Kingdom",
      "iata_faa":"LHR",
      "icao":"EGLL",
      "lat":51.4775,
      "lng":-0.461389,
      "alt":83,
      "tz":"Europe/London"
    },{
      "name":"Southend",
      "city":"Southend, United Kingdom",
      "iata_faa":"SEN",
      "icao":"EGMC",
      "lat":51.571389,
      "lng":0.695556,
      "alt":49,
      "tz":"Europe/London"
    },{
      "name":"Lydd",
      "city":"Lydd, United Kingdom",
      "iata_faa":"LYX",
      "icao":"EGMD",
      "lat":50.956111,
      "lng":0.939167,
      "alt":13,
      "tz":"Europe/London"
    },{
      "name":"Manston",
      "city":"Manston, United Kingdom",
      "iata_faa":"MSE",
      "icao":"EGMH",
      "lat":51.342222,
      "lng":1.346111,
      "alt":178,
      "tz":"Europe/London"
    },{
      "name":"Brough",
      "city":"Brough, United Kingdom",
      "icao":"EGNB",
      "lat":53.719667,
      "lng":-0.566333,
      "alt":12,
      "tz":"Europe/London"
    },{
      "name":"Carlisle",
      "city":"Carlisle, United Kingdom",
      "iata_faa":"CAX",
      "icao":"EGNC",
      "lat":54.9375,
      "lng":-2.809167,
      "alt":190,
      "tz":"Europe/London"
    },{
      "name":"Gamston",
      "city":"Repton, United Kingdom",
      "icao":"EGNE",
      "lat":53.280556,
      "lng":-0.951389,
      "alt":91,
      "tz":"Europe/London"
    },{
      "name":"Blackpool",
      "city":"Blackpool, United Kingdom",
      "iata_faa":"BLK",
      "icao":"EGNH",
      "lat":53.771667,
      "lng":-3.028611,
      "alt":34,
      "tz":"Europe/London"
    },{
      "name":"Humberside",
      "city":"Humberside, United Kingdom",
      "iata_faa":"HUY",
      "icao":"EGNJ",
      "lat":53.574444,
      "lng":-0.350833,
      "alt":121,
      "tz":"Europe/London"
    }
  ];


  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.LocData);
      }, 2000);
    });
  }
}
