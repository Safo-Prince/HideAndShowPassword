import React from "react";
import { EyeSlash, Eye } from "phosphor-react";

const HideAndShowPassword = () => {
  const [showPassword, setShowPassword] = React.useState<Boolean>(false);
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center  ">
      <div className=" flex  relative   ">
        <span className="absolute text-[#61b1f7] font-semibold left-[23px] top-[10px]">
          Password
        </span>
        <input
          type={showPassword ? "text" : "password"}
          className=" w-[400px] h-[60px] pr-16 pl-7 py-10 font-semibold text-[10px] rounded-3xl focus:outline-[#61b1f7]  outline-4  border-2 border-[#f3f6fb] "
          id="password"
        />
        <label
          onClick={() => setShowPassword(!showPassword)}
          htmlFor="password"
          className="cursor-pointer absolute  right-[25px] top-[20px] text-[#8e9aaf]   "
        >
          {showPassword ? (
            <EyeSlash size={20} weight="fill" className="transition-all " />
          ) : (
            <Eye size={20} weight="fill" />
          )}
        </label>
      </div>
    </div>
  );
};

export default HideAndShowPassword;
