 // Data
const circuits = [
    {
        id: 1,
        name: "Albert Park Circuit",
        location: "Melbourne, Australia",
        lat: -37.8497,
        lng: 144.9680,
        length: "5.303 km",
        image: "https://f1chronicle.com/wp-content/uploads/2023/11/M360335.webp",
        firstGrandPrix: 1996,
        numberOfLaps: 58
        
        
    },
    {
        id: 2,
        name: "Bahrain International Circuit",
        location: "Sakhir, Bahrain",
        lat: 26.0325,
        lng: 50.5106,
        length: "5.412 km",
        image: "https://f1chronicle.com/wp-content/uploads/2020/11/Bahrain_Track_Map_ENG-1920x1280.jpg",
        firstGrandPrix: 2004,
        numberOfLaps: 57
        
      },
      {
        id: 3,
        name: "Jeddah Corniche Circuit",
        location: "Jeddah, Saudi Arabia",
        lat: 21.6319,
        lng: 39.1044,
        length: "6.174 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Middle%20East/Saudi%20Arabia/Jeddah/Jeddah-Street-Circuit-2022.png",
        firstGrandPrix: "missing info",
        numberOfLaps: 50
      },
      {
        id: 4,
        name: "Autodromo Enzo e Dino Ferrari",
        location: "Imola, Italy",
        lat: 44.3439,
        lng: 11.7167,
        length: "4.909 km",
        image: "https://f1chronicle.com/wp-content/uploads/2020/10/MF1_201027_IMOLA_TRACK_MAP_LIGHT_16x9_ENG-812x497.jpg",
        firstGrandPrix: 1980,
        numberOfLaps: 63
      },
      {
        id: 5,
        name: "Miami International Autodrome",
        location: "Miami, USA",
        lat: 25.9581,
        lng: -80.2389,
        length: "5.412 km",
        image: "https://www.racingcircuits.info/assets/images/maps/North%20America/USA/Miami%20International%20Autodrome/Miami-International-Autodrome-2022.png",
        firstGrandPrix: 2022,
        numberOfLaps: 57
      },
      {
        id: 6,
        name: "Circuit de Monaco",
        location: "Monte Carlo, Monaco",
        lat: 43.734722,
        lng: 7.420556,
        length: "3.337 km",
        image: "https://f1chronicle.com/wp-content/uploads/2020/09/Monaco-4K-1920x1080.webp",
        firstGrandPrix: 1950,
        numberOfLaps: 78
      },
      {
        id: 7,
        name: "Circuit Gilles Villeneuve",
        location: "Montreal, Canada",
        lat: 45.5017,
        lng: -73.5291,
        length: "4.361 km",
        image: "https://f1chronicle.com/wp-content/uploads/2023/11/M375764.webp",
        firstGrandPrix: 1978,
        numberOfLaps: 70
      },
      {
        id: 8,
        name: "Circuit de Barcelona-Catalunya",
        location: "Barcelona, Spain",
        lat: 41.5691,
        lng: 2.2611,
        length: "4.675 km",
        image: "https://f1chronicle.com/wp-content/uploads/2020/09/Spain-1-812x574.jpg",
        firstGrandPrix: 1991,
        numberOfLaps: 66
      },
      {
        id: 9,
        name: "Red Bull Ring",
        location: "Spielberg, Austria",
        lat: 47.2197,
        lng: 14.7647,
        length: "4.318 km",
        image: "https://f1chronicle.com/wp-content/uploads/2020/09/Austria-1-812x526.jpg",
        firstGrandPrix: 1970,
        numberOfLaps: 71
      },
      {
        id: 10,
        name: "Silverstone Circuit",
        location: "Silverstone, UK",
        lat: 52.0786,
        lng: -1.0169,
        length: "5.891 km",
        image: "https://f1chronicle.com/wp-content/uploads/2020/09/Britain-812x574.jpg",
        firstGrandPrix: 1950,
        numberOfLaps: 52
      },
      {
        id: 11,
        name: "Hungaroring",
        location: "Budapest, Hungary",
        lat: 47.5830,
        lng: 19.2526,
        length: "4.381 km",
        image: "https://f1chronicle.com/wp-content/uploads/2020/09/Hungary-812x574.jpg",
        firstGrandPrix: 1986,
        numberOfLaps: 70
      },
      {
        id: 12,
        name: "Circuit de Spa-Francorchamps",
        location: "Stavelot, Belgium",
        lat: 50.4425,
        lng: 5.9700,
        length: "7.004 km",
        image: "https://f1chronicle.com/wp-content/uploads/2020/09/Belgium-1-812x574.jpg",
        firstGrandPrix: 1950,
        numberOfLaps: 44
      },
      {
        id: 13,
        name: "Circuit Zandvoort",
        location: "Zandvoort, Netherlands",
        lat: 52.3888,
        lng: 4.5436,
        length: "4.259 km",
        image: "https://f1chronicle.com/wp-content/uploads/2023/11/M389393.webp",
        firstGrandPrix: 1952,
        numberOfLaps: 72
      },
      {
        id: 14,
        name: "Autodromo Nazionale Monza",
        location: "Monza, Italy",
        lat: 45.6223,
        lng: 9.2859,
        length: "5.793 km",
        image: "https://f1chronicle.com/wp-content/uploads/2020/09/Italy-1-812x574.jpg",
        firstGrandPrix: 1950,
        numberOfLaps: 53
      },
      {
        id: 15,
        name: "Baku City Circuit",
        location: "Baku, Azerbaijan",
        lat: 40.3725,
        lng: 49.853333,
        length: "6.003 km",
        image: "https://f1chronicle.com/wp-content/uploads/2023/11/M363105.webp",
        firstGrandPrix: 2016,
        numberOfLaps: 51
      },
      {
        id: 16,
        name: "Marina Bay Street Circuit",
        location: "Singapore",
        lat: 1.2914,
        lng: 103.8644,
        length: "4.940 km",
        image: "https://f1chronicle.com/wp-content/uploads/2023/11/M392829.webp",
        firstGrandPrix: 2008,
        numberOfLaps: 62
      },
      {
        id: 17,
        name: "Suzuka Circuit",
        location: "Suzuka, Japan",
        lat: 34.8431,
        lng: 136.5409,
        length: "5.807 km",
        image: "https://f1chronicle.com/wp-content/uploads/2023/11/M339144.webp",
        firstGrandPrix: 1987,
        numberOfLaps: 53
      },
      {
        id: 18,
        name: "Circuit of the Americas",
        location: "Austin, USA",
        lat: 30.1328,
        lng: -97.6411,
        length: "5.513 km",
        image: "https://f1chronicle.com/wp-content/uploads/2023/10/M399100-1.webp",
        firstGrandPrix: 2012,
        numberOfLaps: 56
      },
      {
        id: 19,
        name: "Autódromo Hermanos Rodríguez",
        location: "Mexico City, Mexico",
        lat: 19.4042,
        lng: -99.0907,
        length: "4.304 km",
        image: "https://f1chronicle.com/wp-content/uploads/2023/11/M401315.webp",
        firstGrandPrix: 1963,
        numberOfLaps: 71
      },
      {
        id: 20,
        name: "Interlagos Circuit",
        location: "São Paulo, Brazil",
        lat: -23.7036,
        lng: -46.6997,
        length: "4.309 km",
        image: "https://www.racingcircuits.info/assets/images/maps/South%20America/Brazil/Interlagos/Interlagos--2017.png",
        firstGrandPrix: "missing info",
        numberOfLaps: 71
      },
      {
        id: 21,
        name: "Las Vegas Strip Circuit",
        location: "Las Vegas, USA",
        lat: 36.1147,
        lng: -115.1728,
        length: "6.120 km",
        image: "https://f1chronicle.com/wp-content/uploads/2023/11/Las-Vegas-Strip-Circuit.webp",
        firstGrandPrix: 2023,
        numberOfLaps: 50
      },
      {
        id: 22,
        name: "Lusail International Circuit",
        location: "Lusail, Qatar",
        lat: 25.4880,
        lng: 51.4542,
        length: "5.380 km",
        image: "https://f1chronicle.com/wp-content/uploads/2023/11/M396229.webp",
        firstGrandPrix: 2021,
        numberOfLaps: 57
      },
      {
        id: 23,
        name: "Yas Marina Circuit",
        location: "Abu Dhabi, UAE",
        lat: 24.4672,
        lng: 54.6031,
        length: "5.281 km",
        image: "https://f1chronicle.com/wp-content/uploads/2020/12/Yas-Marina-Circuit-1920x1080.jpg",
        firstGrandPrix: "missing info",
        numberOfLaps: 55
      },
      {
        id: 24,
        name: "Adelaide Street Circuit",
        location: "Adelaide, Australia",
        lat: -34.9328,
        lng: 138.6207,
        length: "3.780 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Australasia/Australia/Adelaide/Adelaide09.png",
        firstGrandPrix: "missing info",
        numberOfLaps: "missing info"
      },
      {
        id: 25,
        name: "Ain-Diab Circuit",
        location: "Casablanca, Morocco",
        lat: 33.5883,
        lng: -7.6603,
        length: "7.618 km",
        image: "https://static.wikia.nocookie.net/f1wikia/images/a/a4/Ain-Diab.svg/revision/latest/scale-to-width-down/1000?cb=20161205083136",
        firstGrandPrix: "missing info",
        numberOfLaps: "missing info"
      },
      {
        id: 26,
        name: "Autódromo Juan y Oscar Gálvez",
        location: "Buenos Aires, Argentina",
        lat: -34.6942,
        lng: -58.4546,
        length: "4.259 km",
        image: "https://www.racingcircuits.info/assets/images/maps/South%20America/Argentina/Buenos%20Aires/Buenos-Aires-5-1999.png",
        firstGrandPrix: "missing info",
        numberOfLaps: "missing info"
      },
      {
        id: 27,
        name: "AVUS",
        location: "Berlin, Germany",
        lat: 52.4986,
        lng: 13.2422,
        length: "8.300 km",
        image: "https://static.wikia.nocookie.net/f1wikia/images/6/6d/Circuit_AVUS.svg/revision/latest?cb=20160908132053",
        firstGrandPrix: "missing info",
        numberOfLaps: "missing info"
      },
      {
        id: 28,
        name: "Brands Hatch",
        location: "Kent, UK",
        lat: 51.3569,
        lng: 0.2614,
        length: "3.908 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/United%20Kingdom/Brands%20Hatch/Brands-HatchGP03.png",
        firstGrandPrix: "missing info",
        numberOfLaps: "missing info"
      },
      {
        id: 29,
        name: "Bugatti Circuit",
        location: "Le Mans, France",
        lat: 47.9561,
        lng: 0.2092,
        length: "4.185 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/France/Le%20Mans/Sarthe/Le-Mans-Sarthe15.png",
        firstGrandPrix: "missing info",
        numberOfLaps: "missing info"
      },
      {
        id: 30,
        name: "Caesars Palace Grand Prix Circuit",
        location: "Las Vegas, USA",
        lat: 36.1162,
        lng: -115.1745,
        length: "3.650 km",
        image: "https://www.racingcircuits.info/assets/images/maps/North%20America/USA/Caesar's%20Palace/Caesar's-Palace-1983.png",
        
      },
      // More circuits to reach 77 total
      {
        id: 31,
        name: "Circuit de Charade",
        location: "Clermont-Ferrand, France",
        lat: 45.7424,
        lng: 3.0393,
        length: "8.055 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/France/Charade/Charade89.png",
        
      },
      {
        id: 32,
        name: "Circuit Park Zandvoort",
        location: "Zandvoort, Netherlands",
        lat: 52.3889,
        lng: 4.5439,
        length: "4.252 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Netherlands/Zandvoort/Zandvoort20.png",
      },
      {
        id: 33,
        name: "Dallas Fair Park",
        location: "Dallas, USA",
        lat: 32.7876,
        lng: -96.7624,
        length: "3.901 km",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Circuit_Fair_Park_Dallas.svg/1280px-Circuit_Fair_Park_Dallas.svg.png",
      },
      {
        id: 34,
        name: "Detroit Street Circuit",
        location: "Detroit, USA",
        lat: 42.3293,
        lng: -83.0374,
        length: "4.023 km",
        image: "https://www.racingcircuits.info/assets/images/maps/North%20America/USA/Detroit/Detroit-2023.png",
      },
      {
        id: 35,
        name: "Dijon-Prenois",
        location: "Dijon, France",
        lat: 47.3625,
        lng: 4.8989,
        length: "3.800 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/France/Dijon-Prenois/Dijon-Prenois76.png",
      },
      {
        id: 36,
        name: "Donington Park",
        location: "Leicestershire, UK",
        lat: 52.8303,
        lng: -1.3761,
        length: "4.020 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/United%20Kingdom/Donington%20Park/DoningtonPark10.png",
      },
      {
        id: 37,
        name: "Fuji Speedway",
        location: "Oyama, Japan",
        lat: 35.3728,
        lng: 138.9275,
        length: "4.563 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Asia/Japan/Fuji/Fuji05.png",
      },
      {
        id: 38,
        name: "Hockenheimring",
        location: "Hockenheim, Germany",
        lat: 49.3278,
        lng: 8.5667,
        length: "4.574 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Germany/Hockenheimring/Hockenheimring02.png",
      },
      {
        id: 39,
        name: "Jacarepaguá",
        location: "Rio de Janeiro, Brazil",
        lat: -22.9750,
        lng: -43.3958,
        length: "5.031 km",
        image: "https://www.racingcircuits.info/assets/images/maps/South%20America/Brazil/Jacarapagua/Jacarepagua10.png",
      },
      {
        id: 40,
        name: "Jarama Circuit",
        location: "Madrid, Spain",
        lat: 40.6167,
        lng: -3.5853,
        length: "3.850 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Spain/Jarama/Jarama90.png",
      },
      {
        id: 41,
        name: "Jerez Circuit",
        location: "Jerez de la Frontera, Spain",
        lat: 36.7083,
        lng: -6.0361,
        length: "4.428 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Spain/Jerez/Jerez-2019.png",
      },
      {
        id: 42,
        name: "Kyalami Grand Prix Circuit",
        location: "Midrand, South Africa",
        lat: -25.9972,
        lng: 28.0750,
        length: "4.529 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Africa/South%20Africa/Kyalami/Kyalami15.png",
      },
      {
        id: 43,
        name: "Long Beach Street Circuit",
        location: "Long Beach, USA",
        lat: 33.7650,
        lng: -118.1891,
        length: "3.167 km",
        image: "https://www.racingcircuits.info/assets/images/maps/North%20America/USA/Long%20Beach/LongBeach-01-14.png",
      },
      {
        id: 44,
        name: "Magny-Cours",
        location: "Nevers, France",
        lat: 46.8642,
        lng: 3.1614,
        length: "4.411 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/France/Magny-Cours/MagnyCours-03.png",
      },
      {
        id: 45,
        name: "Monsanto Park Circuit",
        location: "Lisbon, Portugal",
        lat: 38.7227,
        lng: -9.2044,
        length: "5.440 km",
        image: "https://static.wikia.nocookie.net/f1wikia/images/d/de/Circuit_Monsanto.png/revision/latest?cb=20180516214127",
      },
      {
        id: 46,
        name: "Montjuïc Circuit",
        location: "Barcelona, Spain",
        lat: 41.3688,
        lng: 2.1518,
        length: "3.790 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Spain/Montjuic/Montjuic1982.png",
      },
      {
        id: 47,
        name: "Mont-Tremblant",
        location: "Quebec, Canada",
        lat: 46.1879,
        lng: -74.6103,
        length: "4.265 km",
        image: "https://www.racingcircuits.info/assets/images/maps/North%20America/Canada/Mont%20Tremblant/Mont-Tremblant02.png",
      },
      {
        id: 48,
        name: "Mosport Park",
        location: "Ontario, Canada",
        lat: 44.0508,
        lng: -78.6785,
        length: "3.957 km",
        image: "https://www.racingcircuits.info/assets/images/maps/North%20America/Canada/Mosport/Mosport.png",
      },
      {
        id: 49,
        name: "Nivelles-Baulers",
        location: "Brussels, Belgium",
        lat: 50.6122,
        lng: 4.3258,
        length: "3.720 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Belgium/Nivelles-Baulers/Nivelles-Baulers-1974.png",
      },
      {
        id: 50,
        name: "Nürburgring",
        location: "Nürburg, Germany",
        lat: 50.3356,
        lng: 6.9473,
        length: "5.148 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Germany/Nurburgring/Nurburgring-GP+F1Chicane+Arena-03.png",
      },
      {
        id: 51,
        name: "Pedralbes Circuit",
        location: "Barcelona, Spain",
        lat: 41.3850,
        lng: 2.1200,
        length: "6.316 km",
        image: "https://static.wikia.nocookie.net/f1wikia/images/5/59/Circuit_Pedralbes.png/revision/latest?cb=20140716022819",
      },
      {
        id: 52,
        name: "Pescara Circuit",
        location: "Pescara, Italy",
        lat: 42.4547,
        lng: 14.1567,
        length: "25.800 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Italy/Pescara/Pescara1934-1961.png",
      },
      {
        id: 53,
        name: "Phoenix Street Circuit",
        location: "Phoenix, USA",
        lat: 33.4486,
        lng: -112.0773,
        length: "3.721 km",
        image: "https://static.wikia.nocookie.net/f1wikia/images/4/45/Phx_TrackMap.jpeg/revision/latest?cb=20170429211505",
      },
      {
        id: 54,
        name: "Porto Circuit",
        location: "Porto, Portugal",
        lat: 41.1579,
        lng: -8.6291,
        length: "7.407 km",
        image: "https://static.wikia.nocookie.net/f1wikia/images/e/ea/Boavista_%28Oporto%29.svg/revision/latest/scale-to-width-down/1000?cb=20170828071714",
      },
      {
        id: 55,
        name: "Reims-Gueux",
        location: "Reims, France",
        lat: 49.2550,
        lng: 3.9280,
        length: "8.302 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/France/Reims/Reims1954-72.png",
      },
      {
        id: 56,
        name: "Riverside International Raceway",
        location: "California, USA",
        lat: 33.9375,
        lng: -117.2731,
        length: "5.271 km",
        image: "https://www.racingcircuits.info/assets/images/maps/North%20America/USA/Riverside/Riverside1989.png",
      },
      {
        id: 57,
        name: "Rouen-Les-Essarts",
        location: "Rouen, France",
        lat: 49.3308,
        lng: 1.0032,
        length: "6.542 km",
        image: "https://static.wikia.nocookie.net/f1wikia/images/c/c3/Rouen_Les_Essarts_1955.png/revision/latest?cb=20160528123830",
      },
      {
        id: 58,
        name: "Sebring International Raceway",
        location: "Florida, USA",
        lat: 27.4547,
        lng: -81.3486,
        length: "6.019 km",
        image: "https://www.racingcircuits.info/assets/images/maps/North%20America/USA/Sebring/Sebring19.png",
      },
      {
        id: 59,
        name: "Sepang International Circuit",
        location: "Sepang, Malaysia",
        lat: 2.7608,
        lng: 101.7383,
        length: "5.543 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Asia/Malaysia/Sepang/Sepang.png",
      },
      {
        id: 60,
        name: "Shanghai International Circuit",
        location: "Shanghai, China",
        lat: 31.3389,
        lng: 121.2206,
        length: "5.451 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Asia/China/Shanghai/Shanghai-International-2012.png",
      },
      {
        id: 61,
        name: "Valencia Street Circuit",
        location: "Valencia, Spain",
        lat: 39.4541,
        lng: -0.3312,
        length: "5.419 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Spain/Valencia%20Street/ValenciaStreet2008.png",
      },
      {
        id: 62,
        name: "Watkins Glen International",
        location: "New York, USA",
        lat: 42.3356,
        lng: -76.9272,
        length: "5.552 km",
        image: "https://www.racingcircuits.info/assets/images/maps/North%20America/USA/Watkins%20Glen/Watkins-Glen-Chicane-1992.png",
      },
      {
        id: 63,
        name: "Zeltweg Airfield",
        location: "Spielberg, Austria",
        lat: 47.2128,
        lng: 14.7593,
        length: "3.200 km",
        image: "https://static.wikia.nocookie.net/f1wikia/images/a/a4/Circuit_Zeltweg.png/revision/latest?cb=20160801085439",
      },
      {
        id: 64,
        name: "Buddh International Circuit",
        location: "Greater Noida, India",
        lat: 28.3487,
        lng: 77.5331,
        length: "5.125 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Asia/India/Buddh/Buddh-International-Circuit-GP-2023.png",
      },
      {
        id: 65,
        name: "Korean International Circuit",
        location: "Yeongam, South Korea",
        lat: 34.7471,
        lng: 126.4145,
        length: "5.615 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Asia/South%20Korea/KIC/Korean-International-Circuit-GP-2019.png",
      },
      {
        id: 66,
        name: "Istanbul Park",
        location: "Istanbul, Turkey",
        lat: 40.9517,
        lng: 29.4050,
        length: "5.338 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Asia/Turkey/Istanbul%20Park/Istanbul-Park.png",
      },
      {
        id: 67,
        name: "A1-Ring-Red Bull Ring",
        location: "Spielberg, Austria",
        lat: 47.2225,
        lng: 14.7607,
        length: "4.326 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Austria/Red%20Bull%20Ring/Red-Bull-Ring-2022.png",
      },
      {
        id: 68,
        name: "Hanoi Street Circuit",
        location: "Hanoi, Vietnam",
        lat: 21.0166,
        lng: 105.7655,
        length: "5.607 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Asia/Vietnam/Hanoi/Hanoi--20.png",
      },
      {
        id: 69,
        name: "Circuito del Jarama",
        location: "Madrid, Spain",
        lat: 40.6172,
        lng: -3.5858,
        length: "3.404 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Spain/Jarama/Jarama90.png",
      },
      {
        id: 70,
        name: "Zolder Circuit",
        location: "Heusden-Zolder, Belgium",
        lat: 50.9859,
        lng: 5.2585,
        length: "4.011 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Belgium/Zolder/Zolder07.png",
      },
      {
        id: 71,
        name: "Anderstorp Raceway",
        location: "Anderstorp, Sweden",
        lat: 57.2653,
        lng: 13.6042,
        length: "4.018 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Sweden/Anderstorp/Anderstorp-Raceway-GP-2007.png",
      },
      {
        id: 72,
        name: "Bremgarten Circuit",
        location: "Bern, Switzerland",
        lat: 46.9758,
        lng: 7.4087,
        length: "7.280 km",
        image: "https://static.wikia.nocookie.net/f1wikia/images/3/37/Bremgarten1950.png/revision/latest?cb=20120517030116",
      },
      {
        id: 73,
        name: "Estoril Circuit",
        location: "Estoril, Portugal",
        lat: 38.7506,
        lng: -9.3909,
        length: "4.182 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Portugal/Estoril/Estoril18.png",
      },
      {
        id: 74,
        name: "Aida Circuit",
        location: "Okayama, Japan",
        lat: 34.9147,
        lng: 134.2202,
        length: "3.703 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Asia/Japan/Okayama/Okayama-2020.png",
      },
      {
        id: 75,
        name: "Circuito de Jerez",
        location: "Jerez, Spain",
        lat: 36.7091,
        lng: -6.0351,
        length: "4.428 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Spain/Jerez/Jerez-2019.png",
      },
      {
        id: 76,
        name: "Paul Ricard Circuit",
        location: "Le Castellet, France",
        lat: 43.2506,
        lng: 5.7936,
        length: "5.842 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/France/Paul%20Ricard/Paul-Ricard-1A-19.png",
      },
      {
        id: 77,
        name: "Mugello Circuit",
        location: "Scarperia e San Piero, Italy",
        lat: 43.9975,
        lng: 11.3719,
        length: "5.245 km",
        image: "https://www.racingcircuits.info/assets/images/maps/Europe/Italy/Mugello/Mugello-1991.png",
      }
    
];

