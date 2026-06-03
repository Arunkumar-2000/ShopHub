import { Mail, User } from "lucide-react";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const { user } = useSelector(
    (state) => state.user
  );

  return (
    <div className="bg-white text-gray-900 rounded-2xl shadow-md p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold mb-6">
        Profile Information
      </h2>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
        
        {/* Avatar */}
        <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl sm:text-3xl font-bold shrink-0">
          {user?.name?.charAt(0) || "U"}
        </div>

        {/* User Details */}
        <div className="text-center sm:text-left flex-1 w-full">
          <h3 className="text-lg sm:text-xl font-semibold wrap-break-word">
            {user?.name || "Guest User"}
          </h3>

          <div className="flex items-center justify-center sm:justify-start gap-2 mt-3 text-gray-600 text-sm sm:text-base break-all">
            <Mail size={16} />
            <span>
              {user?.email ||
                "dev@example.com"}
            </span>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 text-gray-600 text-sm sm:text-base">
            <User size={16} />
            <span>
              Customer Account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;