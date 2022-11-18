import React, { useState } from "react";
import emptyStar from "../Assets/Images/emptyStar.png";
import filledStar from "../Assets/Images/filledStar.png";

function ActivityCard(props) {
    const image = props.userImage;
    const name = props.userName;
    const resImage = props.restImage;
    const resName = props.restName;
    const star = props.star;
    const review = props.review;
    const [isExtended, setIsExtended] = useState(true);
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className="flex flex-col justify-center  sm:min-h-[50vh] min-h-[45vh] sm:w-[30rem] w-[20rem] sm:my-4 my-2 rounded-[3rem] bg-white shadow-xl p-4">
            <div className="sm:m-4 m-2">
                <div className="flex py-4 ">
                    <img
                        src={image}
                        className="rounded-full sm:w-[4rem] sm:h-[4rem] w-[3.5rem] h-[3.5rem]"
                        alt=""
                    />{" "}
                    <div className="flex flex-col justify-center mx-4">
                        <h1 className="sm:text-[20px] text-[16px] text-[#3A3A3A] font-normal">
                            {name}
                        </h1>
                        <h1 className="sm:text-[16px] text-[15px] text-[#6D6D6D]">
                            Wrote a Review
                        </h1>
                    </div>
                </div>
                <div className="sm:my-4 my-2">
                    <img
                        src={resImage}
                        className="w-full sm:h-48 h:36 rounded-[21px]"
                        alt=""
                    />
                    <h1 className="my-4 font-bold text-[16px] text-[#3A3A3A]">
                        {resName}
                    </h1>
                </div>

                <div className="flex gap-2">
                    {stars.map((item) => {
                        if (item <= star) {
                            return (
                                <img
                                    src={filledStar}
                                    className="w-[20px] h-[19px]"
                                    alt=""
                                />
                            );
                        } else {
                            return (
                                <img
                                    src={emptyStar}
                                    className="w-[20px] h-[19px]"
                                    alt=""
                                />
                            );
                        }
                    })}
                </div>
                {isExtended ? (
                    <div>
                        <h1 className="text-justify">{review.slice(0, 150)}</h1>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-justify">{review}</h1>
                    </div>
                )}
                <button
                    className="text-[#0066FF]"
                    onClick={() => setIsExtended(!isExtended)}
                >
                    {isExtended ? "Read More...." : "Read Less"}
                </button>
            </div>
        </div>
    );
}

export default ActivityCard;
