import React from 'react';

export default function Main2ChildComponent({베스트}){

   const commaDeciaml=(value)=>{
      let strValue = value.toString(); //숫자(number) => 문자열(String) : 타입 형변환

      const regExp = /(^\d+)(\d{3})/g;
      while (regExp.test(strValue)){   //숫자가 네자리 이상만 적용됨
         strValue = strValue.replace(regExp, '$1,$2');
         console.log(strValue);
      }
      return strValue;
   }

         
      const result = 베스트.map((item,idx)=>{
         return (
               <li className="product-list" key={item.제품코드}>
                  <div className="gap">
                     <div className="img-box">
                        <a href="!#">`
                           <img src={`./img/main1/${item.제품이미지}`} alt=""/>
                           <span><img src="./img/main1/cart_fill.svg" alt=""/></span>
                        </a>
                     </div>
                     <div className="caption-box">            
                        <h2>{item.제품명}</h2>
                        <h3>
                           {item.할인율 > 0 ? <strong>{Math.round(item.할인율*100)}%</strong> :''}
                           <em>{commaDeciaml(Math.round(item.정가*(1-item.할인율)))}원</em>
                         </h3>                  
                        {item.할인율 > 0 ? <h4><s>{commaDeciaml(item.정가)}원</s></h4> : ''}
                     </div>
                  </div>
               </li>
         )
   }); 

   return (

      <ul className="new-product-gallery">
        
       {result}
        
      </ul>
      
   );
};