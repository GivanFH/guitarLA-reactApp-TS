import type { Guitar } from "../types/types";

type GuitarProps = {
    guitar : Guitar,
    addToCart : ( item : Guitar) => void
}

export default function Guitar({ guitar, addToCart} : GuitarProps) {

    const { id, name, image, description, price } = guitar;

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem
                    nesciunt, amet deserunt</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    //Cuando se tienen funcinoes que pasan argumentos se llaman por si solas
                    //Por ello hay que poner un callback para que se llame cuando damos click
                    //Setea el objeto de guitarra clickeado en el state de cart con la funcion setCart() que se paso por props desde app.jsx

                    //Toma una copia de lo que hay en cart y agrega el nuevo elemento
                    // onClick={() => setCart( prevCart => [...prevCart, guitar])}>
                    onClick={() => addToCart(guitar)}>
                    Agregar al Carrito</button>
            </div>
        </div>
    )
}