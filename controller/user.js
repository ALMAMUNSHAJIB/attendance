const User = require("../models/User");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getUserController = async (req, res) => {
	try {
		const user = await User.find().select({ __v: 0, password: 0, name: 0 });
		if (!user) {
			return res.status(500).json({
				message: "Please go to signup!!",
			});
		}
		res.status(200).json({
			message: "User found!!",
			data: user,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "User not found",
			error: err,
		});
	}
};

exports.signupController = async (req, res) => {
	try {
		const saltRounds = 10;
		const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
		//    const {name, username, password} = req.body
		const newUser = new User({
			...req.body,
			password: hashPassword,
		});
		await newUser.save();
		res.status(201).json({
			data: newUser,
			message: "User was inserted successfuly!!",
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: err,
		});
	}
};

exports.signinController = async (req, res) => {
	try {
		const user = await User.find({ username: req.body.username });
		if (user && user.length > 0) {
			const isValidPassowrd = await bcrypt.compare(req.body.password, user[0].password);
			if (isValidPassowrd) {
				//token generate
				const token = jwt.sign(
					{
						username: user[0].username,
						userId: user[0]._id,
					},
					process.env.JWT_SECRET,
					{
						expiresIn: "24h",
					}
				);
				res.status(200).json({
					access_token: token,
					message: "Login Successfully",
				});
			} else {
				res.status(401).json({
					error: "Authnication failed!!",
				});
			}
		} else {
			res.status(401).json({
				error: "Authnication failed!!",
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Server side error",
		});
	}
};
