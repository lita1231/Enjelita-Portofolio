
:root {
    --coral: #D96868;
    --light: #F2F2F2;
    --sage: #91AE6E;
    --green: #689D4B;
    --navy: #173D68;
    --text: #42566C;
    --muted: #718196;
    --white: #FFFFFF;
    --line: #DDE6E7;
    --pale-green: #EAF0E5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;
    padding: 24px;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--text);
    background: #E9EEF0;
    display: flex;
    flex-direction: column;
}

a {
    color: inherit;
    text-decoration: none;
}

/* =========================
   SHARED PAGE WIDTH
========================= */

.navbar,
.hero,
.page-layout,
.section-page,
.skills-page,
.footer {
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
}

/* =========================
   NAVIGATION
========================= */

.navbar {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    padding: 25px 40px;
    background: var(--white);
    border: 1px solid var(--line);
    border-bottom: none;
}

.brand,
.navbar .logo {
    flex-shrink: 0;
    color: var(--navy);
    font-size: 14px;
    font-weight: 700;
}

.brand small {
    display: block;
    margin-top: 6px;
    color: var(--muted);
    font-size: 10px;
    font-weight: 400;
}

.navbar .logo h3 {
    margin: 0;
    color: var(--navy);
    font-size: 14px;
    font-weight: 700;
    line-height: 1.4;
}

.navbar .logo p {
    margin-top: 5px;
    color: var(--muted);
    font-size: 10px;
    line-height: 1.5;
}

.nav-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 20px;
}

.nav-links a {
    padding: 8px 0;
    border-bottom: 2px solid transparent;
    color: var(--text);
    font-size: 12px;
    line-height: 1.4;
    transition: 0.25s;
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--navy);
    border-color: var(--green);
}

.menu-toggle {
    display: none;
    padding: 7px 11px;
    border: 1px solid var(--line);
    border-radius: 5px;
    background: white;
    color: var(--navy);
    font-size: 20px;
    cursor: pointer;
}

/* =========================
   GENERAL TYPOGRAPHY
========================= */

h1 {
    margin-bottom: 20px;
    color: var(--navy);
    font-size: clamp(38px, 5vw, 62px);
    line-height: 1.04;
    letter-spacing: -1.8px;
}

h1 span {
    color: var(--green);
}

h2 {
    margin-bottom: 12px;
    color: var(--navy);
    font-size: 21px;
}

h3 {
    margin: 20px 0 12px;
    color: var(--navy);
    font-size: 15px;
}

p {
    font-size: 14px;
    line-height: 1.85;
}

.eyebrow {
    display: inline-block;
    margin-bottom: 20px;
    color: var(--green);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
}

.eyebrow::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 4px;
    margin: 0 10px 3px 0;
    border-radius: 4px;
    background: var(--coral);
}

.muted {
    color: var(--muted);
    font-size: 13px;
}

/* =========================
   HOME
========================= */

.hero {
    position: relative;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
    gap: 45px;
    flex: 1;
    min-height: 560px;
    overflow: hidden;
    padding: 65px;
    border: 1px solid var(--line);
    background: linear-gradient(
        135deg,
        #FFFFFF 0%,
        #F7F9F8 65%,
        #EAF2F7 100%
    );
}

.hero-text {
    position: relative;
    z-index: 2;
}

.hero-text h1 {
    font-size: clamp(48px, 6vw, 76px);
}

.hero-text p {
    max-width: 440px;
    margin-bottom: 25px;
    color: var(--muted);
}

/* CONTACT INFO */
.hero-text p.contact-info {
    color: var(--navy);
    font-weight: 700;
    font-size: inherit;
}


.hero-image,
.profile-photo {
    position: relative;
    overflow: visible;
    border-radius: 14px;
}

.hero-image {
    height: 390px;
    background: linear-gradient(145deg, #E5EDE1, #DDEBF5);
}

.hero-image img,
.profile-photo img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: inherit;
}

.image-placeholder {
    width: 100%;
    height: 100%;
    min-height: 220px;
    display: grid;
    place-content: center;
    justify-items: center;
    gap: 15px;
    padding: 25px;
    border-radius: inherit;
    background: linear-gradient(145deg, #E5EDE1, #DDEBF5);
    color: var(--navy);
    text-align: center;
}

.image-placeholder span {
    color: var(--green);
    font-size: 60px;
}

.image-placeholder p {
    font-size: 12px;
}

.floating-label {
    position: absolute;
    bottom: 20px;
    left: -15px;
    z-index: 3;
    max-width: calc(100% + 15px);
    padding: 14px 18px;
    border-left: 4px solid var(--coral);
    border-radius: 4px;
    background: var(--white);
    box-shadow: 0 5px 20px #173D6815;
    color: var(--navy);
    font-size: 11px;
    font-weight: 700;
}

.decor {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
}

.decor-coral {
    top: -80px;
    right: -55px;
    width: 180px;
    height: 180px;
    background: var(--coral);
}

.decor-green {
    bottom: -110px;
    left: -60px;
    width: 230px;
    height: 230px;
    background: var(--sage);
}

/* =========================
   BUTTONS
========================= */

.actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 25px;
}

