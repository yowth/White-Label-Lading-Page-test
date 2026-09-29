async function loadConfig() {
    const response = await fetch("./js/config.json");
    const config = await response.json();

    //TEXT
    document.getElementById("page-title").textContent = config.text.page_title

    document.getElementById("page-icon").href = config.img.page_icon;

    document.getElementById("header-text").textContent = config.text.header_text;

    document.getElementById("hero-image").src = config.img.hero_image;

    document.getElementById("hero-title").textContent = config.text.hero_title;

    document.getElementById("hero-description").textContent = config.text.hero_description;

    //COLOR
    const root = document.documentElement;

    root.style.setProperty("--background", config.colors.background_color);

    root.style.setProperty("--theme", config.colors.theme_color);

    root.style.setProperty("--hover", config.colors.hover_color);

    root.style.setProperty("--text", config.colors.text_color);
}

loadConfig();