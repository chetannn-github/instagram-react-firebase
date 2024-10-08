import React from 'react'
import Suggestions from '../Components/Suggestions/Suggestions'
import Post from '../Components/Post/Post'
import Search from './Search'
import NewPost from './NewPost'
import { useSelector } from 'react-redux'
import EditPost from '../Components/EditPost/EditPost'
import Spinner from '../Components/Spinner'

const Feed = () => {
  let feedPosts = useSelector((store)=>(store.feedPosts));

  
  return (
    <div className='flex relative w-[100vw] h-max text-white bg-black md:ml-[250px]  md:w-dynamic '>
        <div id='feed' className='relative w-full h-max  flex flex-col items-center'>
          
        {!feedPosts && (<img src='./loading.svg'></img>)}

        {feedPosts?.length ===0 && <div>NO Post on feed.  Either post  something or follow someone!! </div>}

        {
          feedPosts&&feedPosts.map((feedPost)=>(
            <Post key={feedPost.uid} createdAt={feedPost.createdAt} uid={feedPost.uid} postPicURL={feedPost.postPicURL} caption={feedPost.caption} owner= {feedPost.owner} likes= {feedPost.likes} comments= {feedPost.comments}/>
          ))
        }
        </div>
        
        <NewPost/>
        <Search/>
        <EditPost/>
        <Suggestions/>
    </div>
    
  )
}

export default Feed