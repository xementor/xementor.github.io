<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    document.title = "Technical CV - Md. Zonaid";
  });

  function handlePrint() {
    window.print();
  }
</script>

<svelte:head>
  <title>Technical CV - Md. Zonaid</title>
  <meta
    name="description"
    content="Technical CV of Md. Zonaid - Full-Stack Engineer specializing in Backend Development"
  />
</svelte:head>

<div class="min-h-screen bg-gray-50 py-8 px-4 print:p-0 print:bg-white">
  <div class="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
    <!-- Header -->
    <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 print:py-3 print:px-4">
      <h1 class="text-3xl font-bold mb-2 print:text-xl print:mb-1.5">MD. ZONAID</h1>
      <h2 class="text-xl mb-3 print:text-base print:mb-1.5">Full-Stack Engineer • Backend Specialist • AWS</h2>
      <div class="flex flex-wrap gap-4 text-sm print:text-[11px] print:gap-2">
        <span>📧 ih.zonaid@gmail.com</span>
        <span>📱 +880 1796927493</span>
        <span>📍 Kishoreganj, Bangladesh</span>
        <span>🔗 <a href="https://github.com/xementor" class="underline">github.com/xementor</a></span>
      </div>
    </div>

    <div class="p-6 print:py-3 print:px-4 print:text-[11px]">
      <!-- Professional Summary -->
      <section class="mb-4 print:mb-2">
        <h3 class="text-lg font-bold text-blue-700 border-b border-blue-200 pb-0.5 mb-2 print:text-sm print:mb-1.5">PROFESSIONAL SUMMARY</h3>
        <p class="text-gray-700 leading-relaxed print:text-[10.5px] print:leading-snug">
          Full-stack engineer with 2+ years building production systems, specializing in backend architecture and AWS serverless infrastructure. 
          Experienced as sole backend engineer architecting knowledge base synchronization platforms with enterprise integrations. 
          Proven track record mentoring developers, making architectural decisions, and delivering blockchain-based marketplaces. 
          Seeking full-stack/backend roles at remote startups where technical ownership and rapid iteration drive impact.
        </p>
      </section>

      <!-- Technical Skills -->
      <section class="mb-4 print:mb-2">
        <h3 class="text-lg font-bold text-blue-700 border-b border-blue-200 pb-0.5 mb-2 print:text-sm print:mb-1.5">TECHNICAL SKILLS</h3>
        <div class="grid grid-cols-1 gap-1 text-sm print:text-[10.5px] print:gap-0.5 print:leading-snug">
          <div class="text-gray-700"><span class="font-semibold text-gray-900">Languages:</span> TypeScript, JavaScript, Python, Java, C, Dart</div>
          <div class="text-gray-700"><span class="font-semibold text-gray-900">Frontend:</span> Next.js, React, React Native, Expo, Svelte, TailwindCSS</div>
          <div class="text-gray-700"><span class="font-semibold text-gray-900">Backend:</span> Node.js, tRPC, Hono, Django, Express, RESTful APIs</div>
          <div class="text-gray-700"><span class="font-semibold text-gray-900">Databases:</span> PostgreSQL, DynamoDB, MongoDB, Redis, Firebase, Drizzle ORM</div>
          <div class="text-gray-700"><span class="font-semibold text-gray-900">Cloud & DevOps:</span> AWS (Lambda, S3, SQS, SNS, Textract, EC2, Amplify), SST, Docker</div>
          <div class="text-gray-700"><span class="font-semibold text-gray-900">Blockchain:</span> Stellar SDK, Web3, NFT protocols, Smart Contracts</div>
          <div class="text-gray-700"><span class="font-semibold text-gray-900">Tools:</span> Git, GitHub Actions, Monorepo, Infrastructure as Code</div>
        </div>
      </section>

      <!-- Work Experience -->
      <section class="mb-4 print:mb-2">
        <h3 class="text-lg font-bold text-blue-700 border-b border-blue-200 pb-0.5 mb-2 print:text-sm print:mb-1.5">PROFESSIONAL EXPERIENCE</h3>
        
        <!-- Current Role -->
        <div class="mb-3 print:mb-1.5">
          <div class="flex justify-between items-start mb-0.5">
            <div>
              <h4 class="font-bold text-gray-900 print:text-[11px]">Software Engineer (Full-Stack/Backend)</h4>
              <p class="text-gray-700 print:text-[10px]">Action Work LLC • Remote</p>
            </div>
            <span class="text-gray-600 text-sm print:text-[10px] whitespace-nowrap">Jul 2024 - Present</span>
          </div>
          <ul class="list-disc ml-5 space-y-0.5 text-gray-700 text-sm print:text-[10px] print:space-y-0 print:ml-3 print:leading-snug">
            <li><strong>Architected knowledge base sync platform</strong> as sole backend engineer, implementing 5 enterprise integrations (Google Drive, OneDrive, Confluence, Document360, Sitemap) with 30-min automated sync cycles</li>
            <li><strong>Built serverless AWS infrastructure</strong> using Lambda, SQS, SNS for async document processing; integrated Textract for OCR with 95%+ accuracy</li>
            <li><strong>Led technical decisions</strong> for backend architecture, database schema design (PostgreSQL/Drizzle), and API layer (tRPC/Hono)</li>
            <li><strong>Mentored junior developer</strong> on transaction handling, feature implementation, and architectural patterns in distributed systems</li>
            <li><strong>Managed infrastructure as code</strong> using SST for reproducible AWS deployments; deployed on Amplify with monitoring</li>
            <li><strong>Developed full-stack app</strong> with Next.js, TypeScript, and PostgreSQL serving production customers with real-time sync status</li>
          </ul>
        </div>

        <!-- Blockchain Projects -->
        <div class="mb-3 print:mb-1.5">
          <div class="flex justify-between items-start mb-0.5">
            <div>
              <h4 class="font-bold text-gray-900 print:text-[11px]">Blockchain Developer (Contract)</h4>
              <p class="text-gray-700 print:text-[10px]">Action Work LLC • Remote</p>
            </div>
            <span class="text-gray-600 text-sm print:text-[10px] whitespace-nowrap">2023 - Mid 2024</span>
          </div>
          <ul class="list-disc ml-5 space-y-0.5 text-gray-700 text-sm print:text-[10px] print:space-y-0 print:ml-3 print:leading-snug">
            <li><strong>Built multiple NFT marketplace platforms</strong> with Stellar blockchain integration, supporting multi-media assets (video, audio, images)</li>
            <li><strong>Implemented payment systems</strong> using Square API and multi-provider OAuth (Stellar, Google, Facebook) with Firebase backend</li>
            <li><strong>Transitioned project to new developer</strong>, providing technical guidance on blockchain transactions, feature development, and design decisions</li>
            <li><strong>Collaborated across projects</strong>, balancing blockchain development with early-stage knowledge base platform work</li>
          </ul>
        </div>

      </section>

      <!-- Professional Projects -->
      <section class="mb-4 print:mb-1.5">
        <h3 class="text-lg font-bold text-blue-700 border-b border-blue-200 pb-0.5 mb-2 print:text-sm print:mb-1.5">PROFESSIONAL PROJECTS (Client Work)</h3>
        
        <div class="space-y-2 print:space-y-0.5 print:leading-snug">
          <div>
            <h4 class="font-semibold text-gray-900 text-sm print:text-[10px]">AI Knowledge Base Sync Platform <span class="text-gray-600 font-normal">| Sole Backend Engineer | Jul 2024 - Present</span></h4>
            <p class="text-gray-700 text-sm print:text-[10px] ml-0">Enterprise knowledge base synchronization with 5 integrations (Drive, OneDrive, Confluence, Document360, Sitemap), OCR, automated sync. <strong>Tech:</strong> Next.js, tRPC, Hono, PostgreSQL, AWS (Lambda, S3, SQS, Textract), SST. <strong>Live:</strong> portal.actn.xyz</p>
          </div>

          <div>
            <h4 class="font-semibold text-gray-900 text-sm print:text-[10px]">Multi-Media NFT Marketplace <span class="text-gray-600 font-normal">| Lead Developer | Nov 2023 - Jan 2024</span></h4>
            <p class="text-gray-700 text-sm print:text-[10px] ml-0">Full-stack marketplace with Stellar blockchain NFT minting, Square payments, OAuth (3 providers). <strong>Tech:</strong> Next.js, TypeScript, StellarSDK, Firebase. <strong>Live:</strong> marketplace.wadzzo.com</p>
          </div>
          
          <div>
            <h4 class="font-semibold text-gray-900 text-sm print:text-[10px]">Audio NFT Platform <span class="text-gray-600 font-normal">| Full-Stack Developer | Sep - Nov 2023</span></h4>
            <p class="text-gray-700 text-sm print:text-[10px] ml-0">NFT-based audio streaming with blockchain ownership and wallet authentication. <strong>Tech:</strong> Next.js, StellarSDK, AWS Amplify. <strong>Live:</strong> music.bandcoin.io</p>
          </div>
        </div>
      </section>

      <!-- Personal Projects -->
      <section class="mb-4 print:mb-1.5">
        <h3 class="text-lg font-bold text-blue-700 border-b border-blue-200 pb-0.5 mb-2 print:text-sm print:mb-1.5">PERSONAL PROJECTS</h3>
        
        <div class="space-y-2 print:space-y-0.5 print:leading-snug">
          <div>
            <h4 class="font-semibold text-gray-900 text-sm print:text-[10px]">ihStudy Cross-Platform Learning App <span class="text-gray-600 font-normal">| 2022-2023</span></h4>
            <p class="text-gray-700 text-sm print:text-[10px] ml-0">Educational platform with shared React Native/Next.js codebase, monorepo architecture, Redux state management. <strong>Tech:</strong> React Native, Next.js, Solito, Redux, NativeBase</p>
          </div>
          
          <div>
            <h4 class="font-semibold text-gray-900 text-sm print:text-[10px]">ihLang Compiler <span class="text-gray-600 font-normal">| 2023</span></h4>
            <p class="text-gray-700 text-sm print:text-[10px] ml-0">Custom programming language compiler demonstrating systems programming knowledge with lexical analysis, syntax parsing, and code generation. <strong>Tech:</strong> Python</p>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section class="print:mb-2">
        <h3 class="text-lg font-bold text-blue-700 border-b border-blue-200 pb-0.5 mb-2 print:text-sm print:mb-1.5">EDUCATION</h3>
        <div class="flex justify-between items-start print:leading-snug">
          <div>
            <h4 class="font-semibold text-gray-900 print:text-[11px]">B.Sc in Computer Science and Engineering</h4>
            <p class="text-gray-700 text-sm print:text-[10px]">Daffodil International University</p>
          </div>
          <div class="text-right">
            <p class="text-gray-600 text-sm print:text-[10px]">2020 - 2024</p>
            <p class="text-gray-900 font-semibold text-sm print:text-[10px]">CGPA: 3.83/4.00</p>
          </div>
        </div>
      </section>
    </div>
  </div>

  <!-- Print Button -->
  <div class="max-w-4xl mx-auto mt-6 flex justify-center print:hidden">
    <button
      on:click={handlePrint}
      class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
      Print Technical CV
    </button>
  </div>
</div>

<style>
  @media print {
    @page {
      size: A4;
      margin: 0.4cm 0.5cm;
    }

    body {
      margin: 0;
      padding: 0;
    }

    .min-h-screen {
      min-height: auto;
      background: white !important;
      padding: 0 !important;
    }

    /* Ensure single page */
    .max-w-4xl {
      max-width: 100% !important;
      margin: 0 !important;
    }

    /* Optimize spacing for print */
    h3 {
      page-break-after: avoid;
    }

    ul li {
      page-break-inside: avoid;
    }

    section {
      page-break-inside: auto;
    }

    /* Hide print button */
    .print\:hidden {
      display: none !important;
    }

    /* Ensure colors print */
    * {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* Adjust header for print */
    .bg-gradient-to-r {
      background: linear-gradient(to right, #2563eb, #1d4ed8) !important;
    }
  }
</style>
