import { useState } from "react";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleRePasswordVisibility = () => {
        setShowRePassword(!showRePassword);
    };
    return (
        <div className="w-screen h-screen bg-cover font-roboto bg-pink-100 grid grid-cols-12 gap-4 ">
            <div className="place-content-center items-center col-span-4">
                <div class=" flex items-center justify-center">

                    <img
                        className="rounded-full w-44 h-44 "
                        src={"https://res.cloudinary.com/doqbelkif/image/upload/v1719970052/MyStore/PTlogo_ov7kpd.png"}
                        alt="cloud"
                    />
                </div>
                <h1 className="text-center font-semibold text-3xl font-mono">PTStore</h1>
            </div>
            <div className=" col-span-8">
                <form>
                    <div className="bg-white w-4/5 mt-16 ml-4 rounded-lg ">
                        <div className=" pt-8">
                            <h1 className="text-center font-semibold text-3xl font-mono">Đăng ký</h1>
                        </div>
                        <div className="flex items-center justify-center flex-col mt-8" >
                            <input type="text" name="username" id="username" autocomplete="username" class=" w-3/5 rounded mt-6 border-gray-500 border-2 bg-transparent  text-gray-900 placeholder:text-gray-400 " placeholder="Email/Số điện thoại">
                            </input>

                            <div className=" flex justify-end  w-3/5">
                                <input type={showPassword ? "text" : "password"} name="password" id="password" autocomplete="password" class="w-full rounded mt-4 border-gray-500 border-2 bg-transparent  text-gray-900 placeholder:text-gray-400 " placeholder="Mật khẩu">
                                </input>
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute mt-5 mr-6 text-sm text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                                </button>
                            </div>
                            <div className=" flex justify-end  w-3/5">
                                <input type={showRePassword ? "text" : "password"} name="repassword" id="repassword" autocomplete="repassword" class="w-full rounded mt-4 border-gray-500 border-2 bg-transparent  text-gray-900 placeholder:text-gray-400 " placeholder="Nhập lại mật khẩu">
                                </input>
                                <button
                                    type="button"
                                    onClick={toggleRePasswordVisibility}
                                    className="absolute mt-5 mr-6 text-sm text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    <i className={showRePassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                                </button>
                            </div>

                            <button className="bg-red-300 w-3/5 rounded mt-16 mb-6">
                                <span className="text-center font-semibold text-2xl font-mono">ĐĂNG KÝ</span>
                            </button>
                            

                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}
export default Register;