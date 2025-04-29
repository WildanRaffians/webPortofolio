import HeroImage from "../assets/images/hero1.png";
import AboutImage from "../assets/images/about1.png"
import Proyek1 from "../assets/images/proyek-1.webp"
import Proyek2 from "../assets/images/proyek-2.webp"
import Proyek3 from "../assets/images/proyek-3.webp"
import Proyek4 from "../assets/images/proyek-4.webp"
import Proyek5 from "../assets/images/proyek-5.webp"

const HomePage = () => {
  return (
    <div className="homepage pb-10 md:px-20 px-5" id="home">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-2xl text-xl font-medium mb-7 dark:text-white">
              Hi! my name is <br /> <span className="font-bold text-primary lg:text-5xl text-3xl">Wildan Hafizh Raffianshar</span>
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
              About <span className="font-bold text-primary underline">me</span>.
            </h1>
            <p className="text-base/loose  dark:text-white">
              Yo! Aku.... ingin menjadi kucing.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde, harum fugit nemo doloremque saepe hic obcaecati laudantium voluptatem, quis aliquam facilis! Amet ratione rem obcaecati eaque ad quis cupiditate odio asperiores officiis ea iste, placeat impedit eos adipisci quidem vero nesciunt illum mollitia quam sed! Aspernatur ducimus deleniti hic saepe, optio tempora, tenetur impedit amet repellendus soluta inventore sit necessitatibus consequuntur? Quidem soluta tenetur laudantium deleniti animi nesciunt quasi? Quidem repudiandae maxime incidunt placeat quo porro optio fuga, ratione eligendi dignissimos odio, voluptatibus in praesentium aliquid voluptate possimus? Alias saepe pariatur, maxime commodi harum explicabo quo itaque officiis accusamus!
            </p>
          </div>
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
          <p className="text-center dark:text-white">Hai anak kambeng gembala bisa segalanya</p>
          <div className="proyek_box  pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow rounded">
              <img src={Proyek1} alt="Proyek Image" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 1</h3>
              <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quam doloremque! Corporis consectetur nisi enim.</p>
            </div>
            <div className="box p-2 bg-white shadow rounded">
              <img src={Proyek2} alt="Proyek Image" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 2</h3>
              <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quam doloremque! Corporis consectetur nisi enim.</p>

            </div>
            <div className="box p-2 bg-white shadow rounded">
              <img src={Proyek3} alt="Proyek Image" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 3</h3>
              <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quam doloremque! Corporis consectetur nisi enim.</p>

            </div>
            <div className="box p-2 bg-white shadow rounded">
              <img src={Proyek4} alt="Proyek Image" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 4</h3>
              <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quam doloremque! Corporis consectetur nisi enim.</p>

            </div>
            <div className="box p-2 bg-white shadow rounded">
              <img src={Proyek5} alt="Proyek Image" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 5</h3>
              <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quam doloremque! Corporis consectetur nisi enim.</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage