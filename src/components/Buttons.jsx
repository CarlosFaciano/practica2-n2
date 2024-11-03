import App from "../App"

export default function Buttons ({setQuery}){
    

    return(
        <>
        <div className=" w-full flex justify-center gap-x-2 pb-3">
            <button value="mountain" className="w-24 h-8 bg-slate-800 text-white font-bold" onClick={(e)=>setQuery(e.target.value)}>Mountain</button>
            <button value="Beaches" className="w-24 h-8 bg-slate-800 text-white font-bold" onClick={(e)=>setQuery(e.target.value)}>Beaches</button>
            <button value="Birds" className="w-24 h-8 bg-slate-800 text-white font-bold" onClick={(e)=>setQuery(e.target.value)}>Birds</button>
            <button value="Food" className="w-24 h-8 bg-slate-800 text-white font-bold" onClick={(e)=>setQuery(e.target.value)}>Food</button>
        </div>
        
        
        
        
        
        </>


    )
}
