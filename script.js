/* ===========================
   RESPONSIVE DESIGN
=========================== */

/* Tablet */
@media (max-width: 992px){

    .hero{
        grid-template-columns:1fr;
        text-align:center;
        gap:40px;
    }

    .hero-text p{
        margin:auto auto 25px;
    }

    .hero-image img{
        width:280px;
        height:280px;
    }

    .navbar{
        flex-direction:column;
        gap:20px;
    }

    .nav-links{
        flex-wrap:wrap;
        justify-content:center;
    }
}

/* Mobile */
@media (max-width:768px){

    section{
        padding:50px 6%;
    }

    .logo{
        font-size:24px;
    }

    .hero-text h1{
        font-size:38px;
    }

    .hero-text h2{
        font-size:24px;
    }

    .hero-text h3{
        font-size:20px;
    }

    .nav-links{
        flex-direction:column;
        align-items:center;
        gap:15px;
    }

    .hero-image img{
        width:220px;
        height:220px;
    }

    .skills-grid,
    .project-grid,
    .highlight-grid{
        grid-template-columns:1fr;
    }

    .contact form{
        padding:25px;
    }
}

/* Small Mobile */
@media (max-width:480px){

    .hero-text h1{
        font-size:32px;
    }

    .hero-text h2{
        font-size:20px;
    }

    .hero-text h3{
        font-size:18px;
    }

    .btn{
        width:100%;
        text-align:center;
    }

    .hero-image img{
        width:180px;
        height:180px;
    }
}

/* ===========================
   DARK MODE
=========================== */

body.dark-mode .card,
body.dark-mode .header,
body.dark-mode footer,
body.dark-mode .contact form{
    background:var(--surface);
    color:var(--text);
}

body.dark-mode input,
body.dark-mode textarea{
    background:#2b2b2b;
    color:#ffffff;
    border:1px solid #555;
}

body.dark-mode input::placeholder,
body.dark-mode textarea::placeholder{
    color:#cccccc;
}

/* ===========================
   ANIMATIONS
=========================== */

@keyframes fadeIn{

    from{
        opacity:0;
        transform:translateY(30px);
    }

    to{
        opacity:1;
        transform:translateY(0);
    }

}

.hero,
.about,
.skills,
.projects,
.contact,
.education,
.goals,
.highlights{

    animation:fadeIn 1s ease;

}

.card:hover{

    transform:translateY(-10px) scale(1.03);

}

.hero-image img{

    transition:.4s ease;

}

.hero-image img:hover{

    transform:scale(1.05);

}

.nav-links a{

    position:relative;

}

.nav-links a::after{

    content:"";
    position:absolute;
    left:0;
    bottom:-5px;
    width:0%;
    height:2px;
    background:var(--primary);
    transition:.3s;

}

.nav-links a:hover::after{

    width:100%;

}

input,
textarea,
button{

    transition:.3s ease;

}

button:hover{

    cursor:pointer;

}

/* ===========================
   SCROLLBAR
=========================== */

::-webkit-scrollbar{

    width:8px;

}

::-webkit-scrollbar-thumb{

    background:var(--primary);
    border-radius:10px;

}

::-webkit-scrollbar-track{

    background:#dddddd;

}