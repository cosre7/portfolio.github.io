// script.js 파일 전체를 아래 코드로 교체하세요.

/* 1. particles.js 실행: '진짜 밤하늘' 버전 */
particlesJS("particles-js", {
    particles: {
        number: {
            value: 160, // 별의 개수를 늘려 풍성하게
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 1, // 별이 더 선명하게 보이도록
            random: true, // 투명도를 랜덤하게
            anim: {
                enable: true, // [핵심] 깜빡이는 효과
                speed: 1,
                opacity_min: 0,
                sync: false,
            },
        },
        size: {
            value: 2, // 기본 별 크기
            random: true, // 크기를 랜덤하게
            anim: {
                enable: false,
            },
        },
        line_linked: {
            enable: false, // 별 사이의 선 제거
        },
        move: {
            enable: true,
            speed: 0.5, // [핵심] 매우 느리게 움직여 아득한 느낌
            direction: "none", // 방향 없이 무작위로
            random: true,
            straight: false, // 직선이 아닌 부드러운 움직임
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "bubble", // 마우스를 올리면 별이 커지는 효과
            },
            onclick: {
                enable: false,
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 150,
                size: 3,
                duration: 2,
                opacity: 1,
            },
        },
    },
    retina_detect: true,
});

/* 2. Typed.js 및 나머지 스크립트 (변경 없음) */
document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed("#typed-text", {
        strings: [
            "기획하는 개발자",
            "성장하는 개발자",
            "실행하는 개발자",
            "도전하는 개발자",
        ],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
        backDelay: 2000,
    });

    AOS.init({
        duration: 1000,
        once: true,
    });

    // ... (스크롤 스파이 등 나머지 코드는 그대로)
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - navbarHeight - 50;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    const navLinks = document.querySelectorAll(".navbar-nav a");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});
