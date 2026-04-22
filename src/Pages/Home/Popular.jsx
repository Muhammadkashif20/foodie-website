import React from "react";

import burger from "../../assets/images/burger.jpg";
import pizza from "../../assets/images/pizza.jpg";
import pasta from "../../assets/images/pasta.jpg";
import BBQ from "../../assets/images/BBQ.jpg";

const Popular = () => {

const foods = [
{
name:"Zinger Burger",
price:"Rs. 500",
oldPrice:"650",
img:burger,
rating:"4.8",
time:"20 min"
},

{
name:"Italian Pizza",
price:"Rs. 900",
oldPrice:"1100",
img:pizza,
rating:"4.9",
time:"25 min"
},

{
name:"Creamy Pasta",
price:"Rs. 700",
oldPrice:"850",
img:pasta,
rating:"4.7",
time:"18 min"
},

{
name:"BBQ Platter",
price:"Rs. 1200",
oldPrice:"1450",
img:BBQ,
rating:"5.0",
time:"30 min"
},
];


return(
<section className="bg-[#0B0B0E] text-white py-24 px-8 md:px-12">

<div className="max-w-7xl mx-auto">

{/* Heading */}
<div className="flex justify-between items-end mb-14">

<div>
<h2 className="text-4xl md:text-5xl font-bold">
Popular <span className="text-orange-400">Dishes</span>
</h2>

<p className="text-gray-400 mt-3">
Most ordered meals chosen by our customers
</p>
</div>

<button className="border border-white/10 px-5 py-3 rounded-xl hover:bg-white/5 transition">
View Menu
</button>

</div>



{/* Cards */}
<div className="grid md:grid-cols-4 gap-8">

{foods.map((food,i)=>(

<div
key={i}
className="group bg-[#151519] rounded-3xl overflow-hidden border border-white/5 hover:border-orange-500/30 hover:-translate-y-2 transition duration-300"
>

{/* Image */}
<div className="relative overflow-hidden">

<img
src={food.img}
alt={food.name}
className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-700"
/>

{/* rating badge */}
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs">
⭐ {food.rating}
</div>

{/* delivery badge */}
<div className="absolute top-4 right-4 bg-orange-500 px-3 py-1 rounded-full text-xs">
{food.time}
</div>

</div>



{/* Content */}
<div className="p-5">

<span className="text-xs text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">
Most Ordered
</span>

<h3 className="text-xl font-semibold mt-4">
{food.name}
</h3>

<p className="text-gray-400 text-sm mt-2">
Fresh ingredients with premium taste.
</p>


<div className="flex items-center justify-between mt-6">

<div>
<p className="text-orange-400 font-bold">
{food.price}
</p>

<p className="text-xs text-gray-500 line-through">
Rs. {food.oldPrice}
</p>
</div>


<button className="w-11 h-11 rounded-full bg-orange-500 hover:bg-orange-600 text-lg shadow-lg">
+
</button>

</div>

</div>

</div>

))}

</div>

</div>

</section>
)
}

export default Popular;