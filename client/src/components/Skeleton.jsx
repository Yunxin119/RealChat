const Skeleton = () => {
	return (
		<>
        <div>
            <div className='flex gap-4 items-center'>
				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-5 w-40'></div>
					<div className='skeleton h-8 w-40'></div>
				</div>
			</div>
			<div className='flex gap-4 items-center justify-end'>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-8 w-40'></div>
				</div>
				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
			</div>
            <div className='flex gap-4 items-center'>
				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-5 w-40'></div>
					<div className='skeleton h-8 w-40'></div>
				</div>
			</div>
			<div className='flex gap-4 items-center justify-end'>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-8 w-40'></div>
				</div>
				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
			</div>
        </div>

		</>
	);
};
export default Skeleton;