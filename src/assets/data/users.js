import { getProjects } from "./projects";

// Simulates users api
const users = [
	{
		id: 1,
		firstName: "Tomas",
		lastName: "Szwarcberg",
		userName: "szwtomas",
		email: "tomasemail@mail.com",
	},
	{
		id: 2,
		firstName: "Gabriel",
		lastName: "Szwarcberg",
		userName: "gabrielszwarcberg",
		email: "gabrielemail@mail.com",
	},
	{
		id: 3,
		firstName: "Karin",
		lastName: "Meischenguiser",
		userName: "kmeis",
		email: "kmeischen@mail.com",
	},
	{
		id: 4,
		firstName: "Juan Fernando",
		lastName: "Quintero",
		userName: "jfq10",
		email: "juanfer@mail.com",
	},
];

// Returns User object of the form ({id, firstName, lastName, userName, email}) with id 'id'
const getUserById = id => {
	return new Promise((resolve, reject) => {
		const found = users.find(p => p.id === id);
		if (found === undefined) {
			reject(new Error("Project doesn't exist"));
		} else {
			resolve(found);
		}
	});
};

const userExists = id => {
	return users.some(u => u.id === id);
};

// For now, always returns all the projects on "./projects" or rejects if user doesen't exist
const getUserProjects = id => {
	return new Promise((resolve, reject) => {
		if (!userExists(id)) {
			reject("User not found");
			return;
		}
		resolve(getProjects);
	});
};

export { getUserById, getUserProjects };
