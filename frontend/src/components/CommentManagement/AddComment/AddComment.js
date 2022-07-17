import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import {OutlinedInput} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import axios from "axios";


function AddComment() {

    const [comment, setComment] = useState("");
    const history = useHistory();
    const blogid = localStorage.getItem("bid");

    async function add(event) {
        event.preventDefault();
        const config = {
            headers: {
                "content-Type": "application/json"
            }
        };


        const newComment = {
            blogid,
            comment
            
            
        }

        try {

            await axios.post("http://localhost:8070/comment/addC", newComment, config);
            alert("comment added successfully")
            history.push('/blog')
        } catch (error) {
            alert("failed to add the comment!");

        }


    }


    return (
        <div className="bg_signup" align="center" >
            <div className="form_signUp">
                <form style={{height: 900, width:1100, marginLeft:350,marginTop:-90}} onSubmit={add} className="boxSignUp"><br/><br/> <br/><br/>
                    <div className="row">
                        <div style={{marginLeft:100,marginTop:50}} className="col-10 ">
                            <div className="row">

                                <div className="col-xl-6 mb-4">
                                <InputLabel id="demo-mutiple-chip-label"><strong style={{color:'black'}}>Comment</strong></InputLabel>
                                    <OutlinedInput className='form_input'
                                                   type="text"
                                                   name="name"
                                                   id="name"
                                                   placeholder="comment"
                                                   onChange={(e) => setComment(e.target.value)}
                                                   required fullWidth
                                                   inputProps={{style: {padding: 12}}}
                                    />
                                </div>
                                <br/>

    
                                

                                
                               
                                <div className="col-xl-12">
                                    <input type="submit" className="form-submit-btn btn_sign_up" value="Add Details"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </form>
                </div>
                </div>

    );
};

export default AddComment;