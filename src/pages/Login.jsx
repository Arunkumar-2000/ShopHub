import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 text-stone-800 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">
          Login
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;