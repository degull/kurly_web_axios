import React from 'react';

export default function Main1ChildComponent({신상품}){

         
      const result = 신상품.map((item,idx)=>{
         return (
            <li key={item.제품코드} className='product-list'>
               <img src={`./img/main1/${item.제품이미지}`} alt="" />
            </li>
         )
   }); 

   return (

      <ul className="new-product-gallery">
        
       {result}
        
      </ul>
      
   );
};