document.addEventListener("DOMContentLoaded", function () {
  const vehicleDetails = {
    "supra-mk4": { title: "Toyota Supra", year: "1993–2002", engine: "3.0L 2JZ-GTE turbo", power: "280–330 CV", torque: "451 N·m", transmission: "Manual 6 vel. / Automática", drivetrain: "Tracción trasera", weight: "1.510–1.595 kg", acceleration: "Aprox. 5,0 s", description: "Gran turismo japonesa con chasis rígido y un legendario motor de seis cilindros en línea." },
    "evo-v": { title: "Lancer Evolution V", year: "1998–1999", engine: "2.0L 4G63 turbo", power: "280 CV", torque: "373 N·m", transmission: "Manual 5 vel.", drivetrain: "AWD", weight: "Aprox. 1.360 kg", acceleration: "Aprox. 4,9 s", description: "Evolución de competición con tracción integral activa y aerodinámica derivada del rally." },
    "gto": { title: "Mitsubishi GTO", year: "1990–1999", engine: "3.0L V6 6G72 twin turbo", power: "280 CV", torque: "407 N·m", transmission: "Manual 6 vel. / Automática", drivetrain: "AWD", weight: "Aprox. 1.710 kg", acceleration: "Aprox. 5,3 s", description: "Coupé gran turismo con doble turbo, tracción integral y tecnología avanzada para los años noventa." },
    "gtr-r32": { title: "Nissan GT-R", year: "1989–1994 (R32)", engine: "2.6L RB26DETT", power: "280 CV", torque: "353 N·m", transmission: "Manual 5 vel.", drivetrain: "ATTESA AWD", weight: "Aprox. 1.430 kg", acceleration: "Aprox. 5,0 s", description: "El legendario Skyline GT-R R32 combinó tracción integral, dirección al eje trasero y gran capacidad de preparación." },
    "nsx": { title: "Honda NSX", year: "1990–2005", engine: "3.0L V6 C30A", power: "270–280 CV", torque: "270–284 N·m", transmission: "Manual 5 vel. / Automática", drivetrain: "Tracción trasera", weight: "Aprox. 1.370 kg", acceleration: "Aprox. 5,7 s", description: "Superdeportivo de motor central desarrollado con aerodinámica precisa y construcción ligera." },
    "supra-2jz": { title: "Supra 2JZ", year: "1993–2002", engine: "3.0L 2JZ-GTE twin turbo", power: "280–330 CV", torque: "451 N·m", transmission: "Manual 6 vel.", drivetrain: "Tracción trasera", weight: "Aprox. 1.510 kg", acceleration: "Aprox. 5,0 s", description: "La variante turbo del Supra MK4 alcanzó fama mundial por su potencia, robustez y facilidad de preparación." },
    "sti": { title: "Impreza WRX STI", year: "2008–2014 (GR)", engine: "2.5L EJ255/EJ257 boxer turbo", power: "300 CV", torque: "407 N·m", transmission: "Manual 6 vel.", drivetrain: "AWD simétrica", weight: "Aprox. 1.530 kg", acceleration: "Aprox. 4,9 s", description: "Sedán de rally con motor bóxer, tracción integral simétrica y diferencial central activo." },
    "s2000": { title: "Honda S2000", year: "1999–2009", engine: "2.0L F20C / 2.2L F22C", power: "240 CV", torque: "220 N·m", transmission: "Manual 6 vel.", drivetrain: "Tracción trasera", weight: "Aprox. 1.250 kg", acceleration: "Aprox. 6,1 s", description: "Roadster de altas revoluciones con distribución 50:50 y una caja manual diseñada para precisión." },
    "rx7-fd": { title: "Mazda RX-7", year: "1992–2002 (FD)", engine: "1.3L 13B-REW biturbo rotativo", power: "255–280 CV", torque: "294–314 N·m", transmission: "Manual 5/6 vel. / Automática", drivetrain: "Tracción trasera", weight: "Aprox. 1.320 kg", acceleration: "Aprox. 5,3 s", description: "Deportivo ligero impulsado por el motor rotativo 13B y equipado con doble secuencia de turbos." },
    "silvia-s15": { title: "Nissan Silvia S15", year: "1999–2002", engine: "2.0L SR20DET turbo", power: "250 CV", torque: "275 N·m", transmission: "Manual 6 vel.", drivetrain: "Tracción trasera", weight: "Aprox. 1.210 kg", acceleration: "Aprox. 5,6 s", description: "Coupé liviano y equilibrado que se convirtió en una referencia mundial del drift y las preparaciones." },
    "ae86-trueno": { title: "Sprinter Trueno AE86", year: "1983–1987", engine: "1.6L 4A-GE atmosférico", power: "130 CV", torque: "150 N·m", transmission: "Manual 5 vel.", drivetrain: "Tracción trasera", weight: "Aprox. 940 kg", acceleration: "Aprox. 8,5 s", description: "Compacto liviano con faros retráctiles, chasis ágil y una gran reputación en las curvas de montaña." },
    "ae86-levin": { title: "Corolla Levin AE86", year: "1983–1987", engine: "1.6L 4A-GE atmosférico", power: "130 CV", torque: "150 N·m", transmission: "Manual 5 vel.", drivetrain: "Tracción trasera", weight: "Aprox. 940 kg", acceleration: "Aprox. 8,5 s", description: "La variante de faros fijos del AE86 comparte el mismo motor, tracción trasera y esencia deportiva." },
    "civic-ek9": { title: "Civic Type R", year: "1997–2000 (EK9)", engine: "1.6L B16B VTEC", power: "185 CV", torque: "161 N·m", transmission: "Manual 5 vel.", drivetrain: "Tracción delantera", weight: "Aprox. 1.090 kg", acceleration: "Aprox. 6,7 s", description: "Primera generación Civic Type R, creada con mayor rigidez, menos peso y un motor VTEC de altas revoluciones." },
    "integra-dc2": { title: "Integra Type R", year: "1995–2001 (DC2)", engine: "1.8L B18C5 VTEC", power: "190 CV", torque: "186 N·m", transmission: "Manual 5 vel.", drivetrain: "Tracción delantera", weight: "Aprox. 1.100 kg", acceleration: "Aprox. 6,7 s", description: "Compacto deportivo conocido por su ligereza, precisión de dirección y respuesta del motor a altas vueltas." }
  };

  const vehicleModalElement = document.getElementById("vehicleModal");
  const vehicleModal = vehicleModalElement && window.bootstrap && window.bootstrap.Modal
    ? window.bootstrap.Modal.getOrCreateInstance(vehicleModalElement)
    : null;

  function openVehicleModal(card) {
    const details = vehicleDetails[card.dataset.car];
    if (!details) return;

    const image = card.querySelector(".card-image img");
    const kicker = card.querySelector(".card-kicker");
    const number = card.querySelector(".card-number");

    document.getElementById("vehicleModalTitle").textContent = details.title;
    document.getElementById("vehicleModalKicker").textContent = kicker ? kicker.textContent : "";
    document.getElementById("vehicleModalDescription").textContent = details.description;
    document.getElementById("vehicleModalImage").src = image.src;
    document.getElementById("vehicleModalImage").alt = image.alt;
    document.getElementById("vehicleModalNumber").textContent = number ? number.textContent : "";
    document.getElementById("specYear").textContent = details.year;
    document.getElementById("specEngine").textContent = details.engine;
    document.getElementById("specPower").textContent = details.power;
    document.getElementById("specTorque").textContent = details.torque;
    document.getElementById("specTransmission").textContent = details.transmission;
    document.getElementById("specDrivetrain").textContent = details.drivetrain;
    document.getElementById("specWeight").textContent = details.weight;
    document.getElementById("specAcceleration").textContent = details.acceleration;

    if (vehicleModal) {
      vehicleModal.show();
    } else {
      vehicleModalElement.classList.add("show");
      vehicleModalElement.style.display = "block";
      vehicleModalElement.setAttribute("aria-hidden", "false");
    }
  }

  document.querySelectorAll(".car-card").forEach(function (card) {
    const imageButton = card.querySelector(".card-image");
    if (!imageButton) return;

    imageButton.addEventListener("click", function () {
      openVehicleModal(card);
    });
    imageButton.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openVehicleModal(card);
      }
    });
  });

  const carouselElement = document.getElementById("jdmCarousel");
  if (!carouselElement) return;

  const items = Array.from(carouselElement.querySelectorAll(".carousel-item"));
  const indicators = Array.from(carouselElement.querySelectorAll(".carousel-indicators [data-bs-slide-to]"));
  const previousButton = carouselElement.querySelector(".carousel-control-prev");
  const nextButton = carouselElement.querySelector(".carousel-control-next");
  const autoplayToggle = carouselElement.querySelector(".carousel-autoplay-toggle");
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const hasAutoplayToggle = Boolean(autoplayToggle);
  const carousel = window.bootstrap && window.bootstrap.Carousel
    ? window.bootstrap.Carousel.getOrCreateInstance(carouselElement, {
        interval: 6000,
        ride: hasAutoplayToggle ? false : "carousel",
        pause: hasAutoplayToggle ? "hover" : false,
        wrap: true,
        touch: true
      })
    : null;
  let currentIndex = Math.max(0, items.findIndex(function (item) {
    return item.classList.contains("active");
  }));
  let autoplayEnabled = hasAutoplayToggle ? !motionPreference.matches : true;
  let fallbackTimer = null;
  let fallbackHoverPaused = false;

  function showSlide(index) {
    currentIndex = (index + items.length) % items.length;

    items.forEach(function (item, itemIndex) {
      item.classList.toggle("active", itemIndex === currentIndex);
    });

    indicators.forEach(function (indicator, indicatorIndex) {
      indicator.classList.toggle("active", indicatorIndex === currentIndex);
      indicator.setAttribute("aria-current", indicatorIndex === currentIndex ? "true" : "false");
    });
  }

  function updateAutoplay() {
    if (autoplayToggle) {
      autoplayToggle.hidden = false;
      autoplayToggle.textContent = autoplayEnabled ? "Pausar" : "Reanudar";
      autoplayToggle.setAttribute(
        "aria-label",
        autoplayEnabled ? "Pausar reproducción automática" : "Reanudar reproducción automática"
      );
    }

    if (carousel) {
      if (autoplayEnabled) {
        carousel.cycle();
      } else {
        carousel.pause();
      }
      return;
    }

    if (fallbackTimer !== null) {
      window.clearInterval(fallbackTimer);
      fallbackTimer = null;
    }

    if (autoplayEnabled && !fallbackHoverPaused) {
      fallbackTimer = window.setInterval(function () {
        showSlide(currentIndex + 1);
      }, 6000);
    }
  }

  if (autoplayToggle) {
    autoplayToggle.addEventListener("click", function () {
      autoplayEnabled = !autoplayEnabled;
      updateAutoplay();
    });

    carouselElement.addEventListener("focusin", function (event) {
      if (autoplayEnabled && !autoplayToggle.contains(event.target)) {
        autoplayEnabled = false;
        updateAutoplay();
      }
    });
  }

  if (!carousel) {
    carouselElement.addEventListener("mouseenter", function () {
      fallbackHoverPaused = true;
      updateAutoplay();
    });

    carouselElement.addEventListener("mouseleave", function () {
      fallbackHoverPaused = false;
      updateAutoplay();
    });
  }

  motionPreference.addEventListener("change", function (event) {
    if (autoplayToggle && event.matches && autoplayEnabled) {
      autoplayEnabled = false;
      updateAutoplay();
    }
  });

  updateAutoplay();
  if (carousel) return;

  indicators.forEach(function (indicator) {
    indicator.addEventListener("click", function () {
      showSlide(Number(indicator.dataset.bsSlideTo));
    });
  });

  previousButton.addEventListener("click", function () {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener("click", function () {
    showSlide(currentIndex + 1);
  });
});
