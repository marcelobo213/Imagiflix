import React from "react";
import Slick from 'react-slick';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import mockData, {Movie} from "../data/mock";



const Poster = ({ cover, title, score }:Movie, index: number) => (
    <article key={index}>
        <img src={cover} alt={title} />
    </article>

);

interface CarouselData {
    title?: string;
    data?: Movie[];
}

const Carousel = ({title = 'Filmes em destaque',data = mockData}: CarouselData) => {
    enum Direction {
        left, 
        rigth,
    };

    const SlickArrow = ({ direction, onClick }: {direction : Direction, onClick?: () => void}) => (
        <button type="button" className={`absolute w-16 h-full z-10 top-0 bg-black bg-opacity-50 
        ${direction ? 'right-0' : 'left-0' }`} onClick={onClick}>
             
            <FontAwesomeIcon icon={direction  ? faChevronRight : faChevronLeft} size='2x'/>
        </button>
    );

    const options = {
        infinite:  true,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: <SlickArrow direction={Direction.left}/>,
        nextArrow: <SlickArrow direction={Direction.rigth}/>,
    };

    return (
        <section>
            <h2 className="relative font-bold text-2xl ml-8 mb-4">{title}</h2>
            <Slick className="relative mb-8"{...options}>{data.map( (movie, index) => Poster(movie, index))}</Slick>
        </section>
    );
};

export default Carousel;