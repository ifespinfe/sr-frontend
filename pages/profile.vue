<template>
  <div class="container pb-20">
    <div class="flex gap-x-2 items-center fixed top-24 z-10">
      <SharedBackButton :to="isHost ? '/dashboard' : '/audience'" />
      <div class="text-2xl font-medium font-display">My Profile</div>
    </div>
    <SharedLoadingArea :error="error" :loading="status === 'pending'">
      <div
        :class="
          cn(
            'grid gap-6 mt-20',
            isHost
              ? 'md:grid-cols-[1fr_348px]'
              : 'md:grid-cols-[1fr_348px] lg:grid-cols-[1fr_348px]'
          )
        "
      >
        <div :class="cn('space-y-4')">
          <div
            class="border bg-white/5 p-6 rounded-2xl flex items-center gap-8 flex-wrap lg:flex-nowrap"
          >
            <div
              class="size-[100px] sm:size-[120px] lg:size-[140px] relative shrink-0"
            >
              <Avatar
                :image="profile_picture"
                :initials="initials"
                class="!rounded-xl !w-full !h-full !text-3xl"
              />
              <UploadPhoto @uploaded="profile_picture = $event">
                <UiButton
                  :variant="'secondary'"
                  :size="'icon'"
                  class="absolute -bottom-1 -right-1"
                >
                  <Edit2 class="size-3" />
                </UiButton>
              </UploadPhoto>
            </div>

            <div class="space-y-5">
              <div class="space-y-1">
                <div class="text-xl font-semibold flex items-center gap-2">
                  <span>{{
                    data?.data?.user_name ??
                    data?.data?.stage_name ??
                    data?.data?.email ??
                    "Add a username"
                  }}</span>
                  <ModalsEditUsername
                    :username="
                      data?.data?.user_name ?? data?.data?.stage_name ?? ''
                    "
                    :updating="updating"
                    @save="updateUsername"
                  />
                </div>
                <div class="text-foreground/80">
                  {{ data?.data?.email ?? "Add email" }}
                </div>
              </div>
              <div
                class="flex items-center gap-x-6 flex-wrap gap-y-4 text-muted-foreground text-sm sm:text-base"
              >
                <div class="flex items-center gap-x-2">
                  <SvgIcon name="account_circle" />
                  <b>{{
                    isHost
                      ? data?.data?.stats?.followers ?? "0"
                      : data?.data?.followers ?? "0"
                  }}</b>
                  FOLLOWERS
                </div>
                <NuxtLink
                  class="text-primary flex items-center gap-x-2"
                  to="/following"
                >
                  <SvgIcon name="account_circle" />
                  <b>{{
                    isHost
                      ? data?.data?.stats?.following ?? "0"
                      : data?.data?.following ?? "0"
                  }}</b>
                  <span>FOLLOWING</span> <ChevronRight />
                </NuxtLink>

                <div class="flex items-center gap-x-2">
                  <SvgIcon name="genres" />
                  <b>{{
                    isHost
                      ? data?.data?.stats?.requests
                      : data?.data?.total_requests ?? "0"
                  }}</b>
                  REQUESTS
                </div>
                <div class="flex items-center gap-x-2" v-if="isHost">
                  <SvgIcon name="celebration" />
                  <b>{{ data?.data?.stats?.events ?? "" }}</b> EVENTS
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="isHost"
            class="border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-6"
          >
            <div class="font-semibold">About me</div>
            <UiTextarea
              label="Bio"
              placeholder="Tell your audience about yourself"
              class="min-h-[80px]"
              v-model="profile.user.bio"
            />
          </div>
          <div
            class="border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-6"
            v-if="false"
          >
            <div class="font-semibold">Details</div>
            <div class="space-y-6">
              <div class="flex items-center gap-x-2">
                <Avatar
                  :image="profile_picture"
                  :initials="initials"
                  class="!rounded-xl !size-[64px]"
                >
                </Avatar>
                <div class="space-y-2">
                  <div class="font-semibold">{{ data?.data?.email }}</div>
                  <div class="text-foreground/80">
                    {{ data?.data?.stage_name ?? "Add a username" }}
                  </div>
                </div>
              </div>
              <div class="lg:hidden">
                <UploadPhoto @uploaded="profile_picture = $event" />
              </div>

              <UiInputField
                v-if="isHost"
                label="Stage name"
                placeholder="Enter your stage name"
                v-model="profile.user.stage_name"
              />

              <UiTextarea
                v-if="isHost"
                label="Bio"
                placeholder="Tell your audience about yourself"
                class="min-h-[80px]"
                v-model="profile.user.bio"
              />
              <UiInputField
                v-else
                label="Username"
                placeholder="Enter your username"
                v-model="audience_profile.user.user_name"
              />
            </div>
            <div class="hidden lg:block">
              <UploadPhoto @uploaded="profile_picture = $event" />
            </div>
          </div>

          <NuxtLink v-if="!isHost" to="/order-history" class="hidden">
            <Wallet />
          </NuxtLink>

          <div
            class="border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-4"
            v-if="isHost && false"
          >
            <div class="font-semibold">Stats</div>
            <div class="flex flex-wrap gap-4 items-center">
              <div class="flex items-center gap-2">
                <SvgIcon name="account_circle" />
                <div class="flex items-center gap-1">
                  <span class="font-semibold">{{
                    data?.data?.stats?.followers ?? 0
                  }}</span>
                  <span class="text-muted-foreground">FOLLOWERS</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <SvgIcon name="celebration" />
                <div class="flex items-center gap-1">
                  <span class="font-semibold">{{
                    data?.data?.stats?.events ?? 0
                  }}</span>
                  <span class="text-muted-foreground">EVENTS</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <SvgIcon name="genres" />
                <div class="flex items-center gap-1">
                  <span class="font-semibold">{{
                    data?.data?.stats?.requests ?? 0
                  }}</span>
                  <span class="text-muted-foreground">REQUESTS</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <SvgIcon name="genres" />
                <div class="flex items-center gap-1">
                  <span class="font-semibold">{{
                    data?.data?.stats?.fulfilled ?? 0
                  }}</span>
                  <span class="text-muted-foreground">FUFILLED</span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-4"
          >
            <div class="font-semibold">Bio Data</div>
            <div class="space-y-4">
              <div
                class="grid grid-cols-[repeat(auto-fit,_minmax(266px,_1fr))] gap-4"
              >
                <UiInputField
                  v-if="isHost"
                  type="date"
                  label="Date of birth"
                  v-model="profile.user.dob"
                  :max="dateLimit"
                />
                <UiInputField
                  v-else
                  type="date"
                  label="Date of birth"
                  v-model="audience_profile.user.dob"
                  :max="dateLimit"
                />
                <UiSelectField
                  v-if="isHost"
                  :options="['male', 'female', 'other']"
                  placeholder="Select your gender"
                  label="Gender"
                  v-model="profile.user.gender"
                />
                <UiSelectField
                  v-else
                  :options="['male', 'female', 'other']"
                  placeholder="Select your gender"
                  label="Gender"
                  v-model="audience_profile.user.gender"
                />
              </div>
              <UiSelectField
                v-if="isHost"
                :options="['Nigeria']"
                placeholder="Select your country of residence"
                label="Country"
                v-model="profile.user.country"
              />
              <UiSelectField
                v-else
                :options="['Nigeria']"
                placeholder="Select your country of residence"
                label="Country"
                v-model="audience_profile.user.country"
              />
            </div>
          </div>

          <div
            class="border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-6"
          >
            <div class="font-semibold">Password</div>
            <!-- <UiInputField
              placeholder="Your password"
              label="Password"
              type="password"
            /> -->
            <PasswordChange />
          </div>
          <div
            class="border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-4"
            v-if="isHost"
          >
            <div class="space-y-2">
              <div class="font-semibold">Bank Account</div>
              <div class="text-muted-foreground">
                This is where we will transfer your withdrawals to, make sure
                its a valid account
              </div>
            </div>
            <div class="space-y-4">
              <UiSelectField
                placeholder="Select your bank"
                label="Bank"
                :options="bankNames"
                v-model="profile.bank_account.bank_name"
                :loading="bank_status === 'pending'"
              />
              <UiInputField
                placeholder="Enter your bank account"
                label="Account Number"
                v-model="profile.bank_account.account_number"
              />
              <UiInputField
                label="Account Name"
                disabled
                v-model="profile.bank_account.account_name"
              >
                <div
                  class="absolute right-3 top-1/2 -translate-y-1/2"
                  v-if="verifying"
                >
                  <div
                    class="flex gap-x-1 items-center text-sm text-muted-foreground"
                  >
                    <Loader class="size-4 animate-spin" />
                    <div>Verifying..</div>
                  </div>
                </div>
              </UiInputField>
            </div>
          </div>
          <div class="flex justify-end">
            <UiButton
              :size="'lg'"
              @click="updateProfile"
              :loading="updating"
              class="w-full sm:w-auto"
            >
              Save Changes
            </UiButton>
          </div>
        </div>

        <div v-if="isHost">
          <div
            class="w-full aspect-square rounded-3xl grid place-items-center border bg-white/5"
            v-if="status === 'pending'"
          >
            <Loader class="size-5 animate-spin" />
          </div>
          <QrCard
            :name="hostName"
            :link="hostLink"
            :id="data?.data?.id"
            v-else-if="data?.data?.id"
          />
        </div>
        <div v-else-if="data?.data?.user_name">
          <ProfileCard :username="data?.data?.user_name" />
        </div>
      </div>
    </SharedLoadingArea>
  </div>
