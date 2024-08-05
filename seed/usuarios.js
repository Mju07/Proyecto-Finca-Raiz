import bcrypt from 'bcrypt';

const usuarios = [
	{
		name: "Maria Jose",
        lastname:"Mora Arango",
		email: "mj@f.com",
		confirm: 1,
		password: bcrypt.hashSync("contrasena", 10),
	},
	// Add other users if needed
];

export default usuarios;