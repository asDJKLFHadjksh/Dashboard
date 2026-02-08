const togglePasswordVisibility = (toggleButton, input) => {
  toggleButton.addEventListener("click", () => {
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    toggleButton.classList.toggle("is-visible", isPassword);
    toggleButton.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
    toggleButton.setAttribute("aria-pressed", isPassword);
  });
};

const showAlert = (element, message, type) => {
  element.textContent = message;
  element.classList.add("show", type);
};

const clearAlert = (element) => {
  element.textContent = "";
  element.classList.remove("show", "error", "success");
};

const initLogin = () => {
  const form = document.querySelector("[data-login-form]");
  if (!form) return;

  const usernameInput = form.querySelector("[data-username]");
  const passwordInput = form.querySelector("[data-password]");
  const toggles = form.querySelectorAll("[data-toggle]");
  const alertBox = form.querySelector("[data-alert]");

  toggles.forEach((button) => {
    const target = form.querySelector(button.dataset.target);
    if (target) {
      togglePasswordVisibility(button, target);
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearAlert(alertBox);

    const username = usernameInput.value.trim().toLowerCase();
    const password = passwordInput.value.trim();

    if (username === "admin" && password === "admin123") {
      window.location.href = "admin.html";
      return;
    }

    if (username === "creator" && password === "creator123") {
      window.location.href = "creator.html";
      return;
    }

    if (username === "user" && password === "user123") {
      window.location.href = "profile.html";
      return;
    }

    showAlert(alertBox, "Invalid credentials. Please try again.", "error");
  });
};

const initRegister = () => {
  const form = document.querySelector("[data-register-form]");
  if (!form) return;

  const passwordInput = form.querySelector("[data-password]");
  const confirmInput = form.querySelector("[data-confirm]");
  const toggleButtons = form.querySelectorAll("[data-toggle]");
  const alertBox = form.querySelector("[data-alert]");

  toggleButtons.forEach((button) => {
    const target = form.querySelector(button.dataset.target);
    if (target) {
      togglePasswordVisibility(button, target);
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearAlert(alertBox);

    if (passwordInput.value !== confirmInput.value) {
      showAlert(alertBox, "Passwords do not match. Please try again.", "error");
      return;
    }

    showAlert(alertBox, "Registration successful! You can now log in.", "success");
    form.reset();
  });
};

const initProfile = () => {
  const switchButton = document.querySelector("[data-switch-creator]");
  if (!switchButton) return;

  const alertBox = document.querySelector("[data-alert]");

  switchButton.addEventListener("click", () => {
    showAlert(alertBox, "Studio tools enabled! Head to Studio.", "success");
  });
};

const initSettings = () => {
  const form = document.querySelector("[data-settings-form]");
  if (!form) return;

  const passwordInput = form.querySelector("[data-password]");
  const confirmInput = form.querySelector("[data-confirm]");
  const toggleButtons = form.querySelectorAll("[data-toggle]");
  const alertBox = form.querySelector("[data-alert]");

  toggleButtons.forEach((button) => {
    const target = form.querySelector(button.dataset.target);
    if (target) {
      togglePasswordVisibility(button, target);
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearAlert(alertBox);

    if (passwordInput.value !== confirmInput.value) {
      showAlert(alertBox, "Password confirmation does not match.", "error");
      return;
    }

    showAlert(alertBox, "Account settings updated successfully.", "success");
  });
};

const initToggles = () => {
  document.querySelectorAll("[data-switch]").forEach((switcher) => {
    switcher.addEventListener("click", () => {
      switcher.classList.toggle("active");
    });
  });
};

initLogin();
initRegister();
initProfile();
initSettings();
initToggles();
