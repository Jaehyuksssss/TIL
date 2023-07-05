{
  //function : login -> success ,fail login시 실패 성공여부를 나타내는 함수
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function checkLogin(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in",
      },
    };
  }

  //printLoginState (state)
  //success -> body
  //fail -> bad

  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
