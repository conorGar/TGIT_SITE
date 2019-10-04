import React from 'react';
import './Photos.css';

function Photos(){
    return(
        <div className='photos-container'>
            <h1>Screenshots</h1>
            <div className='images-container'>
                <div className='image-div'>
                    <img className='screenshot-image' src='https://nobodysgames.com/wp-content/uploads/2019/04/world1_toxicTemplate.png'></img>
                </div>
                <div className='image-div'>
                    <img className='screenshot-image' src='https://nobodysgames.com/wp-content/uploads/2019/04/world1_template5.png'></img>
                </div>
                <div className='image-div'>
                    <img className='screenshot-image' src='https://nobodysgames.com/wp-content/uploads/2019/04/world1_template_dirtLand.png'></img>
                </div>
                <div className='image-div'>
                    <img className='screenshot-image' src='https://nobodysgames.com/wp-content/uploads/2018/04/world3_template_monkeys.jpg'></img>
                </div>
                <div className='image-div'>
                    <img className='screenshot-image' src='https://nobodysgames.com/wp-content/uploads/2019/04/world1_moleCamp.png'></img>
                </div>
                <div className='image-div'>
                    <img className='screenshot-image' src='https://nobodysgames.com/wp-content/uploads/2018/04/screenShot_SquiddySquiddy.png'></img>
                </div>
                <div className='image-div'>
                    <img className='screenshot-image' src='https://nobodysgames.com/wp-content/uploads/2019/04/world1_template_river.png'></img>
                </div>
                <div className='image-div'>
                    <img className='screenshot-image' src='https://nobodysgames.com/wp-content/uploads/2018/04/quietMoundPic.png'></img>
                </div>
            </div>
        </div>
    )
}

export default Photos;