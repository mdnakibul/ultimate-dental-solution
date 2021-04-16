import React from 'react';
import BlogDetails from '../BlogDetails/BlogDetails';
import john from '../../../images/john.png'
import aliza from '../../../images/aliza.png'
import mitchel from '../../../images/ema.png'

const Blog = () => {
    const blogData = [
        {
            post_id : 1,
            img: john,
            date: '23 April 2020',
            name: 'Rashid Kabir',
            title: 'Check at least a doctor in a year for your teeth',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium, hic quis odio culpa modi sed ea iste distinctio magni cumque debitis a ratione enim? Exercitationem maxime nihil sunt dicta?'
        },
        {
            post_id : 2,
            img: aliza,
            date: '23 April 2020',
            name: 'Dr. Caudi',
            title: '2 times of brush in a day can keep your teeth healthy',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium, hic quis odio culpa modi sed ea iste distinctio magni cumque debitis a ratione enim? Exercitationem maxime nihil sunt dicta?'
        },
        {
            post_id : 3,
            img: mitchel,
            date: '23 April 2020',
            name: 'Dr. John Mitchel',
            title: 'The tooth cancer is taking a challenge',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium, hic quis odio culpa modi sed ea iste distinctio magni cumque debitis a ratione enim? Exercitationem maxime nihil sunt dicta?'
        }
    ]
    return (
        <section className="blog mt-5" id="blog">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                    <h5 className="theme-color mt-5">OUR BLOG</h5>
                    <h2>From Our Blog News </h2>
                    </div>
                </div>
                <div className="row mt-5">
                    {
                        blogData.map(blog => <BlogDetails blog={blog} key={blog.post_id}></BlogDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;