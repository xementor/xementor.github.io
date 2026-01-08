<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    document.title = "CV - Md. Zonaid";
  });

  function handlePrint() {
    window.print();
  }
</script>

<svelte:head>
  <title>CV - Md. Zonaid</title>
  <meta
    name="description"
    content="Professional CV of Md. Zonaid - Software Engineer"
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
  class="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-0 sm:py-8 px-0 sm:px-4 lg:px-8 coding-bg"
>
  <div class="max-w-5xl mx-auto bg-white shadow-none sm:shadow-2xl rounded-none sm:rounded-lg overflow-hidden print:shadow-none print:rounded-none">
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
            Software Engineer
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
    <div class="px-4 py-6 sm:p-8 border-b border-gray-200">
      <h3
        class="text-xl font-bold text-orange-600 mb-6 border-b-2 border-orange-200 pb-2"
      >
        WORK EXPERIENCE
      </h3>

      <div class="space-y-6">
        <!-- Current Full-time Position -->
        <div class="bg-orange-50 p-4 sm:p-6 rounded-lg">
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3"
          >
            <h4 class="font-bold text-lg text-gray-800">Software Engineer</h4>
            <span class="text-orange-600 font-semibold text-sm"
              >Mid 2024 - Present</span
            >
          </div>
          <div class="text-gray-700 mb-3">
            <div class="font-semibold">Action Work LLC</div>
            <div class="text-sm text-gray-600">Remote • Full-time Position</div>
          </div>
          <p class="text-gray-700 text-sm leading-relaxed">
            Working as a remote Software Engineer, contributing to various
            projects and applications. Developing and maintaining software
            solutions using modern technologies and best practices.
          </p>
        </div>

        <!-- Freelance Experience -->
        <div class="bg-gray-50 p-4 sm:p-6 rounded-lg">
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3"
          >
            <h4 class="font-bold text-lg text-gray-800">Software Developer</h4>
            <span class="text-orange-600 font-semibold text-sm"
              >2023 - Mid 2024</span
            >
          </div>
          <div class="text-gray-700 mb-3">
            <div class="font-semibold">Independent Projects</div>
            <div class="text-sm text-gray-600">Project-based Development</div>
          </div>
          <p class="text-gray-700 text-sm leading-relaxed">
            Worked on various software development projects while completing
            B.Sc degree. Developed web applications and software solutions for clients,
            gaining practical experience in full-stack development and project management.
          </p>
        </div>
      </div>
    </div>

    <!-- Personal Information Section -->
    <div class="px-4 py-6 sm:p-8 border-b border-gray-200">
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
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900"
                >Age:</span
              >
              <span class="text-gray-900">25 years</span>
            </div>
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900"
                >Date of Birth:</span
              >
              <span class="text-gray-900">August 1, 2000</span>
            </div>
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900"
                >Height:</span
              >
              <span class="text-gray-900">5 feet 5 inches</span>
            </div>
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900"
                >Weight:</span
              >
              <span class="text-gray-900">67 kg</span>
            </div>
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900"
                >Place of Birth:</span
              >
              <span class="text-gray-900">Kishoreganj, Bangladesh</span>
            </div>
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900"
                >Nationality:</span
              >
              <span class="text-gray-900">Bangladeshi</span>
            </div>
            <div class="flex flex-wrap">
              <span class="font-semibold w-32 flex-shrink-0 text-gray-900"
                >Religion:</span
              >
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
            I am Md. Zonaid, a 25-year-old Software Engineer from Kishoreganj,
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
    <div class="px-4 py-6 sm:p-8 border-b border-gray-200">
      <h3
        class="text-xl font-bold text-orange-600 mb-6 border-b-2 border-orange-200 pb-2"
      >
        FAMILY BACKGROUND
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="space-y-3 text-sm sm:text-base">
          <div class="flex flex-wrap">
            <span class="font-semibold w-32 flex-shrink-0 text-gray-900"
              >Father's Name:</span
            >
            <span class="text-gray-900">Md. Farok Mia</span>
          </div>
          <div class="flex flex-wrap">
            <span class="font-semibold w-32 flex-shrink-0 text-gray-900"
              >Mother's Name:</span
            >
            <span class="text-gray-900">Fetema Akter</span>
          </div>
        </div>
        <div class="space-y-3 text-sm sm:text-base">
          <div class="flex flex-wrap">
            <span class="font-semibold w-32 flex-shrink-0 text-gray-900"
              >Siblings:</span
            >
            <span class="text-gray-900">3 Brothers, 2 Sisters</span>
          </div>
          <div class="flex flex-wrap">
            <span class="font-semibold w-32 flex-shrink-0 text-gray-900"
              >Position:</span
            >
            <span class="text-gray-900">Youngest child</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Academic Qualification Section -->
    <div class="px-4 py-6 sm:p-8 border-b border-gray-200">
      <h3
        class="text-xl font-bold text-orange-600 mb-6 border-b-2 border-orange-200 pb-2"
      >
        ACADEMIC QUALIFICATION
      </h3>

      <div class="space-y-6">
        <!-- B.Sc in CSE -->
        <div class="bg-orange-50 p-4 sm:p-6 rounded-lg">
          <h4 class="font-bold text-lg text-gray-800 mb-4">
            B.Sc in Computer Science and Engineering <span
              class="text-orange-600">(Graduate)</span
            >
          </h4>
          <div class="space-y-2 text-sm sm:text-base">
            <div class="flex">
              <span class="font-semibold w-36 text-gray-900">Institution:</span>
              <span class="text-gray-900 flex-1">Daffodil International University</span>
            </div>
            <div class="flex">
              <span class="font-semibold w-36 text-gray-900">Duration:</span>
              <span class="text-gray-900 flex-1">2020-2024</span>
            </div>
            <div class="flex">
              <span class="font-semibold w-36 text-gray-900">Result:</span>
              <span class="text-gray-900 flex-1">CGPA 3.83 out of 4.00</span>
            </div>
          </div>
        </div>

        <!-- HSC -->
        <div class="bg-gray-50 p-4 sm:p-6 rounded-lg">
          <h4 class="font-bold text-lg text-gray-800 mb-4">
            Higher Secondary Certificate (HSC)
          </h4>
          <div class="space-y-2 text-sm sm:text-base">
            <div class="flex">
              <span class="font-semibold w-36 text-gray-900">Institution:</span>
              <span class="text-gray-900 flex-1">Gurudayal Govt. College, Kishoreganj</span>
            </div>
            <div class="flex">
              <span class="font-semibold w-36 text-gray-900">Board:</span>
              <span class="text-gray-900 flex-1">Dhaka</span>
            </div>
            <div class="flex">
              <span class="font-semibold w-36 text-gray-900">Year:</span>
              <span class="text-gray-900 flex-1">2019</span>
            </div>
            <div class="flex">
              <span class="font-semibold w-36 text-gray-900">Group:</span>
              <span class="text-gray-900 flex-1">Science</span>
            </div>
            <div class="flex">
              <span class="font-semibold w-36 text-gray-900">Result:</span>
              <span class="text-gray-900 flex-1">GPA 5.00</span>
            </div>
          </div>
        </div>

        <!-- SSC -->
        <div class="bg-orange-50 p-4 sm:p-6 rounded-lg">
          <h4 class="font-bold text-lg text-gray-800 mb-4">
            Secondary School Certificate (SSC)
          </h4>
          <div class="space-y-2 text-sm sm:text-base">
            <div class="flex">
              <span class="font-semibold w-36 text-gray-900">Institution:</span>
              <span class="text-gray-900 flex-1">Bhatia High School</span>
            </div>
            <div class="flex">
              <span class="font-semibold w-36 text-gray-900">Board:</span>
              <span class="text-gray-900 flex-1">Dhaka</span>
            </div>
            <div class="flex">
              <span class="font-semibold w-36 text-gray-900">Year:</span>
              <span class="text-gray-900 flex-1">2016</span>
            </div>
            <div class="flex">
              <span class="font-semibold w-36 text-gray-900">Group:</span>
              <span class="text-gray-900 flex-1">Science</span>
            </div>
            <div class="flex">
              <span class="font-semibold w-36 text-gray-900">Result:</span>
              <span class="text-gray-900 flex-1">GPA 5.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-gray-50 p-4 text-center text-sm text-gray-600">
      <p>© 2026 Md. Zonaid. All rights reserved.</p>
    </div>
  </div>

  <!-- Print Button at Bottom -->
  <div class="max-w-5xl mx-auto mt-6 flex justify-center print:hidden">
    <button
      on:click={handlePrint}
      class="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
      Print CV
    </button>
  </div>
</div>

<style>
  /* Coding background pattern */
  .coding-bg {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  @media print {
    /* Hide browser default headers and footers (date, title, page numbers) */
    @page {
      margin: 0;
      size: auto;
    }

    /* Remove background and reset layout */
    .min-h-screen {
      min-height: auto;
      background: white !important;
      padding: 0 !important;
    }

    .bg-gradient-to-br,
    .coding-bg {
      background: white !important;
      background-image: none !important;
    }

    /* Hide print button */
    .print\:hidden {
      display: none !important;
    }

    /* Remove shadows and rounded corners */
    .print\:shadow-none {
      box-shadow: none !important;
    }

    .print\:rounded-none {
      border-radius: 0 !important;
    }

    /* Optimize page breaks */
    .bg-orange-50,
    .bg-gray-50 {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    /* Ensure colors print properly */
    * {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* Adjust header for print */
    .bg-gradient-to-r {
      background: linear-gradient(to right, #f97316, #ea580c) !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* Remove footer margin */
    body {
      margin: 0;
    }

    /* Optimize spacing for print */
    .p-6,
    .p-8 {
      padding: 1rem !important;
    }

    .sm\:p-8 {
      padding: 1rem !important;
    }
  }
</style>
