import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const LoginWith = () => {
    return (
        <div>
               <div className="p-4 space-y-3 mb-6 ">
           <h1 className="text-2xl font-bold">LogIn With </h1>
      <button class="btn btn-outline w-full hover:text-sky-500">
       <FaGoogle></FaGoogle>
        Login With Google
      </button>
      <button class="btn btn-outline w-full hover:text-sky-500">
       <FaGithub></FaGithub>
        Login With Github
      </button>
     </div>
        </div>
    );
};

export default LoginWith;