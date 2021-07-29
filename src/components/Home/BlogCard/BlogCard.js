import React from 'react';
import './BlogCard.css';
const BlogCard = ({ blog }) => {
    return (
        <div className="col-md-3 blog-card">
            <div className="d-flex">
                <div><img src={blog.img} alt="" /></div>
                <div className="m-4">
                    <h5 className="text-success">{blog.name}</h5>
                    <p className="text-secondary">{blog.date}</p>
                </div>
            </div>
            <h5 className="text-success">{blog.message}</h5>
            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit omnis recusandae nemo itaque doloremque delectus? Reiciendis et ad eveniet?</p>
        </div>
    );
};

export default BlogCard;