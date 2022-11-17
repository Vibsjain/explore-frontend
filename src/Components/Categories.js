import { useState } from 'react';
import cat1unfilled from '../Assets/Images/cat1unfilled.png';
import cat2unfilled from '../Assets/Images/cat2unfilled.png';
import cat3unfilled from '../Assets/Images/cat3unfilled.png';
import cat4unfilled from '../Assets/Images/cat4unfilled.png';
import CategoryCard from './CategoryCard';

function Catergories(){

    const [showMore, setShowMore] = useState(false);

    const toggleMore = () => {
        setShowMore(!showMore);
    }

    return (
        <div data-aos="fade-down" className="flex flex-col flex-wrap justify-center items-center bg-[#EDEDED]">
            <p className="text-[45px] font-semibold py-10 z-[1]">Categories</p>
            <div className='flex justify-evenly w-full'>
                <CategoryCard symbol={cat1unfilled} name="Restaurant" />
                <CategoryCard symbol={cat2unfilled} name="Coffee & Tea" />
                <CategoryCard symbol={cat3unfilled} name="Hotels & Travels" />
                <CategoryCard symbol={cat4unfilled} name="Home Services" />
            </div>
            {!showMore && (
                <div className='flex' onClick={toggleMore}>
                    <p className='text-[17px] my-4 mx-2 px-4 border-[#ED560B] font-semibold border-2 cursor-pointer hover:text-[#ffffff] hover:bg-[#ED560B] rounded-xl'>More</p>
                </div>
            )}
            {showMore && (
                <div data-aos="fade-down" className='flex justify-evenly w-full'>
                    <CategoryCard symbol={cat1unfilled} name="Restaurant" />
                    <CategoryCard symbol={cat2unfilled} name="Coffee & Tea" />
                    <CategoryCard symbol={cat3unfilled} name="Hotels & Travels" />
                    <CategoryCard symbol={cat4unfilled} name="Home Services" />
                </div>
            )}
            {showMore && (
                <div className='flex' onClick={toggleMore}>
                    <p className='text-[17px] my-4 mx-2 px-4 border-[#ED560B] font-semibold border-2 cursor-pointer hover:text-[#ffffff] hover:bg-[#ED560B] rounded-xl'>Less</p>
                </div>
            )}
        </div>
    )
}

export default Catergories;