
export function Parentfunc2(){
    return(
        <div>
            <h1>from Parent func2</h1>
        </div>
    )
}

export function Childfunc2(){
    return(
        <div>
            <h1>from child func2</h1>
        </div>
    )
}

export default function Mainfunc2(){
    return(
        <div>
            <h1>from main func2</h1>
            <Parentfunc2/>
            <Childfunc2/>
        </div>
    )
}