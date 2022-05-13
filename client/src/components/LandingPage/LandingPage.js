import React, { useEffect, useState } from 'react';
import axios from 'axios'
import{Col,Card,Row} from 'antd'
import Meta from 'antd/lib/card/Meta';
import CheckBox from './Sections/CheckBox';
import ImageSliider from '../utils/ImageSliider';
import {continents} from './Sections/Datas'


const LandingPage = (props) => {
    
   const [Products,setProducts] =useState([])
   const [Skip,setSkip] =useState(0)
   const [Limit,setLimit] =useState(8)
   const [PostSize, setPostSize] = useState(0)
     useEffect(()=>{
         let body ={
             skip:Skip,
             limit:Limit
         }
         getProducts(body)
           
     },[])
     

     const getProducts = (body) => {
        axios.post('/api/product/products', body)
            .then(response => {
                if (response.data.success) {
                    if (body.loadMore) {
                        setProducts([...Products, ...response.data.productInfo])
                    } else {
                        setProducts(response.data.productInfo)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert(" 상품들을 가져오는데 실패 했습니다.")
                }
            })
    }
    const loadMoreHanlder = () => {

        let skip = Skip + Limit
        let body = {
            skip: skip,
            limit: Limit,
            loadMore: true,
           
        }

        getProducts(body)
        setSkip(skip)
    }

     const renderCards =Products.map((product,index)=>{
         
           return (<Col lg={6} md={8} xs={24} key={index}>
            <Card 
             cover={<ImageSliider images={product.images}></ImageSliider>}>
            
               <Meta
                title={product.title}
                description={product.price}></Meta>
           </Card>
           </Col>
          )
     })

    const handleFilters = ()=>{
        
    }
    return (
        <div style={{
         width:'75%',margin:'3rem auto' 
        }} className="MainPosition">
           <div style={{textAlign:'center'}}>
           <h2>나만의 중고마켓</h2> 
           </div>

           <CheckBox list = {continents} handleFilters ={filter=>handleFilters(filter,"continents")}></CheckBox>
           <Row gutter={[16,16]}>
           {renderCards}
           </Row> 
           
           {PostSize >= Limit&&    <div style={{display:'flex',justifyContent:'center'}}>
              <button onClick={loadMoreHanlder}>더보기</button>
           </div>}
       
           

        

        </div>
    );
};

export default LandingPage;