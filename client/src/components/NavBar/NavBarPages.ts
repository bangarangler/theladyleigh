interface Page {
	id: number;
	path: string;
	text: string;
	hover: string;
}

export const pages: Page[] = [
	{ id: 0, path: '/', text: 'Home', hover: 'Home' },
	{ id: 1, path: '/about', text: 'About', hover: 'About' }
	// { id: 2, path: '/uses', text: 'Uses', hover: 'Uses' },
	// { id: 3, path: '/contact', text: 'Contact', hover: 'Contact' }
];
