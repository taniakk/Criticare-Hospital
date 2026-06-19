let footer = document.querySelector('.footer');

footer.innerHTML = `
<script src="https://cdn.tailwindcss.com"></script>

     <footer class="bg-[#111111] text-white">

            <!-- Top Contact Bar -->
            <div class="border-b border-gray-800">
                <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 px-6 py-8">

                    <div class="flex items-start gap-4 flex-1">
                        <div class="w-14 h-14 bg-white flex items-center justify-center">
                            <i class="fas fa-phone text-red-700 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold">Contact Us</h3>
                            <p class="text-gray-300 text-sm mt-1">
                                022-2779 2706 / 022-2779 4705
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4 flex-1">
                        <div class="w-14 h-14 bg-white flex items-center justify-center">
                            <i class="fas fa-map-marker-alt text-red-700 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold">Address</h3>
                            <p class="text-gray-300 text-sm mt-1 leading-6">
                                2-A, Acharya Vinobha Bhave Rd,
                                Sector 16, Airoli, Navi Mumbai,
                                Maharashtra 400708
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4 flex-1">
                        <div class="w-14 h-14 bg-white flex items-center justify-center">
                            <i class="fas fa-envelope text-red-700 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold">Mail Us</h3>
                            <p class="text-gray-300 text-sm mt-1">criticareairoli@gmail.com</p>
                            <p class="text-gray-300 text-sm">criticaremktg@gmail.com</p>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Main Footer -->
            <div class="max-w-7xl mx-auto">
                <div class="flex flex-col lg:flex-row">

                    <!-- Quick Links -->
                    <div class="flex-1 px-6 py-10">
                        <h3 class="text-2xl font-bold mb-3">Quick Link</h3>

                        <div class="flex items-center mb-8">
                            <div class="w-12 h-[2px] bg-white"></div>
                            <div class="w-2 h-2 bg-white rounded-full ml-2"></div>
                        </div>

                        <ul class="space-y-4 text-sm">
                            <li><a href="index.html" class="hover:text-red-500">+ Home</a></li>
                            <li><a href="about-us.php.html" class="hover:text-red-500">+ About Us</a></li>
                            <li><a href="chest-physician.php.html" class="hover:text-red-500">+ Services</a></li>
                            <li><a href="doctors.php.html" class="hover:text-red-500">+ Our Doctors</a></li>
                            <li><a href="images3.php.html" class="hover:text-red-500">+ Media</a></li>
                            <li><a href="testimonial.php.html" class="hover:text-red-500">+ Testimonials</a></li>
                            <li><a href="contact.php.html" class="hover:text-red-500">+ Contact Us</a></li>
                            <li><a href="esic.html" class="hover:text-red-500">+ ESIC</a></li>
                            <li><a href="mjpjay.html" class="hover:text-red-500">+ MJPJAY</a></li>
                        </ul>
                    </div>

                    <!-- Center Section -->
                    <div class="md:w-[50%] border-y lg:border-y-0 lg:border-x border-gray-800 px-6 py-10 text-center">

                        <img src="images/footer-logo.png" class="mx-auto w-40 mb-5" alt="Footer Logo">

                        <p class="text-gray-300 leading-7 text-sm ">
                            Criticare ICCU Multispeciality & Trauma Centre the centre is the
                            biggest hospital in Airoli that provides you with 1-stop all
                            facilities.
                        </p>

                        <a href="#" class="inline-block mt-6 text-red-500 text-base font-semibold hover:text-red-400">
                            View More
                        </a>

                        <div class="border-t border-gray-800 my-6"></div>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d942.2686418797434!2d72.99533941259192!3d19.148212969902843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf6e772c8c4d477c!2sCriticare%20Hospital%20ICCU%2C%20Multi-speciality%20%26%20Trauma%20centre!5e0!3m2!1sen!2sin!4v1674198208399!5m2!1sen!2sin"
                            class="w-full h-56 rounded-lg" style="border:0;" loading="lazy">
                        </iframe>

                    </div>

                    <!-- Clinical Services -->
                    <div class="flex-1 px-6 py-10">
                        <h3 class="text-2xl font-bold mb-3">Clinical Services</h3>

                        <div class="flex items-center mb-8">
                            <div class="w-12 h-[2px] bg-white"></div>
                            <div class="w-2 h-2 bg-white rounded-full ml-2"></div>
                        </div>

                        <ul class="space-y-4 text-sm">
                            <li><a href="#" class="hover:text-red-500">+ Anesthesiology</a></li>
                            <li><a href="#" class="hover:text-red-500">+ Cardiology</a></li>
                            <li><a href="#" class="hover:text-red-500">+ 24 hrs. Clinical Care</a></li>
                            <li><a href="#" class="hover:text-red-500">+ Dermatology</a></li>
                            <li><a href="#" class="hover:text-red-500">+ ENT</a></li>
                            <li><a href="#" class="hover:text-red-500">+ General & Lap Surgery</a></li>
                            <li><a href="#" class="hover:text-red-500">+ General Medicine</a></li>
                        </ul>
                    </div>

                </div>
            </div>

        </footer>
        <!--Footer Bottom-->
        <div class="footer-bottom bg-[#fd2222] "> <!-- Scroll To Top -->
          
                        <p class="!text-white md:ml-[150px]">© 2026 Criticare Hospital, All Right Reserved.</p>
                 
            
        </div>

`
