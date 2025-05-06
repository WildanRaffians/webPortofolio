const Footer = () => {
  return (
    <div className="footer bg-primary mt-20  dark:bg-gray-900 md:px-20 px-5">
      <div className="logo pt-10 pb-4 pl-7">
          <h1 className="sm:text-2xl text-xl font-bold text-white dark:text-primary">raffians<span className=" text-gray-900 dark:text-white">.</span></h1>
      </div>
      <div className="container flex items-center justify-between">
        <p className="py-4  text-white pl-7">
          &copy; Copyright by <span className="font-bold">Wildan Hafizh Raffianshar 2025</span>
          <br />
          <span className="pl-4">Built with <span className="font-bold">React v19</span> and <span className="font-bold">Tailwind v3.4.3</span></span>
        </p>
        <div className="social-footer flex items-center sm:gap-6 gap-2  text-white">
          <i className="ri-mail-fill text-2xl"></i>
          <a href="https://www.instagram.com/wildanraffians/">
            <i className="ri-instagram-fill text-2xl" target="_blank"></i>
          </a>
          <a href="https://www.youtube.com/@wildanhafizhraffianshar3743"  target="_blank">
            <i className="ri-youtube-fill text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/wildanhafizhraffianshar2003" target="_blank" >
            <i className="ri-linkedin-box-fill text-2xl"></i>
          </a>
          <a href="https://github.com/WildanRaffians" target="_blank">
            <i className="ri-github-fill text-2xl"></i>  
          </a>
        </div>  
      </div>  
    </div>
  )
}

export default Footer