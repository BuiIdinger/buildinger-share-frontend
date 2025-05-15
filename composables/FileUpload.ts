import { ref } from "vue"

export namespace fileUpload {
  export const isDragging = ref<boolean>(false);
  export const isUploading = ref<boolean>(false);

  export const upload = (event: any): void => {
    isUploading.value = true;

    const files = event.target.files;
    console.log(files);
  }

  export const drop = (event: any): void => {
    isUploading.value = true;

    const files = event.dataTransfer.files;

    isDragging.value = false;
    console.log(files);
  }
} // namespace fileUpload