import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./SingleBlog.css";
import axios from "axios";

function BlogDetails(props) {
  const [name, setName] = useState("");
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


  return (
    <div className="main_div1" align="center">

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
              

              <div className="positon_left">
              <h4 className="single_movie_topic1"> {title}</h4>
              <h5 className="single_movie_topic2">{color}</h5><br/>
              <table className="singleItemBtn">
          <div>

              <div>
                <button
                ><a href={`/comment/addComment`} style={{color:'white'}}>
                  Add a Comment
                  </a>
                </button>
              </div>

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
