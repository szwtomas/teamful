// Simulates project members fetching
// For now, always returns the same

const members = [
	{
		id: 1,
		name: "Tomas Szwarcberg",
		role: "Admin",
		email: "tszwarcberg@fi.uba.ar",
	},
	{
		id: 2,
		name: "Gabriel Szwarcberg",
		role: "Developer",
		email: "gabrielemail@mail.com",
	},
	{
		id: 3,
		name: "Karin Meis",
		role: "Developer",
		email: "kmeis@mail.com",
	},
	{
		id: 4,
		name: "John Doe",
		role: "Product Owner",
		email: "johndoe@mail.com",
	},
	{
		id: 5,
		name: "Marcelo Gallardo",
		role: "Scrum Master",
		email: "marcelo@gallardo.com",
	},
	{
		id: 6,
		name: "Solana Szw",
		role: "UI Designer",
		email: "soliszw@mail.com",
	},
	{
		id: 7,
		name: "Juan Fernando Quintero",
		role: "Q.A.",
		email: "jfq10@mail.com",
	},
	{
		id: 8,
		name: "Enzo Perez",
		role: "Developer",
		email: "enzoperez@mail.com",
	},
	{
		id: 9,
		name: "Franco Armani",
		role: "Testing",
		email: "armani@mail.com",
	},
	{
		id: 10,
		name: "Pepe Argento",
		role: "Developer",
		email: "pepe@mail.com",
	},
];

const getMembers = () => {
	return new Promise(resolve => {
		resolve(members);
	});
};

export { getMembers };
