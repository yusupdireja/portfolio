<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AtomsButton from './components/atoms/AtomsButton.vue'
import { AtomsButtonType } from './constants/enum'
import MoleculesProfile from './components/molecules/MoleculesProfile.vue'
import MoleculesSocialMedia from './components/molecules/MoleculesSocialMedia.vue'
import IconTooling from './components/icons/IconTooling.vue'
import IconInstagram from './components/icons/IconInstagram.vue'
import IconFacebook from './components/icons/IconFacebook.vue'
import IconWhatsapp from './components/icons/IconWhatsapp.vue'
import MoleculesTabs from './components/molecules/MoleculesTab.vue'
import IconTypescript from './components/icons/IconTypescript.vue'
import MoleculesIconSlider from './components/molecules/MoleculesIconSlider.vue'
import MoleculesTagChips from './components/molecules/MoleculesTagChips.vue'
import IconWork from './components/icons/IconWork.vue'
import IconLinkedin from './components/icons/IconLinkedin.vue'
import AtomsCard from './components/atoms/AtomsCard.vue'
import OrganismeStaggered from './components/organisme/OrganismeStaggered.vue'

const openLink = (url: string) => {
  window.open(url)
}

function sendEmail() {
  const email = 'yusupdireja@gmail.com'
  const subject = encodeURIComponent('Proposal for Potential Collaboration Opportunity')
  const body = encodeURIComponent(
    `Dear [Recipient's Name],

I hope this message finds you well.

My name is [Your Name], and I am reaching out to explore the possibility of a collaboration between our organizations. We believe that a partnership could bring mutual value and align with our shared goals.

We would appreciate the opportunity to discuss this further at your convenience.

Looking forward to hearing from you.

Best regards,
[Your Full Name]
[Your Position / Company]
[Your Contact Information]`,
  )

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
}

