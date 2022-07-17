import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import DisplayComments from "../../CommentManagement/DisplayComments/DisplayComment";
import AddComment from "../../CommentManagement/AddComment/AddComment";

function BlogDetails(props) {
  const [id, setID] = useState();
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };

  useEffect(() => {
    
    async function getBlogDetails() {
      axios
        .get(`http://localhost:8070/blog/${props.match.params.id}`)
        .then((res) => {
          setTitle(res.data.title);
          setColor(res.data.color);
          setDescription(res.data.description);
          setID(res.data._id);
        })
        .catch((err) => {
          alert("Failed to Fetch Post");
        });
    }
    getBlogDetails();
  }, [props]);

  const addComment=()=>{
    localStorage.setItem("bid",id)
  }

  return (
    <div className="main_div1" align="center">

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row "></div>

      <div className="boxUpdate px-5 main_div2">
        <div className="row">
          <div className="">
            <div>
            </div>
            <div className="row">
              

              <div className="productCard2">
              <h4 className="single_movie_topic1"> {title}</h4>
              {/* <h5 className="single_movie_topic2">{color}</h5><br/> */}<br/><br/>
              <h5 className="single_movie_topic2">{description}</h5><br/>
              <table className="singleItemBtn">
          <div>

              <div>
                {/* <button onClick={()=>addComment()}
                ><a href={`/comment/addComment`} style={{color:'white'}}>
                  Add a Comment
                  </a>
                </button> */}
              </div>
<div style={{marginTop:-70}}> <DisplayComments/></div>
             

              <div style={{left:220,top:-700,position:"relative"}}><AddComment/></div>

          </div>
        </table>


              </div>


            </div>
          </div>
        </div>
 
      </div>
      <br></br>

      <div></div>
    </div>
  );
}

export default BlogDetails;
