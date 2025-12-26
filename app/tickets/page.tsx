import { initialTickets } from '@/app/_data/data';

import Heading from '@/components/heading';
import TicketItem from '../_features/ticket/ticket-item';

export default function TicketsPage() {
	return (
		<div className='flex-1 flex flex-col gap-y-8'>
			<Heading
				title='Tickets Page'
				description='All your tickets in one place!'
			/>
			<div className='flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top'>
				{initialTickets.map((ticket) => (
					<TicketItem key={ticket.id} ticket={ticket} />
				))}
			</div>
		</div>
	);
}