.btn {
    display: inline-block;
    padding: 13px 19px;
    border: 1px solid var(--navy);
    border-radius: 5px;
    background: var(--navy);
    color: white;
    font-size: 12px;
    font-weight: 700;
    transition: 0.25s;
}

.btn:hover {
    border-color: var(--green);
    background: var(--green);
}

.btn-outline {
    background: transparent;
    color: var(--navy);
}

.btn-outline:hover {
    color: white;
}

/* =========================
   ABOUT AND EXPERIENCE
========================= */

.page-layout {
    position: relative;
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    align-items: center;
    gap: 50px;
    flex: 1;
    min-height: 570px;
    padding: 55px 60px;
    border: 1px solid var(--line);
    background: linear-gradient(135deg, #FFFFFF, #F3F7F6);
}

.profile-photo {
    width: 100%;
    height: 390px;
    background: #E4ECE5;
    border-radius: 80px 80px 15px 15px;
}

.profile-photo .floating-label {
    bottom: 20px;
}

.about-content {
    max-width: 560px;
}

.about-content > p {
    margin-bottom: 16px;
    color: #5B6E80;
}

.about-content strong {
    color: var(--navy);
}

.info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 25px;
}

.info-card {
    padding: 15px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #FFFFFFC9;
}

.info-card small {
    display: block;
    margin-bottom: 8px;
    color: var(--green);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
}

.info-card strong {
    color: var(--navy);
    font-size: 12px;
    line-height: 1.5;
}

/* =========================
   GENERAL SECTION PAGES
========================= */

.section-page {
    flex: 1;
    min-height: 570px;
    padding: 55px 60px;
    border: 1px solid var(--line);
    background: linear-gradient(135deg, #FFFFFF, #F3F7F6);
}

.section-heading {
    max-width: 670px;
    margin-bottom: 35px;
}

.section-heading p {
    color: var(--muted);
}

.skill-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
}

.card {
    padding: 25px;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: #FFFFFFC9;
    box-shadow: 0 5px 20px #173D6808;
}

.card-icon {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    margin-bottom: 17px;
    border-radius: 50%;
    background: var(--sage);
    color: white;
    font-size: 21px;
    font-weight: 700;
}

.coral-icon {
    background: var(--coral);
}

.card > p {
    margin-bottom: 18px;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
    margin-top: 15px;
}

.tags span {
    display: inline-block;
    padding: 8px 12px;
    border-radius: 25px;
    background: var(--pale-green);
    color: #345C42;
    font-size: 11px;
}

.note {
    margin-top: 25px;
    padding: 16px 18px;
    border-left: 4px solid var(--sage);
    background: #F2F5EE;
    font-size: 12px;
    line-height: 1.8;
}

/* =========================
   SKILLS PAGE
========================= */

.skills-page {
    flex: 1;
    min-height: 570px;

    /*
      Lebar area konten disamakan dengan header.
      Padding kanan 40px agar card tidak terdorong
      melebihi batas menu Projects.
    */
    padding: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background: linear-gradient(
        135deg,
        #FFFFFF 0%,
        #F7F9F8 68%,
        #EDF4F7 100%
    );

    border: 1px solid var(--line);
}

.skills-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
    gap: 28px;
    margin: auto 0;
}

.skill-section {
    min-width: 0;
    padding: 28px 30px;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.72);
    border: 1px solid var(--line);
    border-radius: 12px;
}

.skill-heading {
    display: flex;
    align-items: center;
    gap: 13px;
    margin-bottom: 18px;
}

.skill-heading h2 {
    margin: 0;
    color: var(--navy);
    font-size: 25px;
    font-weight: 700;
    line-height: 1.3;
}

.skill-number {
    flex-shrink: 0;
    color: #78996D;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
}

.skill-accent {
    width: 36px;
    height: 5px;
    flex-shrink: 0;
    margin-bottom: 12px;
    background: var(--sage);
    border-radius: 10px;
}

.skill-section:nth-child(2) .skill-accent {
    background: var(--coral);
}

.skill-list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
}

.skill-list li {
    display: flex;
    align-items: center;
    gap: 13px;
    min-width: 0;
    padding: 12px 0;
    color: #526E8C;
    font-size: 14px;
    line-height: 1.5;
    border-bottom: 1px solid #E1E8E9;
}

.skill-list li:last-child {
    border-bottom: none;
}

.skill-dot {
    width: 9px;
    height: 9px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--sage);
}

.skill-section:nth-child(2) .skill-dot {
    background: var(--coral);
}

