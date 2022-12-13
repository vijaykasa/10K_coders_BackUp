
export function Parentfunc3(){
    return(
        <div>
            <h1>from Parent func3</h1>
        </div>
    )
}

export function Childfunc3(){
    return(
        <div>
            <h1>from child func3</h1>
        </div>
    )
}

export default function Mainfunc3(){
    return(
        <div>
            <h1>from main func3</h1>
            <Parentfunc3/>
            <Childfunc3/>
        </div>
    )
}