import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import {OutlinedInput} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import './AddBlog.css';
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
            history.push('/blog')
        } catch (error) {
            alert("failed to add the post!");

        }


    }


    return (
        <div className="bg_signup" align="center" >

            <div className="row">
                <div className="col-12">
                    <div className="pb-2 px-5 d-flex align-items-center justify-content-between">
                        <h2 className='h2_signup' align="center">Add Blog</h2>
                    </div>
                </div>
            </div>
            <div className="form_signUp">
                <form style={{height: 900, width:1100, marginLeft:350,marginTop:-90}} onSubmit={add} className="boxSignUp"><br/><br/> <br/><br/>
                    <div className="row">
                        <div style={{marginLeft:100,marginTop:50}} className="col-10 ">
                            <div className="row">

                                <div className="col-xl-6 mb-4">
                                <InputLabel id="demo-mutiple-chip-label"><strong style={{color:'black'}}>Title</strong></InputLabel>
                                    <OutlinedInput className='form_input'
                                                   type="text"
                                                   name="name"
                                                   id="name"
                                                   placeholder="title"
                                                   onChange={(e) => setTitle(e.target.value)}
                                                   required fullWidth
                                                   inputProps={{style: {padding: 12}}}
                                    />
                                </div>
                                <br/>

                                <div className="col-xl-6 mb-3">
                                <InputLabel id="demo-mutiple-chip-label"><strong style={{color:'black'}}>Color</strong></InputLabel>
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

                                

                                
                               
                                <br/>

                                <div className="col-xl-6 mb-3">
                                <InputLabel id="demo-mutiple-chip-label"><strong style={{color:'black'}}>Description</strong></InputLabel>
                                    <OutlinedInput className='form_input'
                                                   type="text"
                                                   name="description"
                                                   id="description"
                                                   placeholder="Description"
                                                   onChange={(e) => setDescription(e.target.value)}
                                                   required fullWidth
                                                   inputProps={{style: {padding: 32}}}
                                    />
                                </div>

                           
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

export default AddBlog;