.skills-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-top: 25px;
    padding-top: 12px;
    color: var(--muted);
    font-size: 10px;
    letter-spacing: 1px;
    border-top: 1px solid var(--line);
}

/* =========================
   INTERNSHIP TIMELINE
========================= */

.experience-card {
    padding: 30px;
}

.experience-title {
    display: flex;
    align-items: flex-start;
    gap: 17px;
}

.experience-title .card-icon {
    flex-shrink: 0;
}

.experience-title h2 {
    font-size: 20px;
}

.green-text {
    display: inline-block;
    margin-top: 7px;
    color: var(--green);
    font-weight: 700;
}

.timeline {
    list-style: none;
    margin: 30px 0 25px 8px;
    padding-left: 25px;
    border-left: 2px solid #D8E4D4;
}

.timeline li {
    position: relative;
    margin-bottom: 22px;
    color: #50657A;
    font-size: 13px;
    line-height: 1.8;
}

.timeline li:last-child {
    margin-bottom: 0;
}

.timeline li::before {
    position: absolute;
    top: 5px;
    left: -33px;
    width: 12px;
    height: 12px;
    border: 3px solid #EAF0E5;
    border-radius: 50%;
    background: var(--green);
    content: "";
}

/* =========================
   ORGANIZATION
========================= */

.organization-card {
    max-width: 600px;
    margin: auto;
    text-align: center;
}

.organization-symbol {
    display: grid;
    place-items: center;
    width: 70px;
    height: 70px;
    margin: 0 auto 20px;
    border-radius: 50%;
    background: var(--pale-green);
    color: var(--green);
    font-size: 32px;
}

.organization-card h2 {
    margin-bottom: 8px;
    font-size: 25px;
}

.organization-card h3 {
    color: var(--green);
}

.divider {
    height: 1px;
    margin: 25px 0;
    background: var(--line);
}

/* =========================
   PROJECTS
========================= */

.project-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 17px;
}

.project-card {
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.project-art {
    display: grid;
    place-items: center;
    height: 130px;
    margin-bottom: 20px;
    border-radius: 9px;
    background: linear-gradient(135deg, #E8EFE4, #F1F6F4);
    color: var(--green);
    font-size: 48px;
}

.project-card h2 {
    font-size: 17px;
    line-height: 1.45;
}

.project-card p {
    margin-bottom: 10px;
    color: var(--muted);
    font-size: 12px;
}

.project-card .tags {
    margin-top: auto;
    padding-top: 15px;
}

.project-card .tags span {
    padding: 7px 9px;
    font-size: 10px;
}

/* =========================
   FOOTER
========================= */

.footer {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding: 18px 10px 0;
    color: #8190A0;
    font-size: 10px;
}

/* =========================
   TABLET / LAPTOP KECIL
========================= */

@media (max-width: 900px) {
    body {
        padding: 12px;
    }

    .navbar {
        padding: 22px 24px;
    }

    .nav-links {
        gap: 12px;
    }

    .hero,
    .page-layout {
        gap: 30px;
        padding: 40px 30px;
    }

    .section-page {
        padding: 40px 30px;
    }

    .skills-page {
        padding: 30px 24px;
    }

    .skills-grid {
        gap: 16px;
    }

    .skill-section {
        padding: 22px;
    }

    .skill-heading h2 {
        font-size: 22px;
    }

    .skill-list li {
        gap: 10px;
        padding: 10px 0;
        font-size: 13px;
    }

    .hero-image {
        height: 320px;
    }

    .profile-photo {
        height: 330px;
    }

    .project-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 650px) {
    body {
        padding: 8px;
    }

    .navbar {
        flex-wrap: wrap;
        gap: 18px;
        padding: 20px;
    }

    .menu-toggle {
        display: block;
        margin-left: auto;
    }

    .nav-links {
        display: none;
        width: 100%;
        align-items: stretch;
        flex-direction: column;
        gap: 5px;
        padding-top: 12px;
        border-top: 1px solid var(--line);
    }

    .nav-links.open {
        display: flex;
    }

    .nav-links a {
        padding: 10px 0;
    }

    .hero,
    .page-layout {
        grid-template-columns: 1fr;
        padding: 30px 22px;
    }

    .hero {
        gap: 35px;
    }

    .hero-text h1 {
        font-size: 52px;
    }

    .hero-image {
        width: 100%;
        max-width: 400px;
        height: 340px;
        margin: auto;
    }

    .profile-photo {
        max-width: 350px;
        height: 340px;
        margin: auto;
    }

    .about-content {
        max-width: none;
    }

    .section-page {
        padding: 32px 20px;
    }

    .skills-page {
        min-height: auto;
        padding: 28px 20px;
    }

    .skills-grid {
        grid-template-columns: minmax(0, 1fr);
        gap: 18px;
        margin: 0;
    }

    .skill-section {
        padding: 24px;
    }

    .skill-heading h2 {
        font-size: 24px;
    }

    .skill-list li {
        padding: 13px 0;
        font-size: 14px;
    }

    .skills-footer {
        margin-top: 22px;
        font-size: 9px;
        letter-spacing: 0.5px;
    }

    .skill-grid,
    .project-grid {
        grid-template-columns: minmax(0, 1fr);
    }

    .section-heading {
        margin-bottom: 25px;
    }

    .info-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .footer {
        flex-wrap: wrap;
        padding: 15px 5px;
    }
}

/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 380px) {
    h1 {
        font-size: 36px;
    }

    .info-grid {
        grid-template-columns: minmax(0, 1fr);
    }

    .hero-text h1 {
        font-size: 43px;
    }

    .experience-card,
    .card {
        padding: 18px;
    }

    .skills-page {
        padding: 22px 16px;
    }

    .skill-section {
        padding: 19px;
    }

    .skill-heading h2 {
        font-size: 22px;
    }

    .skill-list li {
        font-size: 13px;
    }
}

/* =========================
   PRINT
========================= */

@media print {
    body {
        padding: 0;
        background: white;
    }

    .navbar,
    .hero,
    .page-layout,
    .section-page,
    .skills-page {
        max-width: none;
        box-shadow: none;
    }

    .menu-toggle,
    .nav-links {
        display: none;
    }

    .hero,
    .page-layout,
    .section-page,
    .skills-page {
        break-inside: avoid;
    }
}

/* =========================
   ORGANIZATION EXPERIENCE PAGE
========================= */

.organization-page {
    width: 100%;
    max-width: 1200px;
    min-height: 650px;
    flex: 1;
    margin: 0 auto;
    padding: 42px 45px;

    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    align-items: center;
    gap: 40px;

    background: linear-gradient(
        135deg,
        #FFFFFF 0%,
        #F7F9F8 65%,
        #EDF4F7 100%
    );

    border: 1px solid var(--line);
}

/* LEFT PHOTO GALLERY */

.organization-gallery {
    min-width: 0;
    padding: 15px;

    background: rgba(255, 255, 255, 0.75);
    border: 1px solid var(--line);
    border-radius: 14px;
}

.organization-main-photo {
    width: 100%;
    height: 220px;
    margin-bottom: 16px;
    overflow: hidden;
    border-radius: 10px;
    background: #E5EDE1;
}

.organization-main-photo img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 35%;
    border-radius: inherit;
}

