import React from 'react'
import Coverflow from "react-coverflow";
import valhalla from '../../assets/HeadreIcons/bitmap@3x.jpg'
import valhalla2 from '../../assets/HeadreIcons/bitmap@3x.jpg'
export const Slider = () => {
    const fn = function () {
        /* do your action */
    }
    return (
        <div>
            <Coverflow width='100%' height="300"
                       displayQuantityOfSide={2}
                       navigation={false}
                       clickable={true}
                       active={0}
                       infiniteScroll={true}

            >
                <div
                    onClick={() => fn()}
                    onKeyDown={() => fn()}
                    role="menuitem"
                    tabIndex="0"
                >
                    <img
                        src={valhalla}
                        alt='title or description'
                        style={{
                            display: 'block',
                            width: '100%',
                        }}
                    />
                </div>
                <img src={valhalla} />
                <img src={valhalla2}  />
            </Coverflow>
        </div>
    )
}
