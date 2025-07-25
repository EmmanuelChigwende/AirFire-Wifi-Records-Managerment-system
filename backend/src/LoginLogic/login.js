async function CheckUser(req, res) {
  try {
    const { Username, Password } = req.body

    if (!Username || !Password) {
      return res.status(400).send("Please fill in all fields")
    }

    // Enforce static credentials: admin / password
    if (Username !== "admin" || Password !== "password") {
      return res.status(403).send("Access denied. Only admin can log in.")
    }

    return res.status(200).send("Successfully logged in as admin")
  } catch (error) {
    console.error("Login error:", error.message)
    return res.status(500).send("Internal server error")
  }
}

export {CheckUser}