import React from 'react';
import me from '../../me.png';
import './HomePage.css';
import bsl from '../../pngegg.png';
import bsr from '../../bestseller.png';

const HomePage = () => {
    return (
        <section className="bigwig">
            <div className="ft">
                <h1 id="w1">Welcome To</h1>
                <h1><span id="s1">My Assist World!😊</span></h1>
                <p className="t25">Greetings,Sir/Ma'am.</p>
                <p className="t20">I will support you by following Amazon's guidelines for managing your Book writing, cover making, book uploading, making review & 5-stars Ratings, Raking and Promoting . I can support you to make your book <img className="bslo" src={bsl} alt=""/> in Kindle Store by using the Organic process. I'll always follow your demands as well as I will suggest to you which is better for you with my previous long 5 years' experience. you can give me a small job to verify me. Hope you will be satisfied with my work.</p>
                <p className="t20">If you need more information, please feel free to contact me. Thanks for giving me the time.</p>
                <p className="t20">Have a great day ahead!!🙂🙂🙂</p>
                <br/>
                <p><a className="button" target="-blank" href="https://www.upwork.com/o/profiles/users/~01c9d61a9de133ec17/">Hire With UpWork</a></p>
                <p><a className="button" target="-blank" href="https://www.freelancer.com/u/sknafiul33/">Hire With Freelancer</a></p>
                <p><a className="button" target="-blank" href="https://www.fiverr.com/sknafiul33/">Hire With Fiverr</a></p>
                <p><a className="button" target="-blank" href="https://www.toogit.com/freelancer/profile/bound-less/">Hire With Toogit</a></p>
                <br/>
                <br/>
                <br/>
                
                <p><a className="cntm"target="-blank" href="https://www.facebook.com/100002875116875/">CONTACT ME</a></p>
                <br/>
                <br/>
                <br/>
            </div>
                <div className="half">
                    
                </div>
                <div className="ft">
                    <img src={bsr} alt=""/>
                </div>

            <div className="half">
                <h1 id="w1">Now No Worries</h1>
                <h1 id="s1">About Your Books!</h1>

                <p className="t20">Would you like to make your book Amazon's "Best Seller Book"?</p>
                <p className="t20"> Do you want to increase your book sales?</p>
                <p className="t20">Do you want to see over 100 reviews in your book?</p>
                <p className="t20"> Then you have come to the right place. I would like to help you with my 4 years of experience.</p>
                <p className="t20">I've seen a lot of people get rich or being poor by doing business with KDP. so, my 1st suggestion is don't take any risk. Understand and then consider. Otherwise you will lose everything.</p>
                <p className="t20">Don't think you will be lost. think only you can do with the right way.</p>
                <br/>
            </div>
            
        </section>
        
    );
};

export default HomePage;