</template>

<script lang="ts" setup>
import PasswordChange from "~/components/modals/password-change.vue";
import UploadPhoto from "~/components/modals/upload-photo.vue";
import QrCard from "~/components/cards/qr-card.vue";
import ProfileCard from "~/components/cards/profile-card.vue";
import { Loader, Edit2, ChevronRight } from "lucide-vue-next";
import type { ApiError, ApiResponse } from "~/types";
import type { AudienceProfileUpdate, AuthUser } from "~/types/auth";
import type { HostProfileUpdate } from "~/types/auth";
import SvgIcon from "~/components/svg-icon.vue";
import { UsernameSchema, BioSchema } from "~/schemas/user-schema";
import type { Bank, BankVerificationPayload } from "~/types/payment";
import Wallet from "~/components/cards/wallet.vue";
import Avatar from "~/components/avatar.vue";

const {
  $config: {
    public: { APP_BASE_URL },
  },
  $repo: { auth, bank: bankModule },
} = useNuxtApp();

const { auth_user, auth_token, saveAuthUser } = useAuth();

const dateLimit = computed(() => {
  const today = new Date();
  const minDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  const formatted = useDateFormat(minDate, "YYYY-MM-DD")?.value;
  return formatted;
});

const isHost = computed(() => auth_user.value?.role === "host");

