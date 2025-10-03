import { useParams } from 'react-router-dom';

export default function Post() {
    const { id } = useParams();


    return (
        <>
            <h2 style={{ display: "flex", justifyContent: "center" }}>
                Вы открыли пост № {id}
            </h2>;
        </>
    )
}