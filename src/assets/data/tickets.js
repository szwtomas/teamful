const tickets = [
	{
		id: 1,
		title: "Create website",
		description:
			"Create teamful's website, using react, node.js and create-react-app",
		assigned: ["Tomas Szwarcberg"],
		priority: "high",
		status: "To Do",
		category: "Implementation",
	},
	{
		id: 2,
		title: "Create landing page",
		description:
			"Implement landing page using Chakra UI templates. Color scheme is green.400 and gray.100",
		assigned: ["Tomas Szwarcberg"],
		priority: "medium",
		status: "Done",
		category: "Implementation",
	},
	{
		id: 3,
		title: "Fix notification icon",
		description: "Notifications should be blabalbla",
		assigned: [],
		priority: "low",
		status: "backload",
		category: "Bug",
	},
];

const getTickets = () => {
	return new Promise(resolve => {
		resolve(tickets);
	});
};

export { getTickets };