const { data, status, error, refresh } = useCustomFetch<ApiResponse<AuthUser>>(
  isHost.value ? "/user?stat=true" : "/user?stat=true"
);

const { data: bank, status: bank_status } =
  useCustomFetch<ApiResponse<Bank[]>>("/bankaccount/list");

const NigerianBankList = computed(() => {
  return bank?.value?.data ?? [];
});

const selectedBank = computed(() =>
  NigerianBankList.value.find(
    (item) => item.name === profile.value.bank_account.bank_name
  )
);

const bankNames = computed(() =>
  NigerianBankList.value.map((item) => item.name)
);

const name = computed(
  () =>
    data.value?.data?.stage_name ??
    data.value?.data?.user_name ??
    data.value?.data?.email
);
const initials = computed(() => getInitials(name.value ?? ""));
const profile_picture = ref(data.value?.data?.profile_picture ?? "");
const hostName = computed(() => data.value?.data?.stage_name ?? "");
const hostLink = computed(
  () => `${APP_BASE_URL}/${data.value?.data?.slug ?? ""}`
);

const profile = useState<HostProfileUpdate>("HOST-PROFILE", () => {
  return {
    user: {
      stage_name:
        data.value?.data?.stage_name ?? data.value?.data?.user_name ?? "",
      user_name:
        data.value?.data?.user_name ?? data.value?.data?.stage_name ?? "",
      name: data.value?.data?.name ?? "",
      bio: data.value?.data?.bio ?? "",
      dob: data.value?.data?.dob ?? null,
      gender: data.value?.data?.gender ?? null,
      country: data.value?.data?.country ?? "",
      profession: data.value?.data?.profession ?? null,
    },
    bank_account: {
      bank_name: data.value?.data?.bank_account?.bank_name ?? "",
      account_name: data.value?.data?.bank_account?.account_name ?? "",
      account_number: data?.value?.data?.bank_account?.account_number ?? "",
      code: data.value?.data?.bank_account?.code ?? "",
      country: data?.value?.data?.bank_account?.country ?? "",
    },
  };
});

const audience_profile = useState<AudienceProfileUpdate>(
  "AUDEINCE-PROFILE",
  () => {
    return {
      user: {
        user_name: data.value?.data?.user_name ?? "",
        dob: data.value?.data?.dob ?? null,
        gender: data.value?.data?.gender ?? "",
        country: data.value?.data?.country ?? "",
      },
    };
  }
);

