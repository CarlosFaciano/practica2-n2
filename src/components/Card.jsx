

 export function Card({farm,server,id,secret}) {
    return (
        <>
            <div className="w-4/5 md:w-[45%] lg:w-[30%] h-2/5    rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5  ms-5 ">
                <img className=" w-screen h-full md:h-[250px]" src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`} alt="" />     
                
            </div>
        </>
    )
}
  
    

 