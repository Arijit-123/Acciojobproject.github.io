import React from 'react'
import './Promises.css';
export default function Promises() {
  const [productList, setProductList] = React.useState([]);
  React.useEffect(() => {
    fetch(
      'https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
    )
      .then((res) => res.json())
      .then((data) => {
        let tempProductList = [];
        for (let i in data) {
          tempProductList.push(data[i])
        }
        setProductList(tempProductList)
        console.log(productList)
      });
  }, []);
  return (
    <div className="App">
      {
        productList.length >0 && (
          productList.map(item => {
            return (
              <div className='Dual'>
                
                <img src={item.productImage} className='new' />
                <div className='jun'></div>
                
               
               <div className='mean'> {item.productName}</div>
                
                
                <div id='mark34'>
                  <div>
                  <img src='/images/Star.jpg'></img>
                  </div>
                  <div>
                  <img src='/images/Star.jpg'></img>
                  </div>
                  <div>
                  <img src='/images/Star.jpg'></img>
                  </div>
                  <div>
                  <img src='/images/Star.jpg'></img>
                  </div>
                  <div>
                  <img src='/images/Star.jpg'></img>
                  </div>
                  
                
                <div className='oldprice'>Rs{item.oldPrice}</div>
                <div className='jun'>Rs {item.newPrice}</div>
                </div>
                <div className='hi'></div>
                <div id='mk'>
                <button >Add to cart</button>
                </div>
              </div>
            )
          })
        )
      }
    </div>
  );
}