const drivers = [
    {
        id: 1,
        name: "Oscar Piastri",
        team: "McLaren",
        number: 81,
        country: "Australia",
        photo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/piastri",
        podiums: 15,
        points: 520,
        bio: "Oscar Piastri's meteoric rise through the racing ranks culminated in his F1 breakthrough with McLaren. The Australian is known for his consistency and remarkable adaptability to different conditions."
    },
    {
        id: 2,
        name: "Lando Norris",
        team: "McLaren",
        number: 4,
        country: "United Kingdom",
        photo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/norris",
        podiums: 31,
        points: 1122,
        bio: "Lando Norris has established himself as one of the sport's brightest talents. With his natural speed and racing intelligence, he has become McLaren's lead driver and a championship contender."
      },
      {
        id: 3,
        name: "Max Verstappen",
        team: "Red Bull Racing",
        number: 1,
        country: "Netherlands",
        photo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/verstappen",
        podiums: 115,
        points: 3122.5,
        bio: "Max Verstappen is a four-time Formula One World Champion, known for his aggressive driving style and exceptional race craft. He became the youngest driver to compete in Formula One when he made his debut in 2015."
      },
      {
        id: 4,
        name: "George Russell",
        team: "Mercedes",
        number: 63,
        country: "United Kingdom",
        photo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/russell",
        podiums: 19,
        points: 807,
        bio: "George Russell has cemented his position as Mercedes' team leader with his qualifying prowess and Sunday performance. His technical feedback and development skills have been crucial to the team's evolution."
      },
      {
        id: 5,
        name: "Charles Leclerc",
        team: "Ferrari",
        number: 16,
        country: "Monaco",
        photo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/leclerc",
        podiums: 44,
        points: 1483,
        bio: "Charles Leclerc continues to impress with his raw speed and qualifying magic. The Monegasque driver has matured into a complete package, combining his natural talent with improved race management."
      },
      {
        id: 6,
        name: "Kimi Antonelli",
        team: "Mercedes",
        number: 87,
        country: "Italy",
        photo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/antonelli",
        podiums: 0,
        points: 48,
        bio: "The Italian sensation Kimi Antonelli has taken Formula 1 by storm since his debut. Following in the footsteps of his compatriots, he combines Italian flair with methodical precision on track."
      },
      {
        id: 7,
        name: "Lewis Hamilton",
        team: "Ferrari",
        number: 44,
        country: "United Kingdom",
        photo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/hamilton",
        podiums: 202,
        points: 4903.5,
        bio: "The seven-time world champion Lewis Hamilton continues to redefine excellence in his new chapter with Ferrari. His experience and adaptability make him a formidable competitor even against younger rivals."
      },
      {
        id: 8,
        name: "Alexander Albon",
        team: "Williams",
        number: 23,
        country: "Thailand",
        photo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/albon",
        podiums: 2,
        points: 270,
        bio: "Alex Albon has established himself as Williams' technical anchor, extracting performance from the car beyond expectations. His race craft and tire management have become his standout qualities."
      },
      {
        id: 9,
        name: "Esteban Ocon",
        team: "Alpine",
        number: 31,
        country: "France",
        photo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/ocon",
        podiums: 4,
        points: 459,
        bio: "Esteban Ocon brings valuable experience to the Alpine team as they rebuild. Known for his consistency and defensive driving, the Frenchman remains a reliable points-scorer for the team."
      },
      {
        id: 10,
        name: "Lance Stroll",
        team: "Aston Martin",
        number: 18,
        country: "Canada",
        photo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/stroll",
        podiums: 3,
        points: 303,
        bio: "Lance Stroll has silenced critics with his improved consistency at Aston Martin. In wet conditions particularly, the Canadian has shown flashes of brilliance that highlight his natural talent."
      }
    
];

