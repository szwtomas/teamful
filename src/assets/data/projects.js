// Simulates API Calls until backend is built

const projects = [
	{
		id: 1,
		title: "Teamful",
		description: "Fullstack project Managment System project",
		tickets: [],
	},
	{
		id: 2,
		title: "Campus FIUBA",
		description: "Campus de la Facultad de Ingenieria de la UBA",
		tickets: [],
	},
	{
		id: 3,
		title: "PROJECT WITH A LARGE title FOR TESTING   !",
		description: "to check if long titles look good on navbar or sidebar",
		tickets: [],
	},
	{
		id: 4,
		title: "Long description",
		description:
			"Long description to check if it looks good.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		tickets: [],
	},
];

// Returns Project object of the form ({id, title, description}) with id 'id'
const getProjectById = id => {
	return new Promise((resolve, reject) => {
		const found = projects.find(p => p.id === id);
		if (found === undefined) {
			reject(new Error("Project doesn't exist"));
		} else {
			resolve(found);
		}
	});
};

export { getProjectById };
