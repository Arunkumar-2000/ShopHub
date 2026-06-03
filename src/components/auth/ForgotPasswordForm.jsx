import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Toast from "../ui/Toast";

const ForgotPasswordForm = () => {
  const [email, setEmail] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Toast.success(
      "Password reset link sent"
    );

    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 text-stone-900"
    >
      <Input
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
        placeholder="Enter your email"
      />

      <Button className="w-full">
        Send Reset Link
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;