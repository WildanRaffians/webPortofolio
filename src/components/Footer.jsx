const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20  dark:bg-gray-900 md:px-20 px-5" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4  dark:text-white">
          &copy; Copyright by <span className="font-bold">Wildan Hafizh Raffianshar 2025</span>
        </p>
        <div className="social-footer flex items-center sm:gap-6 gap-2  dark:text-white">
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