const posts = [
  {
    title: 'eWide Carbon - Korea',
    content:
      'This eWide Carbon application is used to measure carbon usage where the user will not get bored because of the gamification.',
    tags: [
      'Flutter',
      'Android & iOS',
      'Clean Architecture',
      'Responsive',
      'Bloc & Cubit',
      'Firebase',
      'Third API Korea',
    ],
  },
  {
    title: 'eWide AAC - Korea',
    content:
      'ewide AAC is an application for alternative communication where there is difficulty speaking or special needs in Korea.',
    tags: [
      'Flutter',
      'Android & iOS',
      'Clean Architecture',
      'Responsive',
      'Bloc & Cubit',
      'Firebase',
      'Third API Korea',
      'Local Storage',
    ],
  },
  {
    title: 'Alterbook',
    content:
      'Experience a better way to connect your business with Alterbook. Access and monitor all your critical data in real-time – financials, operations, marketing, and sales – all in one place. Alterbook provides transparency, giving you the freedom to take a hands-off approach to efficient property management.',
    tags: [
      'Flutter',
      'Android & iOS',
      'Clean Architecture',
      'Responsive',
      'Bloc & Cubit',
      'Firebase',
      'Strapi',
      'Odoo',
    ],
  },
  {
    title: 'Alterstaff',
    content:
      'Manage your vacation rentals with ease with a solution that handles day-to-day operations. Report, assign, update, and resolve any issues that arise at your property. You can instantly share updates, photos, and videos to keep everyone informed of the latest progress. Spend less time managing your rentals and more time enjoying your passive income.',
    tags: [
      'Flutter',
      'Android & iOS',
      'Clean Architecture',
      'Responsive',
      'Bloc & Cubit',
      'Firebase',
      'Strapi',
      'Odoo',
    ],
  },
  {
    title: 'Goodspack',
    content:
      'gits.id internal application where you can manage all company needs such as business trips, absences, etc.',
    tags: [
      'Flutter',
      'Android & iOS',
      'Clean Architecture',
      'Responsive',
      'Bloc & Cubit',
      'Firebase',
      'Strapi',
      'CI/CD Pipeline',
    ],
  },
  {
    title: 'S2RC - Sorong ',
    content:
      'S2RC is an application created for the PUPR Department of Sorong Regency. This application is used as a medium for the people of Sorong Regency to report something & get information related to road conditions.',
    tags: [
      'Flutter',
      'Android & iOS',
      'Clean Architecture',
      'Responsive',
      'Bloc & Cubit',
      'Firebase',
      'Maps',
    ],
  },
  {
    title: 'Atexco',
    content:
      'Atexco is a global leader in digital printing technology, specializing in advanced solutions for the textile and graphic industries',
    tags: ['NextJs', 'HTML', 'CSS', 'Javascript', 'SQL', 'App Engine'],
  },
  {
    title: 'Putra Mutiara Jaya',
    content:
      'One of the new national scale companies engaged in the field of Digital Printing Machine Sales',
    tags: ['NextJs', 'HTML', 'CSS', 'Javascript', 'SQL', 'App Engine'],
  },
  {
    title: 'Nusantara Airparts',
    content:
      'PT Nusantara Airparts focuses on the procurement of goods and services for aircraft spare parts.',
    tags: ['NextJs', 'HTML', 'CSS', 'Javascript', 'SQL', 'App Engine'],
  },
  {
    title: 'Sumber Artho Indoraya',
    content:
      'PT Sumber Artho Indoraya (SAI) is a company engaged in the provision of goods and services for construction and industrial installations (Mechanical & Electrical), established since 2020.',
    tags: ['NextJs', 'HTML', 'CSS', 'Javascript', 'SQL', 'App Engine'],
  },
  {
    title: 'Pertamina Merchant Apps',
    content:
      'MyPertamina Merchant is an application developed to provide solutions for merchants who are members of the MyPertamina ecosystem in managing partner businesses.',
    tags: [
      'Flutter',
      'Android & iOS',
      'Clean Architecture',
      'Responsive',
      'Bloc & Cubit',
      'Firebase',
      'Strapi',
      'CI/CD Pipeline',
    ],
  },
  {
    title: 'RSUD Cileungsi Apps',
    content:
      'An online booking application used to make it easier for patients to meet the doctors schedule.',
    tags: ['Kotlin', 'Android', 'MVVM', 'Responsive', 'Firebase'],
  },
  {
    title: 'PT. Semesta Mitra Sejahtera - Farm Location Status',
    content:
      'This Farm Location Status application is used to facilitate technical services in collecting data and verifying potential partners from various regions. Equipped with regional verification features, livestock data changes and data storage in offline mode',
    tags: ['Kotlin', 'Android', 'MVVM', 'Responsive', 'Firebase', 'Local Storage'],
  },
  {
    title: 'Survey Silinda Jawa Barat',
    content:
      'Silinda Mobile Survey is an application that can be used to input commodity price data in all markets located in West Java. This application is integrated with the website silinda.jabarprov.go.id',
    tags: ['Kotlin', 'Android', 'MVVM', 'Responsive', 'Firebase'],
  },
  {
    title: 'PT. Sato Sara Semesta - Sato Robotic (POS)',
    content:
      'Spotwash application designed to facilitate motorcycle & car wash transactions. This application is supported by online order/booking features and confirmation using a scanner so that the queuing process becomes more optimal.',
    tags: ['Kotlin', 'Android', 'MVVM', 'Responsive', 'Firebase'],
  },
  {
    title: 'Charoen Pokphand Indonesia - CPI CRM',
    content:
      'Internal application of PT. Charoen Pokphand Indonesia, Tbk to conduct chicken feed survey in Jabodetabek and West Java areas',
    tags: ['Java', 'Android', 'MVP', 'Responsive', 'Maps', 'Local Storage'],
  },
  {
    title: 'Silinda Apps Jawa Barat',
    content:
      'Silinda Mobile Survey is an application that can be used to input commodity price data in all markets located in West Java. This application is integrated with the website silinda.jabarprov.go.id',
    tags: ['Kotlin', 'Android', 'MVVM', 'Responsive', 'Firebase'],
  },
  {
    title: 'XL-Axiata - Axiapp',
    content:
      'Axiapp is an application built by PT XL Axiata Tbk (XL Axiata) for indirect channel partners (Device Chain Store, Online, Traditional, Modern Retail, Direct Channel)',
    tags: [
      'Flutter',
      'Android & iOS',
      'Clean Architecture',
      'Responsive',
      'Firebase',
      'Qiscus',
      'Bloc & Cubit',
    ],
  },
  {
    title:
      'Organisasi Perusahaan Alat - Alat Kesehatan dan Laboratorium Indonesia - Gakeslab Indonesia',
    content:
      'Application of the Association of Medical Equipment and Laboratory Company Organizations (GAKESLAB) in Indonesia. Where you can see the latest information, contribution reports, changes to company profile data or conduct polls shared by the central admin, etc.',
    tags: [
      'Flutter',
      'Android & iOS',
      'Clean Architecture',
      'Responsive',
      'Firebase',
      'Bloc & Cubit',
    ],
  },
  {
    title: 'Organisasi Orthopaedi dan Traumatologi - Paboi',
    content:
      'Paboi Mobile is a mobile application designed to facilitate orthopedic specialists in Indonesia (Paboi) to always update information about the world of orthopedics such as information between PABOI members, seminars, and general information related to P2KB/COD needed to improve medical services through the notification feature. In addition, PABOI members will find it easier to update documents and practice schedules because they can be accessed without having to type in a URL.',
    tags: [
      'Flutter',
      'Android & iOS',
      'Clean Architecture',
      'Responsive',
      'Firebase',
      'Bloc & Cubit',
    ],
  },
  {
    title: 'Kimia Farma (E - Commerce)',
    content:
      'Kimia Farma Mobile comes with a new look that is easier to use, more complete products, ease of online consultation with pharmacists, reservations for Covid-19 examination services, doctor appointment reservations and Medical Check Up reservations and is directly connected to the nearest pharmacy, clinic and clinical laboratory network.',
    tags: ['MVVM', 'Android', 'Kotlin', 'Responsive', 'Firebase'],
  },
  {
    title: 'Kimia Farma - Homecare Doctor',
    content:
      'This application is used for internal doctor consultations such as video calls, viewing patient schedules, providing medical records and medication online.',
    tags: ['iOS', 'Swift', 'Responsive', 'Firebase'],
  },
  {
    title: 'Biofarma - Product Enterprise',
    content:
      'This website was created to generate vaccine production schedules and is equipped with other reports.',
    tags: ['C#', 'HTML', 'CSS', 'Javascript', 'SQL', '.Net Framework', 'MVC'],
  },
  {
    title: 'House of shoes - Aplikasi Jasa Cuci Sepatu',
    content: 'This application is used to order shoe washing services',
    tags: ['Java', 'Android', 'MVP', 'Responsive'],
  },
  {
    title: 'Rumah IT Bandung - Rental Mobil',
    content: 'Create a website for car rental sales',
    tags: ['PHP', 'HTML', 'CSS', 'Javascript', 'SQL', 'Codeigniter', 'MVC'],
  },
  {
    title: 'Duit Motret - Aplikasi Akuntansi Fotografer',
    content:
      'Is an accounting application designed to record income and expenses related to photographer needs, and can create invoices for clients.',
    tags: [
      'Flutter',
      'Android & iOS',
      'Clean Architecture',
      'Responsive',
      'Firebase',
      'Bloc & Cubit',
    ],
  },
  {
    title: 'Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (E - Office)',
    content:
      'Creation of an E-Office system to optimize and streamline administration management and licensing services that are more modern and faster.',
    tags: ['PHP', 'HTML', 'CSS', 'Javascript', 'SQL', 'Codeigniter', 'MVC'],
  },
]
</script>

