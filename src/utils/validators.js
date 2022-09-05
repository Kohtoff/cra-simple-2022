export const validators = {
  telephone: {
    required: 'We need your number to notify about status of your order',
    pattern: {
      value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
      message: 'Telephone number must contains only digits',
    },
    minLength: {
      value: 9,
      message: 'We think that telephone number must contains at least 9 symbols',
    },
    maxLength: {
      value: 15,
      message: 'Are you sure that your have such a looong number?',
    },
  },
  email: {
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Uncorrect format! Please, use next pattern mail@domain.com',
    },
  },
  fullname: {
    required: 'We need your legal name to make delivery',
  },
  street: {
    required: 'We need some adress to make delivery',
  },
  house: {
    required: 'We need some adress to make delivery',

    minLength: {
      value: 1,
      message: 'House number should includes at least one symbol',
    },
    maxLength: {
      value: 5,
      message: 'Limit of symbols reached',
    },
    pattern: {
      value: /\d+/,
      message: 'Must contains some digits and maximum one character at the end',
    },
  },
  apatrments: {
    required: 'We need some adress to make delivery',
    maxLength: {
      value: 7,
      message: 'Limit of symbols reached',
    },
    pattern: {
      value: /\d+/,
      message: 'Must contains only digits',
    },
  },
};
