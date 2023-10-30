import {GetUserAlbumService} from "../../apis";
import {Album} from "../models/Album";
import {Carousel} from "react-bootstrap";
import {useState} from "react";

const URL = 'https://jsonplaceholder.typicode.com/albums';
export const GetAlbumById = (prop : any) => {
    const { albumId, userId } = prop;
    const { isPending, isError, data: resp, error } = GetUserAlbumService(`${URL}/${albumId}/photos`);
    const albums : []  = resp?.data;
    const [index, setIndex] = useState(0);

    const changeIndex = (i: number) => {
        setIndex(i);
    }

    if (isPending) {
        return (
            <div style={{ margin: '25% 50%'}}>
                <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <>
            <Carousel activeIndex={index} fade={true} onSelect={changeIndex} nextLabel="" prevLabel="">
                {albums.map((album : Album) => (
                    <Carousel.Item key={album.id}>
                        <img src={album.url} className="d-block w-100" alt="..." />
                        <Carousel.Caption>
                            <h3>{album.title}</h3>
                            <p>...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <a href={`/users/${userId}`} className="btn btn-dark btn-lg" style={{ marginTop: '1%' }}>Back to user </a>
        </>
    );
}