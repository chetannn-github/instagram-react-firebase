import { useSelector } from "react-redux"


const useAddComment = () => {
    let loggedInId = useSelector((store)=>(store.loggedInId));
    let editPost= useSelector((store)=>(store.editPost));

  let handleAddComment = async ({comment}) =>{
    // comment create kro db  
    // comment ki uid ko post me add krooo
  }

  return handleAddComment
}

export default useAddComment