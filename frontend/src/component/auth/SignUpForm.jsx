import {useState} from "react";
import {FaUser, FaEnvelope, FaLock,} from "react-icons/fa";
import axios from 'axios'
import {EyeOff, EyeIcon} from "lucide-react";


export default function SignupForm() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [errorFullnam, setErrorFullnam] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setErrorEmail("");
        setErrorPassword("");
        setErrorFullnam("");

        if (!fullname || !email || !password) {
            setError("Tous les champs sont obligatoires.");
            return;
        }

        if (!validateEmail(email)) {
            setErrorEmail("Email invalide.");
            return;
        }

        try {
            setLoading(true);

            const response = await axios.post(
                'http://localhost:3000/SignUp',
                { fullname, email, password },
                { withCredentials: true }
            );

            console.log("Success:", response.data);

        } catch (err) {

            if (err.response && err.response.data.errors) {
                const errors = err.response.data.errors;

                setErrorEmail(errors.email);
                setErrorFullnam(errors.fullname);
                setErrorPassword(errors.password);
            } else {
                setError("Erreur serveur.");
            }

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" flex items-center justify-center  p-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm  p-6 rounded-2xl shadow-lg bg-linear-to-b from-gray-400 via-gray-600 to-neutral-700 "
            >
                <h2 className="text-2xl font-orbitron text-center mb-6">
                    Sign Up
                </h2>
                {error && (
                    <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}
                <div className="mb-4 relative">
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
              <FaUser/>
            </span>
                        <input
                            type="text"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            onFocus={() => setError("")}
                            placeholder="bassim ..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100 "
                        />
                        {errorFullnam && (
                            <span className={"text-red-600  text-center  "}>{errorFullnam}</span>
                        )}
                    </div>
                </div>
                <div className="mb-4 relative">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">
              <FaEnvelope/>
            </span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setError("")}
                            placeholder="exemple@email.com"
                            className="w-full  pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100"
                        />
                        {errorEmail && (
                            <span className={"text-red-600"}>{errorEmail}</span>
                        )}
                    </div>
                </div>
                <div className="mb-6 relative">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">
              <FaLock/>
            </span>
                        <input
                            type={showPassword ?   "password":"text"}
                            value={password}
                            onChange={(e) =>  setPassword(e.target.value)}
                            onFocus={() => setError("")}
                            placeholder="••••••••"
                            className="w-full pl-10 pr-20 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2.5 text-sm text-gray-500"
                        >
                            {showPassword ? <EyeOff size={20}/> : <EyeIcon size={20}/>}
                        </button>
                        {errorPassword && (
                            <span className={"text-red-600"}>{errorPassword}</span>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 rounded-lg text-white transition ${
                        loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                    {loading ? "Inscription..." : "Sign Up"}
                </button>
                <p className="text-center text-sm mt-4 text-blue-100">
                    Vous avez déjà un compte ?{" "}
                    <a href="/login" className="text-blue-600  hover:text-emerald-400">
                        Login
                    </a>
                </p>
            </form>
        </div>
    );
}