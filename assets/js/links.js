/*
==========================================================
BALANCED LIFE | LINKS.JS
Genera automáticamente las tarjetas tipo Linktree
==========================================================
*/

const links = [
    {
        icon: "fa-solid fa-calendar-check",
        title: "Agenda tu consulta",
        subtitle: "Reserva una cita personalizada",
        url: "#"
    },
    {
        icon: "fa-brands fa-whatsapp",
        title: "WhatsApp",
        subtitle: "Escríbeme directamente",
        url: "#"
    },
    {
        icon: "fa-brands fa-instagram",
        title: "Instagram",
        subtitle: "Consejos y contenido diario",
        url: "#"
    },
    {
        icon: "fa-brands fa-facebook-f",
        title: "Facebook",
        subtitle: "Sígueme en Facebook",
        url: "#"
    },
    {
        icon: "fa-brands fa-tiktok",
        title: "TikTok",
        subtitle: "Videos y recetas saludables",
        url: "#"
    },
    {
        icon: "fa-solid fa-globe",
        title: "Página Web",
        subtitle: "Conoce todos mis servicios",
        url: "#"
    },
    {
        icon: "fa-solid fa-utensils",
        title: "Planes de Alimentación",
        subtitle: "Descubre los programas disponibles",
        url: "#"
    },
    {
        icon: "fa-solid fa-book-open",
        title: "Blog",
        subtitle: "Artículos sobre nutrición",
        url: "#"
    },
    {
        icon: "fa-solid fa-bowl-food",
        title: "Recetas Saludables",
        subtitle: "Ideas fáciles y deliciosas",
        url: "#"
    },
    {
        icon: "fa-solid fa-location-dot",
        title: "Ubicación",
        subtitle: "Cómo llegar al consultorio",
        url: "#"
    }
];

/* ==========================================
   GENERAR TARJETAS
========================================== */

const container = document.querySelector(".links");

if (container) {

    links.forEach(link => {

        const card = document.createElement("a");

        card.className = "link-card";
        card.href = link.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        card.innerHTML = `
            <div class="link-left">

                <div class="link-icon">
                    <i class="${link.icon}"></i>
                </div>

                <div class="link-info">
                    <h4>${link.title}</h4>
                    <p>${link.subtitle}</p>
                </div>

            </div>

            <div class="link-arrow">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        `;

        container.appendChild(card);

    });

}