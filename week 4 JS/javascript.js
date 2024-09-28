document.getElementById('registrationForm').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent form submission

   
   document.getElementById('email-error').textContent = '';
   document.getElementById('password-error').textContent = '';
   document.getElementById('confirm-password-error').textContent = '';
   document.getElementById('age-error').textContent = '';
   document.getElementById('gender-error').textContent = '';
   document.getElementById('country-error').textContent = '';
   document.getElementById('terms-error').textContent = '';
   document.getElementById('form-error').textContent = '';

   const email = document.getElementById('email').value.trim();
   const password = document.getElementById('password').value.trim();
   const confirmPassword = document.getElementById('confirmPassword').value.trim();
   const age = document.getElementById('age').value.trim();
   const gender = document.querySelector('input[name="gender"]:checked');
   const country = document.getElementById('country').value;
   const terms = document.getElementById('terms').checked;

  
   let isValid = true;

  
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailPattern.test(email)) {
       isValid = false;
       document.getElementById('email-error').textContent = 'Please enter a valid email address.';
   }

  
   if (password.length < 8) {
       isValid = false;
       document.getElementById('password-error').textContent = 'Password must be at least 8 characters long.';
   }


   if (password !== confirmPassword) {
       isValid = false;
       document.getElementById('confirm-password-error').textContent = 'Passwords do not match.';
   }

   if (isNaN(age) || age < 18 || age > 100) {
       isValid = false;
       document.getElementById('age-error').textContent = 'Age must be a valid number between 18 and 100.';
   }

   if (!gender) {
       isValid = false;
       document.getElementById('gender-error').textContent = 'Please select your gender.';
   }


   if (country === '') {
       isValid = false;
       document.getElementById('country-error').textContent = 'Please select your country.';
   }

   if (!terms) {
       isValid = false;
       document.getElementById('terms-error').textContent = 'You must agree to the terms and conditions.';
   }

   if (isValid) {
       alert('Form submitted successfully!');
       this.submit();
   }
});