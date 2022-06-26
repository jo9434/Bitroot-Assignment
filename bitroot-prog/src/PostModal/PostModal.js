import React, { useEffect, useState } from "react";
import Axios from "axios";
import './PostModal.css';

export default function PostModal() {
    const [subpost, setPost] = useState([]);

    useEffect(() => {
        getPost()
    }, [])

    const getPost = async () => {
            const {post} = await Axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")
            
            setPost(post);
            //console.log(post);
        }

    return(
        <section className="modal" id="myPostScreen">
            <div className="modal-dialog modal-dialog-centered">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                {subpost.map(post => {
                <div className="modal-body">
                    <div id="contentcard" className="contentcard2 card" key={post.id}>
                        <img className="contentimg2 card-img-top img-fluid" src={post.thumbnail.large} alt="Image-Post" />
                        <h2 className="card-title" id="title1">{post.title}</h2>
                        <p className="card-text card-header bg-white border-white">{post.content}</p>
                        <img className="author-img" src={post.author.avatar} /><p className="card-footer text-muted bg-transparent border-white" style={{textAlign:"left"}}>{post.author.name} - {post.author.role}</p>
                    </div>
                </div>
            })}
            </div>
        </section>
    );
} 