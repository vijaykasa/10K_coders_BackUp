
export function Parentfunc1(){
    return(
        <div>
            <h1>from Parent func1</h1>
        </div>
    )
}

export function Childfunc1(){
    return(
        <div>
            <h1>from child func1</h1>
        </div>
    )
}

export default function Mainfunc1(){
    return(
        <div>
            <h1>from main func1</h1>
            <Parentfunc1/>
            <Childfunc1/>
        </div>
    )
}