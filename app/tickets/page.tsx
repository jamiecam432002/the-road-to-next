import Link from 'next/link';
import { initialTickets } from '@/app/_data/data';
import { ticketPath } from '../_data/paths';

const TICKET_ICONS = {
	OPEN: 'O',
	DONE: 'X',
	IN_PROGRESS: 'I',
};

export default function TicketsPage() {
	return (
		<div>
			{initialTickets.map((ticket) => (
				<div key={ticket.id}>
					<div>{TICKET_ICONS[ticket.status]}</div>
					<h2 className='text-lg'>{ticket.title}</h2>
					<Link href={ticketPath(ticket.id)} className='text-sm underline'>
						View
					</Link>
				</div>
			))}
		</div>
	);
}
