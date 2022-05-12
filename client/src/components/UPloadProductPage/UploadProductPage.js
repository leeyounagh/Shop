
import React, { Fragment, useState } from 'react';
import { Typography,Button,Form,Input } from 'antd';
import FileUpload from '../utils/FileUpload';

const {Title} = Typography;
const {TextArea} =Input;

const Continents = [
    {key:1,value:"아프리카"},
    {key:2,value:"유럽"},
    {key:3,value:"일본"},
    {key:4,value:"한국"},
    {key:5,value:"중국"},
    {key:6,value:"미국"},
    {key:7,value:"동남아"},
]
const UploadProductPage = () => {
    const [title,setTitle] = useState('')
    const [Descriptoion,setDescription] =useState('')
    const [Price,setPrice] =useState(0)
    const [continent,setContinent] =useState(1)
    const [Image,setImage] =useState([])
    const titleChangeHandler = ( event) =>{
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event ) =>{
        setDescription(event.currentTarget.value)
    }

    const priceChangeHandler = (event ) =>{
        setPrice(event.currentTarget.value)
    }

    const ContinetChangeHandler = (event) =>{
        setContinent(event.currentTarget.value)
    }
    return (
           <Fragment>
      
                   {/* <Title className="uploadTitle"level={2}>여행상품 업로드</Title> */}
           

           <Form className='uploadTitle' style={{maxWidth:'700px',margin:'2rem auto'}}>
             <FileUpload></FileUpload>
               <br>
               </br>
               <label>이름</label>
               <Input onChange={titleChangeHandler} value={title}></Input>
               <br>
               </br>
               <label>설명</label>
               <TextArea onChange={descriptionChangeHandler} value={Descriptoion}>  </TextArea>
               <br>
               </br>
               <label>가격($)</label>
               <Input type="number" onChange={priceChangeHandler} value={Price}></Input>
               <br>
               </br>
               <select onChange={ContinetChangeHandler} value={continent}>
                   {Continents.map((item)=>{
                     return(
                        <option key ={item.key} value={item.key}>{item.value}</option>
                         )  
                    
                   })}
               
               </select>
               <br>
               </br>
               <Button>
                   확인
               </Button>

           </Form>
           </Fragment>
    );
};

export default UploadProductPage;