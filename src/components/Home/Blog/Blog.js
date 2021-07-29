import React from 'react';
import './Blog.css';
import dr1 from '../../../images/dr1.png';
import dr2 from '../../../images/dr2.png';
import BlogCard from '../BlogCard/BlogCard';
const blogData = [
    {
        name: 'Dr. Caudi',
        img: dr1,
        date: '20 april 2020',
        message: 'Tow time brushes in a day can keep you health'
    },
    {
        name: 'Dr. Luchiee Bekham',
        img: dr2,
        date: '22 aught 2020',
        message: 'The tooth cancer is taking a challenge'
    }
]
const Blog = () => {
    return (
        <section className="blog-container mt-5 pt-5">
            <div className="row">
                <div className="blog-text col-md-12 text-center">
                    <h4>OUR BLOG</h4>
                    <h3 className="mt-3">From Our Blog News</h3>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5 pt-5">
                <div className="col-md-3 check-last-doctor">
                    <small>Rashed Kabir</small><br />
                    <small>22 Aug 2020</small>
                    <h4 className="mt-5">Check at last a doctor in a year for your teeth</h4>
                    <button className="btn text-white mt-5">Check Now</button>
                </div>
                {
                    blogData.map(blog => <BlogCard blog={blog}></BlogCard>)
                }
            </div>
        </section>
    );
};

export default Blog;