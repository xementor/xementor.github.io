<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    document.title = "CV - Md. Zonaid";
  });
</script>

<svelte:head>
  <title>CV - Md. Zonaid</title>
  <meta
    name="description"
    content="Professional CV of Md. Zonaid - Software Developer"
  />
</svelte:head>

<!-- Simple Header for CV Page -->
<!-- <header class="bg-white shadow-sm border-b border-gray-200">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div class="flex items-center justify-between">
      <h1 class="text-xl font-semibold text-gray-900">Curriculum Vitae</h1>
      <a href="/" class="text-orange-600 hover:text-orange-700 font-medium">
        ← Back to Home
      </a>
    </div>
  </div>
</header> -->

<div
  class="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-8 px-4 sm:px-6 lg:px-8"
>
  <div class="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
    <!-- Header Section -->
    <div
      class="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 sm:p-8"
    >
      <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
        <!-- Profile Image -->
        <div class="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
          <img
            src="https://xementor.github.io/ih.jpg"
            alt="Md. Zonaid"
            class="w-full h-full rounded-full border-4 border-white shadow-lg object-cover object-top"
          />
        </div>

        <!-- Header Info -->
        <div class="text-center md:text-left flex-1">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            MD. ZONAID
          </h1>
          <h2 class="text-xl sm:text-2xl font-light mb-4 opacity-90">
            Software Developer
          </h2>

          <!-- Contact Info -->
          <div class="space-y-2 text-sm sm:text-base">
            <div
              class="flex items-center justify-center md:justify-start gap-2"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Kishoreganj, Dhaka</span>
            </div>
            <div
              class="flex items-center justify-center md:justify-start gap-2"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <span>01796927493</span>
            </div>
            <div
              class="flex items-center justify-center md:justify-start gap-2"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <span>ih.zonaid@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Work Experience Section -->
    <div class="p-6 sm:p-8 border-b border-gray-200">
      <h3
        class="text-xl font-bold text-orange-600 mb-6 border-b-2 border-orange-200 pb-2"
      >
        WORK EXPERIENCE
      </h3>

      <div class="bg-orange-50 p-4 sm:p-6 rounded-lg">
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3"
        >
          <h4 class="font-bold text-lg text-gray-800">Software Developer</h4>
          <span class="text-orange-600 font-semibold text-sm"
            >Mid 2024 - Present</span
          >
        </div>
        <div class="text-gray-700 mb-3">
          <div class="font-semibold">Action Work LLC</div>
          <div class="text-sm text-gray-600">Remote • Contract Position</div>
        </div>
        <p class="text-gray-700 text-sm leading-relaxed">
          Working as a remote software developer, contributing to various
          projects and applications. Developing and maintaining software
          solutions using modern technologies and best practices.
        </p>
      </div>
    </div>

    <!-- Personal Information Section -->
    <div class="p-6 sm:p-8 border-b border-gray-200">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Left Column -->
        <div>
          <h3
            class="text-xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2"
          >
            PERSONAL INFORMATION
          </h3>
          <div class="space-y-3 text-sm sm:text-base text-gray-900">
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900">Age:</span>
              <span class="text-gray-900">25 years</span>
            </div>
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900"
                >Date of Birth:</span
              >
              <span class="text-gray-900">August 1, 2000</span>
            </div>
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900">Height:</span>
              <span class="text-gray-900">5 feet 5 inches</span>
            </div>
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900">Weight:</span>
              <span class="text-gray-900">67 kg</span>
            </div>
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900"
                >Place of Birth:</span
              >
              <span class="text-gray-900">Kishoreganj, Bangladesh</span>
            </div>
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900">Nationality:</span>
              <span class="text-gray-900">Bangladeshi</span>
            </div>
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900">Religion:</span>
              <span class="text-gray-900">Islam</span>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div>
          <h3
            class="text-xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2"
          >
            ABOUT ME
          </h3>
          <p class="text-gray-700 text-sm sm:text-base leading-relaxed">
            I am Md. Zonaid, a 25-year-old software developer from Kishoreganj,
            Bangladesh. I graduated with a B.Sc in Computer Science and
            Engineering in 2024 and currently work remotely as a software
            developer at Action Work LLC. I'm passionate about coding, learning
            new technologies, and working on innovative projects. As the
            youngest of five siblings, I value both professional growth and
            family connections.
          </p>
        </div>
      </div>
    </div>

    <!-- Family Information Section -->
    <div class="p-6 sm:p-8 border-b border-gray-200">
      <h3
        class="text-xl font-bold text-orange-600 mb-6 border-b-2 border-orange-200 pb-2"
      >
        FAMILY BACKGROUND
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="space-y-3 text-sm sm:text-base">
          <div class="flex flex-wrap">
            <span class="font-semibold w-32 flex-shrink-0 text-gray-900">Father's Name:</span>
            <span class="text-gray-900">Md. Farok Mia</span>
          </div>
          <div class="flex flex-wrap">
            <span class="font-semibold w-32 flex-shrink-0 text-gray-900">Mother's Name:</span>
            <span class="text-gray-900">Fetema Akter</span>
          </div>
        </div>
        <div class="space-y-3 text-sm sm:text-base">
          <div class="flex flex-wrap">
            <span class="font-semibold w-32 flex-shrink-0 text-gray-900">Siblings:</span>
            <span class="text-gray-900">3 Brothers, 2 Sisters</span>
          </div>
          <div class="flex flex-wrap">
            <span class="font-semibold w-32 flex-shrink-0 text-gray-900">Position:</span>
            <span class="text-gray-900">Youngest child</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Academic Qualification Section -->
    <div class="p-6 sm:p-8 border-b border-gray-200">
      <h3
        class="text-xl font-bold text-orange-600 mb-6 border-b-2 border-orange-200 pb-2"
      >
        ACADEMIC QUALIFICATION
      </h3>

      <div class="space-y-6">
        <!-- B.Sc in CSE -->
        <div class="bg-orange-50 p-4 sm:p-6 rounded-lg">
          <h4 class="font-bold text-lg text-gray-800 mb-3">
            B.Sc in Computer Science and Engineering <span
              class="text-orange-600">(Graduate)</span
            >
          </h4>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base"
          >
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900">Institution:</span>
              <span class="text-gray-900">Daffodil International University</span>
            </div>
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900">Duration:</span>
              <span class="text-gray-900">2020-2024</span>
            </div>
          </div>
        </div>

        <!-- HSC -->
        <div class="bg-gray-50 p-4 sm:p-6 rounded-lg">
          <h4 class="font-bold text-lg text-gray-800 mb-3">
            Higher Secondary Certificate (HSC)
          </h4>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base"
          >
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900">Institution:</span>
              <span class="text-gray-900">Gurudayal Govt. College, Kishoreganj</span>
            </div>
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900">Board:</span>
              <span class="text-gray-900">Dhaka</span>
            </div>
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900">Year:</span>
              <span class="text-gray-900">2019</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-gray-50 p-4 text-center text-sm text-gray-600">
      <p>© 2025 Md. Zonaid. All rights reserved.</p>
    </div>
  </div>
</div>

<style>
  /* Additional custom styles if needed */
  @media print {
    .min-h-screen {
      min-height: auto;
    }

    .bg-gradient-to-br {
      background: white !important;
    }
  }
</style>
