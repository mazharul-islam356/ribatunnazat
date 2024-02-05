import { Link } from "react-router-dom";

const Chada = () => {
    return (
        <div>

            <div className="text-center">
                <h1 className="text-4xl underline mt-6 font-semibold mb-4">হিসাব নিকাশ</h1>
                <p className="mb-10">নিচের বাটনটিতে ক্লিক করে আপনি আপনার হিসাব নিকাশ দেখতে পারবেন</p>
            <Link target="blank" to='https://docs.google.com/spreadsheets/d/17ByVV5doLtqoz7Hfvb1GlYGu4w7AKb-X9rpH6I3a74E/edit?usp=drivesdk'>
            <button className="btn btn-wide btn-outline btn-circle btn-accent"> Click Here</button>
            </Link>

            </div>

            <h1 className="text-center text-2xl mt-20 underline">২০২৩ এর হিসাব</h1>
            <img className="w-[45rem] mx-auto shadow-md" src="https://i.ibb.co/KhQFM9R/Whats-App-Image-2024-01-20-at-11-48-57-AM.jpg" alt="" />
        </div>
    );
};

export default Chada;