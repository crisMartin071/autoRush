import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '../router';
import { createI18n } from "vue-i18n";
import VueGoodTablePlugin from "vue-good-table-next";
import "vue-good-table-next/dist/vue-good-table-next.css";

const i18n = createI18n({
    locale: "es",
    fallbackLocale: "en",
    messages: {
        "es": {
            greet: "Bienvenido a AutoRush!",
            catalog: "Conoce nuestro catálogo",
            adviser: "Unete a nosotros",
            slogan: "Conduce tu estilo, siente la excelencia",
            titleHistory: "Nuestra historia",
            history: "En AutoRush somos mucho más que una empresa: somos un equipo que vive la automoción con pasión y compromiso. Nuestra experiencia nos ha enseñado que cada cliente tiene una historia, una necesidad y un sueño sobre ruedas, y por eso trabajamos con cercanía, transparencia y profesionalismo en cada operación.",
            tilteBrands: "Marcas con las que trabajamos",
            columnPosition: "Posición",
            columnName: "Nombre",
            columnSales: "Ventas",
            search: "Buscar",
            btnJoinUs: "Únete a nosotros",
            webMap: "Mapa web",
            index: "Inicio",
            catalog: "Catálogo",
            joinUs: "Únete a nosotros",
            socialMedias: "Redes Sociales",
            help: "Ayuda",
            helpTlf: "Nº Teléfono",
            helpEmail: "Correo electrónico",
            address: "Dirección",
            titleJoinUs: "Únete a nosotros",
            subtitleJoinUs: "Conduce tu estilo, siente la excelencia",
            createAccount: "Crea una cuenta",
            signupText: "Inscríbete para poder recibir notificaciones",
            form: {
                name: "Nombre",
                password: "Contraseña",
                confirmPassword: "Confirmar contraseña",
                email: "Correo electrónico",
                dni: "DNI",
                phone: "Tlf"
            },
            statsTitle: "Las estadísticas nos avalan",
            statsSubtitle: "Cada mes incrementamos el número de clientes en miles",
            cars: {
                "BMW Serie 3": "Deportivo premium manejo excepcional.",
                "Mercedes Clase C": "Sedán elegante con tecnología punta.",
                "Audi A4": "Tracción quattro diseño sofisticado.",
                "Volkswagen Arteon": "Sedán coupé elegante espacioso.",
                "Lexus NX": "SUV premium japonés silencioso.",
                "Volvo XC60": "SUV sueco seguro premium familiar.",
                "Genesis GV70": "SUV coreano lujo buen precio.",
                "Alfa Romeo Stelvio": "SUV italiano alma deportiva.",
                "Cupra Formentor": "SUV coupé español deportivo.",
                "Skoda Octavia RS": "Familiar deportivo 245CV potente.",
                "Mazda CX-5": "SUV japonés premium manejo puro.",
                "DS 7 Crossback": "SUV francés chic tecnológico.",
                "Jaguar F-Pace": "SUV británico deportivo elegante.",
                "Porsche Macan": "SUV compacto deportivo premium.",
                "Tesla Model Y": "SUV eléctrico familiar rápido.",
                "Infiniti QX50": "SUV japonés premium variable.",
                "Acura RDX": "SUV japonés deportivo americano.",
                "Alfa Romeo Giulia": "Sedán italiano tracción trasera.",
                "BMW X3": "SUV deportivo premium versátil.",
                "Audi Q5": "SUV premium equilibrado tecnológico."
            }
        },
        "en": {
            greet: "Welcome to AutoRush!",
            catalog: "Know all of us catalog",
            adviser: "Join us",
            slogan: "Drive your style, feel the excellence",
            titleHistory: "Our Story",
            history: "At AutoRush, we are much more than a company: we are a team that lives and breathes the automotive world with passion and commitment. Our experience has taught us that every client has a story, a need, and a dream on wheels, which is why we work with closeness, transparency, and professionalism in every transaction.",
            tilteBrands: "Brands We Work With",
            columnPosition: "Position",
            columnName: "Name",
            columnSales: "Sales",
            search: "Search",
            btnJoinUs: "Join Us",
            webMap: "Sitemap",
            index: "Home",
            catalog: "Catalog",
            joinUs: "Join Us",
            socialMedias: "Social Media",
            help: "Help",
            helpTlf: "Phone number",
            helpEmail: "Email",
            address: "Address",
            titleJoinUs: "Join Us",
            subtitleJoinUs: "Drive your style, feel the excellence",
            createAccount: "Create an Account",
            signupText: "Sign up to receive notifications",
            form: {
                name: "Name",
                password: "Password",
                confirmPassword: "Confirm Password",
                email: "Email",
                dni: "ID Number",
                phone: "Phone"
            },
            statsTitle: "Our statistics speak for us",
            statsSubtitle: "Every month we increase the number of clients by thousands",
            ourCars: "Our Cars",
            cars: {
                "BMW 3 Series": "Premium sports car with exceptional handling.",
                "Mercedes C-Class": "Elegant sedan with cutting-edge technology.",
                "Audi A4": "Quattro traction with sophisticated design.",
                "Volkswagen Arteon": "Elegant and spacious coupe-style sedan.",
                "Lexus NX": "Quiet premium Japanese SUV.",
                "Volvo XC60": "Safe and premium Swedish family SUV.",
                "Genesis GV70": "Korean SUV, luxury at a good price.",
                "Alfa Romeo Stelvio": "Italian SUV with a sporty soul.",
                "Cupra Formentor": "Sporty Spanish coupe-style SUV.",
                "Skoda Octavia RS": "Powerful 245HP sporty family car.",
                "Mazda CX-5": "Premium Japanese SUV with pure driving pleasure.",
                "DS 7 Crossback": "Chic French SUV with advanced technology.",
                "Jaguar F-Pace": "Elegant and sporty British SUV.",
                "Porsche Macan": "Compact premium sporty SUV.",
                "Tesla Model Y": "Fast family electric SUV.",
                "Infiniti QX50": "Premium Japanese SUV with variable performance.",
                "Acura RDX": "Sporty Japanese-American SUV.",
                "Alfa Romeo Giulia": "Italian sedan with rear-wheel drive.",
                "BMW X3": "Versatile premium sporty SUV.",
                "Audi Q5": "Balanced and technologically advanced premium SUV."
            }
        }
    }
})

createApp(App).use(router).use(i18n).use(VueGoodTablePlugin).mount('#app')
