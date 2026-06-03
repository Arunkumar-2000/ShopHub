import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Input from "../ui/Input";
import Button from "../ui/Button";
import Toast from "../ui/Toast";

import { login } from "../../features/user/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        id: 1,
        name: "Demo User",
        email: formData.email,
      })
    );

    Toast.success(
      "Login successful"
    );

    navigate("/profile");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />

      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="remember"
            checked={
              formData.remember
            }
            onChange={
              handleChange
            }
          />
          Remember Me
        </label>

        <Link
          to="/forgot-password"
          className="text-blue-600"
        >
          Forgot Password?
        </Link>
      </div>

      <Button className="w-full">
        Login
      </Button>

      <p className="text-center">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;