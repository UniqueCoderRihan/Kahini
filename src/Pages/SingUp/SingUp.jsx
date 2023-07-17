import { useForm } from "react-hook-form";
import { FaGoogle,FaFacebookSquare} from "react-icons/fa";
import { Link } from "react-router-dom";
const SingUp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="bg-base-200 mx-auto sm:w-1/3 p-5 my-4 rounded-3xl">
            <img src="https://i.ibb.co/M2GJH3g/techzoxne-1.png" alt="techzoxne-1" className='rounded-lg p-5' />
            <p className="text-3xl ">Welcome for Joining With Us </p>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input  {...register("name", { required: true })} type="text" placeholder="Enter Your Full Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input  {...register("photo", { required: true })} type="text" placeholder="Photo Url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  {...register("email", { required: true })} type="email" placeholder="email-Address" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input  {...register("password", { required: true })} type="text" placeholder="PassWord" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <select  {...register("role", { required: true })}  className="input input-bordered" >
                            <option value="seller">Seller</option>
                            <option value="buyer">Buyer</option>
                        </select>
                    </div>
                    <div className="flex">
                        
                        <p className="flex justify-end"><small><Link to='/login'>Already have an Account?</Link></small></p>
                    </div>
                    
                    <button className="btn btn-secondary">Register</button>
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

export default SingUp;