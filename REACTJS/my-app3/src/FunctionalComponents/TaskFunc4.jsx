
export function Parentfunc4(){
    return(
        <div>
            <h1>from Parent func4</h1>
        </div>
    )
}

export function Childfunc4(){
    return(
        <div>
            <h1>from child func4</h1>
        </div>
    )
}

export default function Mainfunc4(){
    return(
        <div>
            <h1>from main func4</h1>
            <Parentfunc4/>
            <Childfunc4/>
        </div>
    )
}