/* FOUR SMALL PHOTOS */

.organization-photo-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    padding-top: 15px;
    border-top: 1px solid var(--line);
}

.organization-photo {
    width: 100%;
    height: 125px;
    overflow: hidden;
    border-radius: 9px;
    background: #E5EDE1;
}

.organization-photo img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: inherit;
    transition: transform 0.3s ease;
}

.organization-photo:hover img {
    transform: scale(1.04);
}

/* RIGHT CONTENT */

.organization-content {
    min-width: 0;
    padding: 10px 0;
}

.organization-content > .eyebrow {
    margin-bottom: 18px;
}

.organization-content h1 {
    margin-bottom: 20px;
    font-size: clamp(38px, 4.2vw, 60px);
    line-height: 1.04;
    letter-spacing: -1.5px;
    overflow-wrap: anywhere;
}

.organization-content h1 span {
    display: block;
    color: var(--green);
}

.organization-intro {
    max-width: 600px;
    margin-bottom: 25px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.9;
}

/* ORGANIZATION DETAIL CARD */

.organization-detail {
    padding: 25px 27px;

    background: rgba(255, 255, 255, 0.78);
    border: 1px solid var(--line);
    border-radius: 12px;
    box-shadow: 0 5px 20px #173D6808;
}

.organization-label {
    display: inline-block;
    margin-bottom: 10px;

    color: var(--green);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
}

.organization-detail h2 {
    margin: 0 0 8px;
    color: var(--navy);
    font-size: 23px;
    line-height: 1.4;
}

.organization-position {
    color: var(--muted);
    font-size: 13px;
    line-height: 1.7;
}

.organization-divider {
    height: 1px;
    margin: 20px 0;
    background: var(--line);
}

.organization-detail h3 {
    margin: 0 0 10px;
    color: var(--green);
    font-size: 15px;
}

.organization-description {
    color: #5B6E80;
    font-size: 13px;
    line-height: 1.9;
    text-align: justify;
}

/* BOTTOM KEYWORDS */

.organization-footer {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 18px;
    margin-top: 22px;
    padding-top: 14px;
    border-top: 1px solid var(--line);
}

.organization-footer span {
    color: var(--muted);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1px;
}

/* TABLET */

@media (max-width: 900px) {
    .organization-page {
        grid-template-columns: 0.9fr 1.1fr;
        gap: 25px;
        padding: 30px 25px;
    }

    .organization-main-photo {
        height: 190px;
    }

    .organization-photo {
        height: 105px;
    }

    .organization-content h1 {
        font-size: 38px;
    }

    .organization-detail {
        padding: 20px;
    }

    .organization-detail h2 {
        font-size: 20px;
    }
}

