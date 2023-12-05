import Image from 'next/image';
import { useEffect, useState } from 'react';
import swapIcon from '../../../../public/swap-icon.png';


const Card = ({ timing = 1500, children }) => {
    const [isPassed, setIsPassed] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    const inner = {
        transform: isPassed
            ? 'translateY(-92%)'
            : '',

        transition: `transform 0.6s`, 
        boxShadow: '1px 2px 9px #00080EE0',
    }

    const cardClick = () => {
        setIsFlipped(!isFlipped);
    }

    useEffect(() => {
        if (!isPassed) {
            return;
        }
    });

    const trigger = () => {
        setIsPassed(true);
    };

    const reset = () => {
        const timeoutId = window.setTimeout(() => {
            setIsPassed(false);
        }, timing);
        return () => {
            window.clearTimeout(timeoutId);
        };
    }

    return (
        <div className='flex-grow flex md:text-left text-center'> 
            <div className='card mb-8 mx-auto overflow-hidden rounded-lg'>
                <div className='inner h-full text-center hidden lg:block'
                    onMouseEnter={trigger} onMouseMove={trigger}
                    onMouseLeave={reset}
                    style={inner}>

                    {/* CARD PC */}
                    <div className='front bg-card-front absolute w-full h-full'>
                        <Image 
                            unoptimized={true}
                            src={children.image.src}
                            alt={children.image.alt}
                            width="100%"
                            height="100%"
                            layout="responsive"
                        />                 
                        <h1 className='text-white text-xl title-font font-medium mb-3'>
                            {children.title}
                        </h1>
                            <CardItem>{children.lista}</CardItem>
                    </div>
                </div>

                {/* MOBILE */}
                <div className='card-container' onClick={cardClick}>
                    <div className={`card ${isFlipped ? 'flipped' : ''}`}>
                        <div className='card-inner'>
                        <div className='card-front'>
                            <Image
                            unoptimized={true}
                            src={children.image.src}
                            alt={children.image.alt}
                            width='100%'
                            height='100%'
                            layout='responsive'
                            />
                            <h1 className='text-white text-xl title-font font-medium mb-3 bg-gray-400 bg-opacity-50'>
                            {children.title}
                            <Image
                            unoptimized={true}
                            src={swapIcon}
                            alt="Icone de swap"
                            width='100%'
                            height='100%'
                            layout='responsive'
                            /> 
                            
                        </h1>
                        </div>
                        <div className='card-back'>
                            <div className='back-content'>
                            <CardItem>{children.lista}</CardItem>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CardItem = ({ children }) => {
    return (
        <div className='leading-relaxed text-base text-white h-full text-center'>
            <ul className='list-none'>
                {children.map((item, indice) => {
                     return <li key={indice}>{item}</li>
                })}
            </ul>
        </div>
    );
};


export default Card;