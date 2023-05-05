SelectedAreaDisplay example:

```vue
<template >
  <SelectedAreaDisplay 
    :selectedAreaNum="3" 
    :selectedArea="{ country: [{name: '区县'}], featureArea: [{name: '特征区域'}], customArea: [{name: '自定义区域'}] }"
  />
</template>
```