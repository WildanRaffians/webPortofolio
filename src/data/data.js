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
import Jmeter from "../assets/images/apachejmeter-svgrepo-com.svg"
import Selenium from "../assets/images/selenium-svgrepo-com.svg"
import Figma from "../assets/images/figma-svgrepo-com.svg"
import Mongo from "../assets/images/mongo-svgrepo-com.svg"
import Sqlite from "../assets/images/sqlite-svgrepo-com.svg"
import Dart from "../assets/images/dart-svgrepo-com.svg"
import Cpp from "../assets/images/cpp-svgrepo-com.svg"
import Java from "../assets/images/java-svgrepo-com.svg"
import React from "../assets/images/react-svgrepo-com.svg"
import Flutter from "../assets/images/flutter-svgrepo-com.svg"
import Tailwindcss from "../assets/images/logos_tailwindcss.svg"
import CodeIgniter from "../assets/images/logos_codeigniter.png"
import Vite from "../assets/images/vite.svg"

import Dihospital from "../assets/images/dihospital.jpg"
import Updown from "../assets/images/updown.png"
import Hydroculus from "../assets/images/hydroculus.png"
import Kivryelle from "../assets/images/kivryelle.jpg"
import Gw from "../assets/images/gw.png"
import Dbms from "../assets/images/dbms.jpg"
import Catetan from "../assets/images/catetan.png"

export const techs = [
  { name: 'HTML', icon: Html },
  { name: 'CSS', icon: Css },
  { name: 'JavaScript', icon: Javascript },
  { name: 'TailwindCSS', icon: Tailwindcss },
  { name: 'Vite', icon: Vite },
  { name: 'PHP', icon: Php },
  { name: 'CodeIgniter', icon: CodeIgniter },
  { name: 'Laravel', icon: Laravel },
  { name: 'React', icon: React },
  { name: 'Node.js', icon: Nodejs },
  { name: 'Flutter', icon: Flutter },
  { name: 'Dart', icon: Dart },
  { name: 'Java', icon: Java },
  { name: 'Cpp', icon: Cpp },
  { name: 'C', icon: C },
  { name: 'Python', icon: Python },
  { name: 'PostgreSQL', icon: Postgresql },
  { name: 'MySQL', icon: Mysql },
  { name: 'MongoDB', icon: Mongo },
  { name: 'Sqlite', icon: Sqlite },
  { name: 'Jmeter', icon: Jmeter },
  { name: 'Selenium', icon: Selenium },
  { name: 'Git', icon: Git },
  { name: 'Figma', icon: Figma },
];

export const projects = [
    {
      title: 'Dihospital',
      img: Dihospital,
      desc: `A mobile application for DI (Doa Ibu) Hospital that allows patients to book doctor appointments 
      and provides step-by-step guidance when visiting the hospital. 
      From booking to check-in and discharge, everything is streamlined through the app. Built with Flutter, 
      using FastAPI for the backend and SQLite as the database.`,
    tags: ['Flutter', 'FastAPI', 'SQLite', 'Mobile App', 'Hospital', 'Online Reservation'],
    github: 'https://github.com/WildanRaffians/TUBES-KEL-6-C2'
},
{
      title: 'Up Down',
      img: Updown,
      desc: `A platformer game called “Up Down,” where players jump between moving platforms above and below 
      to collect points while avoiding falling or being pushed off the left side of the screen. 
      Developed in Java, applying OOP and MVVM principles, with data stored in a MySQL database.`,
    tags: ['Java', 'OOP', 'MVVM', 'Game Dev', 'MySQL', 'Platformer', 'TMD'],
    github: 'https://github.com/WildanRaffians/TMDDPBO2024'
      
    },
    {
        title: 'Hydroculus',
        img: Hydroculus,
        desc: `A web platform that provides data on water sources across Indonesia along with recommendations for their conservation. 
        Features include search and filtering, water source listings and details, conservation initiatives, admin login, and full CRUD operations for managing data. 
        A dashboard provides insights into water conditions. 
        Built using native PHP with MySQL, with an alternative version using MongoDB.`,
    tags: ['PHP', 'MySQL', 'MongoDB', 'Web Development', 'Basis Data', 'BDNR'],
    github: 'https://github.com/WildanRaffians/BDNR-UAS'

    },
    {
        title: 'Kivryelle',
        img: Kivryelle,
        desc: `An online store for selling various gadgets, 
        where only the admin can manage product sales, view purchase histories, perform CRUD operations, and update order statuses. 
        Users can browse product details, search and filter products, add items to the cart, check out, and track purchase history. 
        Built using native PHP with MongoDB.`,
    tags: ['PHP', 'MongoDB', 'Web Development', 'Non Relational', 'Basis Data', ],
    github: 'https://github.com/WildanRaffians/BDNR-UTS'

    },
    {
        title: 'DBMS  for UMKM Clothing Store',
        img: Dbms,
        desc: `A simple DBMS project themed around a small clothing business (UMKM), developed in C. Implements sequential file and word machine concepts, with tables for products, customers, and transactions. 
        Includes CRUD functionalities and the ability to perform table joins between related data.`,
    tags: ['C', 'Sequential FIle', 'Mesin Kata', 'Algoritma Pemrograman'],
    github: 'https://github.com/WildanRaffians/TMD_ALPRO_2'

    },
    {
        title: 'GW',
        img: Gw,
        desc: `A web application for in-game item transactions (top-ups) and similar services.
        Users can browse and search for game items, view detailed item descriptions, and purchase items with selected denominations.
        The admin can perform CRUD operations on the item database, manage purchase records, and view purchase logs for tracking transactions.
        Developed using the CodeIgniter framework.`,
    tags: ['PHP', 'CodeIgniter', 'Bootstrap', 'HTML', 'CSS', 'MySql', 'Web Development' ],
    github: 'https://github.com/WildanRaffians/GW'

    },
    {
        title: 'Catetan',
        img: Catetan,
        desc: `A desktop app for creating and managing notes with formatting options like bold, italic, and underline. 
        Users can view, search, pin important notes to the top, use shortcuts to copy content, edit or delete notes, and see timestamps for creation and last updates. 
        Built using Electron.js.`,
    tags: ['Electron', 'HTML', 'CSS', 'JS', 'Dekstop Aplication'],
    github: 'https://github.com/WildanRaffians/DekstopApp-Catetan'

    },
  ];

  export const experiences = [
    {
      title: "Web Developer Intern",
      at: "@Diskominfo Jawa barat",
      description: `I worked as an intern at the Department of Communication and Informatics, 
      where my primary responsibility was developing web applications using the Laravel 11 framework for both frontend and backend components. 
      During my internship, I contributed to several internal projects, including the development of a digital library system for the Pojok Baca program. 
      This system was designed to streamline the management of book collections as well as the borrowing and return processes for the public. In addition, 
      I was involved in the improvement and optimization of the archiving module, focusing on enhancing the efficiency of document management and 
      refining features such as search functionality and reporting. 
      This experience gave me hands-on insight into information system development within a government environment and 
      demonstrated how technology can be effectively utilized to support better and more transparent public services.`,
    },
    {
      title: "Freelance",
      at: "@Anywhere",
      description: `I do everything`,
    },
  ];