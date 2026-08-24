import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Toast from "../ui/Toast";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // =========================
    // NAME VALIDATION
    // =========================
    if (name === "name") {
      // Only letters and spaces
      if (!/^[A-Za-z\s]*$/.test(value)) {
        Toast.error("Name should contain letters only");
        return;
      }
    }

    // =========================
    // EMAIL VALIDATION
    // =========================
   if (name === "email") {
  if (!/^[A-Za-z0-9@._%+-]*$/.test(value)) {
    Toast.error("Invalid email characters");
    return;
  }

  if (value.length > 100) {
    Toast.error("Email cannot exceed 100 characters");
    return;
  }
}

    // =========================
    // PASSWORD VALIDATION
    // =========================
    if (name === "password") {
      // Password should not contain spaces
      if (/\s/.test(value)) {
        Toast.error("Password should not contain spaces");
        return;
      }

      // Maximum 20 characters
      if (value.length > 20) {
        Toast.error("Password cannot exceed 20 characters");
        return;
      }
    }

    // =========================
    // CONFIRM PASSWORD
    // =========================
    if (name === "confirmPassword") {
      // No spaces
      if (/\s/.test(value)) {
        Toast.error(
          "Confirm password should not contain spaces"
        );
        return;
      }

      if (value.length > 20) {
        Toast.error(
          "Confirm password cannot exceed 20 characters"
        );
        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // =========================
    // NAME
    // =========================
    if (!formData.name.trim()) {
      Toast.error("Please enter your full name");
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      Toast.error("Name should contain letters only");
      return;
    }

    // =========================
    // EMAIL
    // =========================
    if (!formData.email.trim()) {
      Toast.error("Please enter your email");
      return;
    }

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(formData.email.trim())) {
      Toast.error("Please enter a valid email address");
      return;
    }

    // =========================
    // PASSWORD
    // =========================
    if (!formData.password) {
      Toast.error("Please enter your password");
      return;
    }

    if (formData.password.length < 8) {
      Toast.error(
        "Password must be at least 8 characters"
      );
      return;
    }

    // Password strength
    if (!/[A-Z]/.test(formData.password)) {
      Toast.error(
        "Password must contain at least one uppercase letter"
      );
      return;
    }

    if (!/[a-z]/.test(formData.password)) {
      Toast.error(
        "Password must contain at least one lowercase letter"
      );
      return;
    }

    if (!/[0-9]/.test(formData.password)) {
      Toast.error(
        "Password must contain at least one number"
      );
      return;
    }

    // =========================
    // CONFIRM PASSWORD
    // =========================
    if (!formData.confirmPassword) {
      Toast.error("Please confirm your password");
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      Toast.error("Passwords do not match");
      return;
    }

    // =========================
    // SUCCESS
    // =========================
    Toast.success("Registration successful");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Full Name */}
      <Input
        label="Full Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your full name"
      />

      {/* Email */}
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@gmail.com"
      />

      {/* Password */}
      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />

      {/* Confirm Password */}
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm your password"
      />

      {/* Register Button */}
      <Button
        type="submit"
        className="w-full"
      >
        Register
      </Button>

      {/* Login */}
      <p className="text-center">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;