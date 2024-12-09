  // Validation functions using arrow syntax
  const isValidName = (name) => /^[A-Za-z]{2,}$/.test(name);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Helper function to show error
  const showError = (elementId) => {
      document.getElementById(elementId).classList.add('visible');
  };

  // Helper function to hide error
  const hideError = (elementId) => {
      document.getElementById(elementId).classList.remove('visible');
  };

  // Form submission handler
  document.getElementById('subscriptionForm').addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const errors = [];

      // Get form values
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const package = document.getElementById('package').value;
      const subscribe = document.getElementById('subscribe').checked;

      // Validate First Name
      if (!isValidName(firstName)) {
          showError('firstNameError');
          isValid = false;
          errors.push('First name must contain at least 2 letters');
      } else {
          hideError('firstNameError');
      }

      // Validate Last Name
      if (!isValidName(lastName)) {
          showError('lastNameError');
          isValid = false;
          errors.push('Last name must contain at least 2 letters');
      } else {
          hideError('lastNameError');
      }

      // Validate Email
      if (email && !isValidEmail(email)) {
          showError('emailError');
          isValid = false;
          errors.push('Please enter a valid email address');
      } else {
          hideError('emailError');
      }

      // Validate Package
      if (!package) {
          showError('packageError');
          isValid = false;
          errors.push('Please select a package');
      } else {
          hideError('packageError');
      }

      // Validate Subscribe
      if (!subscribe) {
          showError('subscribeError');
          isValid = false;
          errors.push('Please confirm your subscription');
      } else {
          hideError('subscribeError');
      }

      // If form is valid, display summary
      if (isValid) {
          const form = document.getElementById('subscriptionForm');
          const summary = document.getElementById('summary');
          
          summary.innerHTML = `
              Thank you, ${firstName} ${lastName}, for subscribing!
              ${email ? `Your email ${email} is` : 'You are'} registered with our ${package} package.
          `;
          
          summary.style.display = 'block';
          form.style.display = 'none';
      }
  });

  // Inputs validation
  const inputs = ['firstName', 'lastName', 'email', 'package'];
  inputs.forEach(inputId => {
      document.getElementById(inputId).addEventListener('input', (e) => {
          const value = e.target.value.trim();
          
          switch(inputId) {
              case 'firstName':
              case 'lastName':
                  if (value && !isValidName(value)) {
                      showError(`${inputId}Error`);
                  } else {
                      hideError(`${inputId}Error`);
                  }
                  break;
              case 'email':
                  if (value && !isValidEmail(value)) {
                      showError('emailError');
                  } else {
                      hideError('emailError');
                  }
                  break;
              case 'package':
                  if (!value) {
                      showError('packageError');
                  } else {
                      hideError('packageError');
                  }
                  break;
          }
      });
  });

  // Subscribe checkbox validation
  document.getElementById('subscribe').addEventListener('change', (e) => {
      if (!e.target.checked) {
          showError('subscribeError');
      } else {
          hideError('subscribeError');
      }
  });