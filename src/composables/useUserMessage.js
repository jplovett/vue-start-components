import { ref } from 'vue'
export const newMsg = ref(null)
export function useUserMessage() { return { newMsg } }