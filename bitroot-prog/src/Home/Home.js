import React, { useEffect, useState } from "react";
import Axios from "axios";
import moment from "moment";
import './Home.css';

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
            const {data} = await Axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")
            
            setPosts(data);
            //console.log(data);
        }

    return(
        <div className="homepage">
            <br />
            <u className="heading" style={{textUnderlineOffset:"0.6vh"}}>Home</u>
            <div className="header" style={{textAlign:"center"}}>
                {posts.map(post => (
                    <div id="contentcard" className="contentcard card" key={post.id}>
                        <section className="sub-card bg-dark">
                            <button className="learnmore" type="button" id="learnmore">learn more</button>
                            <img className="contentimg card-img-top img-fluid" src={post.thumbnail.small} alt="Image-Post" />
                        </section>
                        <div className="circle1" /><div className="circle2" />
                        <br />
                        <h2 className="postheading card-title" id="title1">{post.title}</h2>
                        <p className="card-text card-header bg-white border-white">{post.content}</p>
                        <br />
                        <p className="card-footer text-muted bg-transparent border-white" style={{textAlign:"left"}}>{post.author.name} - {post.author.role}</p><p className="card-footer text-muted bg-transparent border-white" style={{textAlign:"right", marginTop:"-10.75vh"}}>{moment(post.date).date(18592).format("MMM D, YYYY")}</p>
                    </div>
                ))}
            </div>
            <footer style={{paddingTop:"76rem", paddingBottom:"2.8rem", textAlign:"center", textTransform:"capitalize", textDecoration:"underline", textUnderlineOffset:"0.4vh"}}>
                <div>
                    <h4><a href=".header">powered by bitroot</a></h4>
                </div>
            </footer>
        </div>
    );
}