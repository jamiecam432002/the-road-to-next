export const initialTickets = [
	{
		id: '1',
		title: 'Ticket 1',
		content: 'This is the first ticket',
		status: 'DONE' as const,
	},
	{
		id: '2',
		title: 'Ticket 2',
		content: 'This is the second ticket',
		status: 'OPEN' as const,
	},
	{
		id: '45',
		title: 'Ticket 45',
		content: 'Mind ya business!',
		status: 'OPEN' as const,
	},
	{
		id: '90',
		title: 'Ticket 90',
		content: 'Nunya business!',
		status: 'IN_PROGRESS' as const,
	},
];
