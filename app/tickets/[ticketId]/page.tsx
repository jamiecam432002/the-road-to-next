import { initialTickets } from '@/app/_data/data';
import { ticketsPath } from '@/app/_data/paths';
import Placeholder from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type TicketPageProps = {
	params: {
		ticketId: string;
	};
};

export default async function TicketPage({ params }: TicketPageProps) {
	const { ticketId } = await params;
	const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

	if (!ticket) {
		return (
			<Placeholder
				label='Ticket not found!'
				button={
					<Button asChild variant='outline'>
						<Link href={ticketsPath()}>Go to Tickets</Link>
					</Button>
				}
			/>
		);
	}

	return (
		<div>
			<h2 className='text-lg'>{ticket.title}</h2>
			<p className='text-sm'>{ticket.content}</p>
		</div>
	);
}
