<script setup>
import { useI18n } from "vue-i18n";
import { watch } from "vue";
import { useLocaleStore } from '@/store/stores.ts';

const { locale, availableLocales } = useI18n();
const localeStore = useLocaleStore();

locale.value = localeStore.locale;

watch(locale, (newLocale) => {
    localeStore.setLocale(newLocale);
});

function clickFlag(newLocale) {
    locale.value = newLocale;
}

function getFlag(code) {
    return `/images/locales/${code}.svg`;
}
</script>

<template>
    <div class="p-4">
        <div class="locale-changer mb-6">
            <select v-model="locale" class="mx-auto block border border-gray-300 p-2 rounded shadow-sm">
                <option
                    v-for="selectedLocale in availableLocales"
                    :key="`locale-${selectedLocale}`"
                    :value="selectedLocale"
                >
                    {{ selectedLocale }}
                </option>
            </select>
        </div>

        <div class="locale-changer">
            <div class="flex items-center gap-3 justify-center">
                <img
                    v-for="selectedLocale in availableLocales"
                    :key="`locale-${selectedLocale}`"
                    :src="getFlag(selectedLocale)"
                    :class="{
                        'opacity-100': selectedLocale === locale,
                        'opacity-30 hover:opacity-90': selectedLocale !== locale
                      }"
                    @click="clickFlag(selectedLocale)"
                    :alt="selectedLocale"
                    class="cursor-pointer transition-opacity duration-200"
                >
            </div>
        </div>
    </div>
</template>
