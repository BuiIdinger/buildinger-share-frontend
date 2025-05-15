<template>
  <div class="h-screen flex justify-center items-center">

    <!-- Uplaod area -->
    <label class="upload-area">
      <input 
        type="file" 
        class="hidden" 
        @change="fileUpload.upload"
        @dragenter.prevent="fileUpload.isUploading.value = true"
        @dragover.prevent="fileUpload.isUploading.value  = true"
        @dragleave.prevent="fileUpload.isUploading.value  = false"
        @drop.prevent="fileUpload.drop"
      />
        <div class="flex flex-col items-center gap-[8px] border border-dashed rounded-[12px] cursor-pointer text-gray-500 w-[75vh] h-[50vh]">
          <div class="flex justify-center items-center w-full h-full">
            <div>

              <!-- Icon -->
              <div class="flex justify-center">
                <IconsShare />
              </div>

              <!-- Instructions -->
              <div v-if="!fileUpload.isUploading.value">
                <p>Drag files here or click to upload</p>
              </div>

              <!-- Uploading -->
              <div v-else>
                <p>Uploading...</p>
              </div>
            </div>

          </div>


          <div>
        </div>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { fileUpload } from "~/composables/FileUpload";
</script>

<style>
.upload-area {
  all: unset;
  display: block;
}
</style>