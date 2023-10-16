import './Post.css'

import PostModelo from 'componentes/PostModelo'
import posts from 'json/posts.json'
import Markdown from 'https://esm.sh/react-markdown@9'
import { Route, Routes, useParams } from "react-router-dom"
import NaoEncontrada from 'paginas/NaoEncontrada'
import PaginaPadrao from 'componentes/PaginaPadrao'

const Post = () => {
    const params = useParams()

    const post = posts.find((post) => {
        return post.id === Number(params.id)
    })

    if (!post) {
        return <NaoEncontrada />
    }

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={require(`../../assets/posts/${post.id}/capa.png`)}
                        titulo={post.titulo}
                    >
                        <div className='post-markdown-container'>
                            <Markdown >
                                {post.texto}
                            </Markdown>
                        </div>
                    </PostModelo>
                }></Route>
            </Route>
        </Routes>
    )
}

export default Post