<template>
  <div class="place-items-center">
    <!-- Header -->
    <header
      class="w-full p-[2rem] md:p-[4rem] max-w-4xl flex flex-col gap-y-4 h-screen justify-center items-center md:pb-20"
    >
      <div class="flex w-full justify-between">
        <MoleculesProfile
          :name="'Yusup Maulanadireja'"
          :image="'https://avatar.iran.liara.run/public/boy'"
          :desc="'Mobile Engineer'"
        />

        <MoleculesSocialMedia
          :visible-instagram="true"
          :visible-tiktok="true"
          @click-tiktok="openLink('https://www.tiktok.com/@ucupcoder')"
          @click-instagram="openLink('https://www.instagram.com/yusupmaulana/')"
        />
      </div>

      <h1 class="text-4xl lg:text-5xl">
        <span class="font-bold text-white">I build mobile apps</span> that turn
        <span class="font-bold text-white">ideas</span> into
        <span class="font-bold text-white">impactful user experiences</span>
      </h1>
      <p class="text-justify">
        Hello, my name is Yusup Maulanadireja, and I am a dedicated Software Engineer with a passion
        for developing innovative solutions. I also have extensive experience in Mobile Engineering,
        both Android and iOS, using the Flutter programming language.
      </p>
      <div class="w-full">
        <MoleculesIconSlider />
      </div>
      <div class="flex gap-4 md:self-start">
        <AtomsButton
          :bg-color="'bg-[#353538]'"
          :text-color="'text-gray'"
          :type="AtomsButtonType.ELEVATED"
          :onclick="() => sendEmail()"
        >
          <template #prefix>
            <IconWork class="h-6 w-6 mr-1!" />
          </template>
          Hire Me
        </AtomsButton>
        <AtomsButton
          :bg-color="'bg-[#353538]'"
          :text-color="'text-gray'"
          :type="AtomsButtonType.ELEVATED"
          :onclick="() => openLink('https://www.linkedin.com/in/yusup-maulanadireja-46a808150/')"
        >
          <template #prefix>
            <IconLinkedin class="h-6 w-6 mr-1!" />
          </template>
          Linkedin
        </AtomsButton>
      </div>
    </header>

    <!-- Section Currently Working -->
    <section
      class="flex justify-center items-center lg:h-[80vh] w-full p-[2rem] md:p-[4rem] bg-white"
    >
      <div class="flex flex-col max-w-4xl">
        <h1 class="text-2xl lg:text-3xl font-semibold! text-black">
          I’m <span class="text-gray-500">currently working</span> with <br />
          <span class="text-gray-500">Telkom Corporate University</span> to build & maintenance
          <br />
          their product the name is <span class="text-gray-500">myDigiLearn</span>.
        </h1>

        <div class="basis-[80%] flex flex-col items-center justify-center">
          <div class="flex flex-col items-center text-black">
            <h2 class="text-gray-500 text-2xl lg:text-3xl font-bold! p-4">myDigiLearn</h2>
            <h3 class="text-gray-500 text-lg lg:text-xl font-medium!">Senior Mobile Engineer</h3>
            <p class="text-center py-4">
              myDigiLearn is an online learning platform from Telkom Corporate University that is
              planned to be a LearningHub for BUMNs in Indonesia. myDigiLearn develops various
              technology-based learning products that can be accessed via the myDigiLearn website on
              your computer or smartphone.
            </p>
            <MoleculesTagChips
              :tags="[
                'Flutter',
                'Unit Testing',
                'CI/CD Pipelines',
                'Clean Architecture',
                'Reusable Component',
                'Firebase',
                'Web Socket',
                'Bloc',
                'Google Analytics',
                'Crashlytics / Sentry',
                'Code Review',
                'Branching Strategies',
                'Problem-Solving',
                'Performance Optimization',
              ]"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Section Experience Working -->
    <section class="flex flex-col justify-center items-center w-full p-[2rem] md:p-[4rem]">
      <div class="flex flex-col max-w-4xl h-full space-y-8!">
        <h1 class="text-2xl lg:text-3xl font-semibold! self-start">
          I’ve worked as a <span class="text-white">senior Mobile Engineer</span> <br />and
          <span class="text-white">Fullstack Developer</span> for:
        </h1>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AtomsCard>
            <div class="flex flex-col gap-2">
              <img
                class="filter grayscale h-16 object-contain"
                src="@/assets/company/ic-mydigilearn.png"
                alt="logo mydigilearn"
              />
              <h4 class="text-xl font-medium! text-center">Senior Mobile Engineer</h4>
              <p class="text-sm font-light!"></p>
            </div>
          </AtomsCard>

          <AtomsCard>
            <div class="flex flex-col gap-2">
              <img
                class="filter grayscale h-16 object-contain"
                src="@/assets/company/ic-gits.webp"
                alt="logo gits indonesia"
              />
              <h4 class="text-xl font-medium! text-center">Mobile Engineer</h4>
              <p class="text-sm font-light!"></p>
            </div>
          </AtomsCard>

          <AtomsCard>
            <div class="flex flex-col gap-2">
              <img
                class="filter grayscale h-16 object-contain"
                src="@/assets/company/ic-bigio.png"
                alt="logo bigio"
              />
              <h4 class="text-xl font-medium! text-center">Mobile Developer</h4>
              <p class="text-sm font-light!"></p>
            </div>
          </AtomsCard>

          <AtomsCard>
            <div class="flex flex-col gap-2">
              <img
                class="filter grayscale h-16 object-contain"
                src="@/assets/company/ic-telkom.svg"
                alt="logo telkom indonesia"
              />
              <h4 class="text-xl font-medium! text-center">IT Support</h4>
              <p class="text-sm font-light!"></p>
            </div>
          </AtomsCard>

          <AtomsCard>
            <div class="flex flex-col gap-2">
              <img
                class="filter grayscale h-16 object-contain"
                src="@/assets/company/ic-rumah-it.png"
                alt="logo rumah it"
              />
              <h4 class="text-xl font-medium! text-center">Fullstack</h4>
              <p class="text-sm font-light!"></p>
            </div>
          </AtomsCard>
        </div>
      </div>
    </section>

    <!-- Section Background -->
    <section
      class="flex justify-center items-center w-full p-[2rem] md:p-[4rem] text-black bg-white"
    >
      <div class="flex flex-col max-w-4xl h-full space-y-4!">
        <div class="space-y-2!">
          <h2 class="text-2xl lg:text-3xl font-bold! text-center">Background</h2>
          <p class="text-center">
            I was born and raised in Bandung, Indonesia. Most of my work experience is in Bandung,
            but I have also worked remotely with teams in Jakarta, Bali, Yogyakarta, and even abroad
            as a freelancer. I have been a Mobile Engineer for about 8 years, always eager to learn
            new things. As a person, I am pragmatic, flexible, and adaptable to situations and
            challenges in life. I have demonstrated a leadership mindset, listening and caring for
            the people around me to help them succeed and grow.
          </p>
        </div>

        <div
          class="flex flex-col md:flex-row justify-between! space-y-4! md:space-y-0! md:space-x-3!"
        >
          <div class="flex flex-1 flex-col space-y-2!">
            <h2 class="text-2xl lg:text-3xl font-bold! text-center md:text-start">Passion</h2>
            <p class="text-center md:text-start">
              Being a mobile engineer is not just a job for me, but a calling to create meaningful
              digital experiences. I believe that every line of code can be a bridge between user
              needs and business goals. Combining technology, design, and empathy, I always strive
              to build applications that not only function, but also make an impact—bringing value,
              convenience, and happiness into the palm of the user’s hand.
            </p>
          </div>
          <div class="flex flex-1 flex-col space-y-2!">
            <h2 class="text-2xl lg:text-3xl font-bold! text-center md:text-start">Experience</h2>
            <p class="text-center md:text-start">
              Over the years of my work as a mobile engineer, I have become accustomed to being the
              bridge between technology and user needs. At organizations of all sizes from startups
              to large enterprises, I have been directly involved in building applications that are
              not only stable and scalable, but also intuitive and enjoyable to use. My experience
              includes working closely with designers, product owners, and stakeholders to create
              user-centric mobile solutions, as well as leading technical initiatives that drive
              efficiency and product quality. For me, engineering is about creating real change
              through impactful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Portfolio -->
    <section class="p-[2rem] md:p-[4rem]">
      <div class="max-w-4xl space-y-8!">
        <h2 class="text-white text-2xl lg:text-3xl font-semibold! mb-4">
          <span class="text-gray-500">Check out</span> my work &
          <span class="text-gray-500">let’s collaborate</span><br />
          on something awesome!
        </h2>
        <div class="columns-1 sm:columns-2 lg:columns-3 gap-4">
          <div
            v-for="(post, index) in posts"
            :key="index"
            class="mb-4! bg-[#1e1e20] break-inside-avoid space-y-2! p-4 rounded-2xl shadow-md"
          >
            <h3 class="text-lg text-white font-bold!">{{ post.title }}</h3>
            <p>{{ post.content }}</p>

            <div
              v-for="(tag, index) in post.tags"
              class="text-white border m-1! inline-block rounded-lg p-2"
            >
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer></footer>
  </div>
</template>

<style scoped></style>
