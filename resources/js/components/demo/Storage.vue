<script setup lang="ts">
import { ref } from 'vue';
import { useDataStore } from '@/store/stores.ts';

const dataStore = useDataStore();

const newKey = ref('');
const newValue = ref('');

const handleAddEntry = () => {
    dataStore.add(newKey.value, newValue.value);
    newKey.value = '';
    newValue.value = '';
};
</script>

<template>
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-5 md:px-12 lg:px-20">
        <div class="text-surface-700 dark:text-surface-100 text-center flex flex-col items-center gap-4">
            <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl leading-tight">Storage</div>
        </div>

        <div class="max-w-lg mx-auto mt-5 bg-white">
            <!-- Форма ввода данных -->
            <div class="flex gap-4 mb-6">
                <input
                    v-model="newKey"
                    placeholder="Key"
                    class="flex-1 p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                    v-model="newValue"
                    placeholder="Value"
                    class="flex-1 p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                    @click="handleAddEntry"
                    :disabled="!newKey || !newValue"
                    class="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 transition cursor-pointer"
                >
                    Save
                </button>
            </div>

            <!-- Список сохраненных данных -->
            <div v-if="Object.keys(dataStore.data).length > 0" class="border-t border-gray-200 pt-4">
                <ul class="space-y-2">
                    <li
                        v-for="(value, key) in dataStore.data"
                        :key="key"
                        class="flex justify-between items-center bg-gray-50 p-3 rounded shadow-sm"
                    >
                    <span>
                      <strong>{{ key }}</strong>:
                      <span class="text-gray-600">{{ value }}</span>
                    </span>
                        <button
                            @click="dataStore.remove(key)"
                            class="text-red-500 hover:text-red-700 text-sm font-medium transition cursor-pointer"
                        >
                            delete
                        </button>
                    </li>
                </ul>
            </div>
            <p v-else class="text-center text-gray-500 mt-4">No data found.</p>
        </div>
    </div>


</template>

