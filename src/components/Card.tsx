import { ReactNode } from "react";

interface CardProps{
children : ReactNode; //tipado

}
interface CardBodyProps{
    title : string; //tipado
    text? : string; //ponerle el signo ? sognifica que en App.tsx es opcional es decir que si lo quitas no da error
}

function Card(props : CardProps){
    const { children } = props;
    return (
        <div className="card" style={{
            width: "350px", 
        }}>
  <div className="card-body">
{children}
</div>
</div>
    )
}
export default Card;
export function CardBody(props : CardBodyProps){
    const {title, text} = props;
    return(
        <>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    </>    
    )
}