<script>
  import Wrapper from './components/FormWrapper.svelte';
  import TextInput from './components/TextInput.svelte';
  import validators from './components/validate.js';
  import * as yup from 'yup';

  const {required, maxLength, minLength} = validators;

  let formData = {}
    ,setErrors
    ,handleSubmit
    ,errors
    ,validate
    ;

  // validate  = {
  //   username: [required, minLength(8), maxLength(12)],
  //   password: [required, minLength(10)]
  // };

  validate = {
    username: yup.string().required().min(6),
    password: yup.string().required().min(3)
  }

  const initialValues = {password: 'happy'};

  function onSubmit(v, se) {
    console.log(v)
    se({password: ['fail'], error: 'ERROR MESSAGE'});

  };

  $: {errors = formData.errors;
  
  };

</script>

<main>

  <h2>FormWrapper</h2>

  <Wrapper 
    {initialValues}
    validate={validate} 
    bind:formData
    bind:setErrors
    bind:handleSubmit
  >
    <form on:submit|preventDefault={() => handleSubmit(onSubmit)}>
      <input name="test" type="text">
      <TextInput name='password' type="password" label="Password" />
      <TextInput name="username" type="text" label="Username" />
      <button type="submit">SUBMIT</button>
      {#if errors && errors.error}
        <p>ERROR! {errors.error}</p>
      {/if}
    </form>
  </Wrapper>

  
</main>

<style>
  .wrapper{
    border: 1px solid red;
  }
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>