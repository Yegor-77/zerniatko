import styled from "styled-components"



const mobileStyles = {

}

const ActiveCircle = styled.div<{ $size: Number }>`
    width: ${props => props.$size};
    height: ${props => props.$size};
    border-radius: 50%;
    background-color: #000;
    opacity: 100%;
`;

const InactiveCircle = styled.div<{ $size: Number }>`
    width: ${props => props.$size};
    height: ${props => props.$size};
    border-radius: 50%;
    background-color: #000;
    opacity: 20%;
`;

const sizeFunc = (arr_length, idx) => parseInt((arr_length - 1) / 2 - Math.abs((arr_length - 1) / 2 - idx))

function NavigationBar({products_length, products_per_page, page_num}) {
    return(
        <div>{[0, 0, 1, 0, 0].map((x, idx, arr) => x ? <ActiveCircle $size={8 + 2 * sizeFunc(arr.length, idx)}></ActiveCircle> : <InactiveCircle $size={8 + 2 * sizeFunc(arr.length, idx)}></InactiveCircle>)}</div>
    )
}


export default function PopularProducts({products}) {
    return(
    <div>
        <h2>Популярні товари</h2>
        <button>Всі товари</button>
        <div>
            {products.map(product => 
                <div key={product.id}>
                    <img src={product.image} alt={product.name}/>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <h4>{product.price}</h4>
                    <button>Детальніше</button>
                </div>
            )}
        </div>
        <NavigationBar products_length={products.length} products_per_page={1} page_num={1}/>
    </div>)
}