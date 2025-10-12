import { defineStore } from 'pinia'
import { ref } from 'vue';

/**
 * Locale store
 */
export const useLocaleStore = defineStore('localeStore', () => {
    const locale = ref<string>('en');

    const setLocale = (newLocale: string) => {
        locale.value = newLocale;
    };

    return { locale, setLocale };
}, {
    persist: true,
});

/**
 * Any data store
 */
export const useDataStore = defineStore('dataStore', () => {
    // Состояние: реактивный объект, хранящий пары ключ-значение
    const data = ref<KeyValueData>({});

    // Действие: добавление или обновление записи
    const add = (key: string, value: string) => {
        if (key && value) {
            data.value[key] = value;
        }
    };

    // Действие: удаление записи
    const remove = (key: string) => {
        delete data.value[key];
    };

    return { data, add, remove };
}, {
    persist: true,
});

interface KeyValueData {
    [key: string]: string;
}
