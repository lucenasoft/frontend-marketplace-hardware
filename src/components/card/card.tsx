import "./card.css"

interface CardProps {
    price: number,
    title: string,
    imgURL: string
}

export function Card({price, title, imgURL} : CardProps){
    return(
        <div className="card">
            <img/>
            <h2></h2>
            <p><b>Valor:</b></p>
        </div>
    )
}