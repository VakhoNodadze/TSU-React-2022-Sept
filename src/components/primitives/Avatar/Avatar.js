import React from "react";

const Avatar = ({
  avatar,
  isRounded = false,
  bgColor = "blue-600",
  borderColor = "white",
  textColor = "white",
  firstName = "",
  lastName = "",
  className,
  children,
  ...rest
}) => {
  const renderAvatarWithImage = () => (
    <div className="relative flex">
      <div
        className={`flex bg-${bgColor} text-${textColor} w-10 h-10 ${
          isRounded ? "rounded-full" : "rounded-md"
        } cursor-pointer ${className}`}
      >
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );

  const renderAvatarWithoutImage = () => (
    <div
      {...rest}
      className={`flex justify-center items-center  bg-${bgColor} text-${textColor} w-10 h-10 ${
        isRounded ? "rounded-full" : "rounded-md"
      } cursor-pointer ${className}  border-2`}
    >
      <span className="text-xs">{firstName?.slice(0, 1).toUpperCase()}</span>
      <span className="text-xs">{lastName?.slice(0, 1).toUpperCase()}</span>
      {children}
    </div>
  );

  return <>{avatar ? renderAvatarWithImage() : renderAvatarWithoutImage()}</>;
};

export default Avatar;
