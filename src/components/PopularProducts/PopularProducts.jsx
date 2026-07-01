import styled from "styled-components";
import arrow_back from './arrow_back.svg';
import arrow_forward from './arrow_forward.svg';

const CircleStyles = (size) => {
    return {
        width: size + 'px',
        height: size + 'px',
    };
}

const NavWrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 9px;
    width: 100%;
    margin: 40px auto 0;
    padding-bottom: 20px;
`

const ActiveCircle = styled.div`
    border-radius: 50%;
    background-color: #000;
    opacity: 100%;
`;

const InactiveCircle = styled.div`
    border-radius: 50%;
    background-color: #000;
    opacity: 20%;
`;

const correctionFunc = (x) => x + Math.min(1, Math.max(0, x - 1)) + Math.min(0, Math.abs(x - 2) - x);

const sizeFunc = (arr_length, idx) => 8 + 2 * parseInt((arr_length - 1) / 2 - Math.abs((arr_length - 1) / 2 - idx))

function NavigationBar({products_length, products_per_page, page_num}) {
    let Arr = Array(Math.min(5, Math.ceil(products_length / products_per_page))).fill(0);
    Arr[page_num - 1] = 1;
    return(
        // <div>{[0, 0, 1, 0, 0].map(x => <button>{x}</button>)}</div>
        // <div>{[0, 0, 1, 0, 0].map(x => ActiveCircle(sizeFunc(5, 1)))}</div>
        <NavWrap>{Arr.map((x, idx, arr) => x ? <ActiveCircle key={idx} style={CircleStyles(sizeFunc(arr.length, correctionFunc(page_num - 1) - idx + 2))}></ActiveCircle> : <InactiveCircle key={idx} style={CircleStyles(sizeFunc(arr.length, correctionFunc(page_num - 1) - idx + 2))}></InactiveCircle>)}</NavWrap>
    )
}


const ProductContainer = styled.div`
    width: 80%;
    background-color: #FEF3DB;
    margin: 0 auto;
    position: relative;
`;

const TitleWrap = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    margin: 0 auto;
`;

const Title = styled.h2`
    font-size: 36px;
    line-height: 1.2;
`;

const AllProductsButton = styled.button`
    height: 35px;
    width: 100px;
    padding: 6px 12px;
    border-radius: 100px;
    border: none;
    background-color: rgba(0, 0, 0, 0.05);
    margin-top: auto;
`;

const ProductList = styled.ul`
    display: flex;
    gap: 32px;
    list-style: none;
    padding: 10px;
    justify-content: center;
`;

const ProductItem = styled.li`
    max-width: 335px;
`;

const ProductTitle = styled.h4`
    font-size: 18px;
    line-height: 1.5;
    font-weight: 600;
    margin: 0;
`;

const ProductImage = styled.img`
    width: 100%;
    border-radius: 16px;
    margin: 0 auto;
`;

const ProductText = styled.p`
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    margin: 0;
`;

const ProductButton = styled.button`
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    margin: 12px 0 0 0;
    border-radius: 100px;
    width: 100%;
    height: 40px;
    border: none;
    background-color: rgba(0, 0, 0, 0.05);
`;

const ProductScrollButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #FBC74C;
    border: #FEF9ED inside 1px;
    border-radius: 50%;
    width: 48px;
    height: 48px;
`;

function FillProducts(products, products_per_page, page_num) {
    return products.map((product, idx) => {
                let visible = (products_per_page * (page_num - 1) <= idx && idx < products_per_page * page_num) ? '' : 'none';
                return <ProductItem style={{display: visible}} key={product.id}>
                        <ProductImage src={product.image} alt={product.name}/>
                        <ProductTitle style={{marginTop: '32px'}}>{product.name}</ProductTitle>
                        <ProductText>{product.description}</ProductText>
                        <ProductTitle>{product.price} грн</ProductTitle>
                        <ProductButton>Детальніше</ProductButton>
                    </ProductItem>
                }
            );
}

export default function PopularProducts({products}) {
    let products_per_page = Math.min(Math.max(1, Math.floor((window.innerWidth * 0.8 - 20) / 335)), products.length);
    let page_num = localStorage.getItem('page_num');
    if (page_num === null) {
        page_num = 1;
    }
    page_num = Math.min(products.length / products_per_page, page_num);
    localStorage.setItem('page_num', page_num);
    console.log(products_per_page);
    return(
    <ProductContainer>
        <TitleWrap>
            <Title>Популярні товари</Title>
            <AllProductsButton>Всі товари</AllProductsButton>
        </TitleWrap>
        <ProductList id="product__list">
            {FillProducts(products, products_per_page, page_num)}
        </ProductList>
        <ProductScrollButton onClick={() => {page_num = Math.max(1, page_num - 1);localStorage.setItem('page_num', page_num);;window.location.reload()}}><img src={arrow_back} alt="arrow backward"/></ProductScrollButton>
        <ProductScrollButton onClick={() => {page_num = Math.min(products.length / products_per_page, page_num + 1);localStorage.setItem('page_num', page_num);;window.location.reload()}} style={{left: '100%'}}><img src={arrow_forward} alt="arrow forward"/></ProductScrollButton>
        <NavigationBar products_length={products.length} products_per_page={products_per_page} page_num={page_num}/>
    </ProductContainer>)
}