import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function GetPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    const [searchParams] = useSearchParams();
    const isTop = searchParams.get("filter") === "top";


    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
            .then(function (response) { return response.json(); })
            .then(function (data) {
                setPosts(data);
                setLoading(false);
            })
            .catch(function (e) {
                setErr(e.message || "Ошибка запроса");
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Загрузка…</div>;
    if (err) return <div>Ошибка: {err}</div>;

    return (
        <div>
            <h2 style={{ display: "flex", justifyContent: "center" }}>Посты</h2>
            {isTop && (
                <div style={{ marginBottom: "12px" }}>
                    Фильтр: <p>TOP</p>
                </div>
            )}
            <ul style={{ listStyleType: "none" }}>
                {posts.map(function (post) {
                    return (
                        <li key={post.id} style={{
                            marginBottom: "16px",
                            border: "1px solid black",
                            padding: "16px",

                        }}
                        >
                            <h3>
                                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                            </h3>
                            <p>{post.body}</p>
                        </li>
                    );
                })}
            </ul>
        </div >
    );
}