const teams = [
    {
        id: 1,
        name: "Red Bull Racing Honda RBPT",
        logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/red-bull-racing.png",
        baseLocation: "Milton Keynes, United Kingdom",
        points: 105,
        drivers: [3]
    
    },
    {
        id: 2,
        name: "McLaren Mercedes",
        logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mclaren.png",
        baseLocation: "Woking, United Kingdom",
        points: 246,
        drivers: [1, 2]
      },
      {
        id: 3,
        name: "Ferrari",
        logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/ferrari.png",
        baseLocation: "Maranello, Italy",
        points: 94
      },
      {
        id: 4,
        name: "Mercedes",
        logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mercedes.png",
        baseLocation: "Brackley, United Kingdom",
        points: 141
      },
      {
        id: 5,
        name: "Aston Martin Aramco Mercedes",
        logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/aston-martin.png",
        baseLocation: "Silverstone, United Kingdom",
        points: 14
      },
      {
        id: 6,
        name: "Alpine Reanult",
        logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/alpine.png",
        baseLocation: "Enstone, United Kingdom / Viry-Châtillon, France",
        points: 7
      },
      {
        id: 7,
        name: "Williams Mercedes",
        logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/williams.png",
        baseLocation: "Grove, United Kingdom",
        points: 37
      },
      {
        id: 8,
        name: "Racing Bulls Honda RBPT",
        logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/racing-bulls.png",
        baseLocation: "Faenza, Italy",
        points: 8
      },
      {
        id: 9,
        name: "Haas Ferrari",
        logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/haas.png",
        baseLocation: "Kannapolis, United States / Banbury, United Kingdom",
        points: 20
      },
      {
        id: 10,
        name: "Kick Sauber Ferrari",
        logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/kick-sauber.png",
        baseLocation: "Hinwil, Switzerland",
        points: 6
      }
];
const raceResults = [
  {
      round: 1,
      name: "Australian Grand Prix",
      date: "16 Mar 2025",
      winner: "Lando Norris",
      car: "McLaren Mercedes",
      laps: 57,
      time: "1:42:06.304"
  },
  {
      round: 2,
      name: "Chinese Grand Prix",
      date: "23 Mar 2025",
      winner: "Oscar Piastri",
      car: "McLaren Mercedes",
      laps: 56,
      time: "1:30:55.026"
  },
  {
      round: 3,
      name: "Japanese Grand Prix",
      date: "06 Apr 2025",
      winner: "Max Verstappen",
      car: "Red Bull Racing Honda RBPT",
      laps: 53,
      time: "1:22:06.983"
  },
  {
      round: 4,
      name: "Bahrain Grand Prix",
      date: "13 Apr 2025",
      winner: "Oscar Piastri",
      car: "McLaren Mercedes",
      laps: 57,
      time: "1:35:39.435"
  },
  {
      round: 5,
      name: "Saudi Arabian Grand Prix",
      date: "20 Apr 2025",
      winner: "Oscar Piastri",
      car: "McLaren Mercedes",
      laps: 50,
      time: "1:21:06.758"
  },
  {
      round: 6,
      name: "Miami Grand Prix",
      date: "04 May 2025",
      winner: "Oscar Piastri",
      car: "McLaren Mercedes",
      laps: 57,
      time: "1:28:51.587"
  }
];

