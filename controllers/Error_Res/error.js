const responseFormat = {
  success: (data) => {
    return {
      session: {
        token: "",
        validity: "",
        specialMessage: "",
      },
      data: data,
      status: {
        code: 200,
        status: "Success",
        message: "Request successful",
      },
    };
  },
  error: (code, message) => {
    return {
      session: {
        token: "",
        validity: "",
        specialMessage: "",
      },
      data: {},
      status: {
        code: code,
        status: "",
        message: message,
      },
    };
  },
};

module.exports = responseFormat;
