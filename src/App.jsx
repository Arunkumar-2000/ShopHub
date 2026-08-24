import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import ScrollToTop from "./components/common/ScrollToTop";
import BackToTop from "./components/common/BackToTop";
import { Toaster } from "react-hot-toast";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
   <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <ScrollToTop />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2200,
          style: {
            borderRadius: "12px",
            padding: "12px 16px",
            fontSize: "14px",
          },
        }}
      />

      <Navbar />

      <main className="flex-1">
        <AppRoutes />
      </main>

      <Footer />

      <BackToTop />
       </div>
  );
}

export default App;