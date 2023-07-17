import { FaGoogle, FaFacebookSquare } from "react-icons/fa";

const Social = () => {
    return (
        <div>
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

export default Social;