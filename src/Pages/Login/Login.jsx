import { useForm } from "react-hook-form";

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
        <div className="bg-base-200 mx-auto sm:w-1/3 p-5 ">
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
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <button className="btn btn-secondary">Login</button>
                </div>
                
            </form>
        </div>
    );
};

export default Login;