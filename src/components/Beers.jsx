import Beer from './Beer.jsx'

function Beers({list}){
    console.log(list);

    const a = 10

    console.log(<Beer randomNumber={10} />);

    return (
        <div className='beers'>
            {list.map((item, index) => <Beer info={item} randomNumber={a} key={index}/>)}
        </div>
    )
}

export default Beers