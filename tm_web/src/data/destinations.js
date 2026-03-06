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
id:2,
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
id:3,
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
image:"https://images.unsplash.com/photo-1619712253353-7d8e0e6d1e26",
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
image:"https://images.unsplash.com/photo-1627037485369-51b41c4fca0c",

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
image:"https://images.unsplash.com/photo-1627225924765-552d49cf47a3",

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

}

];

export default destinations;