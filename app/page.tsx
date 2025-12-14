import Link from 'next/link';
import { ticketsPath } from './_data/paths';

export default function HomePage() {
	return (
		<div>
			<h2 className='text-lg'>Home Page</h2>
			<Link href={ticketsPath()} className='text-sm underline'>
				Go to tickets
			</Link>
		</div>
	);
}
