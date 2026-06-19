(function () {
  // 1. Configure Tailwind CSS Play CDN before loading
  window.tailwind = {
    config: {
      corePlugins: {
        preflight: false, // Prevents Tailwind from resetting existing Bootstrap styling
      }
    }
  };

  // 2. Dynamically load Tailwind CSS CDN
  if (!document.getElementById('tailwind-cdn')) {
    const tailwindScript = document.createElement('script');
    tailwindScript.id = 'tailwind-cdn';
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwindScript);
  }

  // 3. Define the HTML for the Header & Nav
  const headerHTML = `
    <!-- Custom CSS for dropdowns and animations -->
    <style>
      .desktop-nav-item:hover > .desktop-dropdown {
        opacity: 1 !important;
        visibility: visible !important;
        transform: translateY(0) !important;
      }
      .desktop-submenu-item:hover > .desktop-submenu {
        opacity: 1 !important;
        visibility: visible !important;
        transform: translateX(0) !important;
      }
      @keyframes pulse-red {
        0%, 100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(232, 25, 44, 0.7);
        }
        50% {
          transform: scale(1.04);
          box-shadow: 0 0 0 8px rgba(232, 25, 44, 0);
        }
      }
      .animate-pulse-red {
        animation: pulse-red 2s infinite;
      }
    </style>

    <div class="relative w-full z-50 font-sans">
      <!-- Top Marquee Banner -->
      <div class="bg-[#080d1a] text-[#c8d4ee] py-1.5 px-4 text-xs md:text-sm border-b border-slate-900">
        <div class="max-w-7xl mx-auto flex items-center">
          <marquee class="font-medium" behavior="scroll" direction="left" onmousedown="this.stop();" onmouseup="this.start();">
            Criticare ICCU MultiSpeciality & Trauma Centre. The centre is the BIGGEST hospital in AIROLI that provides you with 1-stop all facilities at an affordable cost between THANE and VASHI with all the modern facilities.
          </marquee>
        </div>
      </div>

      <!-- Desktop Header (1024px and up) -->
      <header class="hidden lg:block bg-[#0d1321] text-white shadow-md">
        <!-- Main Top Bar: Logo Left, Contacts Right -->
        <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <!-- LEFT BOX: Logo on Left Side with white background wrapper for brand visibility -->
          <div class="flex items-center justify-center bg-white p-2.5 rounded-lg shadow-md shrink-0">
            <a href="index.php.html" class="block no-underline">
              <img src="images/logo1.png" alt="Criticare Hospital" class="h-16 w-auto object-contain max-w-[180px]">
            </a>
          </div>

          <!-- RIGHT BOX: Info & Contact Details -->
          <div class="flex flex-col items-end space-y-2.5">
            <!-- Contact Row -->
            <div class="flex items-center space-x-6 text-sm">
              <a href="tel:02227792706" class="flex items-center text-slate-300 hover:text-[#e8192c] transition duration-200 font-semibold no-underline">
                <i class="fa fa-phone text-[#5bc8ff] mr-2"></i>
                022-2779 2706 / 2779 4705
              </a>
              <a href="mailto:criticareairoli@gmail.com" class="flex items-center text-slate-300 hover:text-[#e8192c] transition duration-200 font-semibold no-underline">
                <i class="fa fa-envelope text-[#5bc8ff] mr-2"></i>
                criticareairoli@gmail.com
              </a>
            </div>
            
            <!-- Buttons Row -->
            <div class="flex items-center space-x-4">
              <a href="tel:8080926999" class="bg-[#e8192c] hover:bg-[#cc0e1e] text-white text-xs font-bold px-5 py-2.5 rounded-full transition duration-300 shadow-md flex items-center space-x-2 animate-pulse-red no-underline">
                <i class="fa fa-phone-alt mr-1"></i>
                <span>8080926999</span>
              </a>
              <a href="contact.php.html" class="bg-[#243354] hover:bg-[#e8192c] text-white text-xs font-bold px-5 py-2.5 rounded-full transition duration-300 shadow-md border border-transparent no-underline">
                Book Appointment
              </a>
            </div>
          </div>

        </div>

        <!-- Navigation Bar Row (bg red) -->
        <div class="bg-[#e8192c] shadow-md border-t border-red-700/30">
          <div class="max-w-7xl mx-auto px-6">
            <nav>
              <ul class="flex items-center space-x-1 list-none p-0 m-0">
                
                <!-- Home -->
                <li>
                  <a href="index.php.html" class="nav-link px-4 py-3.5 text-sm font-bold text-white hover:bg-black/15 transition duration-150 block no-underline">Home</a>
                </li>
                
                <!-- About Us Dropdown -->
                <li class="relative desktop-nav-item">
                  <button class="nav-link flex items-center space-x-1 px-4 py-3.5 text-sm font-bold text-white hover:bg-black/15 transition duration-150 bg-transparent border-0 cursor-pointer">
                    <span>About Us</span>
                    <i class="fa fa-chevron-down text-[10px] opacity-70 ml-1"></i>
                  </button>
                  <ul class="absolute left-0 mt-0 w-52 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-y-2 transition-all duration-200 z-50 desktop-dropdown list-none m-0">
                    <li><a href="about-us.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">About Criticare</a></li>
                    <li class="relative desktop-submenu-item">
                      <div class="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold cursor-pointer transition">
                        <span>Directors</span>
                        <i class="fa fa-chevron-right text-[10px] opacity-70"></i>
                      </div>
                      <ul class="absolute left-full top-0 mt-0 w-52 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-x-2 transition-all duration-200 z-50 desktop-submenu list-none m-0">
                        <li><a href="dr-sundeep.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Dr. Sundeep G. Mestri</a></li>
                        <li><a href="dr-sameer.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Dr. Sameer Dumir</a></li>
                      </ul>
                    </li>
                    <li><a href="vision-and-mission.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Vision & Mission</a></li>
                    <li><a href="index.html#!" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Awards & Achievements</a></li>
                  </ul>
                </li>
                
                <!-- Services Dropdown -->
                <li class="relative desktop-nav-item">
                  <button class="nav-link flex items-center space-x-1 px-4 py-3.5 text-sm font-bold text-white hover:bg-black/15 transition duration-150 bg-transparent border-0 cursor-pointer">
                    <span>Services</span>
                    <i class="fa fa-chevron-down text-[10px] opacity-70 ml-1"></i>
                  </button>
                  <ul class="absolute left-0 mt-0 w-64 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-y-2 transition-all duration-200 z-50 desktop-dropdown list-none m-0">
                    <li class="relative desktop-submenu-item">
                      <div class="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold cursor-pointer transition">
                        <span>Clinical Services</span>
                        <i class="fa fa-chevron-right text-[10px] opacity-70"></i>
                      </div>
                      <ul class="absolute left-full top-0 mt-0 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-x-2 transition-all duration-200 z-50 desktop-submenu list-none m-0 max-h-96 overflow-y-auto">
                        <li><a href="chest-physician.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Chest Physician</a></li>
                        <li><a href="cardiology.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Cardiology</a></li>
                        <li><a href="anethiology.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Anethiology</a></li>
                        <li><a href="dermatology.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Dermatology</a></li>
                        <li><a href="ent.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">ENT</a></li>
                        <li><a href="general-&-lap-surgery.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">General & Lap Surgery</a></li>
                        <li><a href="gernral-medicine.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">General Medicine</a></li>
                        <li><a href="gynea-&-obs.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Gynea. & Obs</a></li>
                        <li><a href="orthopaedic.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Orthopaedic</a></li>
                        <li><a href="psychiatry.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Psychiatry</a></li>
                        <li><a href="urology.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Urology</a></li>
                        <li><a href="24-hrs-clinical-care.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">24 hrs. Clinical Care</a></li>
                      </ul>
                    </li>
                    <li class="relative desktop-submenu-item">
                      <div class="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold cursor-pointer transition">
                        <span>Professions Allied</span>
                        <i class="fa fa-chevron-right text-[10px] opacity-70"></i>
                      </div>
                      <ul class="absolute left-full top-0 mt-0 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-x-2 transition-all duration-200 z-50 desktop-submenu list-none m-0">
                        <li><a href="dietetics.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Dietetics</a></li>
                        <li><a href="physiotherapy.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Physiotherapy</a></li>
                        <li><a href="blood-bank.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Blood Bank</a></li>
                        <li><a href="ambulance.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Ambulance</a></li>
                      </ul>
                    </li>
                    <li class="relative desktop-submenu-item">
                      <div class="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold cursor-pointer transition">
                        <span>Diagnostic Services</span>
                        <i class="fa fa-chevron-right text-[10px] opacity-70"></i>
                      </div>
                      <ul class="absolute left-full top-0 mt-0 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-x-2 transition-all duration-200 z-50 desktop-submenu list-none m-0">
                        <li><a href="x-ray.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">X-RAY</a></li>
                        <li><a href="ecg.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">ECG</a></li>
                        <li><a href="lab.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">LAB</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                
                <!-- Our Doctor -->
                <li>
                  <a href="doctors.php.html" class="nav-link px-4 py-3.5 text-sm font-bold text-white hover:bg-black/15 transition duration-150 block no-underline">Our Doctor</a>
                </li>
                
                <!-- Media Dropdown -->
                <li class="relative desktop-nav-item">
                  <button class="nav-link flex items-center space-x-1 px-4 py-3.5 text-sm font-bold text-white hover:bg-black/15 transition duration-150 bg-transparent border-0 cursor-pointer">
                    <span>Media</span>
                    <i class="fa fa-chevron-down text-[10px] opacity-70 ml-1"></i>
                  </button>
                  <ul class="absolute left-0 mt-0 w-48 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-y-2 transition-all duration-200 z-50 desktop-dropdown list-none m-0">
                    <li><a href="images3.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Images</a></li>
                    <li><a href="video.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Video</a></li>
                  </ul>
                </li>
                
                <!-- Testimonials Dropdown -->
                <li class="relative desktop-nav-item">
                  <button class="nav-link flex items-center space-x-1 px-4 py-3.5 text-sm font-bold text-white hover:bg-black/15 transition duration-150 bg-transparent border-0 cursor-pointer">
                    <span>Testimonials</span>
                    <i class="fa fa-chevron-down text-[10px] opacity-70 ml-1"></i>
                  </button>
                  <ul class="absolute left-0 mt-0 w-52 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-y-2 transition-all duration-200 z-50 desktop-dropdown list-none m-0">
                    <li><a href="testimonial.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Testimonials</a></li>
                    <li><a href="index.html#!" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Video Testimonials</a></li>
                  </ul>
                </li>

                <li>
  <a href="esic.html" class="nav-link px-4 py-3.5 text-sm font-bold text-white hover:bg-black/15 transition duration-150 block no-underline">
    ESIC
  </a>
</li>



<li>
  <a href="mjpjay.html" class="nav-link px-4 py-3.5 text-sm font-bold text-white hover:bg-black/15 transition duration-150 block no-underline">
    MJPJAY
  </a>
</li>
                
                <!-- Contact Us -->
                <li>
                  <a href="contact.php.html" class="nav-link px-4 py-3.5 text-sm font-bold text-white hover:bg-black/15 transition duration-150 block no-underline">Contact Us</a>
                </li>

              </ul>
            </nav>
          </div>
        </div>
      </header>

      <!-- Sticky Desktop Header (Shown on Scroll) -->
      <div id="sticky-header" class="hidden lg:block fixed top-0 left-0 w-full bg-[#e8192c] shadow-lg transform -translate-y-full transition-transform duration-300 z-[9999]">
        <div class="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          
          <!-- LEFT BOX: Sticky Logo (White background wrapper) -->
          <div class="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
            <a href="index.php.html" class="block no-underline">
              <img src="images/logo1.png" alt="Criticare Hospital" class="h-10 w-auto object-contain">
            </a>
          </div>

          <!-- RIGHT BOX: Nav links (White text on Red bg) -->
          <div class="flex items-center">
            <nav>
              <ul class="flex items-center space-x-1 list-none p-0 m-0">
                <!-- Home -->
                <li>
                  <a href="index.php.html" class="nav-link-sticky px-3 py-2 text-sm font-bold text-white hover:bg-black/10 transition duration-150 rounded-md no-underline">Home</a>
                </li>
                <!-- About Us Dropdown -->
                <li class="relative desktop-nav-item">
                  <button class="nav-link-sticky flex items-center space-x-1 px-3 py-2 text-sm font-bold text-white hover:bg-black/10 transition duration-150 rounded-md bg-transparent border-0 cursor-pointer">
                    <span>About Us</span>
                    <i class="fa fa-chevron-down text-[10px] opacity-70 ml-1"></i>
                  </button>
                  <ul class="absolute left-0 mt-0 w-52 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-y-2 transition-all duration-200 z-50 desktop-dropdown list-none m-0">
                    <li><a href="about-us.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">About Criticare</a></li>
                    <li class="relative desktop-submenu-item">
                      <div class="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold cursor-pointer transition">
                        <span>Directors</span>
                        <i class="fa fa-chevron-right text-[10px] opacity-70"></i>
                      </div>
                      <ul class="absolute left-full top-0 mt-0 w-52 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-x-2 transition-all duration-200 z-50 desktop-submenu list-none m-0">
                        <li><a href="dr-sundeep.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Dr. Sundeep G. Mestri</a></li>
                        <li><a href="dr-sameer.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Dr. Sameer Dumir</a></li>
                      </ul>
                    </li>
                    <li><a href="vision-and-mission.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Vision & Mission</a></li>
                    <li><a href="index.html#!" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Awards & Achievements</a></li>
                  </ul>
                </li>
                <!-- Services Dropdown -->
                <li class="relative desktop-nav-item">
                  <button class="nav-link-sticky flex items-center space-x-1 px-3 py-2 text-sm font-bold text-white hover:bg-black/10 transition duration-150 rounded-md bg-transparent border-0 cursor-pointer">
                    <span>Services</span>
                    <i class="fa fa-chevron-down text-[10px] opacity-70 ml-1"></i>
                  </button>
                  <ul class="absolute left-0 mt-0 w-64 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-y-2 transition-all duration-200 z-50 desktop-dropdown list-none m-0">
                    <li class="relative desktop-submenu-item">
                      <div class="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold cursor-pointer transition">
                        <span>Clinical Services</span>
                        <i class="fa fa-chevron-right text-[10px] opacity-70"></i>
                      </div>
                      <ul class="absolute left-full top-0 mt-0 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-x-2 transition-all duration-200 z-50 desktop-submenu list-none m-0 max-h-96 overflow-y-auto">
                        <li><a href="chest-physician.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Chest Physician</a></li>
                        <li><a href="cardiology.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Cardiology</a></li>
                        <li><a href="anethiology.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Anethiology</a></li>
                        <li><a href="dermatology.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Dermatology</a></li>
                        <li><a href="ent.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">ENT</a></li>
                        <li><a href="general-&-lap-surgery.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">General & Lap Surgery</a></li>
                        <li><a href="gernral-medicine.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">General Medicine</a></li>
                        <li><a href="gynea-&-obs.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Gynea. & Obs</a></li>
                        <li><a href="orthopaedic.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Orthopaedic</a></li>
                        <li><a href="psychiatry.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Psychiatry</a></li>
                        <li><a href="urology.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Urology</a></li>
                        <li><a href="24-hrs-clinical-care.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">24 hrs. Clinical Care</a></li>
                      </ul>
                    </li>
                    <li class="relative desktop-submenu-item">
                      <div class="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold cursor-pointer transition">
                        <span>Professions Allied</span>
                        <i class="fa fa-chevron-right text-[10px] opacity-70"></i>
                      </div>
                      <ul class="absolute left-full top-0 mt-0 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-x-2 transition-all duration-200 z-50 desktop-submenu list-none m-0">
                        <li><a href="dietetics.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Dietetics</a></li>
                        <li><a href="physiotherapy.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Physiotherapy</a></li>
                        <li><a href="blood-bank.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Blood Bank</a></li>
                        <li><a href="ambulance.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Ambulance</a></li>
                      </ul>
                    </li>
                    <li class="relative desktop-submenu-item">
                      <div class="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold cursor-pointer transition">
                        <span>Diagnostic Services</span>
                        <i class="fa fa-chevron-right text-[10px] opacity-70"></i>
                      </div>
                      <ul class="absolute left-full top-0 mt-0 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-x-2 transition-all duration-200 z-50 desktop-submenu list-none m-0">
                        <li><a href="x-ray.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">X-RAY</a></li>
                        <li><a href="ecg.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">ECG</a></li>
                        <li><a href="lab.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">LAB</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <!-- Our Doctor -->
                <li>
                  <a href="doctors.php.html" class="nav-link-sticky px-3 py-2 text-sm font-bold text-white hover:bg-black/10 transition duration-150 rounded-md no-underline">Our Doctor</a>
                </li>
                <!-- Media Dropdown -->
                <li class="relative desktop-nav-item">
                  <button class="nav-link-sticky flex items-center space-x-1 px-3 py-2 text-sm font-bold text-white hover:bg-black/10 transition duration-150 rounded-md bg-transparent border-0 cursor-pointer">
                    <span>Media</span>
                    <i class="fa fa-chevron-down text-[10px] opacity-70 ml-1"></i>
                  </button>
                  <ul class="absolute left-0 mt-0 w-48 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-y-2 transition-all duration-200 z-50 desktop-dropdown list-none m-0">
                    <li><a href="images3.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Images</a></li>
                    <li><a href="video.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Video</a></li>
                  </ul>
                </li>
                <!-- Testimonials Dropdown -->
                <li class="relative desktop-nav-item">
                  <button class="nav-link-sticky flex items-center space-x-1 px-3 py-2 text-sm font-bold text-white hover:bg-black/10 transition duration-150 rounded-md bg-transparent border-0 cursor-pointer">
                    <span>Testimonials</span>
                    <i class="fa fa-chevron-down text-[10px] opacity-70 ml-1"></i>
                  </button>
                  <ul class="absolute left-0 mt-0 w-52 bg-white border border-gray-100 rounded-lg shadow-lg py-2 opacity-0 invisible translate-y-2 transition-all duration-200 z-50 desktop-dropdown list-none m-0">
                    <li><a href="testimonial.php.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Testimonials</a></li>
                    <li><a href="index.html#!" class="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-[#e8192c] font-semibold transition no-underline">Video Testimonials</a></li>
                  </ul>
                </li>

                <li>
  <a href="esic.html" class="nav-link-sticky px-3 py-2 text-sm font-bold text-white hover:bg-black/10 transition duration-150 rounded-md no-underline">
    ESIC
  </a>
</li>



<li>
  <a href="mjpjay.html" class="nav-link-sticky px-3 py-2 text-sm font-bold text-white hover:bg-black/10 transition duration-150 rounded-md no-underline">
    MJPJAY
  </a>
</li>
                <!-- Contact Us -->
                <li>
                  <a href="contact.php.html" class="nav-link-sticky px-3 py-2 text-sm font-bold text-white hover:bg-black/10 transition duration-150 rounded-md no-underline">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>

      <!-- Mobile Header (hidden on desktop, visible on mobile) -->
      <div class="lg:hidden bg-[#0d1321] shadow-md border-b-4 border-[#e8192c] sticky top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-2">
        <!-- Left: Logo Box -->
        <div class="bg-white px-3 py-1 rounded-md shadow-sm border border-gray-100 flex items-center justify-center">
          <a href="index.php.html" class="block no-underline">
            <img src="images/logo1.png" alt="Criticare Hospital" class="h-12 w-auto object-contain">
          </a>
        </div>

        <!-- Right: Hamburger Menu Button -->
        <button id="mobile-hamburger-btn" class="text-white hover:text-[#e8192c] focus:outline-none p-2 border border-slate-700 rounded-lg transition duration-200 bg-transparent cursor-pointer" aria-label="Open Menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-menu-drawer" class="lg:hidden fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-[#0d1321] z-[99999] transform -translate-x-full transition-transform duration-300 ease-in-out flex flex-col shadow-2xl">
        <!-- Drawer Header -->
        <div class="bg-[#e8192c] text-white flex items-center justify-between px-5 py-4 shrink-0">
          <span class="text-lg font-bold tracking-wider uppercase">Menu</span>
          <button id="mobile-drawer-close-btn" class="bg-white/20 hover:bg-white/30 text-white rounded-full p-1.5 focus:outline-none transition duration-200 border-0 cursor-pointer" aria-label="Close Menu">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <!-- Drawer Body -->
        <div class="flex-grow overflow-y-auto py-3 px-2">
          <ul class="space-y-1 list-none p-0 m-0">
            
            <!-- Home -->
            <li>
              <a href="index.php.html" class="mobile-nav-link flex items-center space-x-3 text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg font-semibold transition duration-200 no-underline">
                <i class="fa fa-home text-[#e8192c] w-5 text-center"></i>
                <span>Home</span>
              </a>
            </li>
            
            <!-- About Us Collapsible -->
            <li>
              <button class="mobile-collapsible-btn w-full flex items-center justify-between text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg font-semibold transition duration-200 bg-transparent border-0 cursor-pointer text-left">
                <span class="flex items-center space-x-3">
                  <i class="fa fa-info-circle text-[#e8192c] w-5 text-center"></i>
                  <span>About Us</span>
                </span>
                <i class="fa fa-chevron-down text-xs transition-transform duration-200"></i>
              </button>
              <ul class="mobile-submenu-list hidden pl-10 pr-2 py-1 space-y-1 bg-black/20 rounded-lg mt-1 list-none m-0">
                <li><a href="about-us.php.html" class="block py-2 text-sm text-slate-400 hover:text-white transition font-medium no-underline">About Criticare</a></li>
                <li>
                  <button class="mobile-subcollapsible-btn w-full flex items-center justify-between py-2 text-sm text-slate-400 hover:text-white transition font-medium text-left bg-transparent border-0 cursor-pointer">
                    <span>Directors</span>
                    <i class="fa fa-chevron-down text-[10px] transition-transform duration-200"></i>
                  </button>
                  <ul class="mobile-subsubmenu-list hidden pl-4 py-1 space-y-1 bg-black/20 rounded-md list-none m-0">
                    <li><a href="dr-sundeep.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">Dr. Sundeep G. Mestri</a></li>
                    <li><a href="dr-sameer.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">Dr. Sameer Dumir</a></li>
                  </ul>
                </li>
                <li><a href="vision-and-mission.php.html" class="block py-2 text-sm text-slate-400 hover:text-white transition font-medium no-underline">Vision & Mission</a></li>
                <li><a href="index.html#!" class="block py-2 text-sm text-slate-400 hover:text-white transition font-medium no-underline">Awards & Achievements</a></li>
              </ul>
            </li>

            <!-- Services Collapsible -->
            <li>
              <button class="mobile-collapsible-btn w-full flex items-center justify-between text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg font-semibold transition duration-200 bg-transparent border-0 cursor-pointer text-left">
                <span class="flex items-center space-x-3">
                  <i class="fa fa-stethoscope text-[#e8192c] w-5 text-center"></i>
                  <span>Services</span>
                </span>
                <i class="fa fa-chevron-down text-xs transition-transform duration-200"></i>
              </button>
              <ul class="mobile-submenu-list hidden pl-10 pr-2 py-1 space-y-1 bg-black/20 rounded-lg mt-1 list-none m-0">
                
                <!-- Clinical Services -->
                <li>
                  <button class="mobile-subcollapsible-btn w-full flex items-center justify-between py-2 text-sm text-slate-400 hover:text-white transition font-medium text-left bg-transparent border-0 cursor-pointer">
                    <span>Clinical Services</span>
                    <i class="fa fa-chevron-down text-[10px] transition-transform duration-200"></i>
                  </button>
                  <ul class="mobile-subsubmenu-list hidden pl-4 py-1 space-y-1 bg-black/20 rounded-md max-h-60 overflow-y-auto list-none m-0">
                    <li><a href="chest-physician.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">Chest Physician</a></li>
                    <li><a href="cardiology.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">Cardiology</a></li>
                    <li><a href="anethiology.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">Anethiology</a></li>
                    <li><a href="dermatology.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">Dermatology</a></li>
                    <li><a href="ent.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">ENT</a></li>
                    <li><a href="general-&-lap-surgery.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">General & Lap Surgery</a></li>
                    <li><a href="gernral-medicine.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">General Medicine</a></li>
                    <li><a href="gynea-&-obs.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">Gynea. & Obs</a></li>
                    <li><a href="orthopaedic.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">Orthopaedic</a></li>
                    <li><a href="psychiatry.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">Psychiatry</a></li>
                    <li><a href="urology.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">Urology</a></li>
                    <li><a href="24-hrs-clinical-care.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">24 hrs. Clinical Care</a></li>
                  </ul>
                </li>

                <!-- Professions Allied -->
                <li>
                  <button class="mobile-subcollapsible-btn w-full flex items-center justify-between py-2 text-sm text-slate-400 hover:text-white transition font-medium text-left bg-transparent border-0 cursor-pointer">
                    <span>Professions Allied</span>
                    <i class="fa fa-chevron-down text-[10px] transition-transform duration-200"></i>
                  </button>
                  <ul class="mobile-subsubmenu-list hidden pl-4 py-1 space-y-1 bg-black/20 rounded-md list-none m-0">
                    <li><a href="dietetics.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">Dietetics</a></li>
                    <li><a href="physiotherapy.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">Physiotherapy</a></li>
                    <li><a href="blood-bank.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">Blood Bank</a></li>
                    <li><a href="ambulance.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">Ambulance</a></li>
                  </ul>
                </li>

                <!-- Diagnostic Services -->
                <li>
                  <button class="mobile-subcollapsible-btn w-full flex items-center justify-between py-2 text-sm text-slate-400 hover:text-white transition font-medium text-left bg-transparent border-0 cursor-pointer">
                    <span>Diagnostic Services</span>
                    <i class="fa fa-chevron-down text-[10px] transition-transform duration-200"></i>
                  </button>
                  <ul class="mobile-subsubmenu-list hidden pl-4 py-1 space-y-1 bg-black/20 rounded-md list-none m-0">
                    <li><a href="x-ray.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">X-RAY</a></li>
                    <li><a href="ecg.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">ECG</a></li>
                    <li><a href="lab.php.html" class="block py-1.5 text-xs text-slate-400 hover:text-white transition no-underline">LAB</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <!-- Our Doctor -->
            <li>
              <a href="doctors.php.html" class="mobile-nav-link flex items-center space-x-3 text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg font-semibold transition duration-200 no-underline">
                <i class="fa fa-user-md text-[#e8192c] w-5 text-center"></i>
                <span>Our Doctor</span>
              </a>
            </li>

            <!-- Media Collapsible -->
            <li>
              <button class="mobile-collapsible-btn w-full flex items-center justify-between text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg font-semibold transition duration-200 bg-transparent border-0 cursor-pointer text-left">
                <span class="flex items-center space-x-3">
                  <i class="fa fa-image text-[#e8192c] w-5 text-center"></i>
                  <span>Media</span>
                </span>
                <i class="fa fa-chevron-down text-xs transition-transform duration-200"></i>
              </button>
              <ul class="mobile-submenu-list hidden pl-10 pr-2 py-1 space-y-1 bg-black/20 rounded-lg mt-1 list-none m-0">
                <li><a href="images3.php.html" class="block py-2 text-sm text-slate-400 hover:text-white transition font-medium no-underline">Images</a></li>
                <li><a href="video.php.html" class="block py-2 text-sm text-slate-400 hover:text-white transition font-medium no-underline">Video</a></li>
              </ul>
            </li>

            <!-- Testimonials Collapsible -->
            <li>
              <button class="mobile-collapsible-btn w-full flex items-center justify-between text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg font-semibold transition duration-200 bg-transparent border-0 cursor-pointer text-left">
                <span class="flex items-center space-x-3">
                  <i class="fa fa-comments text-[#e8192c] w-5 text-center"></i>
                  <span>Testimonials</span>
                </span>
                <i class="fa fa-chevron-down text-xs transition-transform duration-200"></i>
              </button>
              <ul class="mobile-submenu-list hidden pl-10 pr-2 py-1 space-y-1 bg-black/20 rounded-lg mt-1 list-none m-0">
                <li><a href="testimonial.php.html" class="block py-2 text-sm text-slate-400 hover:text-white transition font-medium no-underline">Testimonials</a></li>
                <li><a href="index.html#!" class="block py-2 text-sm text-slate-400 hover:text-white transition font-medium no-underline">Video Testimonials</a></li>
              </ul>
            </li>

            <li>
  <a href="./esic.html" class="mobile-nav-link flex items-center space-x-3 text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg font-semibold transition duration-200 no-underline">
    <i class="fa fa-hospital text-[#e8192c] w-5 text-center"></i>
    <span>ESIC</span>
  </a>
</li>




<li>
  <a href="mjpjay.html" class="mobile-nav-link flex items-center space-x-3 text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg font-semibold transition duration-200 no-underline">
    <i class="fa fa-heartbeat text-[#e8192c] w-5 text-center"></i>
    <span>MJPJAY</span>
  </a>
</li>
            <!-- Contact Us -->
            <li>
              <a href="contact.php.html" class="mobile-nav-link flex items-center space-x-3 text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg font-semibold transition duration-200 no-underline">
                <i class="fa fa-envelope text-[#e8192c] w-5 text-center"></i>
                <span>Contact Us</span>
              </a>
            </li>

          </ul>
        </div>

        <!-- Drawer Footer (CTA Contacts) -->
        <div class="p-4 bg-black/30 border-t border-white/5 flex flex-col space-y-2 shrink-0">
          <a href="tel:8080926999" class="bg-[#e8192c] hover:bg-[#cc0e1e] text-white text-center py-2.5 rounded-lg text-sm font-bold transition duration-200 flex items-center justify-center gap-2 shadow-md no-underline">
            <i class="fa fa-phone-alt"></i>
            <span>Call: 8080926999</span>
          </a>
          <a href="contact.php.html" class="bg-white/10 hover:bg-white/20 text-white text-center py-2.5 rounded-lg text-sm font-bold transition duration-200 flex items-center justify-center gap-2 border border-white/10 no-underline">
            <span>Book Appointment</span>
          </a>
        </div>
      </div>

      <!-- Mobile Drawer Overlay -->
      <div id="mobile-menu-overlay" class="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[99998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
    </div>
  `;

  // 4. Initialize navigation injection
  function initNav() {
    const navContainer = document.querySelector('.nav');
    if (!navContainer) return;

    // Inject HTML
    navContainer.innerHTML = headerHTML;

    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop() || 'index.php.html';
    const links = navContainer.querySelectorAll('a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href === currentPath) {
        if (link.classList.contains('nav-link') || link.classList.contains('nav-link-sticky')) {
          link.classList.add('bg-black/20');
        } else if (link.closest('.desktop-dropdown') || link.closest('.desktop-submenu')) {
          link.classList.add('text-[#e8192c]', 'bg-red-50/50');
        } else if (link.classList.contains('mobile-nav-link') || link.closest('.mobile-submenu-list')) {
          link.classList.add('text-white', 'bg-white/10');
        }
      }
    });

    // Mobile Drawer Setup
    const hamburgerBtn = document.getElementById('mobile-hamburger-btn');
    const closeBtn = document.getElementById('mobile-drawer-close-btn');
    const drawer = document.getElementById('mobile-menu-drawer');
    const overlay = document.getElementById('mobile-menu-overlay');

    function openDrawer() {
      if (drawer) drawer.classList.remove('-translate-x-full');
      if (overlay) overlay.classList.remove('opacity-0', 'pointer-events-none');
    }

    function closeDrawer() {
      if (drawer) drawer.classList.add('-translate-x-full');
      if (overlay) overlay.classList.add('opacity-0', 'pointer-events-none');
    }

    if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    // Collapsible Mobile Submenus
    const collapsibles = navContainer.querySelectorAll('.mobile-collapsible-btn, .mobile-subcollapsible-btn');
    collapsibles.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const nextEl = btn.nextElementSibling;
        const icon = btn.querySelector('i.fa-chevron-down');
        if (nextEl) {
          nextEl.classList.toggle('hidden');
          if (icon) {
            icon.classList.toggle('rotate-180');
          }
        }
      });
    });

    // Sticky Header visibility on scroll
    const stickyHeader = document.getElementById('sticky-header');
    if (stickyHeader) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          stickyHeader.classList.remove('-translate-y-full');
        } else {
          stickyHeader.classList.add('-translate-y-full');
        }
      }, { passive: true });
    }
  }

  // 5. Run injection when ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
