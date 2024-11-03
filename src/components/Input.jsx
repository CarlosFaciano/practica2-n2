import App from "../App"
export default function Search ({setQuery}){
  
    return(
        <>
        <section className="w-4/5 lg:w-1/5 h-12 flex mx-auto mb-3">
        <div className="h-full w-full flex   rounded-lg ">
            <input onChange={(e)=>setQuery(e.target.value)}  id="Input1" type="text" className="h-full w-full  outline-none ps-5 bg-white border-none  " />
            <figure htmlFor="Input1" className=" w-12 h-12 flex justify-center items-center pe-2 bg-slate-300 input">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ms-2 w-8 h-5/5 font-extrabold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </figure>
        </div>
    </section>
        
        
        </>
    )
}