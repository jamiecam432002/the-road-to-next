import { initialTickets } from '@/app/_data/data';

type TicketPageProps = {
	params: {
		ticketId: string;
	};
};

export default async function TicketPage({ params }: TicketPageProps) {
	const { ticketId } = await params;
	const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
	console.log(ticket);

	if (!ticket) {
		return (
			<div>
				<p className='text-lg'>Ticket not found!</p>
			</div>
		);
	}

	return (
		<div>
			<h2 className='text-lg'>{ticket.title}</h2>
			<p className='text-sm'>{ticket.content}</p>
		</div>
	);
}
