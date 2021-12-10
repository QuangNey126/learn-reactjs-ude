import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhac Hoa Thinh Hanh',
            thumbnaiUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/8/3/c/1/83c19f6dfeacf9bb76f968b5e8ca82bb.jpg',
        },
        {
            id: 2,
            name: 'Rap Viet Nghe La Ghien',
            thumbnaiUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/5/a/d/0/5ad0b1e705e8d0ab207cdce78eef88b0.jpg',
        },
        {
            id: 3,
            name: 'Tao Luu Nhac Hot',
            thumbnaiUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/a/3/a/4a3a1aaa77fb57cb3601a3fa5bc990b3.jpg',
        },
    ];

    return (
        <div>
            <h2>Co the ban se thich day</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;