<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger asChild>
      <Button :variant="'ghost'" class="w-auto h-auto !p-0 !rounded-full">
        <AvatarRoot
          class="bg-muted inline-flex size-[40px] select-pointer items-center justify-center overflow-hidden rounded-full align-middle"
        >
          <AvatarImage
            :src="auth_user?.profile_picture"
            class="h-full w-full object-cover"
            v-if="auth_user?.profile_picture"
          />
          <AvatarFallback
            class="leading-1 flex h-full w-full items-center justify-center text-[15px] font-medium uppercase"
          >
            {{
              getInitials(
                auth_user?.stage_name ??
                  auth_user?.user_name ??
                  auth_user?.email ??
                  ""
              )
            }}
          </AvatarFallback>
        </AvatarRoot>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent
        class="z-[150] min-w-[8rem] overflow-hidden rounded-xl border bg-popover p-2 space-y-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
      >
        <DropdownMenuItem asChild v-if="auth_user?.role === 'host'">
          <NuxtLink
            to="/dashboard"
            class="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          >
            <UserCircle2 class="size-4 mr-2" />
            <span>Dashboard</span>
          </NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <NuxtLink
            to="/profile"
            class="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          >
            <UserCircle2 class="size-4 mr-2" />
            <span>Profile</span>
          </NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem asChild v-if="auth_user?.role === 'audience'">
          <NuxtLink
            to="/order-history"
            class="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          >
            <Wallet2 class="mr-2 size-4" />
            <span>Spin credit</span>
          </NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem asChild v-if="auth_user?.role === 'host'">
          <NuxtLink
            to="/wallet"
            class="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          >
            <Wallet2 class="mr-2 size-4" />
            <span>Wallet</span>
          </NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem
          class="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          @select="(_e) => logUserOut(gotoLogin)"
        >
          <LogOut class="size-4 mr-2" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<script lang="ts" setup>
import Button from "./ui/button.vue";
import { LogOut, UserCircle2, Wallet2 } from "lucide-vue-next";
const { logOut: logUserOut, auth_user } = useAuth();
const gotoLogin = () => {
  useRouter().push("/login");
};
</script>
