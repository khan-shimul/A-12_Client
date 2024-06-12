import React from 'react';

const ShowReview = ({review}) => {
    console.log(review)
    const{reviewDes,userName}=review
    return (
        <div>
            <section className="">
	
	<div className="container border h-40 overflow-auto  border-red-600 mx-auto   md:px-10 md:pb-10 ">
		<div className="flex flex-col items-center lg:mx-0">
			<div className="relative text-center">
				
				<p className=" text-center text-xl pt-5 lg:px-5  italic">{reviewDes
}</p>
				
			</div>
			<span className="w-12 h-1 rounded-lg dark:bg-violet-600"></span>
			<p className='text-orange-500'>--{userName || 'Unknown'} </p>
		</div>
		
	</div>
</section>
        </div>
    );
};

export default ShowReview;