/* MOBILE */

@media (max-width: 650px) {
    .organization-page {
        grid-template-columns: minmax(0, 1fr);
        gap: 30px;
        min-height: auto;
        padding: 25px 18px;
    }

    .organization-gallery {
        padding: 12px;
    }

    .organization-main-photo {
        height: 220px;
    }

    .organization-photo-grid {
        gap: 10px;
        padding-top: 12px;
    }

    .organization-photo {
        height: 120px;
    }

    .organization-content {
        padding: 0;
    }

    .organization-content h1 {
        font-size: clamp(35px, 9vw, 48px);
    }

    .organization-intro {
        font-size: 13px;
    }

    .organization-detail {
        padding: 22px 18px;
    }

    .organization-detail h2 {
        font-size: 21px;
    }

    .organization-description {
        font-size: 13px;
        text-align: left;
    }

    .organization-footer {
        gap: 10px 14px;
    }
}

/* SMALL MOBILE */

@media (max-width: 380px) {
    .organization-page {
        padding: 20px 14px;
    }

    .organization-main-photo {
        height: 180px;
    }

    .organization-photo {
        height: 95px;
    }

    .organization-content h1 {
        font-size: 33px;
    }

    .organization-detail {
        padding: 18px 15px;
    }
}

/* =========================
   EDUCATION PAGE
========================= */

.education-page {
    width: 100%;
    max-width: 1200px;
    min-height: 570px;
    flex: 1;
    margin: 0 auto;
    padding: 45px 55px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 55px;

    background: linear-gradient(135deg, #FFFFFF, #F3F7F6);
    border: 1px solid var(--line);
}

.education-details {
    min-width: 0;
}

.education-landscape {
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-bottom: 22px;
    overflow: hidden;
    border-radius: 12px;
    background: #E5EDE1;
}

.education-landscape img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.education-details h2 {
    margin-bottom: 8px;
    color: var(--navy);
    font-size: 22px;
    line-height: 1.4;
}

.education-year {
    margin-bottom: 6px;
    color: var(--muted);
    font-size: 13px;
}

.education-gpa {
    margin-bottom: 22px;
    color: var(--navy);
    font-size: 14px;
    font-weight: 700;
}

.education-details h3 {
    margin: 0 0 12px;
    color: var(--green);
    font-size: 15px;
}

.education-skills {
    padding-left: 20px;
    color: var(--text);
}

.education-skills li {
    margin-bottom: 8px;
    padding-left: 4px;
    font-size: 13px;
    line-height: 1.7;
}

.education-visual {
    min-width: 0;
}

.education-visual .eyebrow {
    margin-bottom: 15px;
}

.education-visual h1 {
    margin-bottom: 25px;
    font-size: clamp(38px, 4.5vw, 62px);
}

.education-square {
    width: 100%;
    max-width: 420px;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 14px;
    background: linear-gradient(145deg, #E5EDE1, #DDEBF5);
}

.education-square img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* TABLET */

@media (max-width: 900px) {
    .education-page {
        gap: 30px;
        padding: 35px 28px;
    }

    .education-details h2 {
        font-size: 19px;
    }

    .education-visual h1 {
        font-size: 40px;
    }
}

/* MOBILE */

@media (max-width: 650px) {
    .education-page {
        grid-template-columns: minmax(0, 1fr);
        gap: 35px;
        min-height: auto;
        padding: 28px 22px;
    }

    .education-details {
        order: 1;
    }

    .education-visual {
        order: 2;
    }

    .education-visual h1 {
        font-size: 42px;
    }

    .education-square {
        max-width: none;
    }
}

.skills-showcase {
    width: 100%;
    max-width: 1200px;
    min-height: 650px;
    margin: 0 auto;
    padding: 45px 38px;
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.9fr);
    align-items: center;
    gap: 28px;
    flex: 1;
    background: linear-gradient(135deg, #FFFFFF, #F3F7F6);
    border: 1px solid var(--line);
    overflow: hidden;
}

/* KIRI: JUDUL DAN DAFTAR SKILLS */

.skills-information {
    min-width: 0;
}

.skills-heading {
    margin-bottom: 25px;
}

.skills-eyebrow {
    display: inline-block;
    position: relative;
    margin-bottom: 12px;
    padding-left: 38px;
    color: var(--green);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
}

.skills-eyebrow::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 27px;
    height: 5px;
    border-radius: 10px;
    background: var(--coral);
    transform: translateY(-50%);
}

.skills-heading h1 {
    margin: 0 0 12px;
    color: var(--navy);
    font-size: clamp(40px, 4vw, 56px);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -2px;
}

.skills-heading h1 span {
    color: var(--green);
}

.skills-heading > p {
    max-width: 600px;
    margin: 0;
    color: var(--text);
    font-size: 13px;
    line-height: 1.9;
}

/* SOFT SKILLS DAN HARD SKILLS TETAP SEJAJAR */

.skills-cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
    gap: 14px;
}

