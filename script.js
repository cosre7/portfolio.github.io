document.addEventListener("DOMContentLoaded", function () {
    // AOS 라이브러리 초기화
    AOS.init({
        duration: 1000, // 애니메이션 지속 시간 (밀리초)
        once: true, // 애니메이션이 한 번만 실행되도록 설정
    });

    // 1. 부드러운 스크롤 기능
    const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // 기본 동작(점프) 방지

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // 내비게이션 바 높이를 고려하여 스크롤 위치 조정
                const navbarHeight =
                    document.querySelector(".navbar").offsetHeight;
                const targetPosition =
                    targetElement.getBoundingClientRect().top +
                    window.pageYOffset -
                    navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });

                // 모바일 메뉴가 열려있으면 닫기
                const navbarCollapse =
                    document.querySelector(".navbar-collapse");
                if (navbarCollapse.classList.contains("show")) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false,
                    });
                    bsCollapse.hide();
                }
            }
        });
    });

    // 2. 스크롤 위치에 따라 내비게이션 링크 활성화 (Scroll Spy)
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - navbarHeight - 50; // 50px 여유
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});