watchEffect(() => {
  const user = data.value?.data;
  if (user) {
    if (auth_user.value && auth_token.value) {
      const updated_user: AuthUser = {
        ...auth_user.value,
        bio: user.bio,
        country: user.country,
        dob: user.dob,
        gender: user.gender,
        profession: user.profession,
        stage_name: user.stage_name,
        user_name: user.user_name,
        profile_picture: user.profile_picture,
        bank_account: data.value?.data?.bank_account,
      };
      saveAuthUser(auth_token.value, updated_user);
    }
    profile_picture.value = user?.profile_picture ?? "";
    profile.value.user.bio = user?.bio ?? "";
    profile.value.user.country = user.country ?? "";
    audience_profile.value.user.country = user.country ?? "";
    profile.value.user.dob = user.dob ?? null;
    audience_profile.value.user.dob = user.dob ?? null;
    profile.value.user.gender = user.gender ?? null;
    audience_profile.value.user.gender = user.gender ?? null;
    audience_profile.value.user.user_name = user.user_name ?? "";
    // audience_profile.value.user.name = user.stage_name ?? "";
    profile.value.user.name = user.name ?? "";
    profile.value.user.stage_name = user.stage_name ?? "";
    profile.value.user.user_name = user.user_name ?? user.stage_name ?? "";
    profile.value.user.profession = user.profession ?? null;
    profile.value.bank_account.account_name =
      user.bank_account?.account_name ?? "";
    profile.value.bank_account.account_number =
      user.bank_account?.account_number ?? "";
    profile.value.bank_account.bank_name = user.bank_account?.bank_name ?? "";
    profile.value.bank_account.country =
      user.bank_account?.country ?? "Nigeria";
  }
});

const verifying = ref(false);
const verified = ref<Record<string, boolean>>({});
const verifyAccount = async (payload: BankVerificationPayload) => {
  try {
    if (verified.value[payload.account_number + payload.code]) return;
    profile.value.bank_account.account_name = "";
    verifying.value = true;
    const response = await bankModule.verifyBankAccount(payload);
    verifying.value = false;
    const account_name = response?.data?.account_name;
    if (account_name) {
      profile.value.bank_account.account_name = account_name;
    } else
      showToast({
        title: response.message ?? "Invalid account",
        variant: "warning",
      });
  } catch (e) {
    verified.value[payload.account_number + payload.code] = true;
    verifying.value = false;
    const error = e as ApiError;
    showToast({
      title: error.data?.message ?? "Invalid account",
      variant: "warning",
    });
    console.error("FAILED TO VERIFY ACCOUNT", payload);
    profile.value.bank_account.account_name = "";
  }
};

watchEffect(() => {
  const payload: BankVerificationPayload = {
    bank_name: selectedBank.value?.name ?? "",
    account_number: profile.value.bank_account.account_number,
    code: selectedBank.value?.code ?? "",
    country: "Nigeria",
  };
  if (
    payload.bank_name &&
    payload.code &&
    payload?.account_number?.length > 9 &&
    data.value?.data?.role === "host" &&
    !profile.value.bank_account.account_name &&
    !verifying.value &&
    auth_token.value
  ) {
    console.log("VERIFYING THIS DATA", data.value?.data);
    verifyAccount(payload);
  }
});

const updating = ref(false);

const customVerification = async () => {
  const valid_bio = await BioSchema.isValid(profile.value.user.bio);
  if (!valid_bio) {
    showToast({
      title: "Limit bio to just 350 characters",
      variant: "warning",
    });
    return false;
  }
  profile.value.bank_account.code = selectedBank.value?.code ?? "";
  const fields = [
    {
      field: "bank_name",
      message: "Select your bank name to continue",
    },
    {
      field: "account_number",
      message: "Enter your account_number to continue",
    },
    {
      field: "account_name",
      message: "Enter your account name to continue",
    },
  ] as const;

  for (const item of fields) {
    if (!profile.value.bank_account[item.field]) {
      showToast({ title: item.message, variant: "warning" });
      return false;
    }
  }
  return true;
};

const updateUsername = (username: string) => {
  if (isHost.value) {
    profile.value.user.stage_name = username;
    profile.value.user.user_name = username;
  } else {
    audience_profile.value.user.user_name = username;
  }
  updateProfile();
};

const updateProfile = async () => {
  try {
    if (!isHost.value) {
      const valid = await UsernameSchema.isValid(
        audience_profile.value.user.user_name
      );
      if (!valid) {
        showToast({ title: "Username not valid", variant: "warning" });
        return;
      }
    }

    const verified = isHost.value ? await customVerification() : true;
    if (!verified) return;
    updating.value = true;
    const response = await auth.updateProfile(
      isHost.value ? profile.value : audience_profile.value
    );
    updating.value = false;
    if (response.data) {
      showToast({
        title: "Updated",
        description: response.message,
      });
      refresh();
    }
  } catch (e) {
    updating.value = false;
    const error = e as ApiError;
    showToast({
      title: "Failed",
      description: error.data?.message ?? "Failed to update profile",
      variant: "warning",
    });
  }
};

useSeoMeta({
  title: "My Profile",
});
</script>
