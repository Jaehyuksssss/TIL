{
  /**
   * Union Types : OR
   */
  type Direction = "left" | "right" | "up" | "down";

  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 9 | 20 | 32;
  const tile: TileSize = 20;

  //function : login -> success ,fail login시 실패 성공여부를 나타내는 함수
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function checkLogin(): LoginState {
    return {
      response: {
        body: "logged in",
      },
    };
  }

  //printLoginState (state)
  //success -> body
  //fail -> bad

  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
