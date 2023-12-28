import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useParams ,useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
 //This will console empty objects because / is not there   
//const params = useParams();
const [searchParams] = useSearchParams();
console.log(searchParams.get("v"));

const dispatch = useDispatch();
useEffect(()=>{
dispatch(closeMenu());
    },[]);

  return (
    <div className='flex flex-col w-full'>
    <div className='px-5 flex w-full'>
      <div>
      <iframe width="950" 
      height="600" 
      src={"https://www.youtube.com/embed/"+ searchParams.get("v")}title="YouTube video player"  
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
      </div>
      <div className='w-full'>
       <LiveChat/>
      </div>
    </div>
    <CommentsContainer/>
    </div>
  )
};

export default WatchPage;
