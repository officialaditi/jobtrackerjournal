import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

/**
 *   @Description      User Register
 *   @route            /api/users/
 *   @access           public
 *
 */
const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // checking if the user already exist = checking email
        const userExist = await User.findOne({ email });
        if (userExist) {
            res.status(400).json({
                success: false,
                message: "User with this email already exist..",
            });
        }

        const user = await User.create({ username, email, password });
        if (user) {
            // successfull
            res.status(201).json({
                message: "User Registered Successfully...",
            });
        }
    } catch (err) {
        console.error(err);
    }
};

/**
 *  @Description      User Login
 *  @Route            /api/users/login
 *  @access           public
 *
 */
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        //checking if user already exist
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.status(200).json({
                message: `Welcome ${user.username}`,
                token: generateToken(user._id),
            });
        } else {
            res.status(401);
            throw new Error("Invalid email or password");
        }
    } catch (err) {
        console.log(err);
    }
};

export { register, login };
