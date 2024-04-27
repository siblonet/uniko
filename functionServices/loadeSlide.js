async function setPageSettings() {
    const setPad = await GetSettings();

    function isMobileDevice() {
        const userAgent = navigator.userAgent.toLowerCase();
        return userAgent.includes('mobile');
    }
    if (setPad && setPad.length > 0) {
        if (isMobileDevice()) {
            $(".banner-bg1").css("background-image", `url(${setPad.find(item => item.which === "phonea") ? setPad.find(item => item.which === "phonea").image : "./assets/img/cover.jpg"})`);
            $(".banner-bg2").css("background-image", `url(${setPad.find(item => item.which === "phoneb") ? setPad.find(item => item.which === "phoneb").image : "./assets/img/cover.jpg"})`);
            $(".banner-bg3").css("background-image", `url(${setPad.find(item => item.which === "phonec") ? setPad.find(item => item.which === "phonec").image : "./assets/img/cover.jpg"})`);

        } else {
            $(".banner-bg1").css("background-image", `url(${setPad.find(item => item.which === "slidea") ? setPad.find(item => item.which === "slidea").image : "./assets/img/cover.jpg"})`);
            $(".banner-bg2").css("background-image", `url(${setPad.find(item => item.which === "slideb") ? setPad.find(item => item.which === "slideb").image : "./assets/img/cover.jpg"})`);
            $(".banner-bg3").css("background-image", `url(${setPad.find(item => item.which === "slidec") ? setPad.find(item => item.which === "slidec").image : "./assets/img/cover.jpg"})`);
        }

        $("#chanVideo").attr("src", `${setPad.find(item => item.which === "baVdeo") ? setPad.find(item => item.which === "baVdeo").image : "assets/background.webm"}`);
        $("#background-video")[0].load();
        $("#background-video")[0].play();

        $(".nobleim").attr("src", `${setPad.find(item => item.which === "logoextern") ? setPad.find(item => item.which === "logoextern").image : "assets/img/logo.png"}`);
        $(".ads-image").attr("src", `${setPad.find(item => item.which === "backglise") ? setPad.find(item => item.which === "backglise").image ? setPad.find(item => item.which === "backglise").image : "./assets/img/cover.jpg" : "./assets/img/cover.jpg"}`);


    } else {
        $(".nobleim").attr("src", "assets/img/logo.png")
        $("#chanVideo").attr("src", "assets/background.webm");
        $("#background-video")[0].load();
        $("#background-video")[0].play();

        $(".banner-bg1").css("background-image", "url(./assets/img/cover.jpg)");
        $(".banner-bg2").css("background-image", "url(./assets/img/cover.jpg)");
        $(".banner-bg3").css("background-image", "url(./assets/img/cover.jpg)");

        $(".ads-image").css("background-image", "url(./assets/img/cover.jpg)");
    }

};