.skill-card {
    min-width: 0;
    padding: 19px 15px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.85);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.skill-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(23, 61, 104, 0.08);
}

.skill-card-heading {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    min-height: 105px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--line);
}

.skill-icon {
    width: 45px;
    height: 45px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.skill-icon svg {
    width: 25px;
    height: 25px;
    fill: none;
    stroke: #FFFFFF;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.soft-icon {
    background: var(--green);
}

.hard-icon {
    background: var(--coral);
}

.skill-card-heading h2 {
    margin: 8px 0;
    color: var(--navy);
    font-size: 18px;
    line-height: 1.3;
}

.skill-card-heading p {
    margin: 0;
    color: var(--muted);
    font-size: 11px;
    line-height: 1.8;
}

.skill-list {
    margin: 17px 0 0;
    padding: 0;
    list-style: none;
}

.skill-list li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    padding-left: 0;
    color: var(--text);
    font-size: 11px;
    line-height: 1.7;
    overflow-wrap: anywhere;
}

.skill-list li:last-child {
    margin-bottom: 0;
}

.skill-list li::before {
    content: "";
    display: block;
    position: static;
    flex: 0 0 8px;
    width: 8px;
    height: 8px;
    margin-left: 2px;
    border-radius: 50%;
    transform: none;
}

.soft-list li::before {
    background: var(--green);
}

.hard-list li::before {
    background: var(--coral);
}

/* KANAN: ILUSTRASI DAN IKON */

.skills-illustration {
    position: relative;
    min-width: 0;
    width: 100%;
    min-height: 460px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}

.illustration-glow {
    position: absolute;
    z-index: -1;
    width: 100%;
    aspect-ratio: 1 / 0.9;
    border-radius: 48% 52% 44% 56%;
    background: linear-gradient(
        140deg,
        #EAF0E5,
        #F0F5F4,
        #E0EBF5
    );
    animation: glowFloat 6s ease-in-out infinite;
}

.thinker-scene {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 440px;
    animation: thinkerFloat 5s ease-in-out infinite;
}

.thinker-svg {
    display: block;
    width: 100%;
    height: auto;
    overflow: visible;
}

.thought {
    position: absolute;
    z-index: 2;
    width: 68px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    animation: thoughtFloat 4s ease-in-out infinite;
}

.thought svg {
    width: 40px;
    height: 40px;
    fill: none;
    stroke: currentColor;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.thought-team {
    top: 12%;
    left: 0;
    color: var(--green);
    background: #E3EDDF;
}

.thought-team svg {
    fill: var(--green);
    stroke: var(--green);
}

.thought-bulb {
    top: 0;
    left: 45%;
    width: 58px;
    height: 58px;
    color: #D8A13C;
    background: #FFF2CE;
    animation-delay: -1s;
}

.thought-code {
    top: 13%;
    right: 0;
    color: var(--navy);
    background: #E0EBF8;
    animation-delay: -2s;
}

/* ANIMASI */

@keyframes thinkerFloat {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-8px);
    }
}

@keyframes thoughtFloat {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-9px);
    }
}

@keyframes glowFloat {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.035);
    }
}

/* TABLET */

@media (max-width: 1000px) {
    .skills-showcase {
        grid-template-columns: minmax(0, 1fr);
        gap: 25px;
        padding: 35px 28px;
    }

    .skills-illustration {
        max-width: 500px;
        min-height: 400px;
        margin: 0 auto;
    }

    .thinker-scene {
        max-width: 400px;
    }

    .skill-card-heading h2 {
        font-size: 18px;
    }

    .skill-card-heading p,
    .skill-list li {
        font-size: 12px;
    }
}

/* HP */

@media (max-width: 650px) {
    .skills-showcase {
        padding: 28px 18px;
        gap: 25px;
    }

    .skills-heading h1 {
        font-size: 42px;
    }

    .skills-cards {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
    }

    .skill-card {
        padding: 14px 10px;
    }

    .skill-card-heading {
        display: block;
        min-height: 150px;
    }

    .skill-card-heading h2 {
        font-size: 16px;
    }

    .skill-card-heading p {
        font-size: 11px;
    }

    .skill-list li {
        font-size: 11px;
        padding-left: 15px;
    }

    .skills-illustration {
        min-height: 300px;
    }

    .thinker-scene {
        max-width: 330px;
    }

    .thought {
        width: 48px;
        height: 48px;
    }

    .thought svg {
        width: 29px;
        height: 29px;
    }

    .thought-bulb {
        width: 45px;
        height: 45px;
    }
}

/* HP KECIL */

