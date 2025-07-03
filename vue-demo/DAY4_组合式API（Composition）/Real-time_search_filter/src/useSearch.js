import { ref, watch } from "vue";

/**
 * useSearch 自定义 Hook，实现带防抖的实时搜索过滤
 * @param {Ref<Array>} list 原始数据列表的 ref
 * @param {number} delay 防抖延迟，默认300ms
 * @returns {Object} { keyword, filteredList }
 */
export function useSearch(list, delay = 300) {
  // 搜索关键词，响应式变量
  const keyword = ref("");
  // 过滤后的列表，响应式变量
  const filteredList = ref([]);
  // 防抖定时器
  let timer = null;

  // 初始化过滤列表
  filteredList.value = [...list.value];

  // 明确监听keyword的变化，实现响应式过滤
  watch(keyword, (newValue) => {
    // 清除上一次的定时器
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      // 根据关键词过滤列表
      if (!newValue) {
        filteredList.value = [...list.value];
      } else {
        filteredList.value = list.value.filter((item) =>
          String(item).toLowerCase().includes(newValue.toLowerCase())
        );
      }
    }, delay);
  });

  return {
    keyword,
    filteredList,
  };
}
