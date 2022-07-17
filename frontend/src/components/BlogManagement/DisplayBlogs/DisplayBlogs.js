import React,{useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router';
import axios from 'axios'
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';



function DisplayBlogs() {

  const [blogs, setBlog] = useState([])
  const history = useHistory()
  const location = useLocation()


  useEffect(() => { 

    async function getAllBlogs() {
      axios.get(`http://localhost:8070/blog/`).then((res) => {
        setBlog(res.data)  
      }).catch((error) => {
        alert("Failed to fetch the posts")
      })
    }
    
    getAllBlogs()
  }, [location])

  function view(id){
    history.push(`/blog/${id}`)
  }
  
  function addBlog(){
    history.push(`/add`)
  }
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
          
            <Button  className="productBtn "  style={{ color:'black', backgroundColor:'#0000008a',width:400 }} onClick={()=>addBlog()}>
            <strong>Add Posts</strong> <AddIcon/>
            </Button>  
          {blogs.map((Blog,key)=>( 
                <div key={key}> 
                    <div className="productCard" >
                        <div className="p-3">
                            <h7 style={{color:"Blog.color"}}>{Blog.title}</h7>
                            <h6>{Blog.description}</h6>
                            <h6>{Blog.color}</h6>
                            <div align="center">
                              <span> 
                                  <button className="productBtn"  onClick={()=>view(Blog._id)}> Show More </button>
                              </span> 
                            </div>
                        </div>
                    </div>
                </div>
          ))} 
        </div>
      </div>
    )      
}

export default DisplayBlogs
