<template>
    <div class="absolute inset-0 bg-black z-index"
    >
        <div class=" flex items-start justify-center min-h-screen mt-24 text-center w:"
        >
            <div class="lg:w-[60%] md:w-[70%] sm:w-[100%] xs:w-[100%] shadow-xl p-6"
                role="dialog"
                aria-modal="true"
            >
                <div class="text-start mb-3 flex items-start">
                    <Button :variant="'ghost'" @click="$event => $emit('close')"
                        class=""
                    >
                        X
                    </Button>
                    <div class="text-3xl font-semibold">Notifications</div>
                </div>
                <div class="border bg-popover text-white rounded-lg p-4">
                    <div class="bg-[#38373A] text-start rounded-3 border p-2 w-[100%] rounded-lg flex justify-between mb-2">
                        <div class="w-[10%] me-2">
                            <Button :variant="'ghost'"
                                class="!rounded-full border !p-2"
                                style="background-color: #E6684033"
                            >
                                <SvgIcon name="music_note" />
                            </Button>
                        </div>
                        <div class="w-[70%]">
                            <p class="font-semibold text-base">Song request was accepted</p>
                            <p class="text-muted-foreground font-normal">
                                Dj focati is now playing Oyinmo by Youngiduu
                            </p>
                        </div>
                        <div class="w-[20%] text-muted-foreground text-xs flex justify-end">
                            <span>Just now</span> <SvgIcon name="red_dot" class="ms-2 mt-1" />
                        </div>
                    </div>

                    <div class="bg-[#38373A] text-start rounded-3 border p-2 w-[100%] rounded-lg flex justify-between mb-2">
                        <div class="w-[10%] me-2 md:me-3 sm:me-3 xs:me-3">
                            <Button :variant="'ghost'"
                                class="!rounded-full border !p-2"
                                style="background-color: #E6684033"
                            >
                                <SvgIcon name="exclamation" />
                            </Button>
                        </div>
                        <div class="w-[70%]">
                            <p class="font-semibold text-base">Sorry, your Song was not played</p>
                            <div class="text-muted-foreground font-normal">
                                Omolile by Shazzy wasn't played by DJ Focati. Hosts often have specific preferences, 
                                so we've refunded $80 as Spin Credit for future requests. Try sending another request and we'll do our best to get it heard!

                                <div class="flex mt-2">
                                    <NuxtLink
                                        class="text-primary flex items-center gap-x-1"
                                        to="/following"
                                    >
                                        <span>REQUEST AGAIN</span> <ChevronRight />
                                    </NuxtLink>

                                    <NuxtLink
                                        class="text-primary flex items-center gap-x-1"
                                        to="/following"
                                    >
                                        <span>VIEW CREDITS</span> <ChevronRight />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="w-[20%] text-muted-foreground text-xs flex justify-end">
                            <span>Just now</span> <SvgIcon name="red_dot" class="ms-2 mt-1" />
                        </div>
                    </div>

                    <div class="bg-[#38373A] text-start rounded-3 border p-2 w-[100%] rounded-lg flex justify-between mb-2">
                        <div class="w-[10%] me-2">
                            <Button :variant="'ghost'"
                                class="!rounded-full border !p-2"
                                style="background-color: #E6684033"
                            >
                                <SvgIcon name="mic_2" />
                            </Button>
                        </div>
                        <div class="w-[70%]">
                            <p class="font-semibold text-base">
                            Song request was accepted
                            </p>
                            <p class="text-muted-foreground font-normal">
                                Dj focati is now playing Oyinmo by Youngiduu
                            </p>
                        </div>
                        <div class="w-[20%] text-muted-foreground text-xs flex justify-end">
                            <span>Just now</span> <SvgIcon name="red_dot" class="ms-2 mt-1" />
                        </div>
                    </div>

                    <div class="bg-white/5 text-start rounded-3 border p-2 w-[100%] rounded-lg flex justify-between mb-2">
                        <div class="w-[10%] me-2">
                            <Button :variant="'destructive'"
                                class="!rounded-full border !p-2"
                                style="background-color: #E6684033"
                            >
                                <SvgIcon name="exclamation" />
                            </Button>
                        </div>
                        <div class="w-[70%]">
                            <p class="font-semibold text-base">Sorry, your Song was not played</p>
                            <div class="text-muted-foreground font-normal">
                                Omolile by Shazzy wasn't played by DJ Focati. Hosts often have specific preferences, 
                                so we've refunded $80 as Spin Credit for future requests. Try sending another request and we'll do our best to get it heard!

                                <div class="flex mt-2">
                                    <NuxtLink
                                        class="text-primary flex items-center gap-x-1"
                                        to="/following"
                                    >
                                        <span>REQUEST AGAIN</span> <ChevronRight />
                                    </NuxtLink>

                                    <NuxtLink
                                        class="text-primary flex items-center gap-x-1"
                                        to="/following"
                                    >
                                        <span>VIEW CREDITS</span> <ChevronRight />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="w-[20%] text-muted-foreground text-xs flex justify-end">
                            <span>Just now</span> <SvgIcon name="red_dot" class="ms-2 mt-1" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from "../ui/button.vue";
import SvgIcon from "../svg-icon.vue";
import { Loader, Edit2, ChevronRight } from "lucide-vue-next";
</script>