import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            
     <div className="p-4 ">
           <h1 className="text-2xl font-bold">Find Us On</h1>
           <a className="text-base p-4 flex items-center gap-4 border rounded-t-lg" href="">
       <FaFacebook></FaFacebook>
     <span> Facebook</span>
      </a>
           <a className="text-base p-4 flex items-center gap-4 border-x " href="">
       <FaTwitter></FaTwitter>
     <span> Twiter</span>
      </a>
           <a className="text-base p-4 flex items-center gap-4 border rounded-b-lg" href="">
      <FaInstagram></FaInstagram>
     <span> Facebook</span>
      </a>
     
     </div>

        </div>
    );
};

export default FindUs;