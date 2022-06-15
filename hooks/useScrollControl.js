const useScrollControl = () => {
	let body;
	if (typeof window !== 'undefined') {
		body = document.getElementsByTagName('BODY')[0];
	}

	const preventScroll = () => (body.style.overflow = 'hidden');
	const allowScroll = () => (body.style.overflow = 'auto');

	return { preventScroll, allowScroll };
};

export default useScrollControl;
