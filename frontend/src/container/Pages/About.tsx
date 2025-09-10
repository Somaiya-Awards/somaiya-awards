import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const About = () => {
  return (
    <div className='font-Poppins bg-gray-200 h-screen'>
      <Parallax pages={3} style={{ top: '0', left: '0' }}>

        {/* NAVBAR PARALLAX */}
        <ParallaxLayer sticky={{ start: 0, end: 0 }}>
          <Navbar />
        </ParallaxLayer>

        {/* PARALLAX ABOUT SOMAIYA VIDYAVIHAR */}
        <ParallaxLayer offset={0.1} speed={0.5}>
          <div className='w-full h-[70rem] bg-red-800'>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.1}>
          <div className='text-center h-screen p-10 flex'>
            <div>

              <p className='text-2xl text-white -mt-[3rem] mb-[2rem] font-Poppins font-semibold'>About Somaiya Vidyavihar University</p>
              <p className='text-sm mt-5 w-[50%] text-justify text-white font-Poppins'>
              The Somaiya Vidyavihar Complex was founded in 1959 by late Shri K.J. Somaiya (1902-1999). Endowed with a sharp business acumen, a balanced perspective and a social bent of mind, Karamshibhai set up the Somaiya Trust in 1953 for furthering his dream of shaping young minds through quality education. For this purpose he bought a large area of land at Ghatkopar, then considered to be distant, meagrely populated.
              </p>

              <p className='text-sm mt-5 w-[50%] text-justify text-white font-Poppins'>
              In just five decades it has grown into a large educational complex with 34 institutions catering to diverse fields of education such as Humanities, Engineering, Education, Medicine, Management, Pure Sciences and Mass Communication, with more than 39000+ Students and 3000+ Faculties and staff on a throbbing 50 acre campus!              </p>

              <p className='text-sm mt-5 w-[50%] text-justify text-white font-Poppins'>
                Our motto is: ज्ञानादेव तु कैवल्यम् । Knowledge alone liberates. Liberates from poverty, from hunger. Also to liberate one from the attachments that bind us to small-mindedness. Knowledge also provides opportunity. To make the life lived more meaningful. In the service of one’s family, one’s community, one’s समाज, country, and indeed the world. Bearing in mind that there is no religion other than the life lived in the service of humanity
              </p>

              <p className='text-sm mt-5 w-[50%] text-justify text-white font-Poppins'>
              </p>

              <p className='text-sm mt-5 w-[50%] text-justify text-white font-Poppins'>
              </p>
            </div>
            <div>
              <ParallaxLayer offset={0.2} speed={1.1}>
                <div className='flex h-[70%] -mr-[6rem] w-auto items-center justify-end'>
                  <svg id="10015.io" viewBox="0 0 480 480" width={700} height={700} xmlns="http://www.w3.org/2000/svg" >
                    <defs>
                      <clipPath id="blob">
                        <path fill="#474bff" d="M432,292.5Q422,345,376.5,371.5Q331,398,285.5,428.5Q240,459,180.5,452.5Q121,446,105.5,386Q90,326,46.5,283Q3,240,42.5,194.5Q82,149,113.5,112.5Q145,76,192.5,43.5Q240,11,294.5,31.5Q349,52,392,89.5Q435,127,438.5,183.5Q442,240,432,292.5Z" />
                      </clipPath>
                    </defs>
                    <image x="0" y="0" width="100%" height="100%" clip-path="url(#blob)" href="https://www.somaiya.edu/assets/university/img/history/campus.jpg" preserveAspectRatio="xMidYMid slice"></image>
                  </svg>
                </div>
              </ParallaxLayer>
            </div>


          </div>
        </ParallaxLayer>



        {/* PARALLAX FOUNDER */}
        <ParallaxLayer offset={1.2} speed={0}>
          <div className='w-full bg-gray-200 h-[60rem] '>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.4} speed={0.2}>

          <div className='flex p-10 w-full'>
            <div className='w-[50%]'>
              <ParallaxLayer speed={0.4}>
                <div className='flex -ml-[13rem] justify-start items-center'>
                  <svg id="10015.io" viewBox="0 0 480 480" height={600} width={800} xmlns="http://www.w3.org/2000/svg" >
                    <defs>
                      <clipPath id="blob">
                        <path fill="#474bff" d="M414.5,275Q410,310,403.5,353.5Q397,397,355,406.5Q313,416,276.5,437Q240,458,199.5,447Q159,436,121.5,416Q84,396,76,353.5Q68,311,61,275.5Q54,240,62.5,205Q71,170,84,133.5Q97,97,131,78Q165,59,202.5,59Q240,59,281,50Q322,41,348.5,73Q375,105,387.5,139.5Q400,174,409.5,207Q419,240,414.5,275Z" />
                      </clipPath>
                    </defs>
                    <image x="20" y="0" width="100%" height="100%" clip-path="url(#blob)" href="https://www.somaiya.edu/assets/arigel_general/img/aboutus/kjsomaiya.jpg" width='-40' preserveAspectRatio="xMidYMid slice"></image>
                  </svg>
                </div>
              </ParallaxLayer>
            </div>
            <div className='w-[50%] '>
              <h2 className='font-Poppins text-xl text-red-800 font-semibold'>
                About Our Founder, Padmabhushan Pujya Shriman Karamshibhai Jethabhai Somaiya
              </h2>
              <p className='text-sm text-slate-900 my-3 mt-10 text-justify'>
                Shri K.J. Somaiya was warm and endearing. Stately in appearance, immaculately dressed, generally in spotless white hand spun khadi, he exuded a picture of resourcefulness and restraint. He was compassionate and reached out to those in suffering. In all he did, Karamshibhai brought a sense of love and humanism, qualities imbibed in his early youth from the teachings of Mahatma Gandhi. He believed in the ancient Sanskrit saying (na manushit paro dharmah). "There is no religion greater than Man". Karamshibhai's life exemplified this lofty principle through practice.         
              </p>

              <p className='text-sm text-slate-900 my-3 mt-10 text-justify'>
                Shri Karamshibhai Somaiya passed away on May 9, 1999, a week before his 97th birthday. Somaiya Vidyavihar is the living legacy he has left behind, a standing monument to his sagacity, perseverance and foresight.
              </p>

              <h2 className='font-Poppins text-md my-3 mt-10 text-red-800 font-semibold'>
                Vision
              </h2>
              <p className='text-sm text-slate-900  text-justify'>
                To be an excellent center of learning, imparting quality education and creating computer competent professionals to serve the society at large.
              </p>

              <h2 className='font-Poppins text-md my-3 mt-10 text-red-800 font-semibold'>
                Mission
              </h2>
              <p className='text-sm text-slate-900 text-justify'>
                <ul style={{ listStyle: 'circle', paddingLeft: '1rem' }}>
                  <li className=''>
                    To provide quality education required to shape skilled computer engineers.
                  </li>
                  <li className=''>
                    To promote scientific temper and research culture through interdisciplinary and industrial collaboration.
                  </li>
                  <li className=''>
                    To prepare industry-ready professionals, having ethical values and social commitment.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </ParallaxLayer>


        {/* Page 3 FOOTER */}
        <ParallaxLayer offset={2.7} speed={0.2}>
          <div className='h-[60rem]'>
            <Footer />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default About;
