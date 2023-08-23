<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import vueLogo from './images/vuelogo.png'
import webpackLogo from './images/webpacklogo.png'
import piniaLogo from './images/pinialogo.png'
import tailwindLogo from './images/tailwindlogo.png'
</script>

<template>
  <div class="grid md:grid-cols-2">
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Documentation</template>
      <li><a href="https://vuejs.org/guide/introduction.html" target="_blank" rel="noopener">Vue JS</a> (Everything you need to know about Vue is here)</li>
      <li><a href="https://developer.wordpress.org/themes/getting-started/" target="_blank" rel="noopener">Wordpress Theme Development</a> (Learn the structure and logic of wordpress themes here)</li>
      <li><a href="https://webpack.js.org/guides/getting-started/" target="_blank" rel="noopener">Webpack</a> (Main documentation)</li>
      <li><a href="https://cli.vuejs.org/guide/webpack.html" target="_blank" rel="noopener">Using Webpack with Vue</a> (Using webpack plugins)</li>
    </WelcomeItem>



    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Ecosystem</template>
      Tools and libraries included in this project:
      <li><a href="https://webpack.js.org/" target="_blank" rel="noopener">Webpack</a></li>
      <li><a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a></li>
      <li><a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a></li>
      <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener">Tailwind</a></li>
      <div class="mt-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
        <span>
          <div class="flex justify-between items-center">
            <img :src="vueLogo" alt="vue-logo" class="w-12"/>
            <img :src="webpackLogo" alt="vue-logo" class="w-12"/>
            <img :src="piniaLogo" alt="vue-logo" class="h-[3.4rem]"/>
            <img :src="tailwindLogo" alt="vue-logo" class="w-16"/>
          </div>
        </span>
      </div>
    </WelcomeItem>



    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Help</template>
      If you notice an issue with this project or just have a general question, you can:
      <li>Visit my website <a href="https://shaunlaclemence.com" target="_blank" rel="noopener">shaunlaclemence.com</a> and drop me an email.</li>
      <li>Drop me a message on <a href="https://github.com/shaunBoahCodes" target="_blank" rel="noopener">Github</a>.</li>
      <li>Post an issue on the <a href="https://github.com/shaunBoahCodes/shaun-vueXwordpress-template" target="_blank" rel="noopener">shaun-vueXwordpress-template</a> repository.</li>
      <li>Reach me on my socials <a target="_blank" rel="noopener">Instagram</a>.</li>
    </WelcomeItem>



    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Support Me</template>
      This project took 2 weeks to initialise and is currently being maintained, any support will be a big help to me!
      You can make a small donation 
      <a href="https://ko-fi.com/shaunlaclemence" target="_blank" rel="noopener">here</a>.
    </WelcomeItem>
  </div>
</template>
