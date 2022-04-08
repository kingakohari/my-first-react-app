function Beer({info, randomNumber}){
    const {title,sub,text}=info
    

    return(
        <div className='beer'>
            <h1>{title} {randomNumber}</h1>
            <p>{sub}</p>
            <p>{text}</p>
            <button onClick={()=>console.log("Clicked")}>Click me</button>
        </div>
        
    )
}

export default Beer