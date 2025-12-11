import Link from 'next/link';

export default function HomePage() {
	return (
		<div>
			<h1 className='text-4xl'>Home Page</h1>
			<Link href='/tickets' className='underline'>
				Go to tickets
			</Link>
		</div>
	);
}
