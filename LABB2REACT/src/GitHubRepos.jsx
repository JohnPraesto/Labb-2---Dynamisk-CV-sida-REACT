import React, {useState, useEffect} from 'react'
import './GitHubRepos.css'

function GitHubRepos() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/JohnPraesto/repos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section>
            <h1>My public projects</h1>
            <ul>
                {posts.map((post, index) => (
                    <li key={post.id} className={`li${index + 1}`} onClick={() => window.open(post.html_url)}>
                        <h3>{post.name}</h3>
                        <p>{post.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default GitHubRepos;