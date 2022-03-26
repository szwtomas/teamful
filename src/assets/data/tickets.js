const tickets = [
	{
		id: 1,
		title: "Create website",
		description:
			"Create teamful's website, using react, node.js and create-react-app",
		assigned: ["Tomas Szwarcberg"],
		priority: "High",
		status: "To Do",
		category: "Implementation",
	},
	{
		id: 2,
		title: "Create landing page",
		description:
			"Implement landing page using Chakra UI templates. Color scheme is green.400 and gray.100",
		assigned: ["Tomas Szwarcberg"],
		priority: "Medium",
		status: "Done",
		category: "Implementation",
	},
	{
		id: 3,
		title: "Fix notification icon",
		description: "Notifications should be blabalbla",
		assigned: [],
		priority: "Low",
		status: "backload",
		category: "Bug",
	},
];

const getTickets = () => {
	return new Promise(resolve => {
		resolve(tickets);
	});
};

const getTicketById = id => {
	return new Promise((resolve, reject) => {
		const found = tickets.find(ticket => ticket.id === id);
		if (found) {
			resolve(found);
			return;
		}
		reject(new Error("Ticket not found"));
	});
};

export { getTickets };
