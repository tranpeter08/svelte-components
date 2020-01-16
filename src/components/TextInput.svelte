<script>
  import {getContext} from 'svelte';
  
  export let type, name, label;

  let errors;
  const formData = getContext('formProps'); 

  $: {errors = $formData.errors;
  }
</script>

<label>
  {label}
  <input {name} {type} >
  {#if errors[name] && errors[name].length}
    <span class="error">{errors[name][0]}</span>
  {/if}
</label>

<style>
  .error{
    color: red;
  }
</style>