// Map initialization
let map = L.map('map').setView([30, 0], 2);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri'
}).addTo(map);
// Custom marker icon
const customIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/2418/2418802.png',
    iconSize: [40, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// Add circuit markers to map
circuits.forEach(circuit => {
  const marker = L.marker([circuit.lat, circuit.lng], { icon: customIcon })
      .bindPopup(`
          <div class="circuit-popup">
              <div class="circuit-popup-header">
                  <h2 class="popup-title">${circuit.name}</h2>
                  <div class="popup-details">
                      <div class="detail-row">
                          <span class="detail-label">Location:</span>
                          <span class="detail-value">${circuit.location}</span>
                      </div>
                      <div class="detail-row">
                          <span class="detail-label">Length:</span>
                          <span class="detail-value">${circuit.length}</span>
                      </div>
                      <div class="detail-row">
                          <span class="detail-label">First Grand Prix:</span>
                          <span class="detail-value">${circuit.firstGrandPrix}</span>
                      </div>
                      <div class="detail-row">
                          <span class="detail-label">Number of Laps:</span>
                          <span class="detail-value">${circuit.numberOfLaps}</span>
                      </div>
                  </div>
              </div>
              ${circuit.image ? `
                  <div class="circuit-popup-image" onclick="showImage('${circuit.image}', '${circuit.name}')">
    <img src="${circuit.image}" alt="${circuit.name} layout" />
</div>

              ` : ''}
          </div>
      `, {
          maxWidth: 500,
          className: 'custom-popup'
      })
      .addTo(map);
  
  marker.on('click', () => {
      marker.openPopup();
  });
  
// Populate drivers list
const driversList = document.querySelector('.drivers-list');
const driverModal = document.getElementById('driver-modal');
const modalDriverName = document.getElementById('modal-driver-name');
const modalDriverInfo = document.querySelector('.driver-info');
const closeModal = document.querySelector('.close-modal');

driversList.innerHTML = drivers.map(driver => `
    <div class="driver-card" data-driver-id="${driver.id}">
        <div class="driver-number">${driver.number}</div>
        <div class="driver-info">
            <div class="driver-name">${driver.name}</div>
            <div class="driver-team">${driver.team}</div>
        </div>
    </div>
`).join('');

function showDriverModal(driver) {
    modalDriverName.textContent = driver.name;
    modalDriverInfo.innerHTML = `
        <div class="modal-body">
            <img src="${driver.photo}" alt="${driver.name}" class="driver-photo">
            <div class="driver-details">
                <div class="detail-label">Team</div>
                <div class="detail-value">${driver.team}</div>
                
                <div class="detail-label">Number</div>
                <div class="detail-value">${driver.number}</div>
                
                <div class="detail-label">Country</div>
                <div class="detail-value">${driver.country}</div>
                
                <div class="detail-label">Podiums</div>
                <div class="detail-value">${driver.podiums}</div>
                
                <div class="detail-label">Points</div>
                <div class="detail-value">${driver.points}</div>
            </div>
        </div>
        <div class="driver-bio">
            <h3>Biography</h3>
            <p>${driver.bio}</p>
        </div>
    `;
    driverModal.classList.remove('hidden');
}

driversList.addEventListener('click', (e) => {
    const driverCard = e.target.closest('.driver-card');
    if (driverCard) {
        const driverId = parseInt(driverCard.dataset.driverId);
        const driver = drivers.find(d => d.id === driverId);
        if (driver) {
            showDriverModal(driver);
        }
    }
});




// Close modals
document.querySelectorAll('.close-modal').forEach(button => {
 button.addEventListener('click', () => {
      document.querySelectorAll('.modal').forEach(modal => {
          modal.classList.add('hidden');
      });
  });
});

//document.querySelectorAll('.modal').forEach(modal => {
  //modal.addEventListener('click', (e) => {
      //if (e.target === modal) {
      //    modal.classList.add('hidden');
      //}
  //});
//});//
 // Add click event to show circuit details
 marker.on('click', () => {
  marker.openPopup();
   });
});
// Populate circuits list
const circuitsList = document.querySelector('.circuits-list');
const circuitSearch = document.getElementById('circuit-search');

function renderCircuits(searchTerm = '') {
    const filteredCircuits = circuits.filter(circuit => 
        circuit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        circuit.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    circuitsList.innerHTML = filteredCircuits.map(circuit => `
        <div class="circuit-item" data-lat="${circuit.lat}" data-lng="${circuit.lng}">
            <div class="circuit-name">${circuit.name}</div>
            <div class="circuit-location">${circuit.location}</div>
            
            </div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.circuit-item').forEach(item => {
        item.addEventListener('click', () => {
            const lat = parseFloat(item.dataset.lat);
            const lng = parseFloat(item.dataset.lng);
            map.setView([lat, lng], 14);
        });
    });
}

circuitSearch.addEventListener('input', (e) => renderCircuits(e.target.value));
renderCircuits();

// Populate teams grid
const teamsGrid = document.querySelector('.teams-grid');
teamsGrid.innerHTML = teams.map(team => `
    <div class="team-card">
        <img src="${team.logo}" alt="${team.name} logo" class="team-logo">
        <div class="team-name">${team.name}</div>
    </div>
`).join('');
// Populate standings
const standingsGrid = document.querySelector('.standings-grid');
const sortedTeams = [...teams].sort((a, b) => b.points - a.points);

standingsGrid.innerHTML = sortedTeams.map((team, index) => `
    <div class="standings-item">
        <div class="standings-position">${index + 1}</div>
        <img src="${team.logo}" alt="${team.name}" class="standings-team-logo">
        <div class="standings-team-info">
            <div class="standings-team-name">${team.name}</div>
            
        </div>
        <div class="standings-points-bar">
            <div class="points-bar" style="width: ${(team.points / sortedTeams[0].points) * 100}%">
                <span class="points-value">${team.points} PTS</span>
            </div>
        </div>
    </div>
`).join('');

// Populate race results
const resultsGrid = document.querySelector('.results-grid');
resultsGrid.innerHTML = raceResults.map(race => `
    <div class="race-result-item">
        <div class="race-info">
            <div class="race-round">Round ${race.round}</div>
            <div class="race-name">${race.name}</div>
            <div class="race-date">${race.date}</div>
        </div>
        <div class="race-details">
            <div class="winner-info">
                <div class="winner-label">Winner</div>
                <div class="winner-name">${race.winner}</div>
                <div class="winner-car">${race.car}</div>
            </div>
            <div class="race-stats">
                <div class="stat">
                    <span class="stat-label">Laps</span>
                    <span class="stat-value">${race.laps}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Time</span>
                    <span class="stat-value">${race.time}</span>
                </div>
            </div>
        </div>
    </div>
`).join('');

// Add smooth scrolling for navigation
      document.querySelectorAll('.header-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
       if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.querySelector(`.${targetId}-panel`) || 
                                document.querySelector(`.${targetId}-section`);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
  });
  // Function to calculate distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in km
    return distance;
}

// Function to find the nearest circuit from the user's GPS location
function findNearestCircuitFromGPS() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;
                    
                    let nearestCircuit = null;
                    let minDistance = Infinity;
                    
                    circuits.forEach(circuit => {
                        const distance = calculateDistance(userLat, userLng, circuit.lat, circuit.lng);
                        if (distance < minDistance) {
                            minDistance = distance;
                            nearestCircuit = circuit;
                        }
                    });
                    
                    if (nearestCircuit) {
                        // Show a popup for the user's location
                        const userPopup = L.popup()
                            .setLatLng([userLat, userLng])
                            .setContent(`
                                <div class="user-location-popup">
                                    <h3>Your Location</h3>
                                    <p>The nearest F1 circuit is <strong>${nearestCircuit.name}</strong> in ${nearestCircuit.location}.</p>
                                    <p>Distance: ${minDistance.toFixed(2)} km</p>
                                </div>
                            `)
                            .openOn(map);
                        
                        // Add a user marker
                        const userIcon = L.icon({
                            iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
                            iconSize: [30, 30],
                            iconAnchor: [15, 15]
                        });
                        
                        L.marker([userLat, userLng], { icon: userIcon }).addTo(map);
                        
                        // Fly to user location first, then to the circuit
                        map.flyTo([userLat, userLng], 5, {
                            animate: true,
                            duration: 1
                        });
                        
                        // After a short delay, fly to the nearest circuit
                        setTimeout(() => {
                            map.flyTo([nearestCircuit.lat, nearestCircuit.lng], 10, {
                                animate: true,
                                duration: 1.5
                            });
                            
                            // Highlight the circuit in the list
                            document.querySelectorAll('.circuit-item').forEach(item => {
                                const itemLat = parseFloat(item.dataset.lat);
                                const itemLng = parseFloat(item.dataset.lng);
                                
                                if (Math.abs(itemLat - nearestCircuit.lat) < 0.001 && Math.abs(itemLng - nearestCircuit.lng) < 0.001) {
                                    item.style.backgroundColor = 'var(--f1-red)';
                                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    
                                    // Reset the highlight after a few seconds
                                    setTimeout(() => {
                                        item.style.backgroundColor = '';
                                    }, 5000);
                                }
                            });
                        }, 2000);
                        
                        resolve({
                            circuit: nearestCircuit,
                            distance: minDistance
                        });
                    } else {
                        reject("No circuits found");
                    }
                },
                error => {
                    console.error("Error getting user location:", error);
                    reject("Unable to access your location. Please enable location services and try again.");
                }
            );
        } else {
            reject("Geolocation is not supported by your browser");
        }
    });
}

// Add click handler for the nearest circuit button
document.querySelector('.nearest-circuit-btn').addEventListener('click', () => {
    findNearestCircuitFromGPS().catch(error => {
        alert(error);
    });
});

});