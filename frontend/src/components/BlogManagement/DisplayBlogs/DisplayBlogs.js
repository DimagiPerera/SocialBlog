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
        <div className="container  display"><br/><br/>
        <div className="productGrid" style={{width:1500}} > 
          
            <Button style={{ color:'white', backgroundColor:'#0000008a',width:400,borderRadius:15,marginLeft:25 }} onClick={()=>addBlog()}>
            <strong>Add Posts</strong> <AddIcon style={{color:"white"}}/>
            </Button>  
          {blogs.map((Blog,key)=>( 
                <div key={key}> 
                    <div className="productCard" >
                        <div className="p-3">
                            <h7 style={{color:"Blog.color"}}>{Blog.title}</h7><br/><br/>
                            <h6>{Blog.description}</h6>
                            <div align="center" style={{marginTop:100}}>
                              <span> 
                                  <button style={{color:'white',backgroundColor:'rgb(59, 129, 209)',padding:'5px 25px',fontSize:20,fontWeight:500,border:'2px solid rgb(59, 129, 209)',borderRadius:15}}  onClick={()=>view(Blog._id)}> Show More </button>
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
