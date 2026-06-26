import { Button } from "@/components/ui/button";
import { useState } from "react";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("email data:", email, password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen flex-col">
            <div className="flex items-center justify-center flex-col px-10 rounded-lg shadow-lg borer border-slate-600">
                <h1 className="font-bold text-3xl text-center my-4">Login</h1>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center "
                >
                    <div className="flex items-center justify-center flex-col">
                        <div className="font-semibold flex flex-col gap-2 my-3">
                            <label className="font-bold text-2xl text-slate-600">
                                Enter Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-black w-96 py-2 px-3 rounded-lg text-xl"
                            />
                        </div>
                        <div className="font-semibold flex flex-col gap-2 my-3">
                            <label className="font-bold text-2xl text-slate-600">
                                Enter Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border border-black w-96 py-2 px-3 rounded-lg text-xl"
                            />
                        </div>
                        <Button
                            variant="outline"
                            className="bg-blue-500 hover:bg-blue-600 text-white text-xl h-12 w-30 rounded-full my-10 hover:text-white hover:cursor-pointer "
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default LoginScreen;
