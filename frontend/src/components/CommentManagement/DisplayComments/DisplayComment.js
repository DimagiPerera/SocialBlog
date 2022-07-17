import React,{useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router';
import axios from 'axios'


function DisplayComments() {

  const [comments, setComment] = useState([])
  const[bid,setBID]=useState([])
  const history = useHistory()
  const location = useLocation()


  useEffect(() => { 

    async function getAllComments() {
      axios.get(`http://localhost:8070/comment/${bid}`).then((res) => {
        setComment(res.data)  
      }).catch((error) => {
        alert("Failed to fetch the posts")
      })
    }
    
    getAllComments()
  }, [location])

    return (
        <div className="container  display_movies"><br/><br/>
          <div className="row"> 
              <div className="col-4"> <br/><br/>
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                  <h2 className='h1_displayMovies'>Latest Posts</h2>
                </div>
              </div>
              <div className="col-5">
 
          </div>
        </div><br/><br/>
        <div className="productGrid"  > 
           
          {comments.map((Comment,key)=>( 
                <div key={key}> 
                    <div className="productCard" >
                        <div className="p-3">
                            <h6>{Comment.comment}</h6>
            
                        </div>
                    </div>
                </div>
          ))} 
        </div>
      </div>
    )      
}

export default DisplayComments
