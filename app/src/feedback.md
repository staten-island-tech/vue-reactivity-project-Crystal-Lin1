# Vue Reactivity Project Feedback
**Student:** Crystal Lin

This is a goal tracker app with Tailwind styling and a custom shared store — an ambitious project with good component structure. However, there are several critical bugs that prevent it from working correctly, particularly around the store import, the edit form, and missing emit declarations.

## Vite CLI – Mastery
`package.json` correctly includes `vite`, `vue`, and `vue-router`. Scripts are properly configured. Note: the project does NOT use Pinia — it uses a custom `store.js` file with `reactive`.

## Iteration in Vue – Mastery
`v-for` is used with `:key="goal.id"` on `<GoalCard>` elements in `GoalPage.vue`. This is the correct pattern.

## Data Binding – Not Yet
The project uses `store.js` as a shared reactive store, but it is broken in two ways:

**Problem 1 — Wrong export/import pairing:**
`store.js` uses a named export:
```js
export const goalsArray = reactive({...})
```
But `GoalPage.vue` imports it as a default import:
```js
import goalsArray from '../store.js'  // WRONG — this is a default import
```
Fix the import to use the named import syntax:
```js
import { goalsArray } from '../store.js'
```

**Problem 2 — The store structure is wrong:**
`store.js` exports a `reactive` object with an `array` property containing a single object (not an array of goals) and a broken `createGoal` method:
```js
export const goalsArray = reactive({
    array: { 'name': '', 'status': '', ... }, // This should be an array!
    createGoal(formData) {
        goalsArray = {...formData}  // This reassigns the const — broken
    }
})
```
But `GoalPage.vue` treats `goalsArray` as if it is itself a ref array (calling `goalsArray.value.push(...)` and `goalsArray.value.splice(...)`). The store structure and usage are mismatched. The simplest fix is to make `store.js` export a plain `ref([])`:
```js
import { ref } from 'vue'
export default ref([])
```
Then import it as: `import goalsArray from '../store.js'`

## Click Methods – Approaching
Click handlers exist for creating and deleting goals. The `deleteGoal` function in `GoalPage.vue` correctly calls `goalsArray.value.splice(...)`. However:

**Problem — Missing `defineEmits` in `GoalEdit.vue`:**
`GoalEdit.vue` calls `emits('updatedGoal', ...)` and `emits('close')` but **`emits` is never declared or defined** in the script. This will throw a runtime error. Add:
```js
const emits = defineEmits(['updatedGoal', 'close'])
```

**Problem — Emit name mismatch:**
`GoalCard.vue` emits `'deleteGoal'` (camelCase) and `'editGoal'` (camelCase):
```js
$emit('deleteGoal')
$emit('editGoal')
```
The parent `GoalPage.vue` listens for `@delete-goal` and `@edit-goal` (kebab-case). Vue automatically converts camelCase emit names to kebab-case listeners, so this actually works — but it is worth being consistent and using kebab-case in both places.

## Reactive UI – Approaching
When the store import/export bug is fixed, adding and deleting goals will update the UI reactively since `goalsArray` is `ref`-based. The edit flow is currently broken due to the `:v-model` bug and missing `defineEmits` in `GoalEdit.vue`.

## Semantic HTML – Mastery
Good use of semantic HTML throughout — `<form>` is used for goal creation, `<button>` for actions, `<header>` for the page header, `<main>` for content, and `<section>` for the goals grid. Well done.

## BEM CSS – Not Yet
The project uses Tailwind CSS utility classes throughout. There are no custom BEM class names. If BEM is a requirement for this project, you would need to add custom class names following `block__element--modifier` naming alongside or instead of Tailwind utilities.

## Bonus – Aesthetics – Mastery
Tailwind gives the app a polished, professional look. The blue color scheme, card shadows, modal overlay for goal creation, and responsive layout are all well executed. Great visual design.

## Summary of Critical Fixes
1. **Fix the store import** in `GoalPage.vue`: change `import goalsArray from '../store.js'` to `import { goalsArray } from '../store.js'`, and fix `store.js` to export a properly structured `ref([])`.
2. **Fix `:v-model` to `v-model`** in `GoalEdit.vue` — `:v-model` is not valid Vue syntax. Every input, textarea, and select in that file uses `:v-model` and must be changed to `v-model`.
3. **Add `defineEmits`** in `GoalEdit.vue`: `const emits = defineEmits(['updatedGoal', 'close'])`.
4. The `getupdatedGoal` function in `GoalPage.vue` receives the updated goal object but does nothing with it — implement the logic to find and update the matching goal in `goalsArray`.
5. If BEM is required, add custom BEM class names to component wrappers.
