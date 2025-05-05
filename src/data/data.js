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
  { name: 'PHP', icon: Php },
  { name: 'Laravel', icon: Laravel },
  { name: 'C', icon: C },
  { name: 'Cpp', icon: Cpp },
  { name: 'Python', icon: Python },
  { name: 'Node.js', icon: Nodejs },
  { name: 'PostgreSQL', icon: Postgresql },
  { name: 'MySQL', icon: Mysql },
  { name: 'Mongo', icon: Mongo },
  { name: 'Sqlite', icon: Sqlite },
  { name: 'Jmeter', icon: Jmeter },
  { name: 'Selenium', icon: Selenium },
  { name: 'Java', icon: Java },
  { name: 'React', icon: React },
  { name: 'Dart', icon: Dart },
  { name: 'Flutter', icon: Flutter },
  { name: 'Git', icon: Git },
  { name: 'Figma', icon: Figma },
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
    tags: ['Flutter', 'FastAPI', 'SQLite', 'Mobile App', 'Hospital', 'Online Reservation'],
    github: 'https://github.com/WildanRaffians/TUBES-KEL-6-C2'
},
{
      title: 'Up Down',
      img: Updown,
      desc: `Sebuah game platformer dengan nama Up Down dimana player harus dapat melompat ke platform bergerak yang berada di atas dan di bawah 
      untuk mendapat point dan jangan samapai jatuh atau terdorong ke kiri layar.
      Dibuat menggunakan bahasa Java dengan menerapkan konsep OOP dan MVVM. Juga menyimpan data dalam database MySQL`,
    tags: ['Java', 'OOP', 'MVVM', 'Game Dev', 'MySQL', 'Platformer', 'TMD'],
    github: 'https://github.com/WildanRaffians/TMDDPBO2024'
      
    },
    {
        title: 'Hydroculus',
        img: Hydroculus,
        desc: `Sebuah web data sumber air di Indonesia dan rekomendasi upaya pelestariannya. 
        Terdapat fitur mencari dan memfilter sumber air, list dan detail sumber air, list upaya dan sumber air yang membutuhkan, 
        login untuk admin, CRUD data sumber air oleh admin, CRUD upaya oleh admin, dashboard kondisi sumber air.
        Web dibuat menggunakan PHP Native dengan MySQL sebagai database. 
        Saya juga membuat versi lain menggunakan MongoDB. `,
    tags: ['PHP', 'MySQL', 'MongoDB', 'Web Development', 'Basis Data', 'BDNR'],
    github: 'https://github.com/WildanRaffians/BDNR-UAS'

    },
    {
        title: 'Kivryelle',
        img: Kivryelle,
        desc: `Sebuah Web online shop yang menjual berbagai jenis gadget. 
        Dimana hanya admin atau pemilik website yang melakukan penjualan barang, admin dapat melihat seluruh riwayat pembelian, CRUD produk, dan update status pesanan pembeli. 
        User/pembeli dapat melihat detail produk, searching dan filter produk, menambah produk ke keranjang, melakukan checkout dan melihat riwayat pembelian.
        Dibuat menggunakan PHP Native dan MongoDB sebagai database`,
    tags: ['PHP', 'MongoDB', 'Web Development', 'Non Relational', 'Basis Data', ],
    github: 'https://github.com/WildanRaffians/BDNR-UTS'

    },
    {
        title: 'DBMS',
        img: Dbms,
        desc: `Sebuah DBMS sederhana bertemakan UMKM toko pakaian menggunakan bahasa C dan menerapkan konsep sequential file dan mesin kata.
        Terdapat tabel barang, pelanggan dan transaksi dimana kita dapat melakukan CRUD pada tiap tabel dan melakukan join terhadap tabel yang saling berelasi.`,
    tags: ['C', 'Sequential FIle', 'Mesin Kata', 'Algoritma Pemrograman'],
    github: 'https://github.com/WildanRaffians/TMD_ALPRO_2'

    },
    {
        title: 'GW',
        img: Gw,
        desc: `Sebuah web tempat transaksi item dalam game (top up) dan sejenisnya.
        User dalam mencari item dan melihat detail item lalu membeli item dengan nominal yang sudah dipilih.
        Admin dapat melakukan CRUD pada tabel dan melihat log pembelian
        Dibuat menggunakan framework CodeIgniter`,
    tags: ['PHP', 'CodeIgniter', 'Bootstrap', 'HTML', 'CSS', 'MySql', 'Web Development' ],
    github: 'https://github.com/WildanRaffians/GW'

    },
    {
        title: 'Catetan',
        img: Catetan,
        desc: `Sebuah aplikasi dekstop untuk menyimpan catatan. Dapat menambahkan catatan dengan beberapa text decoration seperti bold, italic, underline, dll.
        dapat melihat dan mencari catatan yang disimpan. Dapat meng-'pin' catatan agar selalu diatas, terdapat shortcut untuk copy isi catatan, dapat merubah isi atau pun menghapus catatan.
        terdapat informasi kapan catatan dibuat dan terakhir diperbarui. Dibuat menggunakan electron.js.`,
    tags: ['Electron', 'HTML', 'CSS', 'JS', 'Dekstop Aplication'],
    github: 'https://github.com/WildanRaffians/DekstopApp-Catetan'

    },
  ];