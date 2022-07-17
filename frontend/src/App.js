import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AddBlog from './components/BlogManagement/AddBlog/AddBlog';
import DisplayBlogs from './components/BlogManagement/DisplayBlogs/DisplayBlogs';
import BlogDetails from './components/BlogManagement/SingleBlog/SingleBlog';
import AddComment from './components/CommentManagement/AddComment/AddComment';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
            <Route path="/add" exact component={AddBlog}/>
            <Route path="/" exact component={DisplayBlogs}/> 
            <Route path="/comment/addComment" exact component={AddComment}/> 
            <Route path="/blog/:id" exact component={BlogDetails}/> 

        </div>
      </Router>
    </div>
  );
}

export default App;
