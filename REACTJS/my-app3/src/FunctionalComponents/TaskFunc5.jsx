
export function Parentfunc5(){
    return(
        <div>
            <h1>from Parent func5</h1>
        </div>
    )
}

export function Childfunc5(){
    return(
        <div>
            <h1>from child func5</h1>
        </div>
    )
}

export default function Mainfunc5(){
    return(
        <div>
            <h1>from main func5</h1>
            <Parentfunc5/>
            <Childfunc5/>
        </div>
    )
}