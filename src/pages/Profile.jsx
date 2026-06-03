import ProfileInfo from "../components/profile/ProfileInfo";
import OrderHistory from "../components/profile/OrderHistory";
import SavedAddresses from "../components/profile/SavedAddresses";
import AccountSettings from "../components/profile/AccountSettings";

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        My Profile
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <ProfileInfo />
          <AccountSettings />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <OrderHistory />
          <SavedAddresses />
        </div>
      </div>
    </div>
  );
};

export default Profile;