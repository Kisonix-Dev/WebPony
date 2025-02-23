        const scrollToTopBtn = document.getElementById("scrollToTopBtn");

        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.classList.add("show");
            } else {
                scrollToTopBtn.classList.remove("show");
            }
        };

        scrollToTopBtn.onclick = function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            scrollToTopBtn.classList.remove("show");
        };










