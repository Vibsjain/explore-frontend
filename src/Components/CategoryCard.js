function CategoryCard(props){

    const image = props.symbol;
    const name = props.name;

    return(
        <div className="h-[30vh] w-[20vw] shadow-2xl bg-white rounded-xl flex flex-col justify-center items-center my-4 cursor-pointer">
            <img src={image} alt="" />
            <p className="text-[20px] mt-2">{name}</p>
        </div>
    )
}

export default CategoryCard;