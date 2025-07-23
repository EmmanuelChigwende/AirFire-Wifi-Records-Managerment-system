import { User } from "../modules/User.js";
import { Hash } from "../Authentication/Encryption.js";

async function CreateUser(req, res) {
  try {
    const { Username, Password } = req.body;

    // Validate input fields
    if (!Username || !Password) {
      return res.status(400).json({ error: "Please fill in all required fields" });
    }

    // Hash the password
    const hashedPassword = await Hash(Password);

    // Create new user with hashed password
    const newUser = new User({
      Username,
      Password: hashedPassword
    });

    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
    
  } catch (error) {
    console.log("CreateUser error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}

export { CreateUser };