import { Link } from "react-router-dom";
import { Bookmark, Plus, User } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <div className="bg-slate-200 w-full top-0 left-0  py-6 px-3 flex items-center justify-between">
            <Link to="/">
                <h1 className="font-bold text-3xl hover:cursor-pointer">
                    Job Tracker
                </h1>
            </Link>
            <ul className="flex items-center justify-between gap-4 px-3">
                <Link
                    to="/saved"
                    className="font-semibold text-xl hover:cursor-pointer flex items-center justify-between gap-1  rounded-"
                >
                    <Tooltip>
                        <TooltipTrigger>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-10 w-10"
                            >
                                <Bookmark className="w-10 h-10" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="text-lg ">Saved Job</p>
                        </TooltipContent>
                    </Tooltip>
                </Link>
                <Link to="/newjob">
                    <Button
                        className="bg-blue-500 h-10 text-white py-3 hover:bg-blue-600"
                        variant="secondary"
                        outline="none"
                    >
                        {" "}
                        <Plus />
                        <li className="font-semibold text-xl">New Job</li>
                    </Button>
                </Link>
                <Link to="/login">
                    <Button
                        className="bg-purple-500 h-10 text-white py-3 hover:bg-purple-600"
                        variant="secondary"
                        outline="none"
                    >
                        {" "}
                        <User />
                        <li className="font-semibold text-xl">Login</li>
                    </Button>
                </Link>
            </ul>
        </div>
    );
};
export default Navbar;
