import { dialogs } from "../dialogs";
import { updateMessage } from "../../Actions/dialogs";

let state = {
  newMessageText: "",
};

it("Should update newMessageText", () => {
  let action = updateMessage("React"),
    newState = dialogs(state, action);

  expect(newState.newMessageText).toBe("React");
});