@media (max-width: 380px) {
    .skills-cards {
        grid-template-columns: minmax(0, 1fr);
    }

    .skill-card-heading {
        display: flex;
        min-height: auto;
    }

    .skill-card-heading p {
        font-size: 12px;
    }

    .skill-list li {
        font-size: 12px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .thinker-scene,
    .thought,
    .illustration-glow {
        animation: none;
    }

    .skill-card {
        transition: none;
    }
}


.skills-showcase {
    width: 100%;
    max-width: 1200px;
    min-height: 650px;
    margin: 0 auto;
    padding: 45px 38px;
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.9fr);
    align-items: center;
    gap: 28px;
    flex: 1;
    background: linear-gradient(135deg, #FFFFFF, #F3F7F6);
    border: 1px solid var(--line);
    overflow: hidden;
}
.skills-information {
    min-width: 0;
}

.skills-heading {
    margin-bottom: 25px;
}

.skills-eyebrow {
    display: inline-block;
    position: relative;
    margin-bottom: 12px;
    padding-left: 38px;
    color: var(--green);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
}

.skills-eyebrow::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 27px;
    height: 5px;
    border-radius: 10px;
    background: var(--coral);
    transform: translateY(-50%);
}

.skills-heading h1 {
    margin: 0 0 12px;
    color: var(--navy);
    font-size: clamp(40px, 4vw, 56px);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -2px;
}

.skills-heading h1 span {
    color: var(--green);
}

.skills-heading > p {
    max-width: 600px;
    margin: 0;
    color: var(--text);
    font-size: 13px;
    line-height: 1.9;
}

/* SOFT SKILLS DAN HARD SKILLS TETAP SEJAJAR */

.skills-cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
    gap: 14px;
}

.skill-card {
    min-width: 0;
    padding: 19px 15px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.85);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.skill-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(23, 61, 104, 0.08);
}

.skill-card-heading {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    min-height: 105px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--line);
}

.skill-icon {
    width: 45px;
    height: 45px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.skill-icon svg {
    width: 25px;
    height: 25px;
    fill: none;
    stroke: #FFFFFF;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.soft-icon {
    background: var(--green);
}

.hard-icon {
    background: var(--coral);
}

.skill-card-heading h2 {
    margin: 8px 0;
    color: var(--navy);
    font-size: 18px;
    line-height: 1.3;
}

.skill-card-heading p {
    margin: 0;
    color: var(--muted);
    font-size: 11px;
    line-height: 1.8;
}

.skill-list {
    margin: 17px 0 0;
    padding: 0;
    list-style: none;
}

.skill-list li {
    position: relative;
    margin-bottom: 12px;
    padding-left: 19px;
    color: var(--text);
    font-size: 11px;
    line-height: 1.7;
    overflow-wrap: anywhere;
}

.skill-list li:last-child {
    margin-bottom: 0;
}

.skill-list li::before {
    content: "";
    position: absolute;
    top: 7px;
    left: 2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.soft-list li::before {
    background: var(--green);
}

.hard-list li::before {
    background: var(--coral);
}

/* KANAN: ILUSTRASI DAN IKON */

.skills-illustration {
    position: relative;
    min-width: 0;
    width: 100%;
    min-height: 460px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}

.illustration-glow {
    position: absolute;
    z-index: -1;
    width: 100%;
    aspect-ratio: 1 / 0.9;
    border-radius: 48% 52% 44% 56%;
    background: linear-gradient(
        140deg,
        #EAF0E5,
        #F0F5F4,
        #E0EBF5
    );
    animation: glowFloat 6s ease-in-out infinite;
}

.thinker-scene {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 440px;
    animation: thinkerFloat 5s ease-in-out infinite;
}

.thinker-svg {
    display: block;
    width: 100%;
    height: auto;
    overflow: visible;
}

.thought {
    position: absolute;
    z-index: 2;
    width: 68px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    animation: thoughtFloat 4s ease-in-out infinite;
}

.thought svg {
    width: 40px;
    height: 40px;
    fill: none;
    stroke: currentColor;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.thought-team {
    top: 12%;
    left: 0;
    color: var(--green);
    background: #E3EDDF;
}

.thought-team svg {
    fill: var(--green);
    stroke: var(--green);
}

.thought-bulb {
    top: 0;
    left: 45%;
    width: 58px;
    height: 58px;
    color: #D8A13C;
    background: #FFF2CE;
    animation-delay: -1s;
}

.thought-code {
    top: 13%;
    right: 0;
    color: var(--navy);
    background: #E0EBF8;
    animation-delay: -2s;
}

/* ANIMASI */

@keyframes thinkerFloat {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-8px);
    }
}

@keyframes thoughtFloat {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-9px);
    }
}

@keyframes glowFloat {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.035);
    }
}

/* TABLET */

