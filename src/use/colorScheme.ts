import {
  onMounted, ref, Ref, watchEffect, computed,
} from 'vue';

const KEY_COLOR_SCHEME_PREFERENCE = 'Color Scheme Preference';

const localPreference = ((() => {
  const value = localStorage.getItem(KEY_COLOR_SCHEME_PREFERENCE);
  switch (value) {
    case 'light':
    case 'dark':
    case 'system':
      return value;
    default:
      return 'system';
  }
}))();

/**
 * Indicates user preference on color preference. One of `light`, `dark` or `system`.
 *
 * @example <caption>Update user preference</caption>
 * import { userPreference } from 'userPreference';
 * userPreference.value = 'dark'
 */
const userPreference: Ref<'light' | 'dark' | 'system'> = ref(localPreference);
watchEffect(() => {
  localStorage.setItem(KEY_COLOR_SCHEME_PREFERENCE, userPreference.value);
});

const query = window.matchMedia('(prefers-color-scheme: dark)');
const systemPreference = ref(query.matches ? 'dark' : 'light');
query.addListener(() => {
  systemPreference.value = query.matches ? 'dark' : 'light';
});

/**
 * Theme based on `userPreference`.
 */
const colorScheme = computed(() => {
  if (userPreference.value === 'light') return 'light';
  if (userPreference.value === 'dark') return 'dark';
  if (userPreference.value === 'system' && systemPreference.value === 'dark') {
    return 'dark';
  }

  return 'light';
});

function setClassIsDark() {
  const root = document.documentElement;
  if (colorScheme.value === 'light') {
    root.classList.remove('is-dark');
  } else {
    root.classList.add('is-dark');
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
  });
}

export { userPreference, colorScheme };
