<template>
  <div class="size-full relative overflow-hidden bg-white">
    <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div class="sm:max-w-lg">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Tìm kiếm theo ý tưởng của bạn
          </h1>
          <p class="mt-4 text-xl text-gray-500">
            Chia sẻ và tải về những hình ảnh theo sở thích ,nhu cầu,ý tưởng của
            bạn
          </p>
        </div>
        <div>
          <div class="mt-10 overflow-hidden">
            <div
              aria-hidden="true"
              class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div
                class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
              >
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div
                    class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                  >
                    <div
                      v-for="(image, index) in dataHero.slice(0, 3)"
                      :key="index"
                      class="h-64 w-44 overflow-hidden rounded-lg"
                    >
                      <img
                        :src="image.img_url"
                        :alt="image.description"
                        :class="image.class"
                      />
                    </div>
                  </div>
                  <div
                    class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                  >
                    <div
                      v-for="(image, index) in dataHero.slice(3, 5)"
                      :key="index"
                      class="h-64 w-44 overflow-hidden rounded-lg"
                    >
                      <img
                        :src="image.img_url"
                        :alt="image.description"
                        :class="image.class"
                      />
                    </div>
                  </div>
                  <div
                    class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                  >
                    <div
                      v-for="(image, index) in dataHero.slice(5, 8)"
                      :key="index"
                      class="h-64 w-44 overflow-hidden rounded-lg"
                    >
                      <img
                        :src="image.img_url"
                        :alt="image.description"
                        :class="image.class"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <UButton
              @click="handleNextPage"
              class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
            >
              Trải nghiệm ngay
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import dataHero from "@/assets/viewhome.json";
  const handleNextPage = () => {
    const cookie = useCookie("access_token");
    if (!cookie.value) {
      navigateTo("/login");
    }
  };
</script>
