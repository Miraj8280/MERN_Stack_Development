import React from 'react';
import vg from '../assets/2.webp';
import { 
    AiFillGoogleCircle, 
    AiFillAmazonCircle, 
    AiFillInstagram, 
    AiFillYoutube 
} from 'react-icons/ai';

const Home = () => {
  return (
    <>
        <div className='home'>
            <main>
                <h1>TechyMiraj</h1>
                <p>Solve, Debug, Code...</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg} alt="Vector Graphics" />
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis unde fuga corporis quas maiores tenetur repudiandae ea nobis exercitationem, dolorem rerum quam eos ipsum, atque nihil eveniet porro voluptatem sapiente. Laborum placeat temporibus exercitationem fugit qui soluta nostrum ad quos maxime amet suscipit libero explicabo quae, doloribus omnis, rerum optio. 
                </p>
            </div>
        </div>

        <div className="home3">
            <div>
                <h1>Who we are ?</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius unde quidem et at adipisci natus error tempore cupiditate corrupti quo nesciunt, ratione illo aut eum ab nam. Ex repudiandae soluta veritatis voluptatibus ea itaque nam, dolorum alias deleniti blanditiis, facere, mollitia maiores voluptas quos in deserunt magni sequi distinctio provident voluptatum iusto recusandae ipsum harum explicabo! Mollitia harum quae blanditiis quasi, tempora iste odit atque nemo beatae ducimus reprehenderit possimus.</p>
            </div>
        </div>

        <div className="home4">
            <div>
                <h1>Brands</h1>

                <article>
                    <div style={{animationDelay: '0.3s'}}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>

                    <div style={{animationDelay: '0.5s'}}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>

                    <div style={{animationDelay: '0.7s'}}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>

                    <div style={{animationDelay: '0.1s'}}>
                        <AiFillYoutube />
                        <p>YouTube</p>
                    </div>


                </article>
            </div>
        </div>
    </>
  )
}

export default Home