import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Footer = () => {
    return (
        <div>
            <footer className="footer mt-6 p-10 bg-neutral text-neutral-content">
  <aside>
    <img className="w-12 mb-2" src="https://i.ibb.co/nQDwDZt/ribatunnazat-logo-removebg-preview.png" alt="" />
    <p className="text-xl font-semibold">রিবাতুননাজাত এসোসিয়েশন</p>
    <p>সারুলিয়া, ডেমরা,ঢাকা- ১৩৬১</p>
  </aside> 
  <nav>
    <header className="footer-title">Social</header> 
    <div className="grid grid-flow-col gap-4">
     
     <Link target="blank" to='https://www.facebook.com/profile.php?id=100094011410179&mibextid=ZbWKwL'>
     
     <FaFacebook className="text-3xl" />

    </Link>

  <a target="blank" href="mailto:ribatunnazatassociation@gmail.com">

  <MdEmail  ail className="text-3xl" />

  </a>


 

 </div>
  </nav>
  
</footer>
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2024 - All right reserved by Mazharul Islam</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;