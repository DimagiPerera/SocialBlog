import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import {OutlinedInput} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import axios from "axios";


function AddBlog() {

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    async function add(event) {
        event.preventDefault();
        const config = {
            headers: {
                "content-Type": "application/json"
            }
        };


        const newBlog = {
            title,
            color,
            description
            
        }

        try {

            await axios.post("http://localhost:8070/blog/addB", newBlog, config);
            alert("blog added successfully")
            history.push('/')
        } catch (error) {
            alert("failed to add the post!");

        }


    }


    return (
        <div className="bg_signup" align="center" style={{marginTop:50,width:900,border: "4px solid rgb(59, 129, 209)",marginLeft:200,borderRadius:15}} >

            <div className="row" style={{marginTop:90}}>
              <h1>Create Post</h1>
            </div>
            <div className="form_signUp">
                <form style={{ marginLeft:120,marginTop:-90}} onSubmit={add} className="boxSignUp"><br/><br/> <br/><br/>
                    <div className="row">
                        <div style={{marginLeft:100,marginTop:50}} className="col-10 ">
                            <div className="row">

                                <div className="col-xl-8 mb-4">
                                <InputLabel id="demo-mutiple-chip-label"><strong style={{color:'black',fontSize:22}}>Title</strong></InputLabel><br/>
                                    <OutlinedInput className='form_input'
                                                   type="text"
                                                   name="name"
                                                   id="name"
                                                   placeholder="title"
                                                   onChange={(e) => setTitle(e.target.value)}
                                                   required fullWidth
                                                   inputProps={{style: {padding: 15}}}
                                    />
                                </div>
                                
                                <br/><br/>

                                
                               
                                <br/><br/><br/><br/><br/>
                                <div className="col-xl-8 mb-3">
                                <InputLabel id="demo-mutiple-chip-label"><strong style={{color:'black',fontSize:22}}>Color</strong></InputLabel><br/>
                                    <OutlinedInput className='form_input'
                                                   type="text"
                                                   name="color"
                                                   id="color"
                                                   placeholder="Color"
                                                   onChange={(e) => setColor(e.target.value)}
                                                   required fullWidth
                                                   inputProps={{style: {padding: 12}}}
                                    />
                                </div>

                                <br/><br/>

                                
                               
                                <br/><br/><br/><br/><br/>

                                <div className="col-xl-8 mb-3">
                                <InputLabel id="demo-mutiple-chip-label"><strong style={{color:'black',marginTop:50,fontSize:22}}>Description</strong></InputLabel><br/>
                                    <OutlinedInput className='form_input'
                                                   type="text"
                                                   name="description"
                                                   id="description"
                                                   placeholder="Description"
                                                   onChange={(e) => setDescription(e.target.value)}
                                                   required fullWidth
                                                   inputProps={{style: {padding: 42}}}
                                    />
                                </div>

                           
                                <div className="col-xl-12">
                                    <input type="submit" className="form-submit-btn btn_sign_up" style={{color:'white',backgroundColor:'rgb(59, 129, 209)',padding:'5px 25px',fontSize:20,fontWeight:500,border:'2px solid rgb(59, 129, 209)',borderRadius:15}} value="Publish"/>
                                </div>
                                <br/><br/><br/>
                            </div>
                        </div>
                    </div>
                    
                </form>
                </div>
                </div>

    );
};

export default AddBlog;