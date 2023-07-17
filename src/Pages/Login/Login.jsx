import { useForm } from "react-hook-form";
import { FaGoogle,FaFacebookSquare} from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input {...register("firstName")} />
        //     <select {...register("gender")}>
        //         <option value="female">female</option>
        //         <option value="male">male</option>
        //         <option value="other">other</option>
        //     </select>
        //     <input type="submit" />
        // </form>
        <div className="bg-base-200 mx-auto sm:w-1/3 p-5 my-4 rounded-3xl">
            <img src="https://i.ibb.co/M2GJH3g/techzoxne-1.png" alt="techzoxne-1" className='rounded-lg p-5' />
            <p className="text-3xl ">Please Login Your Account</p>
            <form>
                <div className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="PassWord" className="input input-bordered" />
                    </div>
                    <div className="flex">
                        <p><small>Forget Password?</small></p>
                        <p className="flex justify-end"><small><Link to='/register'>Are you new?</Link></small></p>
                    </div>
                    <button className="btn btn-secondary">Login</button>
                </div>
                
            </form>
            <div className="divider mt-0"></div>
            <div className="text-center">
                <button className="btn btn-outline btn-circle text-2xl">
                    <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-outline btn-circle text-2xl ml-2">
                    <FaFacebookSquare></FaFacebookSquare>
                </button>
            </div>
        </div>
    );
};

export default Login;