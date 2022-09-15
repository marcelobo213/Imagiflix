import cover1 from '../assets/img1.png'
import cover2 from '../assets/img2.png'
import cover3 from '../assets/img3.png'

export interface Movie {
    title: string;
    cover: string;
    score?: number | string;
};

const mockData = [
    {
        title:'Avengers',
        cover: cover1,
    },
    {
        title:'Missâo Impossivel',
        cover: cover2,
    },
    {
        title:'Mega Tubarão',
        cover: cover3,
    },
    {
        title:'Avengers',
        cover: cover1,
    },
    {
        title:'Missâo Impossivel',
        cover: cover2,
    },
    {
        title:'Mega Tubarão',
        cover: cover3,
    },
    {
        title:'Avengers',
        cover: cover1,
    },
    {
        title:'Missâo Impossivel',
        cover: cover2,
    },
    {
        title:'Mega Tubarão',
        cover: cover3,
    }
];

export default mockData;