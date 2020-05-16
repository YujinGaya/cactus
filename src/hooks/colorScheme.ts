import {
  onMounted, ref, Ref, watchEffect,
} from 'vue';

const root = document.documentElement;

/**
 * @todo Read user preference from account settings
 */
const userPreference: Ref<'light' | 'dark' | 'system'> = ref('system');
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');

function setClassIsDark() {
  if (userPreference.value === 'light') {
    root.classList.remove('is-dark');
  } else if (userPreference.value === 'dark') {
    root.classList.add('is-dark');
  } else if (userPreference.value === 'system') {
    if (systemPreference.matches) {
      root.classList.add('is-dark');
    } else {
      root.classList.remove('is-dark');
    }
  }
}

/**
 * Keep sync of `.is-dark` class of the root element according to user and system preferences.
 */
export function useColorScheme() {
  onMounted(() => {
    watchEffect(() => {
      setClassIsDark();
    });
    systemPreference.addListener(() => {
      setClassIsDark();
    });
  });
}

/**
 * Indicates user preference on color preference. One of `light`, `dark` or `system`.
 *
 * @example <caption>Update user preference</caption>
 * import { colorScheme } from 'colorScheme';
 * colorScheme.value = 'dark'
 */
export const colorScheme = userPreference;
