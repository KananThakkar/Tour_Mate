import lehImg from "../Components/Assets/images/leh.png";
import mountImg from "../Components/Assets/images/mount.png";
import kodaiImg from "../Components/Assets/images/Kodaikanal.png";
import ootyImg from "../Components/Assets/images/ooty.png";
import varanasiImg from "../Components/Assets/images/varanasi.png";
import ranthImg from "../Components/Assets/images/ranth.png";
import auliImg from "../Components/Assets/images/auli.png";
import gokaranaImg from "../Components/Assets/images/gokarana.png";
import hampiImg from "../Components/Assets/images/hampi.png";
import jaipurImg from "../Components/Assets/images/jaipur.png";
import mahaImg from "../Components/Assets/images/mahabali.png";
import tigerhillImg from "../Components/Assets/images/tigerhill.png";
import jakhooImg from "../Components/Assets/images/jakhoo.png";
import bagaImg from "../Components/Assets/images/bagha.png";
import fortImg from "../Components/Assets/images/fort.png";
import fort1Img from "../Components/Assets/images/fort1.png";
import kashiImg from "../Components/Assets/images/kashi.png";

const destinations = [

{
id:1,
name:"Manali",
image:"https://images.unsplash.com/photo-1605649487212-47bdab064df7",

description:"Beautiful hill station in Himachal Pradesh",

history:"Manali is named after sage Manu.",

famousFor:[
"Snow activities",
"Paragliding",
"River rafting"
],

food:[
"Sidu",
"Trout fish",
"Momos",
"Thukpa"
],

shopping:[
"Mall Road",
"Old Manali Market"
],

places:[

{
name:"Solang Valley",
image:"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
timing:"9 AM - 5 PM",
price:"₹500",
info:"Adventure sports destination."
},

{
name:"Rohtang Pass",
image:"https://images.unsplash.com/photo-1609947017136-9daf32a5eb16",
timing:"6 AM - 4 PM",
price:"₹600 permit",
info:"Famous snowy mountain pass."
}

],

restaurants:[
{name:"Johnson Cafe", type:"Cafe", rating:"4.5"},
{name:"Cafe 1947", type:"Italian", rating:"4.6"}
],

hotels:[
{name:"Snow Valley Resort", price:"₹3500 / night"},
{name:"The Himalayan", price:"₹6000 / night"}
]

},
{
id:3,
name:"Udaipur",
image:"https://images.unsplash.com/photo-1599661046289-e31897846e41",

description:"City of Lakes in Rajasthan known for royal palaces and heritage beauty.",

history:"Udaipur was founded in 1559 by Maharana Udai Singh II of the Mewar dynasty.",

famousFor:[
"City Palace",
"Lake Pichola",
"Royal heritage",
"Boat rides"
],

food:[
"Dal Baati Churma",
"Gatte ki Sabzi",
"Kachori",
"Mawa Kachori"
],

shopping:[
"Hathi Pol Market",
"Bada Bazaar",
"Shilpgram"
],

places:[

{
name:"City Palace",
image:"https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
timing:"9 AM - 5 PM",
price:"₹300",
info:"Largest palace complex in Rajasthan."
},

{
name:"Lake Pichola",
image:"https://images.unsplash.com/photo-1617979032983-c2f4a2a9e1a7",
timing:"8 AM - 6 PM",
price:"₹400 boat ride",
info:"Famous lake with beautiful sunset views."
}

],

restaurants:[
{name:"Ambrai Restaurant", type:"Rajasthani", rating:"4.7"},
{name:"Savage Garden", type:"Rooftop Cafe", rating:"4.5"}
],

hotels:[
{name:"Taj Lake Palace", price:"₹15000 / night"},
{name:"Trident Udaipur", price:"₹8000 / night"}
]

},

{
id:2,
name:"Darjeeling",
image:"https://images.unsplash.com/photo-1597074866923-dc0589150358",

description:"A beautiful hill station in West Bengal famous for tea gardens and Kanchenjunga views.",

history:"Darjeeling developed during British rule as a summer retreat.",

famousFor:[
"Tea plantations",
"Toy train",
"Tiger Hill sunrise"
],

food:[
"Momos",
"Thukpa",
"Noodles",
"Tibetan bread"
],

shopping:[
"Chowrasta Market",
"Nehru Road",
"Batasia Loop stalls"
],

places:[

{
name:"Tiger Hill",
image:tigerhillImg,
timing:"4 AM - 7 AM",
price:"₹100",
info:"Famous sunrise viewpoint of Kanchenjunga."
},

{
name:"Batasia Loop",
image:"https://images.unsplash.com/photo-1600344127594-3e4a5a4f8c6d",
timing:"6 AM - 6 PM",
price:"₹20",
info:"Scenic railway loop with garden."
}

],

restaurants:[
{name:"Kunga Restaurant", type:"Tibetan", rating:"4.6"},
{name:"Glenary's", type:"Bakery Cafe", rating:"4.7"}
],

hotels:[
{name:"Mayfair Darjeeling", price:"₹7000 / night"},
{name:"Windamere Hotel", price:"₹6000 / night"}
]

},

{
id:4,
name:"Mount Abu",
image:mountImg,

description:"The only hill station of Rajasthan surrounded by Aravalli hills.",

history:"Mount Abu was a summer retreat for Rajput rulers and British officers.",

famousFor:[
"Dilwara Temples",
"Nakki Lake",
"Sunset Point"
],

food:[
"Dal Baati",
"Rajasthani thali",
"Kachori"
],

shopping:[
"Nakki Lake Market",
"Tibetan Market"
],

places:[

{
name:"Nakki Lake",
image:"https://images.unsplash.com/photo-1587731556938-38755b4803a6",
timing:"9 AM - 6 PM",
price:"₹100 boat ride",
info:"Beautiful lake surrounded by hills."
},

{
name:"Dilwara Temples",
image:"https://images.unsplash.com/photo-1603565816030-6b389eeb23cb",
timing:"12 PM - 5 PM",
price:"Free",
info:"Famous Jain temples with marble carvings."
}

],

restaurants:[
{name:"Mulberry Tree Restaurant", type:"Indian", rating:"4.4"},
{name:"Arbuda Restaurant", type:"Rajasthani", rating:"4.3"}
],

hotels:[
{name:"Hotel Hilltone", price:"₹4000 / night"},
{name:"Cama Rajputana Club Resort", price:"₹5500 / night"}
]

},

{
id:5,
name:"Coorg",
image:"https://images.unsplash.com/photo-1593693397690-362cb9666fc2",

description:"A peaceful hill station in Karnataka known for coffee plantations.",

history:"Coorg was ruled by the Haleri dynasty before British rule.",

famousFor:[
"Coffee plantations",
"Abbey Falls",
"Nature trekking"
],

food:[
"Pandi Curry",
"Kadambuttu",
"Bamboo shoot curry"
],

shopping:[
"Madikeri Market",
"Coorg Spice Market"
],

places:[

{
name:"Abbey Falls",
image:"https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7",
timing:"9 AM - 5 PM",
price:"₹15",
info:"Beautiful waterfall surrounded by coffee plantations."
},

{
name:"Raja Seat",
image:"https://images.unsplash.com/photo-1626070835386-2f4b3d8e6f62",
timing:"6 AM - 6 PM",
price:"₹20",
info:"Famous sunset viewpoint."
}

],

restaurants:[
{name:"Raintree Restaurant", type:"Indian", rating:"4.6"},
{name:"Coorg Cuisine", type:"Local", rating:"4.5"}
],

hotels:[
{name:"Evolve Back Resort", price:"₹12000 / night"},
{name:"Coorg Cliff Resort", price:"₹6000 / night"}
]

},

{
id:6,
name:"Kodaikanal",
image:kodaiImg,

description:"A romantic hill station in Tamil Nadu known as Princess of Hill Stations.",

history:"Kodaikanal was developed by American missionaries in the 19th century.",

famousFor:[
"Kodaikanal Lake",
"Pillar Rocks",
"Coaker's Walk"
],

food:[
"Homemade chocolates",
"South Indian dishes",
"Hot coffee"
],

shopping:[
"Anna Salai Market",
"Lake Road Market"
],

places:[

{
name:"Kodaikanal Lake",
image:"https://images.unsplash.com/photo-1626992340924-f728d3f0d540",
timing:"9 AM - 6 PM",
price:"₹100 boating",
info:"Star-shaped lake popular for boating."
},

{
name:"Pillar Rocks",
image:"https://images.unsplash.com/photo-1615996001375-0a0c6c8ad2f0",
timing:"9 AM - 4 PM",
price:"₹10",
info:"Three giant rock pillars forming scenic view."
}

],

restaurants:[
{name:"Cloud Street", type:"Cafe", rating:"4.6"},
{name:"Tava Vegetarian", type:"Indian", rating:"4.5"}
],

hotels:[
{name:"The Tamara Kodai", price:"₹10000 / night"},
{name:"Kodai Resort Hotel", price:"₹5000 / night"}
]

},
{
id:10,
name:"Shimla",
image:"https://images.unsplash.com/photo-1622308644420-b20142dc993c",

description:"Popular hill station in Himachal Pradesh known for colonial architecture and scenic views.",

history:"Shimla served as the summer capital of British India during colonial rule.",

famousFor:[
"Colonial architecture",
"Toy train",
"Snowfall"
],

food:[
"Chana Madra",
"Babru",
"Sidu",
"Momos"
],

shopping:[
"Mall Road",
"Lakkar Bazaar",
"The Ridge Market"
],

places:[

{
name:"The Ridge",
image:"https://images.unsplash.com/photo-1586967958882-2b4e4b9c0b0d",
timing:"Open All Day",
price:"Free",
info:"Famous open space offering panoramic mountain views."
},

{
name:"Jakhoo Temple",
image:jakhooImg,
timing:"6 AM - 8 PM",
price:"Free",
info:"Ancient temple dedicated to Lord Hanuman."
}

],

restaurants:[
{name:"Cafe Simla Times", type:"Cafe", rating:"4.5"},
{name:"Wake and Bake", type:"Cafe", rating:"4.6"}
],

hotels:[
{name:"Radisson Hotel Shimla", price:"₹7000 / night"},
{name:"Clarkes Hotel", price:"₹5500 / night"}
]

},
{
id:7,
name:"Leh Ladakh",
image: lehImg,

description:"A breathtaking high-altitude desert known for mountains, monasteries, and adventure.",

history:"Leh was an important trading post along the Silk Route.",

famousFor:[
"Pangong Lake",
"Biking routes",
"Buddhist monasteries"
],

food:[
"Thukpa",
"Momos",
"Butter Tea"
],

shopping:[
"Leh Market",
"Tibetan Market"
],

places:[

{
name:"Pangong Lake",
image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
timing:"Open All Day",
price:"₹400 permit",
info:"World famous blue lake located at high altitude."
},

{
name:"Leh Palace",
image:"https://images.unsplash.com/photo-1620747087918-7c2d1c2d0f3d",
timing:"7 AM - 4 PM",
price:"₹100",
info:"Historic palace overlooking Leh town."
}

],

restaurants:[
{name:"The Tibetan Kitchen", type:"Tibetan", rating:"4.7"},
{name:"Chopsticks Restaurant", type:"Asian", rating:"4.6"}
],

hotels:[
{name:"The Grand Dragon Ladakh", price:"₹9000 / night"},
{name:"Ladakh Residency", price:"₹4500 / night"}
]

},
{
id:8,
name:"Goa",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

description:"India's most famous beach destination known for nightlife and water sports.",

history:"Goa was ruled by the Portuguese for over 450 years.",

famousFor:[
"Beaches",
"Nightlife",
"Water sports"
],

food:[
"Goan Fish Curry",
"Prawn Balchao",
"Bebinca"
],

shopping:[
"Anjuna Flea Market",
"Mapusa Market"
],

places:[

{
name:"Baga Beach",
image:bagaImg,
timing:"Open All Day",
price:"Free",
info:"Popular beach famous for nightlife."
},

{
name:"Fort Aguada",
image:fortImg,
timing:"9 AM - 6 PM",
price:"₹50",
info:"Historic Portuguese fort overlooking the sea."
}

],

restaurants:[
{name:"Thalassa", type:"Greek", rating:"4.7"},
{name:"Fisherman's Wharf", type:"Seafood", rating:"4.6"}
],

hotels:[
{name:"Taj Exotica Resort", price:"₹12000 / night"},
{name:"Radisson Blu Resort", price:"₹8500 / night"}
]

},
{
id:9,
name:"Rishikesh",
image:"https://images.unsplash.com/photo-1598091383021-15ddea10925d",

description:"Adventure capital of India located on the banks of the Ganges.",

history:"Rishikesh has been a spiritual center for saints and yogis for centuries.",

famousFor:[
"River rafting",
"Yoga retreats",
"Spiritual tourism"
],

food:[
"Aloo Puri",
"Chole Bhature",
"Street momos"
],

shopping:[
"Laxman Jhula Market",
"Ram Jhula Market"
],

places:[

{
name:"Laxman Jhula",
image:"https://images.unsplash.com/photo-1594977892684-1a6b4e3bde90",
timing:"Open All Day",
price:"Free",
info:"Famous suspension bridge over the Ganges."
},

{
name:"Triveni Ghat",
image:"https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3",
timing:"5 AM - 9 PM",
price:"Free",
info:"Famous ghat known for evening Ganga Aarti."
}

],

restaurants:[
{name:"Little Buddha Cafe", type:"Cafe", rating:"4.6"},
{name:"Chotiwala Restaurant", type:"Indian", rating:"4.5"}
],

hotels:[
{name:"Aloha on the Ganges", price:"₹7000 / night"},
{name:"Ganga Kinare", price:"₹6000 / night"}
]

},
{
id:12,
name:"Jaipur",
image:jaipurImg,

description:"The Pink City of India known for its royal palaces and forts.",

history:"Jaipur was founded in 1727 by Maharaja Sawai Jai Singh II.",

famousFor:[
"Amber Fort",
"Hawa Mahal",
"Royal heritage"
],

food:[
"Dal Baati Churma",
"Ghewar",
"Pyaaz Kachori"
],

shopping:[
"Johari Bazaar",
"Bapu Bazaar"
],

places:[

{
name:"Amber Fort",
image:"https://images.unsplash.com/photo-1597074866923-dc0589150358",
timing:"8 AM - 5:30 PM",
price:"₹100",
info:"Historic fort with stunning architecture."
},

{
name:"Hawa Mahal",
image:jaipurImg,
timing:"9 AM - 4:30 PM",
price:"₹50",
info:"Famous palace with 953 windows."
}

],

restaurants:[
{name:"Laxmi Misthan Bhandar", type:"Rajasthani", rating:"4.4"},
{name:"1135 AD", type:"Fine Dining", rating:"4.6"}
],

hotels:[
{name:"Trident Jaipur", price:"₹5000 / night"},
{name:"Rambagh Palace", price:"₹20000 / night"}
]

},

{
id:13,
name:"Varanasi",
image:varanasiImg,

description:"Spiritual capital of India located on the banks of the Ganges.",

history:"One of the world's oldest continuously inhabited cities.",

famousFor:[
"Ganga Aarti",
"Kashi Vishwanath Temple",
"Spiritual tourism"
],

food:[
"Kachori Sabzi",
"Banarasi Paan",
"Malaiyo"
],

shopping:[
"Vishwanath Gali",
"Godowlia Market"
],

places:[

{
name:"Dashashwamedh Ghat",
image:"https://images.unsplash.com/photo-1609947017136-9daf32a5eb16",
timing:"Open all day",
price:"Free",
info:"Famous for evening Ganga Aarti."
},

{
name:"Kashi Vishwanath Temple",
image:kashiImg,
timing:"3 AM - 11 PM",
price:"Free",
info:"One of the most sacred Shiva temples."
}

],

restaurants:[
{name:"Kashi Chat Bhandar", type:"Street Food", rating:"4.5"},
{name:"Brown Bread Bakery", type:"Cafe", rating:"4.3"}
],

hotels:[
{name:"Brijrama Palace", price:"₹7000 / night"},
{name:"Hotel Alka", price:"₹2500 / night"}
]

},

{
id:15,
name:"Ooty",
image:ootyImg,

description:"Popular hill station in Tamil Nadu known for tea gardens.",

history:"Ooty was developed by the British during colonial rule.",

famousFor:[
"Tea plantations",
"Ooty Lake",
"Toy Train"
],

food:[
"Chocolate",
"South Indian meals",
"Biryani"
],

shopping:[
"Commercial Road",
"Ooty Market"
],

places:[

{
name:"Ooty Lake",
image:"https://images.unsplash.com/photo-1627225924765-552d49cf47a3",
timing:"9 AM - 6 PM",
price:"₹30",
info:"Popular boating destination."
},

{
name:"Doddabetta Peak",
image:"https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
timing:"7 AM - 6 PM",
price:"₹20",
info:"Highest peak in the Nilgiris."
}

],

restaurants:[
{name:"Shinkow's Restaurant", type:"Chinese", rating:"4.4"},
{name:"Place To Bee", type:"Cafe", rating:"4.3"}
],

hotels:[
{name:"Sterling Ooty Fern Hill", price:"₹5500 / night"},
{name:"Savoy Ooty", price:"₹8000 / night"}
]

},
{
id:11,
name:"Kerala Backwaters",
image:"https://images.unsplash.com/photo-1589308078059-be1415eab4c3",

description:"A network of lagoons and lakes in Kerala famous for houseboat cruises.",

history:"The backwaters were historically used for trade and transportation between villages in Kerala.",

famousFor:[
"Houseboat stays",
"Alleppey canals",
"Scenic village life"
],

food:[
"Kerala Sadya",
"Appam with Stew",
"Karimeen Pollichathu"
],

shopping:[
"Alleppey Market",
"Kumarakom Local Shops"
],

places:[

{
name:"Alleppey Backwaters",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
timing:"Open all day",
price:"₹5000 houseboat",
info:"Famous houseboat cruising destination."
},

{
name:"Kumarakom Bird Sanctuary",
image:"https://images.unsplash.com/photo-1588413335653-94b37c9b84a7",
timing:"6 AM - 6 PM",
price:"₹50",
info:"Home to many migratory birds."
}

],

restaurants:[
{name:"Thaff Restaurant", type:"Kerala Cuisine", rating:"4.4"},
{name:"Indian Coffee House", type:"Cafe", rating:"4.2"}
],

hotels:[
{name:"Zuri Kumarakom Resort", price:"₹9000 / night"},
{name:"Alleppey Houseboat Stay", price:"₹6000 / night"}
]

},

{
id:19,
name:"Hampi",
image:hampiImg,

description:"Ancient village in Karnataka known for ruins of the Vijayanagara Empire.",

history:"Hampi was the capital of the Vijayanagara Empire in the 14th century.",

famousFor:[
"Ancient temples",
"Boulder landscapes",
"UNESCO heritage site"
],

food:[
"South Indian Thali",
"Dosa",
"Banana Pancakes"
],

shopping:[
"Hampi Bazaar",
"Virupaksha Market"
],

places:[

{
name:"Virupaksha Temple",
image:"https://images.unsplash.com/photo-1588413335653-94b37c9b84a7",
timing:"6 AM - 6 PM",
price:"Free",
info:"One of the oldest functioning temples in India."
},

{
name:"Vittala Temple",
image:"https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
timing:"8:30 AM - 5 PM",
price:"₹40",
info:"Famous for its iconic stone chariot."
}

],

restaurants:[
{name:"Mango Tree Restaurant", type:"Indian", rating:"4.6"},
{name:"Laughing Buddha Cafe", type:"Cafe", rating:"4.4"}
],

hotels:[
{name:"Hampi Heritage Resort", price:"₹4500 / night"},
{name:"Clarks Inn Hampi", price:"₹5000 / night"}
]

},

{
id:17,
name:"Auli",
image:auliImg,

description:"Auli is a famous ski destination in Uttarakhand with Himalayan views.",

history:"Auli developed as a skiing destination in the late 20th century.",

famousFor:[
"Skiing",
"Cable car ride",
"Himalayan views"
],

food:[
"Garhwali Thali",
"Maggi",
"Hot Tea"
],

shopping:[
"Auli Local Market",
"Joshimath Market"
],

places:[

{
name:"Auli Ropeway",
image:"https://images.unsplash.com/photo-1609947017136-9daf32a5eb16",
timing:"9 AM - 5 PM",
price:"₹1000",
info:"One of the longest ropeways in India."
},

{
name:"Gurso Bugyal",
image:"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
timing:"Open all day",
price:"Free",
info:"Beautiful meadow with mountain views."
}

],

restaurants:[
{name:"Auli D Food Plaza", type:"Indian", rating:"4.3"},
{name:"Cliff Top Restaurant", type:"Multi Cuisine", rating:"4.4"}
],

hotels:[
{name:"Cliff Top Club Resort", price:"₹7000 / night"},
{name:"The Tattva Resort", price:"₹6000 / night"}
]

},

{
id:14,
name:"Andaman Islands",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

description:"Tropical paradise in the Bay of Bengal known for clear beaches and coral reefs.",

history:"The islands were used as a British colonial prison settlement.",

famousFor:[
"Scuba diving",
"Radhanagar Beach",
"Marine life"
],

food:[
"Seafood",
"Fish Curry",
"Coconut Prawn Curry"
],

shopping:[
"Aberdeen Bazaar",
"Sagarika Emporium"
],

places:[

{
name:"Radhanagar Beach",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
timing:"Open all day",
price:"Free",
info:"One of the most beautiful beaches in Asia."
},

{
name:"Cellular Jail",
image:"https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
timing:"9 AM - 5 PM",
price:"₹30",
info:"Historic colonial prison with light show."
}

],

restaurants:[
{name:"Annapurna Restaurant", type:"Indian", rating:"4.4"},
{name:"New Lighthouse Restaurant", type:"Seafood", rating:"4.5"}
],

hotels:[
{name:"Taj Exotica Resort", price:"₹18000 / night"},
{name:"SeaShell Havelock", price:"₹9000 / night"}
]

},

{
id:16,
name:"Ranthambore",
image:ranthImg,

description:"One of India's most famous national parks known for tiger safaris.",

history:"Ranthambore was once the hunting ground of the Maharajas of Jaipur.",

famousFor:[
"Tiger safari",
"Wildlife photography",
"Ranthambore Fort"
],

food:[
"Rajasthani Thali",
"Laal Maas",
"Dal Baati"
],

shopping:[
"Sawai Madhopur Market",
"Local Handicraft Shops"
],

places:[

{
name:"Ranthambore National Park",
image:"https://images.unsplash.com/photo-1557053964-937650b63311",
timing:"6 AM - 6 PM",
price:"₹1500 safari",
info:"Famous tiger reserve with jeep safaris."
},

{
name:"Ranthambore Fort",
image:fort1Img,
timing:"6 AM - 6 PM",
price:"₹50",
info:"Historic fort inside the national park."
}

],

restaurants:[
{name:"Food Corner", type:"Indian", rating:"4.3"},
{name:"Sky Lounge Restaurant", type:"Multi Cuisine", rating:"4.4"}
],

hotels:[
{name:"Oberoi Vanyavilas", price:"₹25000 / night"},
{name:"Tiger Den Resort", price:"₹5000 / night"}
]

},
{
id:18,
name:"Mahabalipuram",
image:mahaImg,

description:"Historic coastal town in Tamil Nadu famous for ancient rock-cut temples and UNESCO heritage monuments.",

history:"Mahabalipuram was a major port city of the Pallava dynasty during the 7th and 8th centuries.",

famousFor:[
"Shore Temple",
"Rock-cut architecture",
"Stone sculptures"
],

food:[
"Seafood",
"South Indian meals",
"Filter coffee"
],

shopping:[
"Mahabalipuram Street Market",
"Stone Sculpture Shops"
],

places:[

{
name:"Shore Temple",
image:"https://images.unsplash.com/photo-1622308644420-b20142dc993c",
timing:"6 AM - 6 PM",
price:"₹40",
info:"UNESCO heritage temple located near the sea."
},

{
name:"Pancha Rathas",
image:"https://images.unsplash.com/photo-1597074866923-dc0589150358",
timing:"6 AM - 6 PM",
price:"₹40",
info:"Five monolithic rock temples built during Pallava rule."
}

],

restaurants:[
{name:"Moonrakers Restaurant", type:"Seafood", rating:"4.5"},
{name:"Gecko Cafe", type:"Cafe", rating:"4.3"}
],

hotels:[
{name:"Radisson Blu Temple Bay", price:"₹8000 / night"},
{name:"Chariot Beach Resort", price:"₹6500 / night"}
]

},

{
id:20,
name:"Gokarna",
image:gokaranaImg,

description:"Peaceful beach town in Karnataka known for beautiful beaches and spiritual temples.",

history:"Gokarna is an ancient pilgrimage town mentioned in Hindu scriptures.",

famousFor:[
"Om Beach",
"Mahabaleshwar Temple",
"Beach trekking"
],

food:[
"Seafood",
"South Indian meals",
"Fresh coconut dishes"
],

shopping:[
"Gokarna Beach Market",
"Temple Street Shops"
],

places:[

{
name:"Om Beach",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
timing:"Open all day",
price:"Free",
info:"Beach shaped like the Om symbol."
},

{
name:"Mahabaleshwar Temple",
image:"https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
timing:"6 AM - 8 PM",
price:"Free",
info:"Ancient temple dedicated to Lord Shiva."
}

],

restaurants:[
{name:"Namaste Cafe", type:"Cafe", rating:"4.5"},
{name:"Mantra Cafe", type:"Multi Cuisine", rating:"4.4"}
],

hotels:[
{name:"Kudle Beach View Resort", price:"₹3500 / night"},
{name:"SwaSwara Resort", price:"₹12000 / night"}
]

}

];

export default destinations;