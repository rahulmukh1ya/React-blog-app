import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReadMore from './parts/readMore'
import Modal from 'components/common/modal'
import useModal from 'hooks/useModal'

const Blog = () =>{

    const [blogPosts,setBlogPosts] = useState([])
    const [number, setNumber] = useState(0)
    const { isShowing, toggle } = useModal()

    

    const URL = `https://jsonplaceholder.typicode.com/posts?_start=${number}&_limit=5`

    const renderBlogTitle = blogPost =>{
        
        return(
        <div className="blog-container">
            <div className="blog-section">
            <div className="blog-title">{blogPost.title}</div>
            <ReadMore content={blogPost.body} />
            </div>
        </div>
        )
    }

    const fetchData = () => {
        axios.get(URL)
        .then (function (response) {
            setBlogPosts(blogPosts.concat(response.data))
        })
        .catch(function(error){
            console.log("error:", error)
        })
    }

    const loadMorePosts = () => {
        setNumber(number + 5)
        fetchData()
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    return ( 
        <div>
        <div>
            {blogPosts.map(renderBlogTitle)}
        </div>
            <div onClick={loadMorePosts}>Load More Blog Posts</div>
            <div onClick={toggle}>Load Popup</div>
            <Modal 
            isShowing={isShowing} 
            hide={toggle}
            heading= "I am heading"
            content = "This is my content"
            footer= "This is footer content"
            />
        </div>
    )
}

export default Blog