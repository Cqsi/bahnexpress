'use client'

import Slider from 'react-infinite-logo-slider'

const LogoSlider = () => {
    
    return (
        <div className="">
            <Slider
                width="250px"
                duration={40}
                blurBorders={false}
                blurBoderColor={'#fff'}
            >
                <Slider.Slide>
                    <img src="/logos/ae.png" alt="any" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="/logos/autosuni.png" alt="any2" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="/logos/bayerncar.png" alt="any3" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="/logos/fortia.png" alt="any3" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="/logos/get_car.png" alt="any3" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="/logos/kamux.png" alt="any3" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="/logos/kiesi.png" alt="any3" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="/logos/rintajouppi.png" alt="any3" className='w-36' />
                </Slider.Slide>
            </Slider>
        </div>
    )
}              
                     
export default LogoSlider