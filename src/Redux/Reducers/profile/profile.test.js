import { profile } from "./../profile";
import { addPost } from "./../../Actions/profile";
let state = {
  posts: [
    { id: 1, postText: "Hello, world!", likesCount: 2 },
    { id: 2, postText: "Hello, world!", likesCount: 2 },
  ],
};

it("Length of posts should increase", () => {
  //Тестові дані
  let action = addPost();

  //Якісь дії
  let newState = profile(state, action);

  //Перевірка очікувань
  expect(newState.posts.length).toBe(3);
});
