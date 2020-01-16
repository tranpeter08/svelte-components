const validate = {
  required: val => (val === undefined || val === null ? 'Required' : null),
  isTrimmed: val =>
    val.trimm() !== val ? 'Cannot start or begin with white space' : null,
  minLength: n => val =>
    val.length < n
      ? `Needs to have at least ${n} character${n === 1 ? '' : 's'}`
      : null,
  maxLength: n => val =>
    val.length > n
      ? `Needs to have at most ${n} character${n === 1 ? '' : 's'}`
      : null
};

export default validate;
