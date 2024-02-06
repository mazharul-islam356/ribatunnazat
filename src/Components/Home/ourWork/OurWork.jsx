import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const OurWork = () => {
    return (
        <div className="mt-36">

<h1 className="text-3xl bg-pink-400 w-96 p-3 border-4 border-dashed rounded-xl mx-auto text-white font-semibold text-center">আমাদের কার্যক্রম সমূহ</h1>

          <div className="mt-16 grid lg:gap-0 gap-4 lg:grid-cols-2 justify-center items-center justify-items-center">


<Card className="mt-6 w-96">
<CardHeader color="blue-gray" className="relative h-56">
  <img
    src="https://i.ibb.co/Gn7ZcjL/Whats-App-Image-2024-01-12-at-8-40-12-PM.jpg"
    alt="card-image"
  />
</CardHeader>
<CardBody>
  <Typography variant="h5" color="blue-gray" className="mb-2">
  সভাপতি মহোদয়ের তুর্কি গমন
  </Typography>
  <Typography>
  রিবাতুননাজাত এসোসিয়েশনের সম্মানিত সভাপতি হাঃ মুহাঃ- জাহেদুল ইসলাম সাঈদী তুর্কী দিয়ানাত স্কলারশিপ কতৃক ২০২২-২০২৩ সেশনে আঙ্কারা সোশ্যাল বিলিমলার ইউনিভার্সিটি তে থিওলজি সাবজেক্ট এ মনোনীত হওয়ায়  সংগঠনের পক্ষ থেকে আয়োজন করা হয়,❝ আলোকিত সন্ধা ও সংবর্ধনা অনুষ্ঠান ❞।
  </Typography>
</CardBody>
<CardFooter className="pt-0">
  
<Link to='/goingT'>
<Button className="flex gap-1">আরও জানুন

<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={2}
stroke="currentColor"
className="h-4 w-4"
>
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
/>
</svg>
</Button>
</Link>
  
</CardFooter>
</Card>

<Card className="mt-6 w-96">
<CardHeader color="blue-gray" className="relative h-56">
  <img
    src="https://i.ibb.co/2jzzBnB/Whats-App-Image-2024-01-12-at-11-55-29-PM.jpg"
    alt="card-image"
  />
</CardHeader>
<CardBody>
  <Typography variant="h5" color="blue-gray" className="mb-2">
  আলিম পরিক্ষার্থীদের ভোজন উৎসব
  </Typography>
  <Typography>
  রিবাতুননাজাত এসোসিয়েশনের সদস্যদের আলিম পরিক্ষা ২০২২ শেষ উপলক্ষে সকলে মিলে ভোজন উৎসব পালন করা হয় । উক্ত ভোজন উৎসবটি আমাদের সমিতির এজাজত কারি আলহাজ্ব হজরত মাওলানা মনিরুল ইসলাম পাবনার হুজুরের নির্দেশে পালন করা হয়।  এর মাধ্যমে সকলের মাঝে সৌহার্দ্য,সম্প্রতি বজায় রইল। উক্ত অনুষ্ঠান টি পরিচালিত হয়, স্টাফ কোয়ার্টার হাজী নগর নির্ঝর ক্যাফে।
  </Typography>
</CardBody>
<CardFooter className="pt-0">
  
<Link to='/restrurentE'>
<Button className="flex gap-1">আরও জানুন

<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={2}
stroke="currentColor"
className="h-4 w-4"
>
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
/>
</svg>
</Button>
</Link>
  
</CardFooter>
</Card>



  </div>
        </div>
    );
};

export default OurWork;