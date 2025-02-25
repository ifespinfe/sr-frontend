<template>
  <Modal :size="'md'" v-model="open" controlled>
    <template #heading>
      <div class="font-display text-2xl font-medium">Upload photo</div>
    </template>
    <template #trigger>
      <slot>
        <Button :variant="'secondary'" class="w-full">EDIT</Button>
      </slot>
    </template>
    <div class="p-6">
      <div
        :class="
          cn(
            'w-full max-w-[410px] mx-auto aspect-[1.42] border border-dashed rounded-lg relative',
            isOverDropZone ? 'border-primary' : ' border-input'
          )
        "
        ref="dropZoneRef"
      >
        <img
          v-if="upload_preview"
          :src="upload_preview"
          alt="profile-picture"
          class="w-full h-full object-contain rounded-[inherit]"
        />
        <div
          class="space-y-4 w-full h-full grid place-items-center text-center relative"
          v-else
        >
          <Upload class="size-8 text-muted-foreground" />
          <div class="space-y-2">
            <div class="text-2xl font-medium font-display">
              {{ isOverDropZone ? "Drop picture" : " Drag and drop picture" }}
            </div>
            <div class="text-muted-foreground text-sm">
              JPEG, or PNG file with the max size of 3MB
            </div>
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-2 gap-4 mt-6 items-center"
        v-if="upload_preview"
      >
        <Button :variant="'secondary'" :size="'lg'" class="w-full relative">
          <label for="upload" class="absolute inset-0 cursor-pointer">
            <div class="place-center">
              CHANGE <span class="hidden sm:inline">PHOTO</span>
            </div>
          </label>
        </Button>
        <Button
          :size="'lg'"
          @click="completeUpload"
          :loading="uploading"
          hide_loading_text
        >
          SAVE
        </Button>
      </div>

      <Button
        :variant="'secondary'"
        :size="'lg'"
        class="mt-6 w-full relative"
        v-else
      >
        <label for="upload" class="absolute inset-0 cursor-pointer">
          <div class="place-center">CLICK TO UPLOAD FILE</div>
        </label>
      </Button>

      <input
        type="file"
        id="upload"
        class="hidden"
        accept=".jpeg, .jpg, .png"
        @change="handleFileChange"
      />
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import { Upload } from "lucide-vue-next";
import Button from "../ui/button.vue";

const emit = defineEmits<{ uploaded: [url: string] }>();
const open = ref(false);
const dropZoneRef = ref<HTMLDivElement>();

const {
  previewFile,
  uploadFile,
  uploading,
  upload_error,
  upload_preview,
  uploaded_url,
} = useFileUpload();

const onFileSelectedOrDropped = (files?: FileList | File[] | null) => {
  if (files?.length) {
    previewFile(files[0]);
  }
};

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const files = input.files;
  onFileSelectedOrDropped(files);
};

const completeUpload = () => {
  uploadFile((url) => {
    emit("uploaded", url);
    open.value = false;
    showToast({ title: "Done", description: "Picture uploaded" });
  });
};

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop: onFileSelectedOrDropped,
  dataTypes: ["image/jpeg", "image/jpg", "image/png"],
  multiple: false,
  preventDefaultForUnhandled: false,
});
</script>
