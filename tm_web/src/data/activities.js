import scubaImg from "../Components/Assets/images/scuba.png";
import sailImg from "../Components/Assets/images/sail.png";
import glideImg from "../Components/Assets/images/glide.png";
import raftImg from "../Components/Assets/images/raft.png";
import atvImg from "../Components/Assets/images/atv.png";
import boatImg from "../Components/Assets/images/boat.png";
import bungeeImg from "../Components/Assets/images/bungee.png";
import camelImg from "../Components/Assets/images/camel.png";
import campImg from "../Components/Assets/images/camp.png";
import habImg from "../Components/Assets/images/hab.png";
import hboatImg from "../Components/Assets/images/hboat.png";
import jetskiImg from "../Components/Assets/images/jetski.png";
import kayakImg from "../Components/Assets/images/kayak.png";
import mbikeImg from "../Components/Assets/images/mbike.png";
import rockImg from "../Components/Assets/images/rock.png";
import skiingImg from "../Components/Assets/images/skiing.png";
import snorkelImg from "../Components/Assets/images/snorkeling.png";
import snowImg from "../Components/Assets/images/snow.png";
import surfImg from "../Components/Assets/images/surf.png";
import trekImg from "../Components/Assets/images/trek.png";
import wildImg from "../Components/Assets/images/wild.png";
import zipImg from "../Components/Assets/images/zip.png";

