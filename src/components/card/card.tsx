import "./card.css"

interface CardProps {
    price: number,
    title: string,
    imgURL: string
}

export function Card({price, title, imgURL} : CardProps){
    console.log(price);
    return(
        <div className="card">
            <img src={imgURL}/>
            <h2>
                {title}
            </h2>
            <p><b>Valor: </b>{price}</p>
        </div>
    )
}