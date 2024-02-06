import { Link } from "react-router-dom";

const Chada = () => {
    return (
        <div>

            <div className="text-center">
                <h1 className="text-4xl underline mt-16 font-semibold mb-8">হিসাব নিকাশ</h1>
                <p className="mb-10">নিচের বাটনটিতে ক্লিক করে আপনি আপনার হিসাব নিকাশ দেখতে পারবেন</p>
            <Link target="blank" to='https://docs.google.com/spreadsheets/d/13D9-E9dJJoqqcj7Wop-ZDf517DfFH9x6/edit?usp=drivesdk&ouid=104405491765234553591&rtpof=true&sd=true'>
            <button className="btn btn-wide btn-outline btn-circle mb-10 btn-secondary"> Click Here</button>
            </Link>
            <div className="divider"></div>
            </div>

            <h1 className="text-center border-4 w-80 p-2 mx-auto text-2xl mt-20 border-dashed rounded-lg bg-pink-400 text-white mb-10">২০২৩ এর যাবতীয় হিসাব</h1>
            <img className="w-[45rem] mx-auto shadow-md" src="https://i.ibb.co/KhQFM9R/Whats-App-Image-2024-01-20-at-11-48-57-AM.jpg" alt="" />

            <img className="w-[45rem] mx-auto shadow-md" src="https://i.ibb.co/MkWx2KW/Whats-App-Image-2024-02-05-at-3-40-33-PM.jpg" alt="" />

            <img className="w-[45rem] mx-auto shadow-md" src="https://i.ibb.co/vq02nGk/Whats-App-Image-2024-02-05-at-3-40-38-PM.jpg" alt="" />

            <img className="w-[45rem] mx-auto shadow-md" src="https://i.ibb.co/HVN8vHd/Whats-App-Image-2024-02-05-at-3-40-36-PM.jpg" alt="" />

            <img className="w-[45rem] mx-auto shadow-md" src="https://i.ibb.co/SNQHyFT/Whats-App-Image-2024-02-05-at-3-40-35-PM.jpg" alt="" />

            <img className="w-[45rem] mx-auto shadow-md" src="https://i.ibb.co/kJybdzx/Whats-App-Image-2024-02-05-at-3-40-34-PM.jpg" alt="" />
        </div>
    );
};

export default Chada;