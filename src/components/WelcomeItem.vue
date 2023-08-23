<template>
  <div class="border border-black/20 bg-black/10 rounded-lg p-5 m-4 flex">

    <div>

      <div class="flex items-center gap-3">
        <p>
          <slot name="icon"></slot>
        </p>
        <h3>
          <slot name="heading"></slot>
        </h3>
      </div>

      <div class="ml-4 mt-2">
        <slot></slot>
      </div>

    </div>
  </div>
</template>