const activities = [

{
id:1,
name:"Scuba Diving",
place:"Goa",
price:"₹3500",
image:scubaImg,
description:"Explore underwater marine life with professional instructors.",
duration:"2 Hours",

thingsNeeded:[
"Swimwear",
"Towel",
"ID Proof"
]
},
{
id:2,
name:"Parasailing",
place:"Goa",
price:"₹2000",
image:sailImg,
category:"water",
description:"Fly above the sea while attached to a parachute.",
duration:"2 Hours",

thingsNeeded:[
"ID Proof"
]
},

{
id:3,
name:"River Rafting",
place:"Rishikesh",
price:"₹1800",
image:raftImg,
category:"adventure",
description:"Exciting rafting experience in the Ganga river.",
duration:"30 minuts",

thingsNeeded:[
"Swimwear",
"Towel",
"ID Proof"
]
},

{
id:4,
name:"Paragliding",
place:"Manali",
price:"₹2500",
image:glideImg,
category:"adventure",
description:"Fly above beautiful mountains.",
duration:"1 Hours",

thingsNeeded:[
"ID Proof"
]
},

{
id:5,
name:"Camel Safari",
place:"Jaipur",
price:"₹1200",
image:camelImg,
category:"tour",
description:"Traditional camel ride in Rajasthan desert.",
duration:"30 Minuts",

thingsNeeded:[
"ID Proof"
]
},
{
id:6,
name:"River Rafting",
place:"Rishikesh",
price:"₹2500",
image:raftImg,
description:"Enjoy thrilling white water rafting in the Ganga river.",
duration:"3 Hours",

thingsNeeded:[
"Extra Clothes",
"Waterproof Bag",
"ID Proof"
]
},

{
id:7,
name:"Paragliding",
place:"Bir Billing",
price:"₹3000",
image:glideImg,
description:"Fly high and enjoy breathtaking views of the Himalayas.",
duration:"30 Minutes",

thingsNeeded:[
"Comfortable Shoes",
"Jacket",
"ID Proof"
]
},

{
id:8,
name:"Bungee Jumping",
place:"Rishikesh",
price:"₹3500",
image:bungeeImg,
description:"Experience India's highest bungee jump with expert safety.",
duration:"20 Minutes",

thingsNeeded:[
"Sports Shoes",
"Comfortable Clothes",
"ID Proof"
]
},

{
id:9,
name:"Camel Safari",
place:"Jaisalmer",
price:"₹1500",
image:camelImg,
description:"Explore the Thar desert with a traditional camel safari.",
duration:"2 Hours",

thingsNeeded:[
"Sunglasses",
"Hat",
"Water Bottle"
]
},

{
id:10,
name:"Snorkeling",
place:"Andaman",
price:"₹2000",
image:snorkelImg,
description:"Discover colorful coral reefs and marine life.",
duration:"1 Hour",

thingsNeeded:[
"Swimwear",
"Towel",
"Waterproof Camera"
]
},

{
id:11,
name:"Hot Air Balloon",
place:"Jaipur",
price:"₹12000",
image:habImg,
description:"Enjoy aerial views of forts and palaces in Jaipur.",
duration:"1 Hour",

thingsNeeded:[
"Jacket",
"Camera",
"Comfortable Shoes"
]
},

{
id:12,
name:"Skiing",
place:"Auli",
price:"₹4000",
image:skiingImg,
description:"Enjoy skiing in the snow-covered slopes of Auli.",
duration:"2 Hours",

thingsNeeded:[
"Warm Clothes",
"Gloves",
"Snow Boots"
]
},

{
id:13,
name:"Jet Ski",
place:"Goa",
price:"₹1200",
image:jetskiImg,
description:"Ride a powerful jet ski across the waves of Goa beaches.",
duration:"15 Minutes",

thingsNeeded:[
"Swimwear",
"Life Jacket",
"ID Proof"
]
},

{
id:14,
name:"Trekking",
place:"Manali",
price:"₹1800",
image:trekImg,
description:"Explore beautiful Himalayan trails and scenic views.",
duration:"5 Hours",

thingsNeeded:[
"Trekking Shoes",
"Backpack",
"Water Bottle"
]
},

{
id:15,
name:"Kayaking",
place:"Kerala Backwaters",
price:"₹2200",
image:kayakImg,
description:"Paddle through calm backwaters surrounded by lush greenery.",
duration:"2 Hours",

thingsNeeded:[
"Swimwear",
"Extra Clothes",
"Sun Hat"
]
},
{
id:16,
name:"Zip Lining",
place:"Neemrana",
price:"₹2000",
image:zipImg,
description:"Experience thrilling zip line rides across the historic Neemrana Fort.",
duration:"45 Minutes",

thingsNeeded:[
"Sports Shoes",
"Comfortable Clothes",
"ID Proof"
]
},

{
id:17,
name:"Banana Boat Ride",
place:"Goa",
price:"₹800",
image:boatImg,
description:"Enjoy a fun group ride on an inflatable banana boat in the sea.",
duration:"15 Minutes",

thingsNeeded:[
"Swimwear",
"Life Jacket",
"Towel"
]
},

{
id:18,
name:"Desert Camping",
place:"Jaisalmer",
price:"₹2500",
image:campImg,
description:"Spend a night under the stars with cultural programs in the Thar Desert.",
duration:"Overnight",

thingsNeeded:[
"Warm Clothes",
"Camera",
"Personal Essentials"
]
},

{
id:19,
name:"ATV Bike Ride",
place:"Manali",
price:"₹1800",
image:atvImg,
description:"Ride powerful all-terrain vehicles through rough mountain trails.",
duration:"30 Minutes",

thingsNeeded:[
"Sports Shoes",
"Gloves",
"ID Proof"
]
},

{
id:20,
name:"Surfing",
place:"Varkala",
price:"₹3000",
image:surfImg,
description:"Learn and enjoy wave surfing on the beautiful beaches of Varkala.",
duration:"1 Hour",

thingsNeeded:[
"Swimwear",
"Towel",
"Sunscreen"
]
},

{
id:21,
name:"Mountain Biking",
place:"Leh Ladakh",
price:"₹3500",
image:mbikeImg,
description:"Ride through rugged terrains and breathtaking landscapes of Ladakh.",
duration:"4 Hours",

thingsNeeded:[
"Helmet",
"Sports Shoes",
"Water Bottle"
]
},

{
id:22,
name:"Houseboat Stay",
place:"Kerala Backwaters",
price:"₹6000",
image:hboatImg,
description:"Relax in a traditional houseboat while cruising through serene backwaters.",
duration:"1 Day",

thingsNeeded:[
"Camera",
"Comfortable Clothes",
"Personal Essentials"
]
},

{
id:23,
name:"Rock Climbing",
place:"Hampi",
price:"₹1500",
image:rockImg,
description:"Climb massive boulders and enjoy adventure in Hampi’s rocky landscape.",
duration:"2 Hours",

thingsNeeded:[
"Climbing Shoes",
"Gloves",
"Water Bottle"
]
},

{
id:24,
name:"Snowboarding",
place:"Gulmarg",
price:"₹4500",
image:snowImg,
description:"Glide down snowy slopes with an exciting snowboarding experience.",
duration:"2 Hours",

thingsNeeded:[
"Warm Jacket",
"Snow Boots",
"Gloves"
]
},

{
id:25,
name:"Wildlife Safari",
place:"Ranthambore",
price:"₹3500",
image:wildImg,
description:"Explore Ranthambore National Park and spot tigers and wildlife.",
duration:"3 Hours",

thingsNeeded:[
"Camera",
"Hat",
"Binoculars"
]
}

];

export default activities;