@media (max-width: 1000px) {
    .skills-showcase {
        grid-template-columns: minmax(0, 1fr);
        gap: 25px;
        padding: 35px 28px;
    }

    .skills-illustration {
        max-width: 500px;
        min-height: 400px;
        margin: 0 auto;
    }

    .thinker-scene {
        max-width: 400px;
    }

    .skill-card-heading h2 {
        font-size: 18px;
    }

    .skill-card-heading p,
    .skill-list li {
        font-size: 12px;
    }
}

/* HP */

@media (max-width: 650px) {
    .skills-showcase {
        padding: 28px 18px;
        gap: 25px;
    }

    .skills-heading h1 {
        font-size: 42px;
    }

    .skills-cards {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
    }

    .skill-card {
        padding: 14px 10px;
    }

    .skill-card-heading {
        display: block;
        min-height: 150px;
    }

    .skill-card-heading h2 {
        font-size: 16px;
    }

    .skill-card-heading p {
        font-size: 11px;
    }

    .skill-list li {
        font-size: 11px;
        padding-left: 15px;
    }

    .skills-illustration {
        min-height: 300px;
    }

    .thinker-scene {
        max-width: 330px;
    }

    .thought {
        width: 48px;
        height: 48px;
    }

    .thought svg {
        width: 29px;
        height: 29px;
    }

    .thought-bulb {
        width: 45px;
        height: 45px;
    }
}

/* HP KECIL */

@media (max-width: 380px) {
    .skills-cards {
        grid-template-columns: minmax(0, 1fr);
    }

    .skill-card-heading {
        display: flex;
        min-height: auto;
    }

    .skill-card-heading p {
        font-size: 12px;
    }

    .skill-list li {
        font-size: 12px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .thinker-scene,
    .thought,
    .illustration-glow {
        animation: none;
    }

    .skill-card {
        transition: none;
    }
}

.skills-showcase .skill-list li {
    display: grid !important;
    grid-template-columns: 8px minmax(0, 1fr);
    align-items: center;
    column-gap: 10px;
    padding-left: 0 !important;
}

.skills-showcase .skill-list li::before {
    content: "" !important;
    position: static !important;
    display: block !important;
    width: 8px !important;
    height: 8px !important;
    margin: 0 0 0 2px !important;
    transform: none !important;
    align-self: center;
}

.skills-showcase .soft-list li::before {
    background-color: var(--green) !important;
}

.skills-showcase .hard-list li::before {
    background-color: var(--coral) !important;
}

/* INTERNSHIP EXPERIENCE */
.internship-section {
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 56px;
    align-items: start;
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 24px;
}

.internship-left h1 {
    margin: 0 0 32px;
    color: var(--navy);
    font-size: clamp(32px, 4vw, 52px);
    font-weight: 800;
    line-height: 1.12;
    letter-spacing: 1px;
}

.internship-left h1 span {
    display: block;
    color: var(--coral);
}

.internship-square {
    display: block;
    width: 100%;
    max-width: 380px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 16px;
}

.internship-right {
    min-width: 0;
}

.internship-landscape {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 16px;
    margin-bottom: 24px;
}

.internship-details h2 {
    margin: 0 0 10px;
    color: var(--navy);
    font-size: 25px;
    line-height: 1.3;
}

.internship-meta {
    margin: 0 0 18px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.8;
}

.internship-description {
    margin: 0;
    color: var(--text);
    font-size: 16px;
    line-height: 1.8;
}

/* RESPONSIVE */
@media (max-width: 768px) {
    .internship-section {
        grid-template-columns: 1fr;
        gap: 32px;
        padding: 36px 20px;
    }

    .internship-left h1 {
        font-size: 36px;
        margin-bottom: 22px;
    }

    .internship-square {
        max-width: 100%;
    }

    .internship-details h2 {
        font-size: 22px;
    }
}

.projects-page {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 24px 80px;
    box-sizing: border-box;
    background: var(--white);
}

.projects-heading {
    max-width: 680px;
    margin: 0 0 36px;
}

.projects-heading h1 {
    margin: 0 0 16px;
    color: var(--navy);
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: 1px;
}

.projects-heading h1 span {
    color: var(--coral);
}

.projects-heading > p {
    max-width: 580px;
    margin: 0;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.8;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
    width: 100%;
}

.project-image {
    position: relative;
    width: 90%;
    height: 200px;
    overflow: hidden;
    background: var(--pale-green);
}

.project-image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.4s ease;
}

/* UKURAN KARTU DAN KETERANGAN */
.project-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 22px;
    box-sizing: border-box;
}

.project-content h2 {
    margin: 0 0 10px;
    color: var(--navy);
    font-size: 20px;
    line-height: 1.4;
}

.project-description {
    margin: 0 0 18px;
    color: var(--text);
    font-size: 14px;
    line-height: 1.7;
}

/* TABLET DAN HP */
@media (max-width: 640px) {
    .project-image {
        height: 180px;
    }
}

