import React from 'react';

const BlogDetails = (props) => {
    const { img, date, name, title, content } = props.blog;
    return (
        <div className="col-md-4">
            <div className="blog-details shadow p-5" style={{minHeight : '480px'}}>
                <div className="d-flex align-items-center mb-4">
                    <img src={img} alt="Client" className="rounded-circle img-fluid" style={{ maxWidth: '30%' }} />
                    <div className="pl-3">
                        <h5 className="theme-color">{name}</h5>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="blog-content">
                    <h4>{title}</h4>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;