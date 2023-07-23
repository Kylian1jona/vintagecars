import React,{useState} from "react";
function Hooks()
{

    const state=useState();
    const[count,setCount]=useState(0);
    function Jonathan()
    {
        setCount(count+1);
    };
    return(
        <>
        <div className="text-center" style={{color:"blue"}}>
            <h1 className="display-1">{count}</h1>
            <button type="button" className="btn btn-success btn-lg" onClick={Jonathan}>Click Here to reveal your fate</button>
        </div>
        </>
    )
};
export default Hooks;