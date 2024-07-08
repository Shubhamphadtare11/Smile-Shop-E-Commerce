import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import data from "./SwiperData";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Trusted = () => {
  const[item]=useState(data);
  const[index,setIndex]=useState(0);
  useEffect(()=>{
    const lastIndex = item.length-1;
    if(index<0){
      setIndex(lastIndex);
    }
    if(index>lastIndex){
      setIndex(0);
    }

  },[index,item]

  );
  useEffect(()=>{
   let slider= setInterval(()=>{
    setIndex(index + 1);
   },2000);
   return() =>{
    clearInterval(slider);
   };

  },[index]

  );

  
  return (
    <Wrapper>
      <section className='container'>
        <div className='section-center'>
          {item.map((items,indexs)=>{
            const{id,name,title,quote}=items;
            let position="nextSlide";
            if(indexs===index){
              position='activeSlide';
            }
            if(
              indexs===index-1 ||(index===0 && indexs===item.length-1)
            ){
              position="lastSlide";
            }
            return(
              <article className={position} key={id}>
                <h1>{name}</h1>
                <h2>{title}</h2>
                <h3>{quote}</h3>
              </article>
            )
          })}
        </div>
        <button className='prev' onClick={()=>setIndex(index-1)}><KeyboardArrowLeftIcon className='arrow-div'/></button>
        <button className='next' onClick={()=>setIndex(index+1)}><KeyboardArrowRightIcon className='arrow-div'/></button>
      </section>
   
    </Wrapper>
  )
}



const Wrapper=styled.section`
.section-center{
  display:flex;
  
  overflow:hidden;
  margin:0 auto;
  margin-top:4rem;
  width:80vw;
  height:350px;
  text-align:center;
  position:relative;
  background-color:rgba(148, 175, 181, 0.6);

}
article{
  position:absolute;
  top:8rem;
  left:0;
  width:100%;
  height:100%;
  opacity:0;
  transition:all 0.3s linear;
}
article.activeSlide{
  opacity:1;
  transform:translateX(0);
}
article.lastSlide{
  transform:translateX(-100%);
}
article.nextSlide{
  transform:translateX(100%);
}
.prev{
  left:-5rem;
  position:relative;
  top:-185px;
  transform:translatey(-50%);
  width:1.25rem;
  height:1.25rem;
  cursor:pointer;
  border-radius:0.25rem;
  
  border-color:transparent;
  background-color:transparent;
  place-items:center;
  display:grid;
  transition:all 0.3s linear;
}
.next{
  right:-122rem;
  position:relative;
  top:-185px;
  transform:translatey(-50%);
  width:1.25rem;
  height:1.25rem;
  cursor:pointer;
  border-radius:0.25rem;
  
  border-color:transparent;
  background-color:transparent;
  place-items:center;
  display:grid;
  transition:all 0.3s linear;
}
.arrow-div{
  font-size:5rem; 
}


h1,h2,h3{
    text-transform: capitalize;
    letter-spacing:0.1rem;
    line-height:1.25;
    margin-bottom:0.75rem;
}
@media screen and (max-width: 600px) {
 
h1{
  font-size:3rem;
  font-width:100;
}
h2{
  font-size:3rem;
  font-width:100;
}
}
@media screen and (max-width: 300px) {
 
  h1{
    font-size:2rem;
    font-width:100;
  }
  h2{
    font-size:2rem;
    font-width:100;
  }
  }

`;

export default Trusted;