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

import Dihospital from "../assets/images/dihospital.jpg"
import Updown from "../assets/images/updown.png"
import Hydroculus from "../assets/images/hydroculus.png"

export const techs = [
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

export const projects = [
    {
      title: 'Dihospital',
      img: Dihospital,
      desc: `Sebuah mobile app untuk rumah sakit dengan nama DI (Doa Ibu) Hospital. 
             Fitur utamanya adalah dapat melakukan reservasi janji temu dengan dokter melalui aplikasi, 
             serta menyediakan panduan ketika tiba di rumah sakit. 
             Jadi, dari mulai pemesanan hingga pergi ke rumah sakit dan pulang, semuanya berbasis aplikasi.
             Dibuat menggunakan framework Flutter dengan API FastAPI dan database SQLite.`,
    tags: ['Flutter', 'FastAPI', 'SQLite', 'Mobile App', 'Hospital', 'Online Reservation']
    },
    {
      title: 'Up Down',
      img: Updown,
      desc: `Sebuah game platformer dengan nama Up Down dimana player harus dapat melompat ke platform bergerak yang berada di atas dan di bawah 
            untuk mendapat point dan jangan samapai jatuh atau terdorong ke kiri layar.
            Dibuat menggunakan bahasa Java dengan menerapkan konsep OOP dan MVVM. Juga menyimpan data dalam database MySQL`,
    tags: ['Java', 'OOP', 'MVVM', 'Game Dev', 'MySQL', 'Platformer', 'TMD']

    },
    {
      title: 'Hydroculus',
      img: Hydroculus,
      desc: `Sebuah web data sumber air di Indonesia dan rekomendasi upaya pelestariannya. 
            Terdapat fitur mencari dan memfilter sumber air, list dan detail sumber air, list upaya dan sumber air yang membutuhkan, 
            login untuk admin, CRUD data sumber air oleh admin, CRUD upaya oleh admin, dashboard kondisi sumber air.
            Web dibuat menggunakan PHP Native dengan MySQL sebagai database. 
            Saya juga membuat versi lain menggunakan MongoDB. `,
    tags: ['PHP', 'MySQL', 'MongoDB', 'Web Development', 'Basis Data', 'BDNR']

    },
  ];