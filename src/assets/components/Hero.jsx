import React from "react";

const Hero = () => {
  return (
    <div class="container px-6 py-16 mx-auto text-center">
      <div class="max-w-lg mx-auto mt-20">
        <h1 class="text-3xl font-semibold text-black lg:text-4xl">
          NSW Senior Highschools based on Socio-economic Metrics
        </h1>

        <button class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
          Go to Map
        </button>
      </div>

      <div class="flex justify-center mt-10">
        <img
          class="object-cover w-full h-96 rounded-xl lg:w-4/5"
          src="https://static.vecteezy.com/system/resources/previews/003/128/525/original/cartoon-highschool-student-character-set-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Hero;
