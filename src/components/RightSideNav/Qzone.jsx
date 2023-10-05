import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from "../../assets/qZone1.png"
import qzone2 from "../../assets/qZone2.png"
import qzone3 from "../../assets/qZone3.png"

const Qzone = () => {
    return (
        <div>
              <div className="p-10 space-y-3 mb-6 ">
           <h1 className="text-2xl font-bold">Q-zone </h1>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
     </div>
        </div>
    );
};

export default Qzone;