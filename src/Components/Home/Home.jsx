
import Banner from "./Banner/Banner";
import OurWork from "./ourWork/OurWork";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Banner></Banner>
            <OurWork></OurWork>

            <h1 className="bg-pink-400 w-80 p-3 border-4 border-dashed rounded-xl mx-auto text-white  text-center mt-10 text-2xl mb-10 font-semibold">স্মৃতির পাতায় আমরা</h1>

           <div className="flex justify-center items-center tooltip" data-tip="click here">
           <a target="blank" href="https://www.facebook.com/share/v/GRs3FtXWEvuFfRaR/">
           <img className="rounded-lg w-80"  src="https://i.ibb.co/qM3BTTR/Untitled-design.jpg" alt="" />
           </a>

<div></div>
           </div>
        </div>
    );
};

export default Home;