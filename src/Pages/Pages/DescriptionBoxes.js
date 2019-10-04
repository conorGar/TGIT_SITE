import React from 'react';
import './DescriptionBoxes.css';

function DescriptionBoxes(){
    return(
        <div className='description-boxes-container'>
            {/* <h2>But Gamer No Understand! What Gamer Do In Dis Game?!</h2> */}
            <div className='description-box'>
                <div className='top-gif'>
                    <img className='gif' src='https://nobodysgames.com/wp-content/uploads/2017/07/gif_fight.gif' />
                </div>
                <div className='bottom-info'>
                    <h1>Fight</h1>
                    <h4 className='info-text'>
                        Each world is filled with wild and dangerous creatures. Use a simple classic Zelda style combat system to defend yourself against them and several bosses you’ll encounter along the way...and perhaps one day you'll be a good enough garbageman to go up against the evil Greasy Prince.
                    </h4>
                </div>
            </div>

            <div className='description-box'>
                <div className='top-gif'>
                <img className='gif' src='https://nobodysgames.com/wp-content/uploads/2017/07/gif_socialize.gif' />

                </div>
                <div className='bottom-info'>
                    <h1>Socialize</h1>
                    <h4 className='info-text'>
                    Along the way you encounter an inspired cast of characters, each with their own little stories. You’ll meet characters like Chip, an ice cream scoop dropped on the ground that’s going to melt and die in 3 days, who wishes only to have a conversation partner for the rest of his short life. Or Jumbo, the dog director of such films as ‘Pup Fiction’ and ‘The Pawshank Redemption’, who works so hard and puts so much love into his work…yet nobody seems to show up to his movies…and his hope is fading.                    </h4>
                </div>
            </div>

            <div className='description-box'>
                <div className='top-gif'>
                <img className='gif' src='https://nobodysgames.com/wp-content/uploads/2017/07/gif_explore.gif' />

                </div>
                <div className='bottom-info'>
                    <h1>Collect and Explore</h1>
                    <h4 className='info-text'>
                    This Game is Trash will feature all your favorite trash. with over 50 different individual trash pieces to collect, you can be sure this is the garbage-based collectathon game you’ve been waiting for. The Game also features 5 different hand-sculpted worlds to explore, each with their own characters and enemies.                    </h4>
                </div>
            </div>

            <div className='description-box'>
                <div className='top-gif'>
                <img className='gif' src='https://nobodysgames.com/wp-content/uploads/2017/07/gif_plan.gif' />
                </div>
                <div className='bottom-info'>
                    <h1>Plan</h1>
                    <h4 className='info-text'>
                    With only 30 days to fulfill your dreams, you must be sure to use your time accordingly. Use things like Pins(which give you certain bonuses when worn) depending on what you plan to do that day, because there’s never enough time to do everything!                    </h4>
                </div>
            </div>
        </div>
    )
}

export default DescriptionBoxes;