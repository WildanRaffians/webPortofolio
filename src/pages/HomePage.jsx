import HeroImage from "../assets/images/hero1.png";
import AboutImage from "../assets/images/about1.png"
import emailjs from 'emailjs-com';
import { techs, projects } from '../data/data';

import { useRef } from "react";

const HomePage = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_5qelyou', 'template_phyde1p', form.current, 'CvU3xCj0vfuMNeuqq')
      .then(
        (result) => {
          alert('Pesan berhasil dikirim!');
        },
        (error) => {
          alert('Terjadi kesalahan. Silakan coba lagi.');
          console.error(error.text);
        }
      );
  
    // e.current.reset();
  };

  return (
    <div className="homepage pb-10 md:px-20 px-5" id="home">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-2xl text-xl font-medium mb-7 dark:text-white">
              Yo! my name is <br /> <span className="font-bold text-primary lg:text-5xl text-3xl">Wildan Hafizh Raffianshar</span>
            </h1>
            <p className="text-base/8 mb-7 dark:text-white text-justify">
                Undergraduate computer science student in Universitas Pendidikan Indonesia, I'm interested in Web Development and Mobile App Development. 
                Here you'll find information about me,  some experiences, and a collection of projects that reflect my interests, skills, and professional journey.
            </p>
            <a href="#about" className="bg-primary hover:bg-primaryDarker transition-all py-2 px-4 text-white shadow rounded-full">
              About me <i className="ri-eye-line ms-1"></i>
            </a>
            <a href="#" className="bg-yellow-500 hover:bg-yellow-600 transition-all py-2 px-2 text-white shadow rounded-full ml-2">
              CV
            </a>
          </div>
          <div className="box">
            <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] md:m-0 mx-auto"/>
          </div>
        </div>
        
        <div className="abuot grid md:grid-cols-2 grid-cols-1 items-center mdgap-20 gap-10 md:pt-20 pt-32" id="about">
          <div className="box md:order-1 order-2">
            <img src={AboutImage} alt="About Image" className="lg:w-[500px] w-[400px] md:m-0 mx-auto"/>
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7 dark:text-white">
              The thing is <span className="font-bold text-primary">...</span>
            </h1>
            <p className="text-base/loose  dark:text-white text-justify">
              Aku ingin menjadi kucing.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde, harum fugit nemo doloremque saepe hic obcaecati laudantium voluptatem, quis aliquam facilis! Amet ratione rem obcaecati eaque ad quis cupiditate odio asperiores officiis ea iste, placeat impedit eos adipisci quidem vero nesciunt illum mollitia quam sed! Aspernatur ducimus deleniti hic saepe, optio tempora, tenetur impedit amet repellendus soluta inventore sit necessitatibus consequuntur? Quidem soluta tenetur laudantium deleniti animi nesciunt quasi? Quidem repudiandae maxime incidunt placeat quo porro optio fuga, ratione eligendi dignissimos odio, voluptatibus in praesentium aliquid voluptate possimus? Alias saepe pariatur, maxime commodi harum explicabo quo itaque officiis accusamus!
            </p>
          </div>
        </div>
        <br /><br />
        <div className="flex items-center px-10">
          <div className="shrink-0">
            <h2 className="lg:text-3xl text-xl font-medium dark:text-white">Tech Stack</h2>
            <p className="dark:text-white">I think I got this...</p>
          </div>

          <div className="flex-grow pl-10">
            <hr className="border-t-4 border-gray-500 dark:border-gray-700 w-full" />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-5 justify-center">
          {techs.map((item, i) => (
            <div
              className="dark:bg-gray-700 p-2 w-16 h-16 rounded-xl shadow-xl flex items-center justify-center"
              key={i}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-12 h-12 object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <hr className="w-full border-t-4 border-gray-500 dark:border-gray-700" />
        </div>




        <div className="services pt-32" id="services">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2 dark:text-white">Experiences</h1>
          <p className="text-center  dark:text-white">Hai anak kambeng gembala bisa segalanya</p>
          <div className="services_box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-primary rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2 dark:text-white">EXP 1</h3>
              <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non et voluptate numquam voluptatibus
                 ipsam?</p>
            </div>
            <div className="box bg-primary rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">EXP 2</h3>
              <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non et voluptate numquam voluptatibus
                 ipsam?</p>
            </div>
            <div className="box bg-primary rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">EXP 3</h3>
              <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non et voluptate numquam voluptatibus
                 ipsam?</p>
            </div>
          </div>
        </div>

        <div className="proyek pt-32" id="proyek">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2 dark:text-white">Projects</h1>
          <p className="text-center dark:text-white">I think I've built something!</p>
          <div className="proyek_box  pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {projects.map((item, i) => (
              <div key={i} className="box p-2 bg-white dark:bg-gray-700 shadow-2xl rounded">
                <img src={item.img} alt="Proyek Image" className="w-full h-[220px] rounded-sm" />
                <h3 className="text-xl font-bold mt-6 mb-2 px-4 dark:text-white">{item.title}</h3>
                
                {/* Tag keahlian horizontal */}
                <div className="flex overflow-x-auto space-x-2 ml-4 mr-4 pb-2 hide-scrollbar">
                    <span
                      className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded-full whitespace-nowrap text-gray-800 dark:text-white"
                    >
                      #
                    </span>
                  {item.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full whitespace-nowrap text-gray-800 dark:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="relative px-4">
                  <p className="text-base/loose text-justify max-h-[180px] overflow-y-auto hide-scrollbar dark:text-white">
                    {item.desc}
                    <br /><br />
                  </p>
                  {/* Shadow overlay at bottom */}
                  <div className="absolute bottom-0 left-4 right-4 h-20 pointer-events-none bg-gradient-to-t from-white to-transparent dark:from-gray-700"></div>
                </div>
              </div>
            ))}

          </div>
        </div>
        
        <div className="social pt-32 flex flex-col items-center justify-center" id="social">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2 dark:text-white">
            Social
          </h1>
          <p className="text-center dark:text-white">Have Something to say?!</p>

          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 w-full max-w-6xl px-4">
            {/* Form section */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded shadow-lg w-full">
              <h3 className="text-2xl text-center dark:text-white">Email me!</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-white">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-white">Email</label>
                  <input
                    type="email"
                    name="reply_to"
                    required
                    className="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-white">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Social Links section */}
            <div className="flex flex-col justify-start items-center p-5">
              <h3 className="text-2xl text-center dark:text-white">Or see me here!</h3>
              <div className="flex flex-col gap-2 pt-20">
                <div className="flex flex-row gap-2">
                  {/* Instagram */}
                  <a href="https://www.instagram.com/wildanraffians/" target="_blank" className="w-[110px] h-[110px] outline-none border-none bg-white dark:bg-gray-700 rounded-[110px_5px_5px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#cc39a4] dark:hover:bg-[#cc39a4] group flex items-center justify-center">
                    <svg className="mt-6 ml-5 fill-[#cc39a4] group-hover:fill-white" height={30} width={30} viewBox="0,0,256,256" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="none">
                        <g transform="scale(8,8)">
                          <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z" />
                        </g>
                      </g>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/wildanhafizhraffianshar2003" target="_blank"  className="w-[110px] h-[110px] outline-none border-none bg-white dark:bg-gray-700 rounded-[5px_110px_5px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2]  group flex items-center justify-center">
                    <svg className="mt-6 -ml-4 fill-[#0A66C2] group-hover:fill-white" height={30} width={30} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338a53.71 53.71 0 1 1 53.71-53.7 53.71 53.71 0 0 1-53.7 53.7zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.7 16-43.9 31.4-2.3 5.5-2.8 13.1-2.8 20.8V448H172.4s1.2-257.6 0-284.1h92.68v40.3c12.3-19 34.2-46 83.3-46 60.8 0 106.6 39.7 106.6 125.2z"/>
                    </svg>
                  </a>
                </div>

                <div className="flex flex-row gap-2">
                  {/* GitHub */}
                  <a href="https://github.com/WildanRaffians" target="_blank" className="w-[110px] h-[110px] outline-none border-none bg-white dark:bg-gray-700 rounded-[5px_5px_5px_110px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-black group dark:hover:bg-black group flex items-center justify-center">
                    <svg className="mt-[-0.375rem] ml-5 fill-black group-hover:fill-white" height={30} width={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a href="https://www.youtube.com/@wildanhafizhraffianshar3743"  target="_blank" className="w-[110px] h-[110px] outline-none border-none bg-white dark:bg-gray-700 rounded-[5px_5px_110px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#FF0000] dark:hover:bg-[#FF0000] group flex items-center justify-center">
                    <svg className="mt-[-0.563rem] -ml-5 fill-[#FF0000] group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={30} height={30}>
                      <path d="M43.6,14.6c-0.5-1.9-2-3.4-3.9-3.9C36,10,24,10,24,10s-12,0-15.7,0.7c-1.9,0.5-3.4,2-3.9,3.9C4,18.3,4,24,4,24s0,5.7,0.7,9.4c0.5,1.9,2,3.4,3.9,3.9C12,38,24,38,24,38s12,0,15.7-0.7c1.9-0.5,3.4-2,3.9-3.9C44,29.7,44,24,44,24S44,18.3,43.6,14.6z M20,29V19l10,5L20,29z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default HomePage