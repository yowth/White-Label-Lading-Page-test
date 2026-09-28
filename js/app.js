async function loadConfig() {
  const response = await fetch("./js/config.json");
  const config = await response.json();

  // BRAND
  document.title = config.brand.name;

  document.getElementById("brand-name").textContent =
    config.brand.name;

  document.getElementById("brand-logo").src =
    config.brand.logo;

  // HERO
  document.getElementById("hero-badge").textContent =
    config.hero.badge;

  document.getElementById("hero-title").textContent =
    config.hero.title;

  document.getElementById("hero-description").textContent =
    config.hero.description;

  document.getElementById("hero-button").textContent =
    config.hero.button;

  document.getElementById("hero-image").src =
    config.hero.image;

  // FOOTER
  document.getElementById("footer-copyright").textContent =
    config.footer.copyright;

  // THEME
  const root = document.documentElement;

  root.style.setProperty(
    "--primary",
    config.brand.colors.primary
  );

  root.style.setProperty(
    "--secondary",
    config.brand.colors.secondary
  );

  root.style.setProperty(
    "--text",
    config.brand.colors.text
  );

  root.style.setProperty(
    "--muted",
    config.brand.colors.muted
  );

  root.style.setProperty(
    "--background",
    config.brand.colors.background
  );

  root.style.setProperty(
    "--font",
    config.brand.font
  );
}

loadConfig();