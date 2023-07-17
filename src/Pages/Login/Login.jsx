import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Social from "../../Components/Social/Social";
const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
       
        <div className="bg-base-200 mx-auto sm:w-1/3 p-5 my-4 rounded-3xl">
            <img src="https://i.ibb.co/M2GJH3g/techzoxne-1.png" alt="techzoxne-1" className='rounded-lg p-5' />
            <p className="text-3xl ">Please Login Your Account</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input  {...register("password", { required: true })} type="text" placeholder="PassWord" className="input input-bordered" />
                    </div>
                    <div className="flex">
                        <p><small>Forget Password?</small></p>
                        <p className="flex justify-end"><small><Link to='/register'>Are you new?</Link></small></p>
                    </div>
                    <button className="btn btn-secondary">Login</button>
                </div>
                
            </form>
            <Social></Social>
        </div>
    );
};

export default Login;