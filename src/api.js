// eslint-disable-next-line import/prefer-default-export
export const login = async (payload) => {
  try {
    const response = await fetch('http://localhost:3030/auth', {
      method: 'POST',
      body: payload,
    });
    return {
      isError: false,
      response,
    };
  } catch (e) {
    console.log('catching in login api');
    return {
      isError: true,
    };
  }
};
