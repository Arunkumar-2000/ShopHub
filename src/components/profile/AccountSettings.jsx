import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import Toast from "../ui/Toast";

import { logout } from "../../features/user/userSlice";

const AccountSettings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

    Toast.success(
      "Logged out successfully"
    );

    navigate("/");
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-6">
        Account Settings
      </h2>

      <div className="space-y-4">
        <Button
          variant="outline"
          className="w-full justify-start"
        >
          Edit Profile
        </Button>

        <Button
          variant="outline"
          className="w-full justify-start"
        >
          Change Password
        </Button>

        <Button
          variant="danger"
          className="w-full"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AccountSettings;