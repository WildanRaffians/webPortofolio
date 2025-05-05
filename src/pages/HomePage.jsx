import HeroImage from "../assets/images/hero1.png";
import AboutImage from "../assets/images/about1.png"
import Dihospital from "../assets/images/dihospital.jpg"
import Updown from "../assets/images/updown.png"
import Hydroculus from "../assets/images/hydroculus.png"
import Html from "../assets/images/logos_html.svg"
import Css from "../assets/images/logos_css.svg"
import Javascript from "../assets/images/logos_javascript.svg"
import C from "../assets/images/logos_c.svg"
import Php from "../assets/images/logos_php.svg"
import Python from "../assets/images/logos_python.svg"
import Nodejs from "../assets/images/logos_nodejs.svg"
import Laravel from "../assets/images/logos_laravel.svg"
import Postgresql from "../assets/images/logos_postgresql.svg"
import Mysql from "../assets/images/logos_mysql.svg"
import Git from "../assets/images/logos_git.svg"


const HomePage = () => {
  const techs = [
    { name: 'HTML', icon: Html },
    { name: 'CSS', icon: Css },
    { name: 'JavaScript', icon: Javascript },
    { name: 'C', icon: C },
    { name: 'PHP', icon: Php },
    { name: 'Python', icon: Python },
    { name: 'Node.js', icon: Nodejs },
    { name: 'Laravel', icon: Laravel },
    { name: 'PostgreSQL', icon: Postgresql },
    { name: 'MySQL', icon: Mysql },
    { name: 'Git', icon: Git },
  ];

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
        <div className="flex justify-between items-center px-10">
          <div>
            <h2 className="lg:text-3xl text-xl font-medium dark:text-white">Tech Stack</h2>
            <p className="dark:text-white">I think I got this...</p>
          </div>
          
          <div className="pl-10">
            <hr className="xl:w-[800px] lg:w-[700px] md:w-[500px] sm:w-[300px]  border-t-4 border-gray-700" />
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
        <div class="flex justify-center mt-10">
          <hr class="w-full border-t-4 border-gray-700" />
        </div>




        <div className="services pt-32" id="services">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2 dark:text-white">Experiences</h1>
          <p className="text-center  dark:text-white">Hai anak kambeng gembala bisa segalanya</p>
          <div className="services_box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-primary rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2 dark:text-white">Service Name 1</h3>
              <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non et voluptate numquam voluptatibus
                 ipsam?</p>
            </div>
            <div className="box bg-primary rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">Service Name 2</h3>
              <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non et voluptate numquam voluptatibus
                 ipsam?</p>
            </div>
            <div className="box bg-primary rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">Service Name 3</h3>
              <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non et voluptate numquam voluptatibus
                 ipsam?</p>
            </div>
          </div>
        </div>

        <div className="proyek pt-32" id="proyek">
        <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2 dark:text-white">Projects</h1>
          <p className="text-center dark:text-white">I think I've built something!</p>
          <div className="proyek_box  pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white dark:bg-gray-700 shadow-2xl rounded">
              <img src={Dihospital} alt="Proyek Image" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2 px-4 dark:text-white">DI Hospital</h3>
              <div className="relative px-4">
                <p className="text-base/loose text-justify max-h-[140px] overflow-y-auto pr-2 hide-scrollbar dark:text-white">
                  Sebuah mobile app sebuah rumah sakit dengan nama DI (doa ibu) Hospital. 
                  Fitur utamanya adalah dapat melakukan reservasi janji temu dengan dokter melalui aplikasi dan terdapat panduan ketika tiba di rumah sakit. 
                  Jadi dari mulai pemesanan hingga pergi ke rumah sakit dan pulang ari rumah sakit semuanya berbasis aplikasi.
                  Dibuat menggunakan framework Flutter dengan API FastAPI dan database SQLite<br /><br />
                </p>
                {/* Shadow overlay at bottom */}
                <div className="absolute bottom-0 left-4 right-4 h-20 pointer-events-none bg-gradient-to-t from-white to-transparent dark:from-gray-700"></div>
              </div>
            </div>
            <div className="box p-2 bg-white dark:bg-gray-700 shadow-2xl rounded">
              <img src={Updown} alt="Proyek Image" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2 px-4 dark:text-white">Up Down</h3>
              <div className="relative px-4">
                <p className="text-base/loose text-justify max-h-[140px] overflow-y-auto pr-2 hide-scrollbar dark:text-white">
                Sebuah game platformer dengan nama Up Down dimana player harus dapat melompat ke platform bergerak yang berada di atas dan di bawah 
                untuk mendapat point dan jangan samapai jatuh atau terdorong ke kiri layar.
                Dibuat menggunakan bahasa Java dengan menerapkan konsep OOP dan MVVM. Juga menyimpan data dalam database MySQL<br /><br />
                </p>
                {/* Shadow overlay at bottom */}
                <div className="absolute bottom-0 left-4 right-4 h-20 pointer-events-none bg-gradient-to-t from-white to-transparent dark:from-gray-700"></div>
              </div>
            </div>
            <div className="box p-2 bg-white dark:bg-gray-700 shadow-2xl rounded">
              <img src={Hydroculus} alt="Proyek Image" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2 px-4 dark:text-white">Hydroculus</h3>
              <div className="relative px-4">
                <p className="text-base/loose text-justify max-h-[140px] overflow-y-auto pr-2 hide-scrollbar dark:text-white">
                Sebuah web data sumber air di Indonesia dan rekomendasi upaya pelestariannya. 
                Terdapat fitur mencari dan memfilter sumber air, list dan detail sumber air, list upaya dan sumber air yang membutuhkan, 
                login untuk admin, CRUD data sumber air oleh admin, CRUD upaya oleh admin, dashboard kondisi sumber air.
                Web dibuat menggunakan PHP Native dengan MySQL sebagai database. 
                Saya juga membuat versi lain menggunakan MongoDB. <br /><br />
                </p>
                {/* Shadow overlay at bottom */}
                <div className="absolute bottom-0 left-4 right-4 h-20 pointer-events-none bg-gradient-to-t from-white to-transparent dark:from-gray-700"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage